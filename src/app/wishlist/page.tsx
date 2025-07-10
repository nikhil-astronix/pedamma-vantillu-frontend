"use client";
import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <main className="p-6 mt-8 mx-auto w-full text-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-gray-900 text-lg text-center">
          Your wishlist is empty.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full mb-6">
            <thead>
              <tr className="text-left text-gray-900">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-3 flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg" />
                    <span className="font-semibold text-gray-900">{item.name}</span>
                  </td>
                  <td className="py-3">₹{item.price}</td>
                  <td className="py-3">
                    <button onClick={() => addToCart({ ...item, quantity: 1, weight: 250 })} className="text-gray-900 hover:text-gray-900 p-2" title="Add to Cart"><FiShoppingCart /></button>
                  </td>
                  <td className="py-3">
                    <button onClick={() => removeFromWishlist(item.id)} className="text-red-600 hover:text-red-800 p-2"><FiTrash2 /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <button onClick={clearWishlist} className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 font-semibold">Clear Wishlist</button>
          </div>
        </div>
      )}
    </main>
  );
}
