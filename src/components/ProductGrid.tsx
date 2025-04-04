
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProductCard, Product } from "@/components/ProductCard";
import dummyProducts from "@/data/dummyProducts";

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products?: Product[];
  loading?: boolean;
  columns?: number;
  limit?: number;
}

export function ProductGrid({
  title,
  subtitle,
  products,
  loading = false,
  columns = 4,
  limit,
}: ProductGridProps) {
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  useEffect(() => {
    // If products are provided, use them; otherwise, use dummy data
    let productsToDisplay = products || dummyProducts;
    
    // Apply limit if provided
    if (limit && limit > 0) {
      productsToDisplay = productsToDisplay.slice(0, limit);
    }
    
    setDisplayProducts(productsToDisplay);
  }, [products, limit]);

  // Grid columns class based on provided columns prop
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  // Loading skeleton
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        {title && (
          <div className="mb-8 text-center">
            <div className="h-8 bg-muted rounded animate-pulse w-1/4 mx-auto mb-2"></div>
            {subtitle && <div className="h-4 bg-muted rounded animate-pulse w-2/4 mx-auto"></div>}
          </div>
        )}
        <div className={`grid ${gridColsClass} gap-6`}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="rounded-xl glass overflow-hidden shadow-md animate-pulse"
              >
                <div className="aspect-square bg-muted"></div>
                <div className="p-4">
                  <div className="h-5 bg-muted rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {title && (
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-neon-purple to-neon-teal bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
      )}

      <div className={`grid ${gridColsClass} gap-6`}>
        {displayProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
