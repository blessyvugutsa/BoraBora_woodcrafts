# BoraBora Woodcrafts - Premium E-Commerce Frontend

A complete, responsive, and production-ready React e-commerce frontend for "BoraBora Woodcrafts," a premium brand specializing in handcrafted wood art and heirloom furniture.

## 🌟 Features

- **Fully Functional SPA**: Built with React Router DOM v6 for seamless navigation
- **Global State Management**: React Context API for cart and wishlist functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Earthy Color Palette**: Premium aesthetic with warm beige, deep bark brown, forest green, and sandy clay
- **9 Complete Pages**: Home, Shop, Product Detail, Cart, Checkout, Account, Blog, About, and Contact
- **M-Pesa Integration Ready**: Checkout page with dedicated M-Pesa payment gateway UI
- **SEO Optimized**: Semantic HTML5 structure throughout
- **Mock Data**: 8 premium woodcraft products with full details, images, and reviews

## 🎨 Design System

### Color Palette
- **Primary Background**: Warm Beige (#FDFBF7)
- **Primary Text**: Deep Bark Brown (#2F2519)
- **Accent Buttons**: Forest Green (#3F5E4D) and Dark Forest Green (#2C4436)
- **Highlights**: Sandy Clay (#D4A373)

### Typography
- **Headings**: Serif fonts (Georgia, Times New Roman)
- **Body**: Sans-serif fonts (system-ui, Roboto, Arial)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   └── Layout.jsx          # Main layout with Navigation and Footer
├── context/
│   └── AppContext.jsx      # Global state for cart and wishlist
├── data/
│   └── products.js         # Mock product data and helper functions
├── pages/
│   ├── Home.jsx            # Homepage with hero, categories, and featured products
│   ├── Shop.jsx            # Shop page with filters and sorting
│   ├── ProductDetail.jsx   # Product detail with gallery, reviews, and related products
│   ├── Cart.jsx            # Shopping cart with line items and cost breakdown
│   ├── Checkout.jsx        # Checkout with form validation and M-Pesa integration
│   ├── Account.jsx         # Account page with order history and wishlist
│   ├── Blog.jsx            # Blog with editorial articles
│   ├── About.jsx           # About us page with brand storytelling
│   └── Contact.jsx         # Contact page with form and information
├── App.jsx                 # Main app with routing configuration
├── main.jsx                # Application entry point
└── index.css               # Global styles and Tailwind imports
```

## 🔧 Key Features

### Shopping Cart
- Add/remove items with quantity controls
- Persistent storage using localStorage
- Real-time cart total calculation
- Free shipping for orders over KES 50,000

### Wishlist
- Add/remove products from wishlist
- Persistent storage using localStorage
- Quick access from account page

### Product Filtering & Sorting
- Filter by category (Wall Décor, Kitchenware, Furniture)
- Sort by newest, price low-to-high, price high-to-low
- URL parameter persistence for shareable links

### Checkout & Payment
- Form validation with error handling
- Multiple payment options (Credit Card, PayPal, M-Pesa)
- M-Pesa STK Push integration ready (commented code shows API endpoint)
- Order success state with cart clearing

### Product Details
- Image gallery with thumbnail navigation
- Customer reviews with star ratings
- Related products from same category
- Quantity selector and wishlist toggle

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔌 Backend Integration

The application is currently using mock data. To connect to a backend:

1. Replace mock data in `src/data/products.js` with API calls
2. Update `AppContext.jsx` to persist cart/wishlist to a database
3. Implement the M-Pesa Daraja API integration in `Checkout.jsx` (commented code provided)
4. Add authentication for the Account page
5. Connect contact form to email service in `Contact.jsx`

## 🚀 Deployment

This project is Vite-compatible and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📄 License

ISC

## 👨‍💻 Development

Built with:
- React 18.2.0
- React Router DOM 6.22.0
- Tailwind CSS 3.4.1
- Vite 5.1.4
