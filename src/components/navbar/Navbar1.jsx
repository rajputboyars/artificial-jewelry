"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar1 = () => {
    const [searchInput, setSearchInput] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname(); // Get the current route

    const cartItems = useSelector((state) => state.cart.items);
    const wishlistItems = useSelector((state) => state.wishlist.items);


    // Helper function to determine active class
    const isActive = (path) =>
        pathname === path ? "text-secondary font-bold" : "hover:text-secondary";

    return (
        <nav className="bg-primary sticky w-full top-0 text-lightBackground shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex gap-4 items-center">
                    <Link onClick={() => setIsMenuOpen(false)} href="/">
                        <p className="md:text-2xl font-bold">ARS Store</p>
                    </Link>
                    <div className="flex max-md:hidden gap-4">
                        <Link href="/">
                            <p className={isActive("/")}>Home</p>
                        </Link>
                        <Link href="/products">
                            <p className={isActive("/products")}>Products</p>
                        </Link>
                        <Link href="/top-deals">
                            <p className={isActive("/contact")}>Top Deals</p>
                        </Link>
                        <Link href="/gift-packs">
                            <p className={isActive("/gift-packs")}>Gift Packs</p>
                        </Link>
                        <Link href="/about">
                            <p className={isActive("/about")}>About</p>
                        </Link>
                        <Link href="/contact">
                            <p className={isActive("/contact")}>Contact</p>
                        </Link>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="flex space-x-6 items-center">

                    {/* <div className=" hidden lg:flex gap-2 bg-white text-black rounded-full overflow-hidden">
                        <input type="text" name="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="px-3 outline-none" />
                        <button className="px-3 py-1 rounded-full border bg-primary text-white" onClick={() => setSearchInput("")}>search</button>
                    </div> */}
                    {/* <div className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div> */}

                    {/* wishlist Icon */}
                    <Link href="/wishlist" className="hover:text-secondary relative">
                        {/* <ShoppingCartIcon className="h-6 w-6" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <p className="bg-red-500 absolute -top-3 -right-3 text-sm text-white rounded-full px-1">{wishlistItems.length}</p>
                    </Link>

                    {/* Cart Icon */}
                    <Link href="/cart" className="hover:text-secondary relative">
                        {/* <ShoppingCartIcon className="h-6 w-6" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <p className="bg-red-500 absolute -top-3 -right-3 text-sm text-white rounded-full px-1">{cartItems.length}</p>
                    </Link>

                    {/* Profile Icon */}
                    <Link href="/profile" className="hover:text-secondary">
                        {/* <UserIcon className="h-6 w-6" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </Link>

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
                {/* Mobile Menu Button */}
            </div>

            {/* Mobile Menu */}
            {/* {isMenuOpen && ( */}
            <div className={`md:hidden`}>
                <div className={`bg-primary fixed right-0 h-screen text-lightBackground flex flex-col gap-4 p-4 transition-all duration-700 ${isMenuOpen ? "w-screen" : "w-0 translate-x-96"}`}>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/">
                        <p className={`${isActive("/")}`}>Home</p>
                    </Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/products">
                        <p className={`${isActive("/products")}`}>Products</p>
                    </Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/top-deals">
                        <p className={isActive("/contact")}>Top Deals</p>
                    </Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/gift-packs">
                        <p className={isActive("/gift-packs")}>Gift Packs</p>
                    </Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/about">
                        <p className={`${isActive("/about")}`}>About</p>
                    </Link>
                    <Link onClick={() => setIsMenuOpen((prev) => !prev)} href="/contact">
                        <p className={`${isActive("/contact")}`}>Contact</p>
                    </Link>
                </div>
            </div>
            {/* )} */}
        </nav>
    );
};

export default Navbar1;
