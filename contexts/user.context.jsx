import { createContext, useState, useEffect } from "react";

import {
    createUserDocumentFromAuth,
    OnAuthStateChangedListener,
} from "../utils/firebase/firebasse.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = OnAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            // console.log(user);
        });
        return unsubscribe;
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
