import { useState, useEffect } from "react";

export default function HelloWorld() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // State untuk loading

    useEffect(() => {
        // Fungsi async di dalam useEffect
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=1000"
                );
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Gagal mengambil data:", error);
            } finally {
                console.log("selesai fetch data");
                setLoading(false); // Set loading ke false setelah selesai (baik berhasil maupun gagal)
            }
        };
        fetchPosts();
    }, []); // <-- Array kosong, hanya jalan sekali!

    if (loading) {
        return <p>Loading...</p>;
    } else {
        // const list=posts.map((post)=>{
        //     return (
        //         <div key={post.id}>
        //             <h2>{post.title}</h2>
        //             <p>{post.body}</p>
        //         </div>
        //     );
        // });

        // return(<>{list}</>);
        return posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ));
    }

    // return (<>{ loading ? <p>Loading...</p> : <p>Not Loading</p> }</>)

    // return (<> { loading && <p>Loading...</p> } </>)
}
