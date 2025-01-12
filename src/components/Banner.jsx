// src/app/components/Banner.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-lightBackground min-h-screen flex">
      <div className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary">
            Discover Exquisite Artificial Jewelry
          </h1>
          <p className="text-grayDark text-lg">
            Add elegance and charm to your style with our exclusive collection of necklaces, bracelets, and more.
          </p>
          <div className="space-x-4 flex">
            <Link href="/products">
              <p className="bg-primary w-fit text-lightBackground px-7 py-3 rounded hover:bg-secondary">
                Shop Now
              </p>
            </Link>
            <Link href="/about">
              <p className="bg-secondary w-fit text-lightBackground px-6 py-3 rounded hover:bg-primary">
                Learn More
              </p>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/images/home-section/right-image.png" // Replace with your image path
            alt="Artificial Jewelry"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
