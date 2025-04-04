
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse follow glow effect
    if (glowRef.current && containerRef.current) {
      const glow = glowRef.current;
      const container = containerRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(glow, {
          x: x - 150,
          y: y - 150,
          ease: 'power2.out',
          duration: 0.6
        });
      };
      
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background glow */}
      <div 
        ref={glowRef}
        className="absolute w-[300px] h-[300px] rounded-full bg-neon-purple/20 blur-[100px] pointer-events-none"
      />
      
      {/* Floating 3D objects - simulated with simple divs for now */}
      <div className="absolute w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-neon-purple to-neon-teal opacity-70"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '15%', top: '25%' }}
        />
        
        <motion.div 
          className="absolute w-24 h-24 rounded-lg bg-gradient-to-r from-neon-teal to-neon-pink opacity-60"
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ right: '20%', top: '30%' }}
        />
        
        <motion.div 
          className="absolute w-20 h-20 rounded-lg bg-gradient-to-r from-neon-pink to-neon-purple opacity-50"
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ left: '25%', bottom: '20%' }}
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left py-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-neon-purple/20 text-neon-purple border border-neon-purple/40 mb-6">
                Revolutionizing Online Shopping
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="block bg-gradient-to-r from-neon-purple via-neon-teal to-neon-pink bg-clip-text text-transparent">
                Experience The Future
              </span>
              <span>Of Shopping</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              This isn't just a store. It's an experience. It learns you, feels you, grows with you — and surprises you. Welcome to the future of shopping.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button className="rounded-full px-8 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal hover:shadow-lg hover:shadow-neon-purple/30 border-none" asChild>
                <Link to="/products">
                  Shop Now <ArrowRight size={16} />
                </Link>
              </Button>
              
              <Button variant="outline" className="rounded-full px-8 gap-2 border-white/20 backdrop-blur-sm" asChild>
                <Link to="/products">
                  <Search size={16} /> AI Advisor
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main product image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Futuristic Product"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating tag with price */}
                <div className="absolute bottom-6 left-6 glass px-5 py-3 rounded-full flex items-center gap-3">
                  <span className="text-sm">AI Recommended</span>
                  <span className="bg-white text-space-dark px-3 py-1 rounded-full text-sm font-semibold">
                    $299.99
                  </span>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -bottom-8 -left-8 glass px-4 py-3 rounded-xl w-max z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 0.8 },
                  x: { duration: 0.5, delay: 0.8 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-teal flex items-center justify-center text-white">
                    <span>98%</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Match Score</p>
                    <p className="text-xs text-foreground/70">AI Predicted</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-8 -right-8 glass px-4 py-3 rounded-xl z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 1 },
                  x: { duration: 0.5, delay: 1 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse"></div>
                  <p className="text-sm">72 people viewing this</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
