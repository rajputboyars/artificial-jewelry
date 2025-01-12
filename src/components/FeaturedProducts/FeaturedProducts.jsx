// src/app/components/FeaturedProducts.jsx
"use client";

import Link from "next/link";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Gold Plated Necklace",
      price: "$49.99",
      image: "/images/home-section/image1.png", // Add your image to the public folder
    },
    {
      id: 2,
      name: "Elegant Bracelet",
      price: "$29.99",
      image: "/images/home-section/image1.png",
    },
    {
      id: 3,
      name: "Diamond Studded Earrings",
      price: "$59.99",
      image: "/images/home-section/image1.png",
    },
  ];

  return (
    <section className="py-16 bg-lightBackground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-md w-full"
              />
              <h3 className="text-lg font-bold text-textPrimary mt-4">
                {product.name}
              </h3>
              <p className="text-grayDark">{product.price}</p>
              <Link href={`/product/${product.id}`}>
                <span className="block mt-4 bg-primary text-lightBackground text-center py-2 rounded hover:bg-secondary">
                  View Details
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
