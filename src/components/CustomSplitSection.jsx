// src/app/components/CustomSplitSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const CustomSplitSection = ({ 
  imagePosition = "left", 
  backgroundColor = "bg-lightBackground", 
  imageSrc, 
  titleColor="text-white",
  imageAlt = "Jewelry Showcase", 
  imageRotate = 0, 
  title = "Elevate Your Style with Our Collection", 
  description = "Discover the perfect blend of elegance and affordability with our handcrafted artificial jewelry. Each piece is designed to bring out your unique style and personality.", 
  linkText = "Browse Collection",
  linkHref = "/products"
}) => {
  const imageStyle = {
    transform: `rotate(${imageRotate}deg)`,
  };

  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div
          className={`md:w-1/2 flex justify-center items-center ${imagePosition === "right" ? "md:order-last" : ""}`}
          style={imageStyle}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2 flex flex-col gap-4  text-center md:text-left">
          <h2 className={`text-3xl font-bold ${titleColor}`}>{title}</h2>
          <p className="text-grayDark text-lg">{description}</p>
          <Link
            href={linkHref}
            className="bg-primary text-lightBackground px-6 py-3 w-fit rounded hover:bg-lightBackground hover:text-primary transition hover:border-primary border-2"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomSplitSection;
