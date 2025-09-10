import { useState, useEffect } from "react";
import PostList from "./PostList.jsx";
import PostDetail from "./PostDetail.jsx";

export default function BlogApp() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Gagal mengambil data posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleBackToList = () => {
        setSelectedPost(null);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Blog Posts</h1>
                    <p className="text-gray-600">Kumpulan artikel menarik untuk dibaca</p>
                </header>

                {selectedPost ? (
                    <PostDetail post={selectedPost} onBack={handleBackToList} />
                ) : (
                    <PostList posts={posts} onPostClick={handlePostClick} />
                )}
            </div>
        </div>
    );
}