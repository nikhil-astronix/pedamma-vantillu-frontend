import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Peddamma Pickles & Powders",
  description: "Authentic homemade pickles and powders e-commerce platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen">
        <CartProvider>
          <WishlistProvider>
            <Toaster position="top-right" />
            <Navbar />
            <div className="flex">
              <div className="flex-1 min-h-screen pt-20">{children}</div>
            </div>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
