"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
// import { UserIcon, ShoppingCartIcon } from "@heroicons/react/outline"; // Importing icons from Heroicons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  // Helper function to determine active class
  const isActive = (path) =>
    pathname === path ? "text-secondary font-bold" : "hover:text-secondary";

  return (
    <nav className="bg-primary sticky w-full top-0 text-lightBackground shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <p className="text-2xl font-bold">A R Store</p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
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

          {/* Profile Icon */}
          <Link href="/profile" className="hover:text-secondary">
            {/* <UserIcon className="h-6 w-6" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="hover:text-secondary">
            {/* <ShoppingCartIcon className="h-6 w-6" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

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

          {/* Profile Icon */}
          <Link href="/profile" className="flex items-center space-x-2 hover:text-secondary">
            {/* <UserIcon className="h-5 w-5" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <p>Profile</p>
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="flex items-center space-x-2 hover:text-secondary">
            {/* <ShoppingCartIcon className="h-5 w-5" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p>Cart</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
