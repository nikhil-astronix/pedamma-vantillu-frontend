"use client";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";

interface FilterDropdownProps {
  subCategories: string[];
  onSelectFilter: (filter: string) => void;
  onSortChange: (sort: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  subCategories,
  onSelectFilter,
  onSortChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiFilter className="mr-2 h-5 w-5" />
          Filter
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="px-4 py-2 text-sm text-gray-700 font-bold">Filter by Sub-category</div>
            <button
                onClick={() => { onSelectFilter("All"); setIsOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                All
            </button>
            {subCategories.map((subCategory) => (
              <button
                key={subCategory}
                onClick={() => { onSelectFilter(subCategory); setIsOpen(false); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {subCategory}
              </button>
            ))}
            <div className="border-t border-gray-200 my-1"></div>
            <div className="px-4 py-2 text-sm text-gray-700 font-bold">Sort by Price</div>
            <button
              onClick={() => { onSortChange("low-to-high"); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => { onSortChange("high-to-low"); setIsOpen(false); }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Price: High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown; 