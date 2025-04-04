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
  },
  {
    id: "9",
    name: "Adaptive AR Glasses",
    price: 499.99,
    oldPrice: 599.99,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    isNew: true,
    rating: 5
  },
  {
    id: "10",
    name: "Neural Interface Keyboard",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 4
  },
  {
    id: "11",
    name: "Quantum Computing Module",
    price: 1299.99,
    oldPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    isExclusive: true,
    rating: 5
  },
  {
    id: "12",
    name: "Holographic Projection Cube",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    isNew: true,
    rating: 4
  },
  {
    id: "13",
    name: "Gesture Control Gloves",
    price: 149.99,
    oldPrice: 179.99,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    isOnSale: true,
    rating: 4
  },
  {
    id: "14",
    name: "Vitals Monitoring Bracelet",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    rating: 4
  },
  {
    id: "15",
    name: "Smart Fabric Jacket",
    price: 279.99,
    oldPrice: 319.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    isOnSale: true,
    rating: 4
  },
  {
    id: "16",
    name: "Biometric Authentication Ring",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    isNew: true,
    rating: 5
  },
  {
    id: "17",
    name: "Neural Activity Headband",
    price: 249.99,
    oldPrice: 299.99,
    image: "https://images.unsplash.com/photo-1590935217156-5fc1a0fc8111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    isOnSale: true,
    rating: 4
  },
  {
    id: "18",
    name: "Adaptive Climate Necklace",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Wearables",
    isExclusive: true,
    rating: 5
  },
  {
    id: "19",
    name: "Spatial Audio Earbuds",
    price: 179.99,
    oldPrice: 219.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    isOnSale: true,
    rating: 5
  },
  {
    id: "20",
    name: "Neural Feedback Headphones",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    isNew: true,
    rating: 5
  },
  {
    id: "21",
    name: "Immersive Sound System",
    price: 699.99,
    oldPrice: 899.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    isOnSale: true,
    rating: 4
  },
  {
    id: "22",
    name: "Voice-Activated Soundbar",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1558098329-a11cff621064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    rating: 4
  },
  {
    id: "23",
    name: "Adaptive Acoustics Speaker",
    price: 399.99,
    oldPrice: 449.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Audio",
    isOnSale: true,
    rating: 4
  },
  {
    id: "24",
    name: "Adaptive Resistance Trainer",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    isNew: true,
    rating: 5
  },
  {
    id: "25",
    name: "Neural Muscle Stimulator",
    price: 249.99,
    oldPrice: 299.99,
    image: "https://images.unsplash.com/photo-1518644730709-0a7e487421d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    isOnSale: true,
    rating: 4
  },
  {
    id: "26",
    name: "Virtual Reality Fitness Kit",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    isExclusive: true,
    rating: 5
  },
  {
    id: "27",
    name: "Smart Yoga Mat",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1600881333248-6a9c8b1903fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    rating: 4
  },
  {
    id: "28",
    name: "Biometric Recovery System",
    price: 349.99,
    oldPrice: 399.99,
    image: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Fitness",
    isOnSale: true,
    rating: 4
  },
  {
    id: "29",
    name: "Self-Adapting Running Shoes",
    price: 279.99,
    image: "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    isNew: true,
    rating: 5
  },
  {
    id: "30",
    name: "Impact-Response Boots",
    price: 229.99,
    oldPrice: 279.99,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    isOnSale: true,
    rating: 4
  },
  {
    id: "31",
    name: "Climate-Control Sandals",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    rating: 4
  },
  {
    id: "32",
    name: "Pressure-Mapping Insoles",
    price: 89.99,
    oldPrice: 119.99,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    isOnSale: true,
    rating: 3
  },
  {
    id: "33",
    name: "Biometric Tracking Sneakers",
    price: 269.99,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    isExclusive: true,
    rating: 5
  },
  {
    id: "34",
    name: "Ambient Environment Projector",
    price: 399.99,
    oldPrice: 499.99,
    image: "https://images.unsplash.com/photo-1565053396207-75ca17bdf99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isOnSale: true,
    rating: 4
  },
  {
    id: "35",
    name: "Self-Organizing Furniture Set",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isNew: true,
    rating: 5
  },
  {
    id: "36",
    name: "AI-Powered Sleep System",
    price: 899.99,
    oldPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isOnSale: true,
    rating: 5
  },
  {
    id: "37",
    name: "Sustainable Living Kitchen",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isExclusive: true,
    rating: 5
  },
  {
    id: "38",
    name: "Light Therapy Bath System",
    price: 599.99,
    oldPrice: 699.99,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Home",
    isOnSale: true,
    rating: 4
  },
  {
    id: "39",
    name: "Autonomous Home Hub",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1638203897646-826289cadc39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    isNew: true,
    rating: 5
  },
  {
    id: "40",
    name: "Predictive Climate Control",
    price: 449.99,
    oldPrice: 499.99,
    image: "https://images.unsplash.com/photo-1621693247912-ec46c09e18cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    isOnSale: true,
    rating: 4
  },
  {
    id: "41",
    name: "Security Drone System",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    isExclusive: true,
    rating: 5
  },
  {
    id: "42",
    name: "Resource Optimization System",
    price: 349.99,
    oldPrice: 399.99,
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    isOnSale: true,
    rating: 4
  },
  {
    id: "43",
    name: "Multi-Room Audio Network",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Smart Home",
    isNew: true,
    rating: 5
  },
  {
    id: "44",
    name: "Interactive Wall Art",
    price: 799.99,
    oldPrice: 999.99,
    image: "https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isOnSale: true,
    rating: 4
  },
  {
    id: "45",
    name: "Holographic Plant Display",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1545165375-81a1475a4b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isExclusive: true,
    rating: 5
  },
  {
    id: "46",
    name: "Mood-Response Lighting",
    price: 199.99,
    oldPrice: 249.99,
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "Decor",
    isOnSale: true,
    rating: 4
<<<<<<< HEAD
  },
  {
    id: "47",
    name: "Living Sculpture",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1596001978150-82ce55cdbdcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    category: "
=======
  }
];

export default dummyProducts;
>>>>>>> ba9280b (🚀 Initial commit: Aether-Commerce project setup)
