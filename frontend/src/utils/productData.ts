// Sample product data for the e-commerce store

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  sizes: string[];
  images: string[];
  category: string;
  colors?: string[];
  material?: string;
  rating?: number;
  reviews?: number;
}

// Featured products shown on home page
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 29.99,
    description: "Our classic black t-shirt is made from premium 100% organic cotton for exceptional comfort and durability. Features a relaxed fit with reinforced seams and a tagless collar design to prevent irritation. This versatile staple pairs perfectly with any outfit for a timeless, effortless look.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    ],
    category: "men",
    colors: ["Black", "White", "Gray"],
    material: "100% Organic Cotton",
    rating: 4.5,
    reviews: 127
  },
  {
    id: "2",
    name: "White Minimalist Tee",
    price: 24.99,
    description: "A clean and minimalist white t-shirt made from soft, breathable cotton. The lightweight fabric ensures all-day comfort, while the classic cut offers a flattering silhouette. An essential basic for every wardrobe that's perfect for layering or wearing on its own.",
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    ],
    category: "women",
    colors: ["White", "Cream", "Light Gray"],
    material: "Premium Cotton",
    rating: 4.7,
    reviews: 94
  },
  {
    id: "3",
    name: "Graphic Print Tee",
    price: 34.99,
    description: "Express your style with our bold graphic print t-shirt. Made from a durable cotton blend that holds up wash after wash while maintaining its vibrant colors. The modern fit is designed to flatter all body types, and the unique design makes a statement wherever you go.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "men",
    colors: ["Black", "Navy", "Burgundy"],
    material: "Cotton Blend",
    rating: 4.3,
    reviews: 78
  },
  {
    id: "4",
    name: "Striped Summer Tee",
    price: 27.99,
    description: "Stay cool and stylish with our striped summer t-shirt. The breathable fabric wicks away moisture to keep you comfortable even on the hottest days. Features a flattering silhouette with a slightly relaxed fit and a classic stripe pattern that never goes out of style.",
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1608744882201-52a7f7f3dd60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "women",
    colors: ["Blue/White", "Black/White", "Red/Navy"],
    material: "Lightweight Cotton",
    rating: 4.6,
    reviews: 112
  }
];

// Function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return featuredProducts.find(product => product.id === id);
};
