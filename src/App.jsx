import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

// Main App component with routing configuration
function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Homepage Route */}
            <Route path="/" element={<Home />} />
            
            {/* Shop Route */}
            <Route path="/shop" element={<Shop />} />
            
            {/* Product Detail Route with dynamic ID parameter */}
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Shopping Cart Route */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Checkout Route */}
            <Route path="/checkout" element={<Checkout />} />
            
            {/* Account Route */}
            <Route path="/account" element={<Account />} />
            
            {/* Blog Route */}
            <Route path="/blog" element={<Blog />} />
            
            {/* About Us Route */}
            <Route path="/about" element={<About />} />
            
            {/* Contact Us Route */}
            <Route path="/contact" element={<Contact />} />
            
            {/* Catch-all route for 404 - redirects to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
