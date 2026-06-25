// Mock products data for BoraBora Woodcrafts
// This file serves as a centralized data source. In production, this would be replaced with API calls to a backend.

export const products = [
  {
    id: 1,
    name: "Mvule Live-Edge Coffee Table",
    price: 45000,
    category: "Furniture",
    shortDescription: "A stunning live-edge coffee table crafted from sustainably sourced Mvule wood, featuring natural organic edges and a hand-rubbed finish.",
    longDescription: "This exquisite Mvule live-edge coffee table is a testament to the beauty of natural wood. Each piece is unique, showcasing the organic contours and rich grain patterns that make Mvule one of East Africa's most prized hardwoods. Our master craftsmen carefully select each slab, preserving the natural edge while ensuring a perfectly level surface. The hand-rubbed finish enhances the wood's natural warmth and depth, creating a centerpiece that will be cherished for generations. Perfect for both contemporary and traditional interiors, this table brings the essence of Kenyan craftsmanship into your home.",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80"
    ],
    rating: 4.8,
    isFeatured: true,
    reviews: [
      {
        name: "Amara Ochieng",
        rating: 5,
        comment: "Absolutely stunning piece! The natural edge is breathtaking and the craftsmanship is impeccable. Worth every shilling."
      },
      {
        name: "David Kamau",
        rating: 4.5,
        comment: "Beautiful table, solid construction. Delivery was prompt and the packaging ensured it arrived in perfect condition."
      },
      {
        name: "Grace Wanjiku",
        rating: 5,
        comment: "This table transformed our living room. The wood grain is gorgeous and it feels like a true heirloom piece."
      }
    ]
  },
  {
    id: 2,
    name: "Mahogany Salad Bowls Set",
    price: 12000,
    category: "Kitchenware",
    shortDescription: "Set of four hand-turned Mahogany salad bowls, each with unique grain patterns and a food-safe natural oil finish.",
    longDescription: "Elevate your dining experience with our handcrafted Mahogany salad bowl set. Each bowl is turned on a traditional lathe by our skilled artisans, who have perfected their craft over decades of dedication. The rich, reddish-brown hue of Mahogany provides an elegant backdrop for your culinary creations, while the smooth, food-safe natural oil finish ensures both beauty and functionality. These bowls are not just serving vessels—they're conversation starters that bring warmth and sophistication to any table. Hand wash with mild soap and water to preserve the natural finish.",
    images: [
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=800&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&q=80"
    ],
    rating: 4.9,
    isFeatured: true,
    reviews: [
      {
        name: "Sarah Muthoni",
        rating: 5,
        comment: "These bowls are absolutely gorgeous! The wood grain is stunning and they feel so substantial. Perfect for dinner parties."
      },
      {
        name: "James Omondi",
        rating: 5,
        comment: "Exceptional quality. You can feel the craftsmanship in every bowl. They've become our go-to for serving salads."
      }
    ]
  },
  {
    id: 3,
    name: "Hand-Carved Wall Art Panel",
    price: 28000,
    category: "Wall Décor",
    shortDescription: "Intricate hand-carved wall panel featuring traditional African motifs, crafted from seasoned Cypress wood with a matte finish.",
    longDescription: "Transform your walls into a gallery of cultural heritage with our hand-carved wall art panel. Each piece tells a story through intricate geometric patterns and symbolic motifs inspired by traditional African artistry. Our carvers spend weeks perfecting each panel, using techniques passed down through generations. The seasoned Cypress wood ensures durability while the matte finish allows the natural beauty of the wood to shine through. Whether displayed alone or as part of a gallery wall, this piece adds depth, texture, and cultural significance to any space. Perfect for living rooms, dining areas, or entryways.",
    images: [
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ],
    rating: 4.7,
    isFeatured: true,
    reviews: [
      {
        name: "Elizabeth Njeri",
        rating: 5,
        comment: "This piece is absolutely breathtaking! The carving is so detailed and it adds such character to our home."
      },
      {
        name: "Michael Kipkorir",
        rating: 4.5,
        comment: "Beautiful craftsmanship. It's now the focal point of our living room. Everyone who visits compliments it."
      }
    ]
  },
  {
    id: 4,
    name: "Teak Dining Chair",
    price: 18500,
    category: "Furniture",
    shortDescription: "Ergonomically designed Teak dining chair with curved backrest and hand-finished joinery for lasting comfort and durability.",
    longDescription: "Experience the perfect blend of comfort and craftsmanship with our Teak dining chair. Designed with ergonomics in mind, the curved backrest provides excellent lumbar support while the contoured seat ensures comfort during extended meals. Crafted from premium Teak wood, known for its exceptional durability and natural resistance to moisture, this chair is built to last generations. Our artisans employ traditional mortise and tenon joinery techniques, reinforced with wooden dowels for added strength. The hand-rubbed finish highlights Teak's natural golden-brown color while protecting the wood. Each chair is a testament to sustainable forestry and masterful woodworking.",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    rating: 4.6,
    isFeatured: false,
    reviews: [
      {
        name: "Peter Maina",
        rating: 5,
        comment: "These chairs are incredibly comfortable and beautifully made. The joinery is solid and they look stunning around our table."
      },
      {
        name: "Lucy Akinyi",
        rating: 4.5,
        comment: "Excellent quality chairs. They're sturdy yet elegant. The wood finish is perfect for our dining room."
      }
    ]
  },
  {
    id: 5,
    name: "Olive Wood Serving Board",
    price: 8500,
    category: "Kitchenware",
    shortDescription: "Handcrafted Olive wood serving board with live edge and natural oil finish, perfect for charcuterie and appetizers.",
    longDescription: "Elevate your entertaining with our exquisite Olive wood serving board. Each piece is unique, featuring the dramatic grain patterns and natural variations that make Olive wood so sought after. The live edge preserves the organic beauty of the tree, while the smooth, hand-finished surface provides an elegant canvas for your culinary creations. Olive wood is naturally antibacterial and resistant to moisture, making it ideal for food service. The natural oil finish enhances the wood's rich colors and provides protection. Perfect for serving charcuterie, cheeses, appetizers, or as a decorative centerpiece when not in use.",
    images: [
      "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=800&q=80",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
      "https://images.unsplash.com/photo-1551218372-a8789b81b253?w=800&q=80"
    ],
    rating: 4.8,
    isFeatured: true,
    reviews: [
      {
        name: "Hannah Wanjiru",
        rating: 5,
        comment: "This board is absolutely gorgeous! The grain patterns are stunning and it's become my favorite serving piece."
      },
      {
        name: "Robert Ochieng",
        rating: 4.5,
        comment: "Beautiful craftsmanship and excellent quality. It's both functional and a work of art. Highly recommend!"
      }
    ]
  },
  {
    id: 6,
    name: "Cedar Wall Mirror Frame",
    price: 22000,
    category: "Wall Décor",
    shortDescription: "Rustic Cedar wood mirror frame with hand-planed texture and natural knots, featuring a high-quality beveled glass mirror.",
    longDescription: "Add warmth and character to any space with our Cedar wall mirror frame. The rustic aesthetic is achieved through careful hand-planing, which reveals the natural beauty of Cedar wood while preserving its distinctive knots and grain patterns. Cedar's natural aromatic properties and resistance to decay make it an excellent choice for home furnishings. The frame surrounds a premium beveled glass mirror that provides clear, distortion-free reflection. Whether placed in an entryway, bedroom, or living room, this mirror serves as both a functional piece and a stunning decorative element that brings the outdoors inside.",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80"
    ],
    rating: 4.5,
    isFeatured: false,
    reviews: [
      {
        name: "Dorcas Kemboi",
        rating: 5,
        comment: "This mirror is absolutely beautiful! The cedar frame adds such warmth to our bedroom. The quality is outstanding."
      },
      {
        name: "Samuel Njoroge",
        rating: 4,
        comment: "Lovely mirror with great rustic charm. The wood grain is gorgeous and it arrived well-packaged."
      }
    ]
  },
  {
    id: 7,
    name: "Rosewood Bedside Table",
    price: 32000,
    category: "Furniture",
    shortDescription: "Elegant Rosewood bedside table with dovetail drawer construction and hand-rubbed finish, featuring a spacious drawer and lower shelf.",
    longDescription: "Complete your bedroom sanctuary with our elegant Rosewood bedside table. Rosewood's rich, dark tones and distinctive grain patterns create a luxurious aesthetic that complements any decor style. The table features a spacious drawer constructed using traditional dovetail joinery—a hallmark of quality woodworking that ensures durability and strength. A lower shelf provides additional storage or display space. The hand-rubbed finish enhances the wood's natural luster while providing protection. Each piece is crafted with attention to detail, from the smooth-gliding drawer to the perfectly level surface. This table is not just furniture—it's an investment in timeless beauty.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"
    ],
    rating: 4.9,
    isFeatured: true,
    reviews: [
      {
        name: "Margaret Wambui",
        rating: 5,
        comment: "This bedside table is absolutely stunning! The rosewood is gorgeous and the drawer glides perfectly. Worth every penny."
      },
      {
        name: "John Mwangi",
        rating: 5,
        comment: "Exceptional quality and beautiful design. The dovetail joints show true craftsmanship. It's a perfect addition to our bedroom."
      }
    ]
  },
  {
    id: 8,
    name: "Ebony Wood Sculpture",
    price: 55000,
    category: "Wall Décor",
    shortDescription: "Contemporary abstract sculpture carved from premium Ebony wood, featuring polished surfaces and dramatic contrasts.",
    longDescription: "Make a bold statement with our contemporary Ebony wood sculpture. Ebony is one of the world's most precious and dense woods, known for its deep black color and exceptional durability. Our master carvers have created an abstract form that plays with light and shadow, showcasing the wood's natural beauty through polished surfaces and dramatic contrasts. Each sculpture is a unique work of art, signed by the artisan who created it. The substantial weight and smooth finish convey luxury and sophistication. Whether displayed on a mantel, bookshelf, or as a standalone piece, this sculpture commands attention and serves as a conversation piece for years to come.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    ],
    rating: 5.0,
    isFeatured: false,
    reviews: [
      {
        name: "Victoria Atieno",
        rating: 5,
        comment: "This sculpture is absolutely breathtaking! The ebony is stunning and the craftsmanship is museum-quality. A true work of art."
      },
      {
        name: "Daniel Kipchoge",
        rating: 5,
        comment: "Exceptional piece. The weight and finish are incredible. It's become the centerpiece of our art collection."
      }
    ]
  }
];

// Helper function to format price in Kenyan Shillings
export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.isFeatured);
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Helper function to get related products (same category, excluding current product)
export const getRelatedProducts = (currentProduct, limit = 3) => {
  return products
    .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
    .slice(0, limit);
};
