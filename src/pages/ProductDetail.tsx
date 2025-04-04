
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Share2, 
  ShoppingCart,
  Minus,
  Plus,
  MessageCircle,
  Star,
  ChevronRight,
  ArrowLeft,
  Eye360,
  Truck
} from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/ProductGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import dummyProducts from '@/data/dummyProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(dummyProducts[0]); // Default to first product
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { toast } = useToast();
  
  // Mock product images for gallery
  const productImages = [
    product?.image,
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE2MjY4NjIyNjc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE2MjY4NjIzMDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE2MjY4NjIzMzI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500'
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading the product
    setIsLoading(true);
    
    // Find the product by ID
    const foundProduct = dummyProducts.find(p => p.id === id);
    
    setTimeout(() => {
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} has been added to your cart.`,
    });
  };

  const shareProduct = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link has been copied to clipboard.",
    });
  };

  if (isLoading) {
    return (
      <>
        <NavBar />
        <div className="container mx-auto px-4 pt-24 pb-20 min-h-screen">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 animate-pulse">
              <div className="aspect-square rounded-xl bg-muted"></div>
            </div>
            <div className="md:w-1/2">
              <div className="h-8 bg-muted rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-6 bg-muted rounded w-1/4 mb-6 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-2/3 mb-6 animate-pulse"></div>
              <div className="h-10 bg-muted rounded w-full mb-4 animate-pulse"></div>
              <div className="h-10 bg-muted rounded w-full mb-4 animate-pulse"></div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <main className="pt-24 pb-20"> {/* Add padding to account for fixed navbar */}
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to={`/products?category=${product.category}`} className="hover:text-foreground transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-foreground truncate">{product.name}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="glass rounded-xl overflow-hidden mb-4">
                <motion.img 
                  src={productImages[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "rounded-lg overflow-hidden border-2 transition-all",
                      selectedImage === index 
                        ? "border-neon-purple" 
                        : "border-transparent hover:border-neon-purple/50"
                    )}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* 3D View Button */}
              <div className="mt-6">
                <Button variant="outline" className="w-full py-6 h-auto gap-2 rounded-xl border-white/20">
                  <Eye360 size={20} />
                  <span>View in 3D / Augmented Reality</span>
                </Button>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                {/* Product title and category */}
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <div className="flex items-center gap-2">
                    <Link 
                      to={`/products?category=${product.category}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {product.category}
                    </Link>
                    
                    {/* Rating stars */}
                    <div className="flex items-center ml-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn(
                              i < product.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            )}
                          />
                        ))}
                      <span className="ml-2 text-sm text-muted-foreground">(24 reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3">
                  {product.oldPrice && (
                    <span className="text-muted-foreground line-through text-lg">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className={cn(
                    "text-2xl font-bold",
                    product.oldPrice ? "text-rose-500" : ""
                  )}>
                    ${product.price.toFixed(2)}
                  </span>
                  
                  {product.oldPrice && (
                    <span className="px-2 py-1 bg-rose-500/10 text-rose-500 text-sm rounded">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                
                {/* AI Badge */}
                <div className="glass inline-flex items-center px-4 py-2 rounded-full gap-2">
                  <Sparkles size={16} className="text-neon-purple" />
                  <span className="text-sm">AI suggests this matches your style</span>
                </div>
                
                {/* Shipping */}
                <div className="flex items-center gap-2 text-sm">
                  <Truck size={16} />
                  <span>Free shipping & returns</span>
                </div>
                
                {/* Description */}
                <p className="text-foreground/80 leading-relaxed">
                  Experience the future with our {product.name}. This cutting-edge product combines 
                  state-of-the-art technology with elegant design to transform your everyday life. 
                  Featuring advanced AI capabilities, seamless integration with your other devices, 
                  and an intuitive user experience that adapts to your preferences.
                </p>
                
                {/* Quantity selector */}
                <div className="flex items-center">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/20"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    <div className="w-12 text-center">{quantity}</div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/20"
                      onClick={incrementQuantity}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-teal hover:shadow-lg hover:shadow-neon-purple/30 gap-2"
                    onClick={addToCart}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className={cn(
                        "h-12 w-12 rounded-full border-white/20",
                        isWishlisted && "bg-rose-500 text-white hover:bg-rose-600 border-transparent"
                      )}
                      onClick={toggleWishlist}
                    >
                      <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
                    </Button>
                    
                    <Button 
                      variant="outline"
                      size="icon"
                      className="h-12 w-12 rounded-full border-white/20"
                      onClick={shareProduct}
                    >
                      <Share2 size={18} />
                    </Button>
                  </div>
                </div>
                
                {/* Chat with AI */}
                <Button 
                  variant="ghost"
                  className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
                >
                  <MessageCircle size={18} />
                  Ask our AI about this product
                </Button>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-neon-purple data-[state=active]:shadow-none bg-transparent px-6 py-3"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-neon-purple data-[state=active]:shadow-none bg-transparent px-6 py-3"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-neon-purple data-[state=active]:shadow-none bg-transparent px-6 py-3"
                >
                  Reviews (24)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="pt-6">
                <div className="space-y-4">
                  <p>
                    The {product.name} is designed to transform your everyday experiences with state-of-the-art technology. 
                    This revolutionary product combines elegant design with powerful functionality to deliver an unparalleled user experience.
                  </p>
                  
                  <p>
                    With its advanced AI capabilities, the {product.name} learns from your preferences and adapts to your needs, 
                    providing a truly personalized experience. Its seamless integration with your existing devices ensures that 
                    you stay connected in the most intuitive way possible.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Advanced AI technology that adapts to your preferences</li>
                    <li>Seamless integration with your existing smart devices</li>
                    <li>Intuitive controls for effortless operation</li>
                    <li>Energy-efficient design for sustainable use</li>
                    <li>Premium materials for durability and aesthetics</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications" className="pt-6">
                <div className="space-y-4">
                  <div className="glass rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 font-medium bg-white/5">Dimensions</td>
                          <td className="py-3 px-4">120 x 75 x 15 mm</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 font-medium bg-white/5">Weight</td>
                          <td className="py-3 px-4">180g</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 font-medium bg-white/5">Materials</td>
                          <td className="py-3 px-4">Aircraft-grade aluminum, premium glass</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 font-medium bg-white/5">Battery Life</td>
                          <td className="py-3 px-4">Up to 12 hours of continuous use</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-3 px-4 font-medium bg-white/5">Connectivity</td>
                          <td className="py-3 px-4">Bluetooth 5.2, Wi-Fi 6E, NFC</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium bg-white/5">Compatibility</td>
                          <td className="py-3 px-4">iOS, Android, Windows, macOS</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center mr-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                size={18}
                                className={cn(
                                  i < 4
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-400"
                                )}
                              />
                            ))}
                        </div>
                        <span className="text-sm">Based on 24 reviews</span>
                      </div>
                    </div>
                    
                    <Button className="rounded-full">Write a Review</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Sample reviews - these would come from your backend in a real app */}
                    <div className="glass rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Alex Thompson</h4>
                          <div className="flex items-center mt-1">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={cn(
                                    i < 5
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-400"
                                  )}
                                />
                              ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-foreground/80">
                        This product exceeded all my expectations! The design is sleek and modern,
                        and the functionality is intuitive. I especially love how it integrates with
                        all my other devices. Highly recommend to anyone looking to upgrade their tech.
                      </p>
                    </div>
                    
                    <div className="glass rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Jordan Patel</h4>
                          <div className="flex items-center mt-1">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={cn(
                                    i < 4
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-400"
                                  )}
                                />
                              ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">1 week ago</span>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Great product overall. The AI features are impressive and it's fascinating to see 
                        how it learns my preferences over time. The only reason I'm not giving it 5 stars 
                        is because the setup was a bit complicated. Once you get past that though, it's amazing!
                      </p>
                    </div>
                    
                    <Button variant="ghost" className="w-full">Load More Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Related Products */}
          <div className="mt-20">
            <ProductGrid 
              title="You May Also Like" 
              subtitle="Based on your browsing history and preferences"
              limit={4} 
            />
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="rounded-full px-8 border-white/20 gap-2">
                <ArrowLeft size={16} />
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProductDetail;
