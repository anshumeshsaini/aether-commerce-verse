
import { Product } from "@/components/ProductCard";

const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Quantum Neural Headset",
    price: 299.99,
    oldPrice: 399.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    isNew: true,
    isOnSale: true,
    rating: 4
  },
  {
    id: "2",
    name: "Holographic Display Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    isExclusive: true,
    rating: 5
  },
  {
    id: "3",
    name: "Levitating Wireless Speaker",
    price: 149.99,
    oldPrice: 189.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    isOnSale: true,
    rating: 4
  },
  {
    id: "4",
    name: "Smart Hydration Bottle",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    rating: 4
  },
  {
    id: "5",
    name: "Adaptive Fitness Shoes",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    isNew: true,
    rating: 5
  },
  {
    id: "6",
    name: "Ambient Light Sculpture",
    price: 129.99,
    oldPrice: 159.99,
    image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isOnSale: true,
    rating: 4
  },
  {
    id: "7",
    name: "Environmental Sensor Cube",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    rating: 3
  },
  {
    id: "8",
    name: "Digital Art Frame",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isExclusive: true,
    rating: 5
  }
];

export default dummyProducts;
