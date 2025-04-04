
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { Product } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

// Example AI-based recommendation categories
const aiCategories = [
  { id: 'trending', name: 'Trending Now', description: 'Based on current market trends' },
  { id: 'personalized', name: 'Just For You', description: 'Personalized to your taste' },
  { id: 'seasonal', name: 'Seasonal Picks', description: 'Perfect for this time of year' },
  { id: 'complementary', name: 'Complete Your Style', description: 'Goes well with your previous purchases' },
];

// Mock function to simulate fetching recommendations
const getRecommendedProducts = (category: string): Product[] => {
  // This would be replaced with actual API calls to your recommendation system
  return Array(4).fill(null).map((_, i) => ({
    id: `${category}-${i}`,
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} Product ${i + 1}`,
    price: 99.99 + (i * 10),
    oldPrice: i % 2 === 0 ? 129.99 + (i * 10) : undefined,
    image: `https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D${category}-${i}`,
    category: category.charAt(0).toUpperCase() + category.slice(1),
    isNew: i === 0,
    isOnSale: i === 1,
    isExclusive: i === 2,
    rating: 3 + (i % 3)
  }));
};

const AIRecommendations: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(aiCategories[0].id);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    if (activeCategory === categoryId) return;
    
    setLoading(true);
    setActiveCategory(categoryId);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setRefreshing(false);
    }, 1200);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-neon-purple" size={24} />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent">
              AI-Powered Recommendations
            </h2>
          </div>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Our AI analyzes your preferences, browsing history, and current trends 
            to create personalized product suggestions just for you.
          </p>
        </motion.div>

        {/* AI Category Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {aiCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * aiCategories.indexOf(category) }}
              >
                <Button
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={cn(
                    "rounded-full px-6 py-6 h-auto flex flex-col gap-1 min-w-[140px]",
                    activeCategory === category.id 
                      ? "bg-gradient-to-br from-neon-purple to-neon-teal border-transparent" 
                      : "border-white/20 hover:border-neon-purple/50"
                  )}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs opacity-80">{category.description}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommendation Controls */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-semibold">
            {aiCategories.find(cat => cat.id === activeCategory)?.name}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full border-white/20">
                <ThumbsUp size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/20">
                <ThumbsDown size={18} />
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              className="rounded-full border-white/20 gap-2"
              disabled={refreshing}
              onClick={handleRefresh}
            >
              <RefreshCw size={18} className={cn(refreshing && "animate-spin")} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid 
          products={getRecommendedProducts(activeCategory)} 
          loading={loading}
          columns={4}
        />
      </div>
    </section>
  );
};

export default AIRecommendations;
