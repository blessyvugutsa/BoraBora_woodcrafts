import React from 'react';
import { Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Account = () => {
  const { wishlist, removeFromWishlist } = useAppContext();

  // Mock order history data (in production, this would come from a backend API)
  const orderHistory = [
    {
      id: 'ORDER-1714528901',
      date: '2024-01-15',
      status: 'Delivered',
      total: 45000,
      items: [
        { name: 'Mvule Live-Edge Coffee Table', quantity: 1, price: 45000 }
      ]
    },
    {
      id: 'ORDER-1712345678',
      date: '2023-12-20',
      status: 'Delivered',
      total: 12000,
      items: [
        { name: 'Mahogany Salad Bowls Set', quantity: 1, price: 12000 }
      ]
    }
  ];

  // Get wishlist products
  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">My Account</h1>
          <p className="font-sans text-wood-bg/90">
            Manage your account settings and view your order history
          </p>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Account Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="font-serif text-lg font-bold text-wood-text mb-4">
                  Account Menu
                </h2>
                <nav className="space-y-2">
                  <a
                    href="#profile"
                    className="flex items-center px-3 py-2 text-wood-green bg-wood-green/10 rounded font-sans text-sm font-medium"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </a>
                  <a
                    href="#orders"
                    className="flex items-center px-3 py-2 text-wood-text/70 hover:text-wood-green hover:bg-wood-bg rounded font-sans text-sm transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Order History
                  </a>
                  <a
                    href="#wishlist"
                    className="flex items-center px-3 py-2 text-wood-text/70 hover:text-wood-green hover:bg-wood-bg rounded font-sans text-sm transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Wishlist
                    <span className="ml-auto bg-wood-clay text-wood-text text-xs font-bold px-2 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  </a>
                  <a
                    href="#addresses"
                    className="flex items-center px-3 py-2 text-wood-text/70 hover:text-wood-green hover:bg-wood-bg rounded font-sans text-sm transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Addresses
                  </a>
                  <a
                    href="#settings"
                    className="flex items-center px-3 py-2 text-wood-text/70 hover:text-wood-green hover:bg-wood-bg rounded font-sans text-sm transition-colors"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Settings
                  </a>
                </nav>
              </div>
            </div>

            {/* Account Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Profile Section */}
              <div id="profile" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  Profile Information
                </h2>
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-wood-clay/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-12 h-12 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+254 7XX XXX XXX"
                        className="w-full px-4 py-2 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                      />
                    </div>
                    <button className="px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              {/* Order History Section */}
              <div id="orders" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  Order History
                </h2>
                
                {orderHistory.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-wood-text/10">
                          <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                            Order ID
                          </th>
                          <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                            Date
                          </th>
                          <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                            Status
                          </th>
                          <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                            Total
                          </th>
                          <th className="text-left font-sans text-sm font-semibold text-wood-text py-3 px-4">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderHistory.map((order) => (
                          <tr key={order.id} className="border-b border-wood-text/10 hover:bg-wood-bg/50 transition-colors">
                            <td className="font-sans text-sm text-wood-text py-4 px-4">
                              {order.id}
                            </td>
                            <td className="font-sans text-sm text-wood-text/70 py-4 px-4">
                              {new Date(order.date).toLocaleDateString('en-KE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </td>
                            <td className="py-4 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                {order.status}
                              </span>
                            </td>
                            <td className="font-sans text-sm font-medium text-wood-text py-4 px-4">
                              {formatPrice(order.total)}
                            </td>
                            <td className="py-4 px-4">
                              <button className="font-sans text-sm text-wood-green hover:text-wood-green-dark font-medium transition-colors">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="font-sans text-wood-text/70">
                      No orders yet. Start shopping to see your order history here.
                    </p>
                    <Link
                      to="/shop"
                      className="inline-block mt-4 px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>

              {/* Wishlist Section */}
              <div id="wishlist" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  My Wishlist
                </h2>
                
                {wishlistProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistProducts.map((product) => (
                      <div
                        key={product.id}
                        className="border border-wood-text/10 rounded-lg overflow-hidden"
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
                            <h3 className="font-serif text-base font-semibold text-wood-text mb-2 line-clamp-2 hover:text-wood-green transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="font-sans text-lg font-bold text-wood-text mb-3">
                            {formatPrice(product.price)}
                          </p>
                          <div className="flex space-x-2">
                            <Link
                              to={`/product/${product.id}`}
                              className="flex-1 px-3 py-2 bg-wood-green text-wood-bg font-sans text-xs font-medium rounded hover:bg-wood-green-dark transition-colors duration-200 text-center"
                            >
                              View Product
                            </Link>
                            <button
                              onClick={() => removeFromWishlist(product.id)}
                              className="px-3 py-2 border border-wood-text/30 text-wood-text font-sans text-xs font-medium rounded hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors duration-200"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg
                      className="w-16 h-16 mx-auto text-wood-text/20 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <p className="font-sans text-wood-text/70 mb-4">
                      Your wishlist is empty. Save items you love by clicking the heart icon on any product.
                    </p>
                    <Link
                      to="/shop"
                      className="inline-block px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                    >
                      Explore Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
