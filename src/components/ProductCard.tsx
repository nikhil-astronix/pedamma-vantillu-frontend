"use client";
import React, { useState } from "react";
import { FiHeart, FiPlus } from "react-icons/fi";
import { FaHeart, FaPepperHot } from "react-icons/fa";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types/Product";

type ProductCardProps = {
  product: Product;
};

const tagStyles: { [key: string]: string } = {
  "Best Seller": "bg-[#fff7f0] text-[#6e3419]",
  Popular: "bg-[#fff7f0] text-[#6e3419]",
  "Most Ordered": "bg-[#fff7f0] text-[#6e3419]",
};

const specialTags = ["Best Seller", "Popular", "Most Ordered"];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(250);

  const displayTags = product.tags.filter((tag) => specialTags.includes(tag));

  const weightOptions = [
    { value: 250, label: "250g" },
    { value: 500, label: "500g" },
    { value: 1000, label: "1kg" },
  ];

  const basePrice = product.price;
  const baseMrp = product.mrp;
  const pricePerG = basePrice / 250;
  const mrpPerG = baseMrp / 250;

  const calculatedPrice = pricePerG * selectedWeight * quantity;
  const calculatedMrp = mrpPerG * selectedWeight * quantity;
  const discount = Math.round(((baseMrp - basePrice) / baseMrp) * 100);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const itemPrice = pricePerG * selectedWeight;
    const itemMrp = mrpPerG * selectedWeight;
    addToCart({ id: product.id, name: product.name, price: itemPrice, mrp: itemMrp, image: product.image, quantity, weight: selectedWeight });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#e0b07a] border border-gray-200 rounded-2xl shadow-lg   flex flex-col gap-1 hover:scale-[1.03] hover:shadow-2xl transition-transform relative cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-xl " />
        <div className="flex items-center gap-2 absolute top-3 left-3">
          {displayTags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-semibold rounded-full shadow-lg ${tagStyles[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="p-4 pt-1 flex flex-col gap-2 justify-between">
        <h3 className="text-lg font-bold text-gray-900 mt-2">
          {product.name}
          {product.tags.includes("Spicy") && (
            <span className="relative group inline-block">
              <FaPepperHot className="inline text-red-500 ml-2" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Spicy
              </span>
            </span>
          )}
        </h3>
        <p className="text-gray-900 text-sm flex-1 ">{product.description}</p>
        <div className="flex flex-col gap-2">
        
        <div className="flex items-center gap-4 mt-auto">
          <label htmlFor={`weight-${product.id}`} className="sr-only">Weight</label>
          <select
            id={`weight-${product.id}`}
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            className="p-1 text-gray-900 border border-gray-300 rounded-md"
          >
            {weightOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className="px-2 flex items-center gap-2 border border-gray-300 rounded-md">
            <button onClick={(e) => {e.stopPropagation(); setQuantity(q => Math.max(1, q - 1))}} className=" text-gray-900   rounded-md">-</button>
            <span className="text-gray-900">{quantity}</span>
            <button onClick={(e) => {e.stopPropagation(); setQuantity(q => q + 1)}} className=" text-gray-900   rounded-md">+</button>
          </div>
          {product.mrp && <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{discount}% off</span>}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">₹{calculatedPrice.toFixed(2)}</span>
            {product.mrp && <span className="text-sm text-gray-500 line-through">₹{calculatedMrp.toFixed(2)}</span>}
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <button className="p-1 cursor-pointer rounded-full hover:bg-[#6e3419] text-gray-900 hover:text-white transition-colors" onClick={handleToggleWishlist}>
                {isWishlisted ? <FaHeart className="text-red-500" /> : <FiHeart />}
              </button>
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </span>
            </div>
            <div className="relative group">
              <button className="p-1 cursor-pointer rounded-full bg-gold hover:bg-[#6e3419] text-gray-900 hover:text-white transition-colors" onClick={handleAddToCart}>
                <FiPlus />
              </button>
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Add to Cart
              </span>
            </div>
          </div>
        </div>
        </div>
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setShowModal(false)}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }} className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative" onClick={e => e.stopPropagation()}>
            <div className="absolute top-3 right-3 group">
              <button className="text-2xl text-gray-900" onClick={() => setShowModal(false)}>&times;</button>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Close
              </span>
            </div>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
              {product.tags.includes("Spicy") && (
                <span className="relative group inline-block">
                  <FaPepperHot className="inline text-red-500 ml-2" />
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Spicy
                  </span>
                </span>
              )}
            </h2>
            <div className="flex items-center gap-2 mb-2">
              {displayTags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 text-xs font-semibold rounded-full shadow-lg ${tagStyles[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-900 mb-4">{product.description}</p>

            <div className="flex items-center gap-4 mb-4">
                <label htmlFor={`weight-modal-${product.id}`} className="sr-only">Weight</label>
                <select
                  id={`weight-modal-${product.id}`}
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(Number(e.target.value))}
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 text-gray-900 border border-gray-300 rounded-md"
                >
                  {weightOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="px-2 flex items-center gap-2 border border-gray-300 rounded-md">
                  <button onClick={(e) => {e.stopPropagation(); setQuantity(q => Math.max(1, q - 1))}} className=" text-gray-900   rounded-md">-</button>
                  <span className="text-gray-900">{quantity}</span>
                  <button onClick={(e) => {e.stopPropagation(); setQuantity(q => q + 1)}} className=" text-gray-900   rounded-md">+</button>
                </div>
                {product.mrp && <span className="bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{discount}% off</span>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">₹{calculatedPrice.toFixed(2)}</span>
                {product.mrp && <span className="text-sm text-gray-500 line-through">₹{calculatedMrp.toFixed(2)}</span>}
              </div>
              <div className="flex gap-2">
                <div className="relative group">
                  <button className="p-2 rounded-full bg-secondary hover:bg-[#6e3419] text-gray-900 hover:text-background transition-colors" onClick={handleToggleWishlist}>
                    {isWishlisted ? <FaHeart className="text-red-500" /> : <FiHeart />}
                  </button>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  </span>
                </div>
                <div className="relative group">
                  <button className="p-2 rounded-full bg-gold hover:bg-[#6e3419] text-gray-900 hover:text-primary transition-colors" onClick={handleAddToCart}>
                    <FiPlus />
                  </button>
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Add to Cart
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
