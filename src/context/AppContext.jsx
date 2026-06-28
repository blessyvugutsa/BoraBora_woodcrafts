import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AppContext
const AppContext = createContext();

const getStoredValue = (key, fallback) => {
  if (typeof window === 'undefined') return fallback;

  try {
    const savedValue = window.localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from localStorage`, error);
    return fallback;
  }
};

const saveStoredValue = (key, value) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key} to localStorage`, error);
  }
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// AppProvider component to wrap the application
export const AppProvider = ({ children }) => {
  // Cart state - array of items with product details and quantity
  const [cart, setCart] = useState(() => getStoredValue('borabora_cart', []));

  // Wishlist state - array of product IDs
  const [wishlist, setWishlist] = useState(() => getStoredValue('borabora_wishlist', []));

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    saveStoredValue('borabora_cart', cart);
  }, [cart]);

  // Persist wishlist to localStorage whenever it changes
  useEffect(() => {
    saveStoredValue('borabora_wishlist', wishlist);
  }, [wishlist]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If item already exists, update quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add new item
        return [...prevCart, { ...product, qty: quantity }];
      }
    });
  };

  // Remove item from cart completely
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity in cart
  const updateCartItemQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity is 0 or negative, remove the item
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, qty: newQuantity }
          : item
      )
    );
  };

  // Increment item quantity by 1
  const incrementCartItem = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // Decrement item quantity by 1
  const decrementCartItem = (productId) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === productId) {
          const newQty = item.qty - 1;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      }).filter(item => item.qty > 0) // Remove items with quantity 0
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  // Calculate cart item count (total number of items, not unique products)
  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.qty, 0);
  };

  // Add product to wishlist
  const addToWishlist = (productId) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.includes(productId)) {
        return [...prevWishlist, productId];
      }
      return prevWishlist;
    });
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(id => id !== productId));
  };

  // Toggle product in wishlist (add if not present, remove if present)
  const toggleWishlist = (productId) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter(id => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.includes(productId);
  };

  // Calculate estimated shipping (in production, this would come from an API)
  const getShippingCost = () => {
    const cartTotal = getCartTotal();
    // Free shipping for orders over KES 50,000
    if (cartTotal >= 50000) {
      return 0;
    }
    // Flat rate shipping fee for orders under KES 50,000
    return 1500;
  };

  // Context value object
  const value = {
    // Cart state and functions
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    incrementCartItem,
    decrementCartItem,
    clearCart,
    getCartTotal,
    getCartItemCount,
    
    // Wishlist state and functions
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    
    // Shipping calculation
    getShippingCost,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}