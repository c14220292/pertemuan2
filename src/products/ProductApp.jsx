import { useState, useEffect } from "react";
import ProductList from "./ProductList.jsx";
import ProductDetail from "./ProductDetail.jsx";
import SearchBar from "./SearchBar.jsx";

export default function ProductApp() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Gagal mengambil data produk:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleBackToList = () => {
        setSelectedProduct(null);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Product Search</h1>
                    <p className="text-gray-600">Temukan produk yang Anda cari</p>
                </header>

                {selectedProduct ? (
                    <ProductDetail 
                        product={selectedProduct} 
                        onBack={handleBackToList}
                        onSearch={handleSearch}
                        searchTerm={searchTerm}
                        allProducts={products}
                        onProductClick={handleProductClick}
                    />
                ) : (
                    <>
                        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
                        <ProductList 
                            products={filteredProducts} 
                            onProductClick={handleProductClick}
                            searchTerm={searchTerm}
                        />
                    </>
                )}
            </div>
        </div>
    );
}