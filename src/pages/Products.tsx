
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { ProductGrid } from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Mic, SlidersHorizontal, FilterX } from 'lucide-react';
import dummyProducts from '@/data/dummyProducts';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Electronics',
  'Wearables',
  'Audio',
  'Fitness',
  'Footwear',
  'Home',
  'Smart Home',
  'Decor'
];

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading products
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter products based on category, price range, and search query
    let filtered = [...dummyProducts];
    
    if (activeCategory !== 'All') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [activeCategory, priceRange, searchQuery]);

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setPriceRange([0, 500]);
    setSearchQuery('');
  };

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
            <p className="text-muted-foreground">
              Discover our curated collection of futuristic products
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-10 rounded-lg"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mic size={18} />
                </button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={toggleFilters}
                >
                  <SlidersHorizontal size={18} />
                  Filters
                </Button>
                
                {(activeCategory !== 'All' || priceRange[0] > 0 || priceRange[1] < 500) && (
                  <Button 
                    variant="outline"
                    className="gap-2"
                    onClick={clearFilters}
                  >
                    <FilterX size={18} />
                    Clear
                  </Button>
                )}
              </div>
            </div>
            
            {/* Filter panel */}
            <motion.div 
              className={cn(
                "glass rounded-lg p-5",
                isFiltersVisible ? "block" : "hidden"
              )}
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isFiltersVisible ? 1 : 0,
                height: isFiltersVisible ? 'auto' : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "outline"}
                        className={cn(
                          "text-sm",
                          activeCategory === category 
                            ? "bg-neon-purple hover:bg-neon-purple/90" 
                            : "border-white/20"
                        )}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider 
                      defaultValue={[0, 500]} 
                      max={500} 
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Results info */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <select className="bg-background border border-white/20 rounded-md px-2 py-1 text-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
        
        <ProductGrid 
          products={filteredProducts}
          loading={isLoading}
        />
        
        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Products;
