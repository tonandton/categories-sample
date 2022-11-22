import Directory from "../../components/directory/directory.component";

const Home = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl:
                "https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
        },
        {
            id: 2,
            title: "shoes",
            imageUrl:
                "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
        {
            id: 3,
            title: "clothes",
            imageUrl:
                "https://images.unsplash.com/photo-1577020914435-7ae6b1091ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
        {
            id: 4,
            title: "mens",
            imageUrl:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 5,
            title: "womens",
            imageUrl:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        },
    ];

    return (
        <div>
            <Directory categories={categories} />
        </div>
    );
};

export default Home;
