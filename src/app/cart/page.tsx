"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <main className="p-6 mt-8 mx-auto  bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Cart</h1>
        <Link href="/shop" legacyBehavior>
          <a className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Continue shopping
          </a>
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-gray-900 text-lg text-center">
          Your cart is empty.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);
              return (
                <div key={`${item.id}-${item.weight}`} className="flex items-center bg-white p-4 rounded-xl shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-grow ml-4">
                    <h2 className="font-bold text-lg text-gray-900">{item.name}</h2>
                    <p className="text-sm text-gray-500">
                      <span className="line-through mr-2">
                        ₹{item.mrp.toFixed(2)}
                      </span>
                      <span className="text-red-600 font-semibold">
                        ₹{item.price.toFixed(2)}
                      </span>
                      <span className="ml-2 bg-red-200 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{discount}% off</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Weight: {item.weight} gms
                    </p>
                   
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center border rounded-md text-gray-900">
                      <button onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)} disabled={item.quantity <= 1} className="p-2 disabled:opacity-50"><FiMinus size={16}/></button>
                      <span className="px-4 py-1 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)} className="p-2"><FiPlus size={16}/></button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.weight)}
                      className="text-gray-500 hover:text-red-600 p-2"
                    >
                      <FiTrash2 size={20} />
                    </button>
                     <div className="text-right w-24">
                        <p className="text-xs text-gray-500 line-through">₹{(item.mrp * item.quantity).toFixed(2)}</p>
                        <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-xs text-green-600 font-semibold">You save ₹{((item.mrp - item.price) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
             <button onClick={clearCart} className="bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 font-semibold mt-4">Clear Cart</button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-6 space-y-4">
               <div className="border border-dashed border-gray-300 rounded-lg p-3 text-center">
                 <p className="font-semibold text-gray-800">Save 15% on your first purchase with code <span className="text-green-600">WELCOME</span></p>
               </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
               <div className="bg-gray-100 rounded-lg p-3 text-center text-sm font-medium text-green-700">
                  You qualify for FREE shipping
               </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I accept Terms and conditions
                </label>
              </div>
              <Link href="/checkout">
                <a className={`w-full block text-center bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors ${!acceptedTerms ? 'bg-gray-300 hover:bg-gray-300 cursor-not-allowed' : ''}`}>
                  Check out
                </a>
              </Link>
               <p className="text-xs text-center text-gray-500">Taxes and shipping calculated at checkout</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
