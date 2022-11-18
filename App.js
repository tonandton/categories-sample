import Directory from "./components/directory/directory.component";

const App = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl:
                "https://images.unsplash.com/photo-1516369033203-ba1a9f0e3b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 2,
            title: "jackets",
            imageUrl:
                "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl:
                "https://images.unsplash.com/photo-1610897600804-c36e2336ad3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            id: 4,
            title: "womens",
            imageUrl:
                "https://images.unsplash.com/photo-1615233500351-1fa6ed14754c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 5,
            title: "mens",
            imageUrl:
                "https://images.unsplash.com/photo-1476657680631-c07285ff2581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1123&q=80",
        },
    ];

    return <Directory categories={categories} />;
};

export default App;
