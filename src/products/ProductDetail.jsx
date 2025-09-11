import SearchBar from "./SearchBar.jsx";

export default function ProductDetail({ product, onBack, onSearch, searchTerm, allProducts, onProductClick }) {
    return (
        <div className="max-w-6xl mx-auto">
            <button
                onClick={onBack}
                className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Daftar Produk
            </button>

            <div className="mb-8">
                <SearchBar onSearch={onSearch} searchTerm={searchTerm} />
                {searchTerm && (
                    <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-3">
                            Hasil pencarian untuk "{searchTerm}":
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            {allProducts
                                .filter(p => 
                                    p.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
                                    p.id !== product.id
                                )
                                .slice(0, 6)
                                .map((searchProduct) => (
                                    <div
                                        key={searchProduct.id}
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer p-3 border"
                                        onClick={() => onProductClick(searchProduct)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={searchProduct.image}
                                                alt={searchProduct.title}
                                                className="h-12 w-12 object-contain flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-gray-900 truncate">
                                                    {searchProduct.title}
                                                </h4>
                                                <p className="text-sm font-bold text-blue-600">
                                                    ${searchProduct.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {allProducts.filter(p => 
                            p.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
                            p.id !== product.id
                        ).length === 0 && (
                            <p className="text-gray-500 text-sm">Tidak ada produk lain yang cocok dengan pencarian.</p>
                        )}
                    </div>
                )}
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2">
                        <div className="h-96 md:h-full bg-gray-100 flex items-center justify-center p-8">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 p-8">
                        <div className="mb-4">
                            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                {product.category}
                            </span>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h1>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex items-center mr-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${
                                            i < Math.floor(product.rating.rate)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-sm text-gray-600">
                                    {product.rating.rate} ({product.rating.count} reviews)
                                </span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-4xl font-bold text-blue-600 mb-4">
                                ${product.price}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi Produk</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                Tambah ke Keranjang
                            </button>
                            <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors">
                                Beli Sekarang
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="font-medium text-gray-900">Kategori:</span>
                                    <p className="text-gray-600 capitalize">{product.category}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Product ID:</span>
                                    <p className="text-gray-600">#{product.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={onBack}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                    Lihat Produk Lainnya
                </button>
            </div>
        </div>
    );
}