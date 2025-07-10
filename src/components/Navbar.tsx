"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiHeart, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { products as productType } from "@/data/dummyData";

const Navbar = () => {
  const { cart } = useCart();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof productType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setIsLoading(true);
      fetch(`/api/search?q=${debouncedSearchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setSearchResults([]);
        });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchResults([]);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <nav className="w-full bg-white pt-4 pb-0 fixed top-0 left-0 z-30   px-4">
      <div className="w-full  mx-auto bg-[#6e3419] rounded-lg shadow-lg flex items-center justify-between px-4 md:px-8 py-1">
        {/* Left Nav */}
        <div className="flex-1 flex justify-start items-center gap-6 text-sm">
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-2xl text-white focus:outline-none mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Nav links (desktop) */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className={`group relative text-text-primary hover:text-primary font-medium transition-colors ${pathname === '/' ? 'text-primary font-bold' : ''}`}>Home
              <span className={`nav-underline ${pathname === '/' ? 'active' : ''}`}></span>
            </Link>
            <Link href="/shop" className={`group relative text-text-primary hover:text-primary font-medium transition-colors ${pathname.startsWith('/shop') ? 'text-primary font-bold' : ''}`}>Shop
              <span className={`nav-underline ${pathname.startsWith('/shop') ? 'active' : ''}`}></span>
            </Link>
            <Link href="/contact-us" className={`group relative text-text-primary hover:text-primary font-medium transition-colors ${pathname.startsWith('/contact-us') ? 'text-primary font-bold' : ''}`}>Contact Us
              <span className={`nav-underline ${pathname.startsWith('/contact-us') ? 'active' : ''}`}></span>
            </Link>
            <Link href="/about" className={`group relative text-text-primary hover:text-primary font-medium transition-colors ${pathname.startsWith('/about') ? 'text-primary font-bold' : ''}`}>About Us
              <span className={`nav-underline ${pathname.startsWith('/about') ? 'active' : ''}`}></span>
            </Link>
          </div>
        </div>
        
        {/* Center Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/images/4.png" alt="Peddamma Vantillu Logo" width={300} height={300} className="rounded-lg object-contain"/>
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex-1 flex justify-end items-center gap-5">
          <div className="relative flex items-center " ref={searchContainerRef}>
            <input 
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`rounded-full h-9 transition-all duration-300 ease-in-out bg-white outline-none ${isSearchOpen || searchQuery ? 'w-48 pl-4 pr-10 border-0 text-gray-900' : 'w-0 border-none'}`}
            />
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`text-xl text-text-primary ${isSearchOpen || searchQuery ? 'text-gray-900' : 'hover:text-primary'} transition-colors absolute right-0 top-0 h-9 w-9 flex items-center justify-center`}>
              <FiSearch />
            </button>
            {isSearchOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white  rounded-md shadow-lg z-10">
                {isLoading && <div className="p-2">Loading...</div>}
                {!isLoading && searchResults.length === 0 && debouncedSearchQuery && (
                  <div className="p-2 text-gray-500">No results found.</div>
                )}
                {!isLoading && searchResults.length > 0 && (
                  <ul>
                    {searchResults.map((product) => (
                      <li key={product.id} className="border-b last:border-b-0">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex items-center p-2 hover:bg-gray-100 "
                          onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                          >
                          <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-md"  objectFit="contain"/>
                          <div className="ml-3">
                            <p className="font-semibold text-sm text-gray-900">{product.name}</p>
                            <p className="text-xs text-gray-600">₹{product.price}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
          {/* Cart icon always visible */}
          <Link
            href="/cart"
            className="relative text-xl text-text-primary hover:text-primary transition-colors"
            >
            <FiShoppingCart />
            {cart.length > 0 && (
              <span className="absolute bg-red-500 -top-1 -right-2 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold shadow">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
            )}
          </Link>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#6e3419] text-white w-full absolute left-0 top-full z-40 shadow-lg rounded-b-lg animate-fade-in-down">
          <div className="flex flex-col gap-2 py-4 px-6">
            <Link href="/" className={`py-2 px-2 rounded hover:bg-[#e0b07a] transition-colors ${pathname === '/' ? 'bg-[#e0b07a] font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/shop" className={`py-2 px-2 rounded hover:bg-[#e0b07a] transition-colors ${pathname.startsWith('/shop') ? 'bg-[#e0b07a] font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Shop</Link>
            <Link href="/contact-us" className={`py-2 px-2 rounded hover:bg-[#e0b07a] transition-colors ${pathname.startsWith('/contact-us') ? 'bg-[#e0b07a] font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="/about" className={`py-2 px-2 rounded hover:bg-[#e0b07a] transition-colors ${pathname.startsWith('/about') ? 'bg-[#e0b07a] font-bold' : ''}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 