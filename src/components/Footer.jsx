// src/app/components/Footer.jsx
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-lightBackground py-6">
      <div className="container mx-auto px-4 text-center space-y-4">
        <p className="text-grayLight">© 2024 Jewelry Store. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy">
            <span className="hover:text-secondary">Privacy Policy</span>
          </Link>
          <Link href="/terms">
            <span className="hover:text-secondary">Terms of Service</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-secondary">Contact Us</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
