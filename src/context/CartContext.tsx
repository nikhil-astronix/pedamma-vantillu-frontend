"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  mrp: number;
  image: string;
  quantity: number;
  weight: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, weight: number) => void;
  updateQuantity: (id: number, weight: number, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id && i.weight === item.weight);
      if (found) {
        return prev.map((i) =>
          i.id === item.id && i.weight === item.weight ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number, weight: number) => {
    setCart((prev) => prev.filter((i) => !(i.id === id && i.weight === weight)));
  };

  const updateQuantity = (id: number, weight: number, quantity: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id && i.weight === weight ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
