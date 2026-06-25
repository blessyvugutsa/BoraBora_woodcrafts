import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts, formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const { addToCart } = useAppContext();

  // Featured categories data
  const categories = [
    {
      name: 'Wall Décor',
      slug: 'wall-decor',
      image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=600&q=80',
      description: 'Hand-carved art pieces'
    },
    {
      name: 'Kitchenware',
      slug: 'kitchenware',
      image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&q=80',
      description: 'Serving bowls & boards'
    },
    {
      name: 'Furniture',
      slug: 'furniture',
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80',
      description: 'Tables, chairs & more'
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wood-green-dark to-wood-green text-wood-bg py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1920&q=80"
            alt="Woodcraft background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Handcrafted Wood Art for Every Home
            </h1>
            <p className="font-sans text-lg md:text-xl text-wood-bg/90 mb-8 leading-relaxed">
              Discover our collection of premium, sustainably sourced woodcraft pieces. 
              Each item is meticulously handcrafted by Kenyan artisans using traditional techniques 
              passed down through generations, bringing warmth and elegance to your living spaces.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-4 bg-wood-bg text-wood-green font-sans font-semibold rounded hover:bg-wood-clay hover:text-wood-text transition-all duration-300 transform hover:scale-105"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-16 md:py-24 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-4">
              Explore Our Categories
            </h2>
            <p className="font-sans text-wood-text/70 max-w-2xl mx-auto">
              From statement wall pieces to functional kitchen essentials, find the perfect woodcraft for every corner of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop?category=${category.name}`}
                className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood-text/90 via-wood-text/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-serif text-2xl font-bold text-wood-bg mb-2">
                    {category.name}
                  </h3>
                  <p className="font-sans text-sm text-wood-bg/80">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-wood-text mb-4">
              Featured Products
            </h2>
            <p className="font-sans text-wood-text/70 max-w-2xl mx-auto">
              Our most beloved pieces, handpicked for their exceptional craftsmanship and timeless beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <p className="font-sans text-xs text-wood-green font-medium mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-wood-text mb-2 line-clamp-2 hover:text-wood-green transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-lg font-bold text-wood-text">
                      {formatPrice(product.price)}
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
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full px-4 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block px-8 py-3 border-2 border-wood-green text-wood-green font-sans font-semibold rounded hover:bg-wood-green hover:text-wood-bg transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-wood-green text-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="font-sans text-lg text-wood-bg/90 mb-8">
              Subscribe to receive exclusive offers, new product announcements, and expert woodcraft care tips delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // In production, this would submit to a newsletter API
                alert('Thank you for subscribing! In production, this would connect to a newsletter service.');
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-wood-bg/10 border border-wood-bg/20 rounded font-sans text-wood-bg placeholder-wood-bg/50 focus:outline-none focus:border-wood-clay focus:ring-1 focus:ring-wood-clay transition-all duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-wood-bg text-wood-green font-sans font-semibold rounded hover:bg-wood-clay hover:text-wood-text transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="font-sans text-xs text-wood-bg/70 mt-4">
              By subscribing, you agree to receive marketing communications from us. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
