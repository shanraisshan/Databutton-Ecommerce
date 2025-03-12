import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Footer } from "components/Footer";
import { getProductById, Product } from "utils/productData";

export default function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the product ID from the URL
  const productId = new URLSearchParams(location.search).get("id");
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (!selectedSize || !product) {
      alert("Please select a size");
      return;
    }
    
    // In a real application, we would add the product to the cart
    console.log("Added to cart:", {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity
    });
    
    alert(`Added ${quantity} ${selectedSize} ${product.name} to cart!`);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <p className="text-xl text-gray-500">Loading product details...</p>
            </div>
          ) : !product ? (
            <div className="flex flex-col justify-center items-center h-96">
              <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
              <p className="mt-4 text-gray-500">Sorry, we couldn't find the product you're looking for.</p>
              <button 
                onClick={() => navigate('/')} 
                className="mt-8 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Return to Homepage
              </button>
            </div>
          ) : (
            <>
              <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <a href="#" className="text-gray-500 hover:text-gray-700">{product.category === "men" ? "Men's" : "Women's"}</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900" aria-current="page">{product.name}</span>
                  </li>
                </ol>
              </nav>
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Product Images */}
                <div className="lg:max-w-lg lg:self-start">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="h-80 w-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`flex items-center justify-center rounded-md ${selectedImage === index ? 'ring-2 ring-black' : 'ring-1 ring-gray-200'}`}
                        onClick={() => setSelectedImage(index)}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="h-20 w-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                  
                  <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                  
                  {product.rating && product.reviews && (
                    <div className="mt-3">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {/* Star ratings */}
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <svg
                              key={rating}
                              className={`h-5 w-5 ${rating < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="ml-3 text-sm text-gray-500">{product.reviews} reviews</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="sr-only">Description</h3>
                    <p className="text-base text-gray-700">{product.description}</p>
                  </div>
                  
                  {product.material && (
                    <div className="mt-6">
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Material</h3>
                          <p className="mt-1 text-sm text-gray-500">{product.material}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <form className="mt-6">
                    {/* Size selection */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-900">Size</h2>
                        <a href="#" className="text-sm font-medium text-black hover:text-gray-700">
                          Size guide
                        </a>
                      </div>
                      
                      <div className="mt-3 grid grid-cols-6 gap-3">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            className={`flex items-center justify-center rounded-md border py-2 px-3 text-sm font-medium ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'}`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                      
                      {!selectedSize && (
                        <p className="mt-2 text-sm text-red-500">Please select a size</p>
                      )}
                    </div>
                    
                    {/* Quantity selection */}
                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
                      </div>
                      
                      <select
                        className="mt-3 block w-full rounded-md border-gray-300 py-2 px-3 text-sm"  
                        value={quantity}
                        onChange={handleQuantityChange}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="mt-8">
                      <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-black py-3 px-8 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Add to cart
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-6">
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-medium text-gray-900">Shipping</h3>
                      <p className="mt-2 text-sm text-gray-500">Free shipping on orders over $50. Ships within 2-3 business days.</p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h3 className="text-sm font-medium text-gray-900">Returns</h3>
                      <p className="mt-2 text-sm text-gray-500">Free returns within 30 days of purchase.</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
