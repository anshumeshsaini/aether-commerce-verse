
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import AIRecommendations from '@/components/AIRecommendations';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <main className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        
        <ProductGrid 
          title="Featured Products" 
          subtitle="Handpicked by our AI for their uniqueness and quality"
          limit={8} 
        />
        
        <AIRecommendations />
        
        <FeaturesSection />
        
        <NewsletterSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
