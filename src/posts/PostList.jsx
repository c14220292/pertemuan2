export default function PostList({ posts, onPostClick }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => onPostClick(post)}
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Post #{post.id}
                            </span>
                            <span className="text-gray-400 text-sm">
                                User {post.userId}
                            </span>
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                            {post.title}
                        </h2>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {post.body.length > 100 
                                ? `${post.body.substring(0, 100)}...` 
                                : post.body
                            }
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-blue-600 text-sm font-medium hover:text-blue-800">
                                Baca selengkapnya →
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}