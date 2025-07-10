import React from "react";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/dummyData";

export default function ProductsPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">All Products</h1>
      {/* Filter placeholder */}
      <div className="mb-6 flex gap-4 items-center">
        <span className="text-secondary font-medium">Filter by:</span>
        <select className="border border-primary rounded px-3 py-1 text-primary">
          <option>All</option>
          <option>Best Seller</option>
          <option>Popular</option>
          <option>Most Ordered</option>
        </select>
      </div>
      <ProductGrid products={products} />
    </main>
  );
}
