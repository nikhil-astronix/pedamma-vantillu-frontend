import React from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Patel",
    rating: 5,
    text: "Absolutely loved the pickles! The flavors are authentic and remind me of home. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    text: "Great taste and quality. The packaging was beautiful and delivery was quick!",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    text: "The best pickles I've ever had. The spice level is perfect and the freshness is unmatched.",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 transition-colors duration-300 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
  </svg>
);

const HomePage = () => {
  return (
    <div className="min-h-screen w-full  mx-auto px-4 ">
      {/* Hero Section as Card */}
      <section className="flex flex-col w-full mx-auto md:flex-row items-center justify-between   py-24 gap-10">
        <div className="w-full rounded-3xl shadow-2xl bg-[#e0b07a] flex flex-col md:flex-row items-center p-10">
          {/* Left: Text & Button */}
          <div className="flex-1 flex flex-col gap-6 animate-fade-in-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
              Authentic Homemade Flavors, Delivered Fresh
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium mt-2 mb-4">
              Experience authentic Telangana flavors, crafted with love and tradition
            </p>
            <Link href="/shop">
              <button className="group w-fit relative inline-flex items-center px-7 py-3 bg-white text-[#e0b07a] font-bold rounded-full shadow-lg text-lg transition-transform hover:scale-105 focus:outline-none">
                Shop Now
                <span className="ml-3 flex items-center justify-center w-7 h-7 rounded-full bg-[#e0b07a] group-hover:translate-x-2 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
          {/* Right: Image Placeholder */}
          <div className="flex-1 flex items-center justify-end animate-fade-in-right">
            <div className="w-[600px] h-[400px] bg-white/40 rounded-3xl flex items-center justify-center shadow-xl border-4 border-white/60 overflow-hidden relative">
              <Image 
                src="/product-images/allImages/home-main-image.jpg"
                alt="Home Hero"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-8 w-full mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {/* Orders Delivered */}
          <div className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center justify-center animate-fade-in-up">
            <span className="text-3xl font-extrabold text-gray-900 mb-2">5000+</span>
            <span className="text-gray-500 text-lg font-medium">Orders Delivered</span>
          </div>
          {/* States Delivering */}
          <div className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-3xl font-extrabold text-gray-900 mb-2">10+</span>
            <span className="text-gray-500 text-lg font-medium">states delivering</span>
          </div>
          {/* Positive Reviews */}
          <div className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-3xl font-extrabold text-gray-900 mb-2">3000+</span>
            <span className="text-gray-500 text-lg font-medium">Positive Reviews</span>
          </div>
          {/* States Serving */}
          <div className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-3xl font-extrabold text-gray-900 mb-2">12+</span>
            <span className="text-gray-500 text-lg font-medium">States Serving</span>
          </div>
          {/* Reorders */}
          <div className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-3xl font-extrabold text-gray-900 mb-2">70%</span>
            <span className="text-gray-500 text-lg font-medium">Reorders</span>
          </div>
        </div>
      </section>

      {/* Browse Collection Section */}
      <section className="py-10 w-full mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e0b07a] text-center mb-8 animate-fade-in-up">Browse Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Veg Pickles */}
          <Link href="/shop?category=Veg%20Pickles" className="group block rounded-2xl shadow-xl bg-white hover:shadow-2xl transition overflow-hidden border-2 border-[#e0b07a]/30 hover:border-[#e0b07a]">
            <div className="relative w-full h-48">
              <Image src="/product-images/allImages/Lemon-Pickle.jpg" alt="Veg Pickles" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 text-center">
              <span className="text-xl font-bold text-[#6e3419]">Veg Pickles</span>
            </div>
          </Link>
          {/* Non-Veg Pickles */}
          <Link href="/shop?category=Non-Veg%20Pickles" className="group block rounded-2xl shadow-xl bg-white hover:shadow-2xl transition overflow-hidden border-2 border-[#e0b07a]/30 hover:border-[#e0b07a]">
            <div className="relative w-full h-48">
              <Image src="/product-images/chicken-pickle/classicChickenPickle.webp" alt="Non-Veg Pickles" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 text-center">
              <span className="text-xl font-bold text-[#6e3419]">Non-Veg Pickles</span>
            </div>
          </Link>
          {/* Powders */}
          <Link href="/shop?category=Powders" className="group block rounded-2xl shadow-xl bg-white hover:shadow-2xl transition overflow-hidden border-2 border-[#e0b07a]/30 hover:border-[#e0b07a]">
            <div className="relative w-full h-48">
              <Image src="/product-images/powders/curry-leaves-powder.jpg" alt="Powders" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 text-center">
              <span className="text-xl font-bold text-[#6e3419]">Powders</span>
            </div>
          </Link>
          {/* Premix */}
          <Link href="/shop?category=Premix" className="group block rounded-2xl shadow-xl bg-white hover:shadow-2xl transition overflow-hidden border-2 border-[#e0b07a]/30 hover:border-[#e0b07a]">
            <div className="relative w-full h-48">
              <Image src="/product-images/pre-mix/SAMBAR-MIX-POWDER.webp" alt="Premix" fill className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-4 text-center">
              <span className="text-xl font-bold text-[#6e3419]">Premix</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 w-full mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up">
          {/* No Preservatives */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8 border-r border-b md:border-b-0 md:border-r last:border-r-0">
            <span className="mb-4">
              {/* Test tube with drop SVG */}
              <svg width="64" height="64" fill="none" viewBox="0 0 64 64" className="mx-auto"><circle cx="32" cy="32" r="28" stroke="#222" strokeWidth="2"/><g stroke="#222" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="18" x2="46" y2="46"/><rect x="26" y="14" width="6" height="24" rx="3"/><ellipse cx="29" cy="40" rx="3" ry="5"/><path d="M32 44c0 2 2 4 2 6a2 2 0 1 1-4 0c0-2 2-4 2-6z"/></g></svg>
            </span>
            <span className="font-extrabold text-lg mt-2 mb-1 tracking-wide text-gray-900">No Preservatives</span>
          </div>
          {/* 100% Halal Meat */}
          <div className="flex flex-col items-center justify-center bg-gray-100 p-8 border-r border-b md:border-b-0 md:border-r last:border-r-0">
            <span className="mb-4">
              {/* Halal Arabic SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto"><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="32" fontFamily="'Amiri', serif" fill="#111">حلال</text></svg>
            </span>
            <span className="font-extrabold text-lg mt-2 mb-1 tracking-wide text-gray-900">100% Halal Meat</span>
          </div>
          {/* Re-Usable Jars */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-8 border-r border-b md:border-b-0 md:border-r last:border-r-0">
            <span className="mb-4">
              {/* Jar with recycling arrows SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
                <rect x="20" y="12" width="24" height="40" rx="8" stroke="#222" strokeWidth="2" fill="#fff"/>
                <rect x="26" y="8" width="12" height="8" rx="3" stroke="#222" strokeWidth="2" fill="#fff"/>
                <g>
                  <path d="M32 44c-4 0-7-3-7-7" stroke="#4CAF50" strokeWidth="2" fill="none"/>
                  <polygon points="23,37 25,37 24,39" fill="#4CAF50"/>
                  <path d="M32 44c4 0 7-3 7-7" stroke="#4CAF50" strokeWidth="2" fill="none"/>
                  <polygon points="41,37 39,37 40,35" fill="#4CAF50"/>
                </g>
                <circle cx="32" cy="37" r="6" stroke="#4CAF50" strokeWidth="1.5" fill="none"/>
              </svg>
            </span>
            <span className="font-extrabold text-lg mt-2 mb-1 tracking-wide text-gray-900">Re-Usable Jars</span>
          </div>
          {/* Free Delivery */}
          <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
            <span className="mb-4">
              {/* Truck with packages SVG */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
                {/* Truck body */}
                <rect x="14" y="32" width="28" height="12" rx="3" fill="#fff" stroke="#222" strokeWidth="2"/>
                {/* Truck cabin */}
                <rect x="42" y="36" width="8" height="8" rx="2" fill="#fff" stroke="#222" strokeWidth="2"/>
                {/* Wheels */}
                <circle cx="22" cy="48" r="3" fill="#fff" stroke="#222" strokeWidth="2"/>
                <circle cx="46" cy="48" r="3" fill="#fff" stroke="#222" strokeWidth="2"/>
                {/* Packages */}
                <rect x="18" y="28" width="6" height="6" rx="1" fill="#FFD600" stroke="#222" strokeWidth="1.2"/>
                <rect x="26" y="26" width="6" height="8" rx="1" fill="#FFA000" stroke="#222" strokeWidth="1.2"/>
                <rect x="34" y="30" width="6" height="4" rx="1" fill="#FFECB3" stroke="#222" strokeWidth="1.2"/>
                {/* Motion lines */}
                <path d="M10 44h4" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 48h2" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="font-extrabold text-lg mt-2 mb-1 tracking-wide text-gray-900">Free Delivery</span>
          </div>
        </div>
      </section>

      {/* Testimonial Section as Card Layout */}
      <section className="py-16  w-full mx-auto ">
        <div className="w-full rounded-3xl shadow-2xl bg-white/90 p-10 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e0b07a] text-center mb-10 animate-fade-in-up">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center transform transition duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < t.rating} />
                  ))}
                </div>
                <p className="text-lg text-[#e0b07a] font-medium mb-4 text-center">"{t.text}"</p>
                <span className="text-[#b07a3c] font-bold text-base">- {t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-right { animation: fade-in-right 1s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
};

export default HomePage; 