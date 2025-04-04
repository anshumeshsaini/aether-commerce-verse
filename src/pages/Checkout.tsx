
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  CreditCard, 
  UserCircle, 
  MapPin, 
  Truck, 
  Lock, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// A simple form field component
const FormField = ({ label, type = "text", placeholder, required = true }) => (
  <div className="mb-4">
    <Label htmlFor={label.toLowerCase().replace(/\s/g, '')} className="mb-2 block">
      {label} {required && <span className="text-rose-500">*</span>}
    </Label>
    <Input 
      id={label.toLowerCase().replace(/\s/g, '')} 
      type={type} 
      placeholder={placeholder} 
      required={required}
      className="w-full bg-white/10"
    />
  </div>
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Process payment and complete order
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setOrderComplete(true);
        toast({
          title: "Order Placed Successfully!",
          description: "Your order has been confirmed and will be shipped soon.",
        });
      }, 2000);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToShopping = () => {
    navigate('/');
  };

  // Order success screen
  if (orderComplete) {
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
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-4">
                Your order #ORD-{Math.floor(Math.random() * 900000) + 100000} has been placed successfully.
              </p>
              <p className="glass rounded-lg p-4 text-sm mb-8">
                We've sent a confirmation to your email. Your items will be shipped within 1-3 business days.
              </p>
              <Button 
                className="rounded-full px-8 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal"
                onClick={handleBackToShopping}
              >
                Continue Shopping <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </motion.div>
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
            <h1 className="text-2xl font-bold">Checkout</h1>
            <Link 
              to="/cart" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Return to Cart
            </Link>
          </div>
          
          {/* Checkout Steps */}
          <div className="relative mb-8">
            <div className="flex items-center justify-between">
              <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-neon-purple' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 1 ? 'bg-neon-purple/20' : 'bg-muted'}`}>
                  <UserCircle size={20} />
                </div>
                <span className="text-xs">Information</span>
              </div>
              
              <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-neon-purple' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 2 ? 'bg-neon-purple/20' : 'bg-muted'}`}>
                  <Truck size={20} />
                </div>
                <span className="text-xs">Shipping</span>
              </div>
              
              <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-neon-purple' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 3 ? 'bg-neon-purple/20' : 'bg-muted'}`}>
                  <CreditCard size={20} />
                </div>
                <span className="text-xs">Payment</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="absolute top-5 left-0 right-0 mx-auto h-0.5 bg-muted -z-10">
              <div 
                className="h-full bg-neon-purple transition-all duration-300"
                style={{ width: `${(activeStep - 1) * 50}%` }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-xl p-6">
                {/* Step 1: Information */}
                {activeStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField label="First Name" placeholder="Enter your first name" />
                      <FormField label="Last Name" placeholder="Enter your last name" />
                    </div>
                    
                    <FormField label="Email" type="email" placeholder="your@email.com" />
                    <FormField label="Phone" type="tel" placeholder="(555) 555-5555" />
                    
                    <Separator className="my-6" />
                    
                    <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                    
                    <FormField label="Address Line 1" placeholder="Street address" />
                    <FormField label="Address Line 2" placeholder="Apartment, suite, etc. (optional)" required={false} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField label="City" placeholder="City" />
                      <FormField label="State/Province" placeholder="State" />
                      <FormField label="Zip/Postal" placeholder="Zip code" />
                    </div>
                    
                    <FormField label="Country" placeholder="Country" />
                  </motion.div>
                )}
                
                {/* Step 2: Shipping */}
                {activeStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
                    
                    <div className="space-y-4">
                      {[
                        { id: 'standard', name: 'Standard Shipping', price: 10, days: '3-5' },
                        { id: 'express', name: 'Express Shipping', price: 25, days: '1-2' },
                        { id: 'overnight', name: 'Overnight Delivery', price: 40, days: '1' }
                      ].map((option) => (
                        <div key={option.id} className="glass p-4 rounded-lg flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                          <div className="flex items-center gap-4">
                            <input 
                              type="radio" 
                              id={option.id} 
                              name="shipping" 
                              className="w-4 h-4 text-neon-purple"
                              defaultChecked={option.id === 'standard'}
                            />
                            <div>
                              <label htmlFor={option.id} className="font-medium cursor-pointer">
                                {option.name}
                              </label>
                              <p className="text-sm text-muted-foreground">
                                {option.days} business days
                              </p>
                            </div>
                          </div>
                          <span className="font-semibold">${option.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                    
                    <div className="flex items-center mb-4">
                      <input 
                        type="checkbox" 
                        id="sameAsBilling" 
                        className="mr-2"
                        defaultChecked 
                      />
                      <label htmlFor="sameAsBilling">
                        Same as billing address
                      </label>
                    </div>
                    
                    <div className="glass p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1 text-muted-foreground" />
                        <div className="text-sm">
                          <p className="font-medium">John Doe</p>
                          <p>123 Example Street</p>
                          <p>Apt 4B</p>
                          <p>New York, NY 10001</p>
                          <p>United States</p>
                        </div>
                        <Button variant="link" size="sm" className="ml-auto">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Payment */}
                {activeStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                    
                    <Tabs defaultValue="card" className="mb-6">
                      <TabsList className="w-full grid grid-cols-3">
                        <TabsTrigger value="card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                        <TabsTrigger value="applepay">Apple Pay</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="card" className="pt-4">
                        <div className="grid grid-cols-1 gap-4">
                          <FormField label="Card Number" placeholder="1234 5678 9012 3456" />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField label="Expiration Date" placeholder="MM/YY" />
                            <FormField label="CVC" placeholder="123" type="password" />
                          </div>
                          
                          <FormField label="Cardholder Name" placeholder="Name as it appears on card" />
                        </div>
                        
                        <div className="flex items-center mt-4 text-sm text-muted-foreground">
                          <Lock size={14} className="mr-2" />
                          <span>Your payment information is encrypted and secure.</span>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="paypal" className="pt-4">
                        <div className="py-8 text-center">
                          <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
                          <Button className="rounded-full px-8">
                            Continue to PayPal
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="applepay" className="pt-4">
                        <div className="py-8 text-center">
                          <p className="mb-4">Complete your purchase with Apple Pay.</p>
                          <Button className="rounded-full px-8 bg-black text-white">
                            Pay with Apple Pay
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <Separator className="my-6" />
                    
                    <h2 className="text-xl font-semibold mb-4">Review Order</h2>
                    
                    <div className="glass p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">Order Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>$279.96</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>$10.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$23.00</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>$312.96</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mr-2"
                        required
                      />
                      <label htmlFor="terms" className="text-sm">
                        I agree to the <Link to="/terms" className="text-neon-purple">Terms and Conditions</Link> and <Link to="/privacy" className="text-neon-purple">Privacy Policy</Link>
                      </label>
                    </div>
                  </motion.div>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {activeStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={handlePreviousStep}
                      className="rounded-full"
                    >
                      <ChevronLeft size={16} className="mr-1" />
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  <Button 
                    onClick={handleNextStep}
                    className="rounded-full px-8 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : activeStep < 3 ? (
                      <>Continue <ArrowRight size={16} /></>
                    ) : (
                      <>Complete Order <ArrowRight size={16} /></>
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-4">
                  {/* Product item 1 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1546868871-7041f2a55e12" 
                        alt="Smart Watch" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium line-clamp-1">Smart Watch Pro</h3>
                      <p className="text-xs text-muted-foreground">Black, 44mm</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs">Qty: 1</span>
                        <span className="text-sm font-medium">$129.99</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product item 2 */}
                  <div className="flex gap-3">
                    <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" 
                        alt="Wireless Headphones" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium line-clamp-1">Wireless Headphones</h3>
                      <p className="text-xs text-muted-foreground">Space Gray</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs">Qty: 1</span>
                        <span className="text-sm font-medium">$149.97</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$279.96</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$10.00</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$23.00</span>
                  </div>
                  
                  <Separator className="my-4 bg-white/10" />
                  
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$312.96</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mt-6">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Promo code"
                      className="rounded-full bg-white/10 border-white/20"
                    />
                    <Button 
                      variant="outline"
                      className="rounded-full"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                
                {/* Secure Checkout Message */}
                <div className="text-xs text-center text-muted-foreground mt-6 flex items-center justify-center gap-1">
                  <Lock size={12} />
                  <span>Secure Checkout</span>
                </div>
                
                {/* Payment Methods Icons */}
                <div className="mt-4 flex justify-center space-x-2">
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

export default Checkout;
