
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { useToast } from "@/components/ui/use-toast";

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isExclusive?: boolean;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsFavorited(!isFavorited);
    toast({
      title: isFavorited ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isFavorited ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <motion.div
      className={cn(
        "group relative rounded-xl overflow-hidden glass transition-all duration-300",
        isHovered ? "scale-[1.02] shadow-xl" : "scale-100 shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/products/${product.id}`} className="block h-full">
        {/* Product Badges */}
        {product.isNew && <FloatingBadge variant="new">NEW</FloatingBadge>}
        {product.isOnSale && <FloatingBadge variant="sale">SALE</FloatingBadge>}
        {product.isExclusive && (
          <FloatingBadge variant="exclusive">EXCLUSIVE</FloatingBadge>
        )}

        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          
          {/* Product quick actions overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className={cn(
                "rounded-full", 
                isFavorited && "bg-rose-500 text-white hover:bg-rose-600"
              )}
              onClick={handleToggleFavorite}
            >
              <Heart size={18} className={isFavorited ? "fill-current" : ""} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full"
              asChild
            >
              <Link to={`/products/${product.id}`}>
                <Eye size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
              <p className="text-muted-foreground text-sm">{product.category}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                {product.oldPrice && (
                  <span className="text-muted-foreground line-through text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className={cn(
                  "font-semibold",
                  product.oldPrice ? "text-rose-500" : ""
                )}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center mt-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "w-3 h-3",
                        i < product.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-400"
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
