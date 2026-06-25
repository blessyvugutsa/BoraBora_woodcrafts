import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/products';
import { useAppContext } from '../context/AppContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, getShippingCost, clearCart } = useAppContext();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'mpesa',
    mpesaPhone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cartSubtotal = getCartTotal();
  const shippingCost = getShippingCost();
  const grandTotal = cartSubtotal + shippingCost;

  // Redirect if cart is empty
  if (cart.length === 0 && !orderSuccess) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Customer Details Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+254|0)?[7]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    // M-Pesa specific validation
    if (formData.paymentMethod === 'mpesa') {
      if (!formData.mpesaPhone.trim()) {
        newErrors.mpesaPhone = 'M-Pesa phone number is required';
      } else if (!/^(\+254|0)?[7]\d{8}$/.test(formData.mpesaPhone.replace(/\s/g, ''))) {
        newErrors.mpesaPhone = 'Please enter a valid Kenyan phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // If M-Pesa is selected, this is where the Safaricom Daraja API integration would happen
      // The following code block shows exactly where the fetch request to the Safaricom Daraja REST API endpoint should be implemented:
      
      /*
      if (formData.paymentMethod === 'mpesa') {
        // SAFARICOM DARAJA API INTEGRATION POINT
        // This is where you would make the STK Push request to Safaricom's Daraja API
        // Example implementation:
        
        const mpesaResponse = await fetch('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`, // You'll need to generate an access token first
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            BusinessShortCode: process.env.MPESA_SHORTCODE,
            Password: process.env.MPESA_PASSWORD,
            Timestamp: new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3),
            TransactionType: 'CustomerPayBillOnline',
            Amount: grandTotal,
            PartyA: formData.mpesaPhone.replace(/\D/g, '').replace(/^0/, '254'),
            PartyB: process.env.MPESA_SHORTCODE,
            PhoneNumber: formData.mpesaPhone.replace(/\D/g, '').replace(/^0/, '254'),
            CallBackURL: process.env.MPESA_CALLBACK_URL,
            AccountReference: `ORDER-${Date.now()}`,
            TransactionDesc: 'BoraBora Woodcrafts Purchase'
          })
        });
        
        const mpesaResult = await mpesaResponse.json();
        
        if (mpesaResult.ResponseCode === '0') {
          // STK Push sent successfully, wait for callback
          // In production, you would poll for payment status or wait for webhook callback
        } else {
          throw new Error('M-Pesa payment initiation failed');
        }
      }
      */

      // Clear cart on successful order
      clearCart();
      setOrderSuccess(true);

    } catch (error) {
      console.error('Order processing error:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  // Order Success State
  if (orderSuccess) {
    return (
      <div className="w-full py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="font-serif text-3xl font-bold text-wood-text mb-4">
              Order Placed Successfully!
            </h1>
            <p className="font-sans text-wood-text/70 mb-6">
              Thank you for your purchase! Your order has been received and is being processed. 
              You will receive a confirmation email shortly with your order details.
            </p>
            <div className="bg-wood-bg rounded-lg p-6 mb-6">
              <p className="font-sans text-sm text-wood-text/60 mb-2">
                Order Reference
              </p>
              <p className="font-serif text-xl font-bold text-wood-text">
                ORDER-{Date.now()}
              </p>
            </div>
            <button
              onClick={handleContinueShopping}
              className="px-8 py-3 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200"
            >
              Continue Shopping
            </button>
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
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Checkout</h1>
          <p className="font-sans text-wood-bg/90">
            Complete your purchase
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Customer Details & Payment */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Details Panel */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Customer Details
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                          errors.firstName ? 'border-red-500' : 'border-wood-text/20'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="font-sans text-xs text-red-500 mt-1">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                          errors.lastName ? 'border-red-500' : 'border-wood-text/20'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="font-sans text-xs text-red-500 mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                        errors.email ? 'border-red-500' : 'border-wood-text/20'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-wood-text/20'
                      }`}
                      placeholder="+254 7XX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="font-sans text-xs text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                        errors.address ? 'border-red-500' : 'border-wood-text/20'
                      }`}
                      placeholder="Street address, apartment, suite, etc."
                    />
                    {errors.address && (
                      <p className="font-sans text-xs text-red-500 mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                          errors.city ? 'border-red-500' : 'border-wood-text/20'
                        }`}
                        placeholder="Nairobi, Mombasa, etc."
                      />
                      {errors.city && (
                        <p className="font-sans text-xs text-red-500 mt-1">{errors.city}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-wood-text/20 rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors"
                        placeholder="00100"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Panel */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Payment Method
                  </h2>

                  <div className="space-y-4">
                    {/* M-Pesa Option */}
                    <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-wood-green/50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mpesa"
                        checked={formData.paymentMethod === 'mpesa'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-wood-green focus:ring-wood-green"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center">
                          <span className="font-sans font-semibold text-wood-text">M-Pesa</span>
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                            Popular
                          </span>
                        </div>
                        <p className="font-sans text-sm text-wood-text/60">
                          Pay securely using your M-Pesa account
                        </p>
                      </div>
                    </label>

                    {formData.paymentMethod === 'mpesa' && (
                      <div className="ml-7 p-4 bg-wood-bg rounded-lg">
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          M-Pesa Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="mpesaPhone"
                          value={formData.mpesaPhone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                            errors.mpesaPhone ? 'border-red-500' : 'border-wood-text/20'
                          }`}
                          placeholder="+254 7XX XXX XXX"
                        />
                        {errors.mpesaPhone && (
                          <p className="font-sans text-xs text-red-500 mt-1">{errors.mpesaPhone}</p>
                        )}
                        <p className="font-sans text-xs text-wood-text/60 mt-2">
                          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          An STK Push PIN prompt will appear on your phone after placing the order. 
                          Enter your M-Pesa PIN to complete the payment.
                        </p>
                      </div>
                    )}

                    {/* Credit Card Option */}
                    <label className="flex items-center p-4 border-2 border-wood-text/20 rounded-lg cursor-pointer transition-all duration-200 hover:border-wood-green/50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-wood-green focus:ring-wood-green"
                      />
                      <div className="ml-3">
                        <span className="font-sans font-semibold text-wood-text">Credit / Debit Card</span>
                        <p className="font-sans text-sm text-wood-text/60">
                          Visa, Mastercard, or American Express
                        </p>
                      </div>
                    </label>

                    {/* PayPal Option */}
                    <label className="flex items-center p-4 border-2 border-wood-text/20 rounded-lg cursor-pointer transition-all duration-200 hover:border-wood-green/50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-wood-green focus:ring-wood-green"
                      />
                      <div className="ml-3">
                        <span className="font-sans font-semibold text-wood-text">PayPal</span>
                        <p className="font-sans text-sm text-wood-text/60">
                          Pay with your PayPal account
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                    Order Summary
                  </h2>

                  {/* Cart Items Preview */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-sans text-sm font-medium text-wood-text truncate">
                            {item.name}
                          </p>
                          <p className="font-sans text-xs text-wood-text/60">
                            Qty: {item.qty}
                          </p>
                        </div>
                        <p className="font-sans text-sm font-medium text-wood-text">
                          {formatPrice(item.price * item.qty)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Cost Breakdown */}
                  <div className="border-t border-wood-text/10 pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="font-sans text-wood-text/70">
                        Subtotal
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

                    <div className="border-t border-wood-text/10 pt-3">
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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 px-6 py-4 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-wood-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Place Order'
                    )}
                  </button>

                  {/* Security Badge */}
                  <div className="mt-4 flex items-center justify-center space-x-2 text-wood-text/50">
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
                      Secure checkout with SSL encryption
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
