
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Award, 
  Zap, 
  Globe, 
  Heart, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Reimagining Commerce with AI
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                AetherStore is not just a store. It's an experience. We're building the future of shopping where AI, personalization, and immersive interfaces come together.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 glass">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4">
                  We're on a mission to transform online shopping into something magical, personal, and effortlessly intuitive.
                </p>
                <p className="text-muted-foreground mb-6">
                  By harnessing the power of artificial intelligence, we're creating a platform that understands your preferences, anticipates your needs, and delivers an experience tailored just for you.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: <Star className="text-neon-purple" />, text: "Creating personalized shopping experiences" },
                    { icon: <Heart className="text-neon-pink" />, text: "Building technology that understands human emotion" },
                    { icon: <Globe className="text-neon-teal" />, text: "Making premium products accessible worldwide" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 bg-white/10 p-1 rounded">
                        {item.icon}
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                className="relative glass rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10M+", label: "Happy Customers" },
                { value: "50+", label: "Countries Served" },
                { value: "100k+", label: "Products Available" },
                { value: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 glass">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse group of innovators, creators, and visionaries working to redefine the future of e-commerce.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
                { name: "Samantha Chen", role: "AI Research Lead", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" },
                { name: "Marcus Kim", role: "Head of Product", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
                { name: "Elena Rodriguez", role: "UX Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                Join Our Journey
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Experience the future of shopping today. Discover products curated for you by our advanced AI and see why millions are switching to AetherStore.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Button 
                  className="rounded-full px-8 py-6 gap-2 bg-gradient-to-r from-neon-purple to-neon-teal text-lg"
                  asChild
                >
                  <Link to="/products">
                    Shop Now <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;
