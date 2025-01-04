"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
<nav
      className={`absolute top-0 left-0 w-full p-4 z-50 transition-all ${
        isMobileMenuOpen ? 'bg-black/30' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex flex-row md:flex-row justify-between items-center gap-4">
        {/* Logo on left - Visible only on mobile view */}
        <div className="flex-shrink-0">
          <Image 
            src="/globe.svg" 
            alt="Restaurant Logo" 
            width={40} 
            height={40}
          />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes size={24} />  // Show close icon when menu is open
          ) : (
            <FaBars size={24} />  // Show hamburger icon when menu is closed
          )}
        </button>

        {/* Centered navigation links */}
        <ul className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col items-center md:flex-row flex-wrap justify-center gap-4 md:gap-5 lg:gap-10 text-white bg-black/30 md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto p-4 md:p-0`}>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>Private Dining</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>Reservation</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>News</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group hover:text-blue-200 transition-colors cursor-pointer">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Book a Table link on right - Hidden in mobile */}
        <Link 
          href="/booking" 
          className="border-2 text-[#fff]  md:px-4 md:py-1 px-8 py-2 tracking-[0.06rem] hover:bg-[#ffffff15] transition-colors whitespace-nowrap mt-4 md:mt-0 md:block hidden"
        >
          Find a Table
        </Link>
      </div>
    </nav>
  );
}
