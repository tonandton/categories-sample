import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebasse.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handlerSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(err);
            }
        }
    };

    const handlerChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have and account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handlerChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handlerChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={signInWithGoogle}
                    >
                        Google sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
