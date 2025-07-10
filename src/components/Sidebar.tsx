"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = ["Best Seller", "Popular", "Most Ordered", "All"];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className={`bg-[#f7ede2]/90 shadow-lg h-[calc(100vh-64px)] mt-16 w-64 max-w-full fixed md:static z-20 transition-all duration-300 border-r border-[#b08968] ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#b08968] md:hidden bg-[#f7ede2]">
        <span className="font-semibold text-[#7f5539]">Categories</span>
        <button onClick={() => setOpen(!open)} className="text-[#a47149] text-xl"><FiChevronDown /></button>
      </div>
      <div className={`flex flex-col gap-2 p-4 ${!open && "hidden md:flex"}`}>
        {categories.map((cat) => (
          <a key={cat} href="#" className="text-[#7f5539] py-2 px-3 rounded hover:bg-[#ddb892] hover:text-white font-medium transition-colors duration-200">
            {cat}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar; 