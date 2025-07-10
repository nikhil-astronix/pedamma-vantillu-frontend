import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-[500px] bg-[#e0b07a] border-2 border-[#e0b07a] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden mt-20 animate-fade-in-up">
      {/* Left Side - Image and Info */}
      <div className="relative md:w-1/2 w-full flex flex-col justify-between p-8 " style={{ minHeight: 500 }}>
        <Image
          src="/product-images/allImages/home-main-image.jpg"
          alt="Contact Us Background"
          fill
          style={{ objectFit: 'cover', zIndex: 0 }}
          className="!relative !w-full !h-full !object-cover !z-0 rounded-xl"
        />
        <div className="absolute inset-0  z-0" />
        <div className="relative w-full z-10 text-white flex flex-col h-full justify-between animate-fade-in-left">
          <div className=' rounded-xl p-4 mt-2' >
            <h2 className="text-4xl font-extrabold mb-4 font-[Higuen Elegant Serif] tracking-wide">Contact Us</h2>
            <p className="mb-6 text-lg">We'd love to hear from you. Feel free to reach out to us!</p>
            <div className="space-y-2 text-base">
              <div>Monday - Thursday: 10a - 7p EST</div>
              <div>Friday: 10a - 6p EST</div>
              <div>Saturday - Sunday: 1p - 6p EST</div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side - Form */}
      <div className=" w-full px-8 flex items-center justify-center p-8 bg-[#fff7ec] animate-fade-in-right">
        <form className="w-full  space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="name" className="text-xs font-semibold mb-1 ml-1 text-[#e0b07a]">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e0b07a] bg-white"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="email" className="text-xs font-semibold mb-1 ml-1 text-[#e0b07a]">Email *</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                defaultValue=""
                className="p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e0b07a] bg-white"
                required
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e0b07a] bg-white"
          />
          <textarea
            placeholder="Comment"
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 transition-shadow shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#e0b07a] bg-white"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#e0b07a] text-white font-bold py-2 px-8 rounded-xl shadow-md hover:bg-[#b07a3c] transition-all hover:scale-105"
          >
            Send
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs; 