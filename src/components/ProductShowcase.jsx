// src/app/components/ProductShowcase.jsx
"use client";

import { useState } from "react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Gold Plated Necklace",
      description: "A stunning gold-plated necklace to elevate your style.",
      price: "$49.99",
      image: "/images/home-section/image1.png",
    },
    {
      id: 2,
      name: "Elegant Bracelet",
      description: "A handcrafted bracelet perfect for any occasion.",
      price: "$29.99",
      image: "/images/home-section/image2.png",
    },
    {
      id: 3,
      name: "Diamond Studded Earrings",
      description: "Beautiful diamond-studded earrings to shine bright.",
      price: "$59.99",
      image: "/images/home-section/image3.png",
    },
  ];

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (productId) => {
    const selectedSize = selectedSizes[productId];
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    alert(`Product ID: ${productId} added to cart with size: ${selectedSize}`);
  };

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl text-center font-bold mb-6">Best Selling Products</h2>
      <div className="container mx-auto px-4 space-y-12">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex group flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center space-y-8 md:space-y-0 md:space-x-8`}
          >
            {/* Product Image */}
            <div className="md:w-1/2 relative">
              <div className="absolute w-0 h-full bg-black opacity-50 transition-all duration-700 group-hover:w-full group-hover:h-full bottom-0 left-0" />
              <img
                src={product.image}
                alt={product.name}
                className="w-[50%] m-auto rounded-lg "
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-textPrimary">{product.name}</h2>
              <p className="text-grayDark">{product.description}</p>
              <p className="text-lg font-semibold text-secondary">{product.price}</p>
              {/* Size Options */}
              <div className="flex justify-center md:justify-start items-center space-x-4">
                {["S", "M", "L"].map((size) => (
                  <label key={size} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`size-${product.id}`}
                      value={size}
                      onChange={() => handleSizeChange(product.id, size)}
                      className="form-radio text-textPrimary"
                    />
                    <span className="text-grayDark">{size}</span>
                  </label>
                ))}
              </div>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product.id)}
                className="mt-4 bg-primary text-lightBackground px-6 py-2 rounded hover:bg-secondary transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
