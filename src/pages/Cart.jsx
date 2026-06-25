import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    incrementCartItem,
    decrementCartItem,
    getCartTotal,
    getShippingCost,
    clearCart
  } = useAppContext();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const cartSubtotal = getCartTotal();
  const shippingCost = getShippingCost();
  const grandTotal = cartSubtotal + shippingCost;

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <svg
              className="w-24 h-24 mx-auto text-wood-text/20 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h1 className="font-serif text-3xl font-bold text-wood-text mb-4">
              Your Cart is Empty
            </h1>
            <p className="font-sans text-wood-text/70 mb-8 max-w-md mx-auto">
              Looks like you haven't added any woodcraft pieces to your cart yet. 
              Explore our collection to find handcrafted treasures for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContinueShopping}
                className="px-8 py-3 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
          <p className="font-sans text-wood-bg/90">
            Review your selected woodcraft pieces
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6"
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-serif text-lg font-semibold text-wood-text hover:text-wood-green transition-colors mb-1">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="font-sans text-sm text-wood-text/60 mb-2">
                        {item.category}
                      </p>
                      <p className="font-sans text-lg font-bold text-wood-text">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-wood-text/20 rounded">
                        <button
                          onClick={() => decrementCartItem(item.id)}
                          disabled={item.qty <= 1}
                          className="px-3 py-2 font-sans text-wood-text hover:bg-wood-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 font-sans text-wood-text font-medium min-w-[3rem] text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => incrementCartItem(item.id)}
                          disabled={item.qty >= 10}
                          className="px-3 py-2 font-sans text-wood-text hover:bg-wood-bg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="font-sans text-sm text-wood-text/60 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Item Subtotal */}
                  <div className="flex flex-col items-end justify-between">
                    <p className="font-sans text-sm text-wood-text/60">Subtotal</p>
                    <p className="font-serif text-xl font-bold text-wood-text">
                      {formatPrice(item.price * item.qty)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Button */}
              <div className="pt-4">
                <button
                  onClick={handleContinueShopping}
                  className="font-sans text-sm text-wood-green hover:text-wood-green-dark font-medium transition-colors"
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-sans text-wood-text/70">
                      Subtotal ({cart.reduce((count, item) => count + item.qty, 0)} items)
                    </span>
                    <span className="font-sans font-medium text-wood-text">
                      {formatPrice(cartSubtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-sans text-wood-text/70">
                      Shipping
                    </span>
                    <span className="font-sans font-medium text-wood-text">
                      {shippingCost === 0 ? (
                        <span className="text-wood-green">FREE</span>
                      ) : (
                        formatPrice(shippingCost)
                      )}
                    </span>
                  </div>

                  {shippingCost === 0 && cartSubtotal >= 50000 && (
                    <p className="font-sans text-xs text-wood-green">
                      ✓ Free shipping applied for orders over KES 50,000
                    </p>
                  )}

                  <div className="border-t border-wood-text/10 pt-4">
                    <div className="flex justify-between">
                      <span className="font-serif text-lg font-bold text-wood-text">
                        Total
                      </span>
                      <span className="font-serif text-lg font-bold text-wood-text">
                        {formatPrice(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full px-6 py-4 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200 mb-4"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="w-full px-6 py-3 border border-wood-text/30 text-wood-text font-sans text-sm font-medium rounded hover:bg-wood-bg hover:border-wood-text transition-colors duration-200"
                >
                  Clear Cart
                </button>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center space-x-2 text-wood-text/50">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="font-sans text-xs">
                    Secure checkout powered by M-Pesa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
