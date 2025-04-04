
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "You'll now receive our AI-curated product recommendations.",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-purple/10 to-transparent opacity-30"></div>
        
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-neon-purple/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-neon-teal/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto glass rounded-2xl p-10 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bell className="text-neon-purple" size={24} />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent">
                Join the Future of Shopping
              </h2>
            </div>
            <p className="text-foreground/70">
              Subscribe to receive AI-curated product recommendations, 
              exclusive deals, and early access to new features.
            </p>
          </motion.div>
          
          <motion.form 
            className="flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-full bg-white/10 border-white/20 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              className="rounded-full px-6 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal hover:shadow-lg hover:shadow-neon-purple/30 border-none min-w-40"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-pulse">Subscribing</span>
                  <div className="w-5 h-5 rounded-full border-t-2 border-r-2 border-white animate-spin"></div>
                </>
              ) : (
                <>
                  Subscribe <ArrowRight size={16} />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
