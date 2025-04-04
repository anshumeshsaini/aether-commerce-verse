
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trash2, 
  Minus, 
  Plus, 
  ArrowRight, 
  ShoppingBag, 
  ChevronLeft,
  Sparkles,
  CreditCard,
} from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ProductGrid } from '@/components/ProductGrid';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import dummyProducts from '@/data/dummyProducts';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading cart items
    setIsLoading(true);
    
    // Create mock cart items from dummy products
    setTimeout(() => {
      const mockCartItems = dummyProducts
        .slice(0, 3) // Just take first 3 products for the demo
        .map(product => ({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: Math.floor(Math.random() * 2) + 1
        }));
      
      setCartItems(mockCartItems);
      setIsLoading(false);
    }, 800);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const applyPromoCode = () => {
    if (!promoCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter a promo code.",
        variant: "destructive",
      });
      return;
    }
    
    // Check for valid promo code - would verify against backend in real app
    if (promoCode.toLowerCase() === 'discount20') {
      setPromoApplied(true);
      toast({
        title: "Promo code applied",
        description: "20% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired.",
        variant: "destructive",
      });
    }
  };

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = promoApplied ? subtotal * 0.2 : 0;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal - discount + shipping;

  // Calculate recommended items based on cart
  const getRecommendedItems = () => {
    // In a real app, this would be an AI recommendation
    // For now, we'll just return products not in the cart
    const cartIds = cartItems.map(item => item.id);
    return dummyProducts.filter(product => !cartIds.includes(product.id)).slice(0, 4);
  };

  // Empty cart state
  if (cartItems.length === 0 && !isLoading) {
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
                <ShoppingBag size={40} className="text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added anything to your cart yet.
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
              title="Recommended Products" 
              subtitle="Picked just for you by our AI"
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
          <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
          <div className="glass rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
          </div>
          <div className="glass rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
          </div>
          <div className="glass rounded-xl p-4 mb-10 animate-pulse">
            <div className="h-24 bg-muted rounded"></div>
          </div>
          <div className="h-40 glass rounded-xl p-4 animate-pulse">
            <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-full mb-2"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
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
            <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
            <Link 
              to="/products" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Continue Shopping
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
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
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      
                      <div className="mt-2 flex justify-between items-end">
                        <div className="flex items-center">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 rounded-full text-muted-foreground"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 rounded-full text-muted-foreground"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* AI Recommendations */}
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-neon-purple" size={20} />
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent">
                    Complete Your Purchase
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                  {getRecommendedItems().slice(0, 2).map((product) => (
                    <motion.div
                      key={product.id}
                      className="glass rounded-xl overflow-hidden flex"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col justify-between flex-grow">
                        <div>
                          <Link 
                            to={`/products/${product.id}`}
                            className="font-medium text-sm hover:text-neon-purple transition-colors line-clamp-1"
                          >
                            {product.name}
                          </Link>
                          <div className="text-sm font-medium mt-1">${product.price.toFixed(2)}</div>
                        </div>
                        <Button 
                          size="sm" 
                          className="mt-2 rounded-full text-xs h-8"
                          onClick={() => {
                            setCartItems(prev => [
                              ...prev, 
                              {
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                quantity: 1
                              }
                            ]);
                            toast({
                              title: "Item added",
                              description: `${product.name} has been added to your cart.`,
                            });
                          }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount (20%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Promo code"
                      className="rounded-full bg-white/10 border-white/20"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <Button 
                      variant={promoApplied ? "outline" : "default"}
                      className={cn(
                        "rounded-full",
                        promoApplied && "border-green-500 text-green-500"
                      )}
                      onClick={applyPromoCode}
                      disabled={promoApplied}
                    >
                      {promoApplied ? "Applied" : "Apply"}
                    </Button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-green-400 mt-2">
                      Promo code "DISCOUNT20" applied successfully!
                    </p>
                  )}
                  {!promoApplied && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Try "DISCOUNT20" for 20% off your order
                    </p>
                  )}
                </div>
                
                {/* Checkout Button */}
                <Button 
                  className="w-full mt-6 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-teal hover:shadow-lg hover:shadow-neon-purple/30 gap-2"
                >
                  <CreditCard size={18} />
                  Proceed to Checkout
                </Button>
                
                {/* Secure Checkout Message */}
                <div className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  <span>Secure Checkout</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Payment Methods */}
                <div className="mt-6 flex justify-center space-x-2">
                  {['visa', 'mastercard', 'amex', 'paypal', 'applepay'].map((method) => (
                    <div 
                      key={method} 
                      className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs text-muted-foreground"
                    >
                      {method.charAt(0).toUpperCase()}
                    </div>
                  ))}
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

export default Cart;
