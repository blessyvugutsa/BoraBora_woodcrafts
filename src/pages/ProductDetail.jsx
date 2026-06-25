import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getRelatedProducts, formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const relatedProducts = product ? getRelatedProducts(product, 3) : [];
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext();

  // Handle product not found
  if (!product) {
    return (
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-wood-text mb-4">
            Product Not Found
          </h1>
          <p className="font-sans text-wood-text/70 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-wood-green text-wood-bg font-sans font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${product.name} added to cart!`);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product.id);
  };

  const calculateAverageRating = () => {
    if (product.reviews.length === 0) return 0;
    const sum = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / product.reviews.length).toFixed(1);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-wood-clay" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-wood-clay" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-wood-text/30" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <nav className="bg-wood-bg border-b border-wood-text/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="font-sans text-wood-text/60 hover:text-wood-green transition-colors">
                Home
              </Link>
            </li>
            <li className="text-wood-text/40">/</li>
            <li>
              <Link to="/shop" className="font-sans text-wood-text/60 hover:text-wood-green transition-colors">
                Shop
              </Link>
            </li>
            <li className="text-wood-text/40">/</li>
            <li className="font-sans text-wood-text font-medium truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Product Detail Section */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? 'border-wood-green shadow-md'
                        : 'border-transparent hover:border-wood-text/30'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              <div>
                <p className="font-sans text-sm text-wood-green font-medium mb-2">
                  {product.category}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-4">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="font-sans text-sm text-wood-text/70">
                    {calculateAverageRating()} ({product.reviews.length} review{product.reviews.length !== 1 ? 's' : ''})
                  </span>
                </div>

                <p className="font-serif text-3xl font-bold text-wood-text mb-4">
                  {formatPrice(product.price)}
                </p>
              </div>

              <p className="font-sans text-wood-text/80 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <label className="font-sans text-sm font-medium text-wood-text">
                  Quantity:
                </label>
                <div className="flex items-center border border-wood-text/20 rounded">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-3 py-2 font-sans text-wood-text hover:bg-wood-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-sans text-wood-text font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                    className="px-3 py-2 font-sans text-wood-text hover:bg-wood-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-8 py-4 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`px-8 py-4 font-sans font-semibold rounded border-2 transition-all duration-200 ${
                    isInWishlist(product.id)
                      ? 'border-wood-green text-wood-green bg-wood-green/10'
                      : 'border-wood-text/30 text-wood-text hover:border-wood-green hover:text-wood-green'
                  }`}
                >
                  {isInWishlist(product.id) ? '♥ Saved' : '♡ Add to Wishlist'}
                </button>
              </div>

              {/* Product Features */}
              <div className="border-t border-wood-text/10 pt-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold text-wood-text">
                  Product Details
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="font-sans text-sm text-wood-text/60 w-32 flex-shrink-0">
                      Category:
                    </span>
                    <span className="font-sans text-sm text-wood-text">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-sans text-sm text-wood-text/60 w-32 flex-shrink-0">
                      Rating:
                    </span>
                    <span className="font-sans text-sm text-wood-text">
                      {product.rating} / 5.0
                    </span>
                  </div>
                  <div className="flex">
                    <span className="font-sans text-sm text-wood-text/60 w-32 flex-shrink-0">
                      Availability:
                    </span>
                    <span className="font-sans text-sm text-wood-green font-medium">
                      In Stock
                    </span>
                  </div>
                </div>
              </div>

              {/* Long Description */}
              <div className="border-t border-wood-text/10 pt-6">
                <h3 className="font-serif text-lg font-semibold text-wood-text mb-4">
                  Description
                </h3>
                <p className="font-sans text-wood-text/80 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-wood-text mb-8">
            Customer Reviews
          </h2>
          
          {product.reviews.length > 0 ? (
            <div className="space-y-6">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-sans font-semibold text-wood-text">
                        {review.name}
                      </h4>
                      <div className="flex items-center space-x-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="font-sans text-wood-text/80 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="font-sans text-wood-text/70">
                No reviews yet. Be the first to review this product!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-wood-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-wood-text mb-8">
              Related Products
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <Link to={`/product/${relatedProduct.id}`} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${relatedProduct.id}`} className="block">
                      <p className="font-sans text-xs text-wood-green font-medium mb-1">
                        {relatedProduct.category}
                      </p>
                      <h3 className="font-serif text-lg font-semibold text-wood-text mb-2 line-clamp-2 hover:text-wood-green transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-lg font-bold text-wood-text">
                        {formatPrice(relatedProduct.price)}
                      </span>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4 text-wood-clay"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-sans text-sm text-wood-text/70">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
