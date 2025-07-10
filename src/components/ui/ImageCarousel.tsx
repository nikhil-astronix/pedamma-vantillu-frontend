"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoSlideInterval?: number; // ms
}

const images = [
  { src: '/product-images/allImages/home-main-image.jpg', alt: 'Home Main Product' },
  { src: '/product-images/allImages/Lemon-Pickle.jpg', alt: 'Lemon Pickle' },
  { src: '/product-images/chicken-pickle/classicChickenPickle.webp', alt: 'Classic Chicken Pickle' },
  { src: '/product-images/pre-mix/SAMBAR-MIX-POWDER.webp', alt: 'Sambar Mix Powder' },
  { src: '/product-images/powders/curry-leaves-powder.jpg', alt: 'Curry Leaves Powder' },
];

function getIndex(idx: number, len: number): number {
  return (idx + len) % len;
}

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const numImages = images.length;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % numImages);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, numImages]);

  const prev = () => setCurrent((prev) => (prev - 1 + numImages) % numImages);
  const next = () => setCurrent((prev) => (prev + 1) % numImages);

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center select-none overflow-hidden" style={{ minHeight: 240 }}>
        <div
          className="flex items-center h-64 gap-6 transition-transform duration-700 ease-in-out "
          style={{
            transform: `translateX(calc(50% - ${(current + 0.5) * (100 / numImages)}%))`,
            width: `${numImages * 320}px`, // 320px per image
          }}
        >
          {images.map((img, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 300,
                  height: 240,
                  transition: 'all 0.7s cubic-bezier(.4,0,.2,1)',
                  transform: isActive ? 'scale(1.05)' : 'scale(0.85)',
                  opacity: isActive ? 1 : 0.5,
                 
                  zIndex: isActive ? 2 : 1,
                 
                  background: '#fff',
                  borderRadius: '1rem',
                  cursor: isActive ? 'default' : 'pointer',
                }}
                onClick={() => !isActive && setCurrent(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default ImageCarousel; 