
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ProductGrid } from '@/components/ProductGrid';
import dummyProducts from '@/data/dummyProducts';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading wishlist items
    setIsLoading(true);
    
    // In a real app, you would fetch from a database
    setTimeout(() => {
      const mockWishlistItems = dummyProducts
        .filter((_, index) => index % 5 === 0) // Just take a few products for the demo
        .map(product => ({
          ...product
        }));
      
      setWishlistItems(mockWishlistItems);
      setIsLoading(false);
    }, 800);
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your wishlist.",
    });
  };

  const addToCart = (product) => {
    // In a real app, you would update the cart in state or context
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Empty wishlist state
  if (wishlistItems.length === 0 && !isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavBar />
        <main className="pt-24 pb-20 min-h-screen flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center max-w-md">
            <div className="mb-8">
              <div className="w-24 h-24 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={40} className="text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
              <p className="text-muted-foreground mb-8">
                Save items you love for inspiration or future purchases.
              </p>
              <Button 
                className="rounded-full px-8 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal"
                asChild
              >
                <Link to="/products">
                  Start Shopping <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            
            <ProductGrid 
              title="Popular Products" 
              subtitle="You might be interested in these trending items"
              limit={4}
            />
          </div>
        </main>
        <Footer />
      </motion.div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <>
        <NavBar />
        <div className="container mx-auto px-4 pt-24 pb-20 min-h-screen">
          <h1 className="text-2xl font-bold mb-6">Your Wishlist</h1>
          <div className="glass rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
          </div>
          <div className="glass rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
          </div>
          <div className="glass rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
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
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Your Wishlist</h1>
            <Link 
              to="/products" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Continue Shopping
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wishlist Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {wishlistItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="glass rounded-xl p-4 flex"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <Link 
                          to={`/products/${item.id}`} 
                          className="font-medium hover:text-neon-purple transition-colors"
                        >
                          {item.name}
                        </Link>
                        <button 
                          className="text-muted-foreground hover:text-rose-500 transition-colors"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mt-1">
                        {item.category}
                      </div>
                      
                      <div className="mt-2 flex justify-between items-end">
                        <div className="flex items-center">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < item.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-400"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium">${item.price.toFixed(2)}</div>
                          {item.oldPrice && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${item.oldPrice.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="mt-3 rounded-full text-xs gap-1"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Wishlist Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Wishlist Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Items</span>
                    <span>{wishlistItems.length}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Value</span>
                    <span>
                      ${wishlistItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </span>
                  </div>
                  
                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      Products in your wishlist will be saved for 30 days. Sign in to keep them saved forever.
                    </p>
                    <p>
                      Prices and availability may change over time. Add items to your cart to purchase them.
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Button 
                    className="w-full rounded-full bg-gradient-to-r from-neon-purple to-neon-teal hover:shadow-lg hover:shadow-neon-purple/30 gap-2"
                    onClick={() => {
                      wishlistItems.forEach(item => addToCart(item));
                      toast({
                        title: "All items added to cart",
                        description: "All wishlist items have been added to your cart.",
                      });
                    }}
                  >
                    <ShoppingCart size={18} />
                    Add All to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-white/20"
                    asChild
                  >
                    <Link to="/cart">
                      View Cart
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Wishlist;
