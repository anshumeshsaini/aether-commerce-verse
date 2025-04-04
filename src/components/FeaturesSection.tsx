
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mic, Sparkles, Image, ShoppingBag, Eye360, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <Sparkles size={24} className="text-neon-purple" />,
    title: "AI Personal Shopper",
    description: "Get personalized recommendations based on your style, mood, and past purchases."
  },
  {
    icon: <Mic size={24} className="text-neon-teal" />,
    title: "Voice Search",
    description: "Simply speak to search for products naturally and conversationally."
  },
  {
    icon: <Image size={24} className="text-neon-pink" />,
    title: "Visual Search",
    description: "Upload an image to find similar or complementary products instantly."
  },
  {
    icon: <Eye360 size={24} className="text-neon-purple" />,
    title: "AR Preview",
    description: "See how products look in your space before purchasing."
  },
  {
    icon: <ShoppingBag size={24} className="text-neon-teal" />,
    title: "Magic Cart",
    description: "Let AI fill your cart based on your budget and preferences."
  },
  {
    icon: <MessageCircle size={24} className="text-neon-pink" />,
    title: "AI Chat Assistance",
    description: "Get real-time help and detailed product information from our AI."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-neon-teal" size={24} />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-neon-teal to-neon-pink bg-clip-text text-transparent">
              Futuristic Shopping Features
            </h2>
          </div>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Experience shopping like never before with our cutting-edge AI-powered features
            that make every interaction magical.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-neon-purple/20 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full glass group-hover:bg-neon-purple/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
