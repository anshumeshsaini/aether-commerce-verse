
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const collections = [
  {
    id: 'summer-2023',
    name: 'Summer 2023',
    description: 'Bright colors and breathable fabrics for the hottest days.',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26',
    products: 24
  },
  {
    id: 'tech-essentials',
    name: 'Tech Essentials',
    description: 'Must-have gadgets for the modern lifestyle.',
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6',
    products: 36
  },
  {
    id: 'minimalist-home',
    name: 'Minimalist Home',
    description: 'Clean, simple designs for a tranquil living space.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f',
    products: 18
  },
  {
    id: 'fitness-gear',
    name: 'Fitness Gear',
    description: 'Equipment and apparel for your workout routine.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    products: 29
  },
  {
    id: 'smart-wearables',
    name: 'Smart Wearables',
    description: 'Devices that enhance your daily activities.',
    image: 'https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhcmFibGUlMjB0ZWNofGVufDB8fDB8fHww',
    products: 15
  },
  {
    id: 'audio-enthusiasts',
    name: 'Audio Enthusiasts',
    description: 'Premium sound equipment for the perfect listening experience.',
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b',
    products: 22
  }
];

const Collections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent">
              Collections
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections of carefully selected products to match your lifestyle and preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="glass rounded-xl overflow-hidden h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                    animate={{ 
                      scale: hoveredIndex === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0.4 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 0.7 : 0.4
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs text-white/80 font-medium">
                      {collection.products} Products
                    </p>
                  </div>
                </div>
                
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{collection.name}</h2>
                  <p className="text-muted-foreground text-sm mb-4">{collection.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full gap-2 hover:bg-neon-purple/10 hover:text-neon-purple"
                    asChild
                  >
                    <Link to={`/products?collection=${collection.id}`}>
                      Explore Collection <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Special Collection */}
          <motion.div
            className="mt-16 glass rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="bg-neon-purple/20 text-neon-purple inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Collection
                </div>
                <h2 className="text-3xl font-bold mb-4">Limited Edition</h2>
                <p className="text-muted-foreground mb-6">
                  Exclusive products curated by our AI for a limited time only. 
                  These AI-selected items are perfectly matched to current trends and limited in availability.
                </p>
                <div className="flex gap-4">
                  <Button 
                    className="rounded-full px-8 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal"
                    asChild
                  >
                    <Link to="/products?collection=limited-edition">
                      Shop Now <ShoppingBag size={16} />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-full"
                    asChild
                  >
                    <Link to="/products?collection=limited-edition">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-auto lg:aspect-auto h-full min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a23cba" 
                  alt="Limited Edition Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Collections;
