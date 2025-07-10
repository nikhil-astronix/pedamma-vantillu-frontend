"use client";
import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

type ProductGridProps = {
  products: Product[];
  title?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <section>
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid; 