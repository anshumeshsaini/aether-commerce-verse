
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Privacy = () => {
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 flex items-center gap-2">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Back to Home
            </Link>
          </div>
          
          <div className="glass rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-neon-purple" size={24} />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p>Last Updated: April 4, 2025</p>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  At AetherStore, we respect your privacy and are committed to protecting your personal data.
                  This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <p>
                  We collect several types of information from and about users of our website, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Personal identifiers (name, email address, shipping address, etc.)</li>
                  <li>Payment information</li>
                  <li>Purchase history and preferences</li>
                  <li>Device and browser information</li>
                  <li>Usage data (how you interact with our website)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Process orders and payments</li>
                  <li>Provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Personalize your shopping experience</li>
                  <li>Send marketing communications (if you've opted in)</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. AI and Personalization</h2>
                <p>
                  Our platform uses artificial intelligence to enhance your shopping experience. This includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Personalized product recommendations</li>
                  <li>Customized search results</li>
                  <li>Adaptive user interfaces based on your preferences</li>
                  <li>Predictive inventory management</li>
                </ul>
                <p className="mt-2">
                  You can adjust your AI personalization settings in your account preferences at any time.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Sharing and Disclosure</h2>
                <p>
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Payment processors and shipping partners (to fulfill orders)</li>
                  <li>Service providers who help us operate our business</li>
                  <li>Law enforcement agencies when required by law</li>
                </ul>
                <p className="mt-2">
                  We do not sell your personal information to third parties.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information.
                  However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal data, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The right to access your personal data</li>
                  <li>The right to correct inaccurate data</li>
                  <li>The right to delete your data</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="mt-2">
                  To exercise these rights, please contact us at privacy@aetherstore.com.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your browsing experience.
                  You can adjust your browser settings to refuse cookies, but this may limit your ability to use certain features.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Children's Privacy</h2>
                <p>
                  Our Service is not intended for individuals under the age of 16. 
                  We do not knowingly collect personal information from children.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to this Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. 
                  We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at privacy@aetherstore.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Privacy;
