import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#6e3419]  w-full mx-auto text-[#f5e9da] pt-6 pb-6 px-8  ">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
        {/* About/Brand Section */}
        <div className="flex-1 min-w-[220px] flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/round-logo.png" alt="Peddamma Vantillu Logo" width={250} height={200} className="rounded-lg bg-[#e0b07a] p-1" />
          </div>
         
        
        </div>
        {/* Contact/Shop Info */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#e0b07a] mb-2">Contact Us</h3>
          <span className="text-sm">Find a location nearest you.</span>
          <span className="font-semibold text-base mt-1">See Our Stores</span>
          <span className="text-sm">+91 73306 06406</span>
          <span className="font-semibold text-sm">peddammavantillu@gmail.com</span>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[180px] flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#e0b07a] mb-2">Quick Links</h3>
          <Link href="/privacy-policy" className="hover:underline text-sm">Privacy Policy</Link>
          <Link href="/return-refund-policy" className="hover:underline text-sm">Return & Refund Policy</Link>
          <Link href="/shipping-policy" className="hover:underline text-sm">Shipping Policy</Link>
          <Link href="/terms-of-service" className="hover:underline text-sm">Terms of Service</Link>
        </div>
      </div>
      <div className="w-full mx-auto mt-10 border-t border-[#e0b07a]/30 pt-4 text-center text-xs text-[#e0b07a]">
        © {new Date().getFullYear()} Peddamma Vantillu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 