
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, Check, Shield, Truck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
      toast({
        title: "Order placed successfully!",
        description: "Your order has been confirmed and will be shipped soon.",
        variant: "success"
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 flex items-center gap-2">
            <Link 
              to="/cart" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Back to Cart
            </Link>
          </div>
          
          {/* Checkout steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center w-full max-w-md">
              <div className={`flex-1 flex flex-col items-center ${step >= 1 ? 'text-neon-purple' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-neon-purple text-white' : 'bg-muted text-muted-foreground'}`}>
                  {step > 1 ? <Check size={20} /> : 1}
                </div>
                <span className="text-sm">Checkout</span>
              </div>
              
              <div className={`w-20 h-0.5 ${step >= 2 ? 'bg-neon-purple' : 'bg-muted'}`}></div>
              
              <div className={`flex-1 flex flex-col items-center ${step >= 2 ? 'text-neon-purple' : 'text-muted-foreground'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-neon-purple text-white' : 'bg-muted text-muted-foreground'}`}>
                  2
                </div>
                <span className="text-sm">Confirmation</span>
              </div>
            </div>
          </div>
          
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="glass rounded-xl p-8 mb-8">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Shield className="text-neon-purple" size={20} />
                    Contact Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-8 mb-8">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Truck className="text-neon-teal" size={20} />
                    Shipping Address
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main St" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="addressLine2">Apt, Suite, etc. (optional)</Label>
                      <Input id="addressLine2" placeholder="Apt #4B" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="San Francisco" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="California" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" placeholder="94105" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-8">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <CreditCard className="text-neon-pink" size={20} />
                    Payment Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="4242 4242 4242 4242" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="John Doe" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="glass rounded-xl p-8 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$599.97</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$48.00</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between py-2 font-semibold">
                      <span>Total</span>
                      <span className="text-xl">$657.96</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link to="/terms" className="text-neon-purple hover:underline">
                          Terms & Conditions
                        </Link>
                      </label>
                    </div>
                    
                    <Button 
                      className="w-full rounded-full bg-gradient-to-r from-neon-purple to-neon-teal" 
                      size="lg"
                      onClick={handleSubmit}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Complete Order"}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Your payment information is encrypted and secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <motion.div 
              className="glass rounded-xl p-8 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-6">
                <Check className="text-neon-purple" size={32} />
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your purchase! Your order #AE72950 has been confirmed and will be processed shortly.
              </p>
              
              <div className="glass rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Order Details</h3>
                <div className="flex justify-between mb-2">
                  <span>Order Number</span>
                  <span className="font-medium">AE72950</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Date</span>
                  <span className="font-medium">April 4, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-medium">$657.96</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-8">
                A confirmation email has been sent to your email address. You can track your order status in your account.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/account">View Order</Link>
                </Button>
                <Button asChild className="rounded-full bg-gradient-to-r from-neon-purple to-neon-teal">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Checkout;
