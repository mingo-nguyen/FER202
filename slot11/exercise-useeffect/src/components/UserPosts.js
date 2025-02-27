import React, {useState, useEffect} from "react";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
                if (!response.ok) {
                    setErrorMessage(`${response.status} - ${response.statusText}`);
                } else {
                    const data = await response.json();
                    setPosts(data);
                    setErrorMessage(null);
                }
            } catch (error) {
                console.log(error);
                setErrorMessage("Failed to fetch posts");
            }
        };
        fetchData();
    }, [userId]);
    
    return (
        <div>
            <h2>User Posts</h2>
            {errorMessage ? (
                <div className="error">{errorMessage}</div>
            ) : (
                <ul>
                    {posts.map(post => (
                        <React.Fragment key={post.id}>
                            <li>{post.title}</li>
                            <p>{post.body}</p>
                        </React.Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserPosts;