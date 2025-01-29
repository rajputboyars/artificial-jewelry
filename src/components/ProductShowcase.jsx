// src/app/components/ProductShowcase.jsx
"use client";

import { addToCart } from "@/app/reducers/cartSlice";
import PRODUCT_DATA from "@/data";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductShowcase = () => {
  const products =  PRODUCT_DATA.slice(0, 3);
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product
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
                src={product.thumbnail}
                alt={product.name}
                className="w-[50%] md:w-full m-auto aspect-square md:aspect-video rounded-lg "
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-textPrimary">{product.title}</h2>
              <p className="text-grayDark">{product.description}</p>
              <p className="text-lg font-semibold text-secondary">{product.price}</p>
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
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
