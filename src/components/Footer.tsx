
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and Social */}
          <div className="space-y-6">
            <div>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-teal to-neon-pink bg-clip-text text-transparent">
                AetherStore
              </Link>
              <p className="mt-2 text-sm text-foreground/70 max-w-xs">
                This isn't just a store. It's an experience. It learns you, feels you, grows with you — and surprises you.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>All Products</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Collections</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>New Arrivals</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Sale</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Careers</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Press</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Blog</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Help Center</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Contact Us</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>Shipping & Returns</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 group">
                  <span>FAQ</span>
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} AetherStore. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/60">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
