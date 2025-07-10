"use client";
import React from "react";
import { motion } from "framer-motion";

type CategoryCarouselProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap items-center w-full gap-4 overflow-x-auto scrollbar-hide py-2 px-1"
    >
      {categories.map((cat) => (
        <div
          key={cat}
          className={`min-w-max px-6 py-2 rounded-lg font-semibold shadow transition-colors cursor-pointer text-lg border ${
            selectedCategory === cat
              ? "bg-[#6e3419] text-white border-[#6e3419]"
              : "text-[#6e3419] border-[#6e3419] hover:bg-[#6e3419] hover:text-white"
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </div>
      ))}
    </motion.div>
  );
};

export default CategoryCarousel; 