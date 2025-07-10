"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdOutlineRefresh } from "react-icons/md";
import WhyChooseSection from "@/components/WhyChooseSection";
import FeatureCardsSection from "@/components/FeatureCardsSection";
import ImageCarousel from "@/components/ui/ImageCarousel";

const story = `This passion project is our way of celebrating our Peddamma's love for feeding people with authentic, delicious food — something she continues to do with so much joy. After retiring from a long and fulfilling career as a teacher, she found a new way to nurture others — this time, through food.\n\nHer kitchen has always been filled with flavour, warmth, and joy — and now, those cherished recipes are being shared beyond the family table. We're proud to bring you the same bold Telangana flavours — made fresh, in small batches, and with love.`;

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[primary] flex flex-col items-center pt-28 pb-12 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full  bg-[#fff7f0]  flex flex-col md:flex-row items-center  rounded-2xl shadow-2xl overflow-hidden mb-12"
      >
        <div className="md:w-1/2 w-full h-72 md:h-[400px] relative  ">
          <Image
            src="/product-images/allImages/about-hero.png"
            alt="Peddamma Story Hero"
            fill
            className="object-cover object-center ml-2 rounded-lg"
            priority
          />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center items-start text-[#6e3419]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#6e3419] font-[Higuen Elegant Serif] tracking-wide animate-fadeInUp">Our Story</h1>
          <p className="text-lg text-[#6e3419] leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {story.split("\n").map((para, idx) => (
              <span key={idx} className="block mb-4">{para}</span>
            ))}
          </p>
        </div>
      </motion.div>

     

     
       {/* Visual Divider */}
       <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-32 h-1 bg-[#e0b07a] rounded-full  origin-left mt-10"
      />

      {/* Why Choose Section */}
      <WhyChooseSection />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-32 h-1 bg-[#e0b07a] rounded-full  origin-left "
      />
      
       {/* Values/Tradition Section */}
       <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full mt-10 mb-10  bg-[#fff7f0] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2 w-full flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-[#6e3419] font-[Higuen Elegant Serif]">Why We Do What We Do</h2>
          <ul className="list-disc pl-5 text-gray-800 text-base space-y-2">
            <li>
              Every jar is a celebration of authentic Telangana flavors, crafted to bring the true taste of our region to your table.
            </li>
            <li>
              We prepare our pickles and powders in small, fresh batches, ensuring each product is bursting with vibrant, homemade goodness.
            </li>
            <li>
              Our recipes are treasured family secrets, lovingly passed down through generations and preserved with pride and care.
            </li>
            <li>
              We use only the finest, farm-fresh ingredients—sourced locally whenever possible—to guarantee purity and exceptional quality in every bite.
            </li>
            <li>
              Above all, our food is made with heartfelt love, deep-rooted tradition, and a genuine desire to nurture and delight everyone who tastes it.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full flex justify-end">
          {/* Image carousel for tradition/values */}
          <ImageCarousel />
        </div>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-32 h-1 bg-[#e0b07a] rounded-full  origin-left "
      />
      {/* Feature Cards Section */}
      <FeatureCardsSection />
    </div>
  );
} 