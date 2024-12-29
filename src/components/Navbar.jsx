// src/app/components/Navbar.jsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Helper function to determine active class
  const isActive = (path) => (pathname === path ? "text-secondary font-bold" : "hover:text-secondary");

  return (
    <nav className="bg-primary sticky w-full top-0 text-lightBackground shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <p className="text-2xl font-bold">Jewelry Store</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <p className={isActive("/")}>Home</p>
          </Link>
          <Link href="/products">
            <p className={isActive("/products")}>Products</p>
          </Link>
          <Link href="/about">
            <p className={isActive("/about")}>About</p>
          </Link>
          <Link href="/contact">
            <p className={isActive("/contact")}>Contact</p>
          </Link>
          <Link href="/cart">
            <p className={isActive("/cart")}>Cart</p>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-lightBackground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-lightBackground space-y-4 p-4">
          <Link href="/">
            <p className={`${isActive("/")}`}>Home</p>
          </Link>
          <Link href="/products">
            <p className={`${isActive("/products")}`}>Products</p>
          </Link>
          <Link href="/about">
            <p className={`${isActive("/about")}`}>About</p>
          </Link>
          <Link href="/contact">
            <p className={`${isActive("/contact")}`}>Contact</p>
          </Link>
          <Link href="/cart">
            <p className={`${isActive("/cart")}`}>Cart</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
