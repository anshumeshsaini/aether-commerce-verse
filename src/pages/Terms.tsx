
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Terms = () => {
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
              <Shield className="text-neon-purple" size={24} />
              <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            </div>
            
            <div className="space-y-6 text-muted-foreground">
              <p>Last Updated: April 4, 2025</p>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  Welcome to AetherStore. These Terms & Conditions govern your use of our website and services. 
                  By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Definitions</h2>
                <p>
                  "Services" refers to any products, content, features, technologies, or functions offered by AetherStore.
                  "User", "You", and "Your" refers to the individual accessing or using the Service.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Registration</h2>
                <p>
                  To access certain features of our Service, you may be required to register for an account.
                  You agree to provide accurate information and to keep this information updated.
                  You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. User Conduct</h2>
                <p>
                  You agree not to engage in any of the following prohibited activities:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Violating any laws or regulations</li>
                  <li>Infringing on the intellectual property rights of others</li>
                  <li>Attempting to interfere with the proper functioning of the Service</li>
                  <li>Engaging in any activity that disrupts or diminishes the quality of our Service</li>
                  <li>Attempting to gain unauthorized access to any portion of the Service</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Purchases and Payments</h2>
                <p>
                  When you make a purchase through our Service, you agree to provide accurate and current payment information.
                  All prices are subject to change without notice.
                  You are responsible for all charges incurred under your account.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Refunds and Returns</h2>
                <p>
                  Our refund and return policy is designed to ensure your satisfaction with our products.
                  For details on our return and refund process, please refer to our dedicated Returns Policy page.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our Service, including but not limited to text, graphics, logos, and software, are owned by AetherStore and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
                <p>
                  In no event shall AetherStore, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  We will provide notice of any changes by updating the "Last Updated" date at the top of these Terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at support@aetherstore.com.
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

export default Terms;
