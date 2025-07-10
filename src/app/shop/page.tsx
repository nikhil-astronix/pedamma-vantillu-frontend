"use client";
import React, { useState } from "react";
import CategoryCarousel from "@/components/CategoryCarousel";
import ProductGrid from "@/components/ProductGrid";
import { categories, products, subCategories } from "@/data/dummyData";
import FilterDropdown from "@/components/FilterDropdown";
import { useSearchParams } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory("All"); // Reset sub-category filter
  };

  const handleSelectSubCategory = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
  };

  const handleSortChange = (sort: string) => {
    setSortOption(sort);
  };

  const filteredByCategory =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const filteredBySubCategory =
    selectedSubCategory === "All"
      ? filteredByCategory
      : filteredByCategory.filter(
          (product) => product.subCategory === selectedSubCategory
        );
        
  const sortedProducts = [...filteredBySubCategory].sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.price - b.price;
    }
    if (sortOption === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <main className="min-h-screen bg-white pb-12 pt-8">
      <section className="w-full mx-auto w-full mb-4 mt-8 px-8">
        <CategoryCarousel
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      </section>
      <section className="w-full mx-auto w-full px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-gray-900 font-bold">{`${selectedCategory} Products`}</h2>
          <FilterDropdown
            subCategories={subCategories}
            onSelectFilter={handleSelectSubCategory}
            onSortChange={handleSortChange}
          />
        </div>
        <ProductGrid
          products={sortedProducts}
          title=""
        />
      </section>
    </main>
  );
}
