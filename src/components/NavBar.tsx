
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X, 
  Mic 
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleVoiceSearch = () => {
    // Toggle voice listening state
    setIsListening(!isListening);
    
    // In a real implementation, this would use the Web Speech API
    if (!isListening) {
      // Simulating voice recognition - would be replaced with actual implementation
      setTimeout(() => {
        console.log("Voice search activated");
        setIsListening(false);
      }, 3000);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-purple via-neon-teal to-neon-pink bg-clip-text text-transparent">
            AetherStore
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn("hidden md:flex items-center space-x-8")}>
            <Link 
              to="/products" 
              className={cn(
                "transition-colors",
                isActive('/products') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className={cn(
                "transition-colors",
                isActive('/collections') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "transition-colors",
                isActive('/about') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              About
            </Link>
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center space-x-1 md:space-x-4">
            <div className={cn(
              "transition-all duration-300 overflow-hidden flex items-center",
              isSearchOpen 
                ? "w-full md:w-64" 
                : "w-0"
            )}>
              <div className="relative w-full flex items-center">
                <Input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full rounded-full pr-10"
                />
                <button 
                  onClick={handleVoiceSearch}
                  className={cn(
                    "absolute right-3 transition-colors", 
                    isListening ? "text-neon-purple animate-pulse" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Mic size={18} />
                </button>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSearch}
              className="text-foreground/80 hover:text-foreground hover:bg-white/10"
            >
              <Search size={20} />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "text-foreground/80 hover:text-foreground hover:bg-white/10",
                isActive('/wishlist') && "text-foreground bg-white/5"
              )}
              asChild
            >
              <Link to="/wishlist">
                <Heart size={20} />
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "text-foreground/80 hover:text-foreground hover:bg-white/10",
                isActive('/cart') && "text-foreground bg-white/5" 
              )}
              asChild
            >
              <Link to="/cart">
                <ShoppingCart size={20} />
              </Link>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "text-foreground/80 hover:text-foreground hover:bg-white/10",
                isActive('/account') && "text-foreground bg-white/5"
              )}
              asChild
            >
              <Link to="/account">
                <User size={20} />
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden text-foreground/80 hover:text-foreground hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-60" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-4 pt-4 pb-2">
            <Link 
              to="/products" 
              className={cn(
                "transition-colors py-2",
                isActive('/products') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={closeMenu}
            >
              Shop
            </Link>
            <Link 
              to="/collections" 
              className={cn(
                "transition-colors py-2",
                isActive('/collections') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={closeMenu}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "transition-colors py-2",
                isActive('/about') 
                  ? "text-foreground font-medium" 
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={closeMenu}
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
