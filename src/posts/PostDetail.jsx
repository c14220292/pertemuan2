export default function PostDetail({ post, onBack }) {
    return (
        <div className="max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Daftar Post
            </button>

            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                    <div className="flex items-center justify-between mb-4">
                        <span className="bg-white bg-opacity-20 text-white text-sm font-medium px-3 py-1 rounded-full">
                            Post #{post.id}
                        </span>
                        <span className="text-blue-100 text-sm">
                            User {post.userId}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>

                <div className="px-8 py-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {post.body}
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>Post ID: {post.id}</span>
                            <span>Author: User {post.userId}</span>
                        </div>
                    </div>
                </div>
            </article>

            <div className="mt-8 text-center">
                <button
                    onClick={onBack}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                    Lihat Post Lainnya
                </button>
            </div>
        </div>
    );
}