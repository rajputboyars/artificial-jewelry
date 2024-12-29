// src/app/product/[id]/page.jsx
"use client";

import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  const { Id } = useParams();

  const products = {
    1: {
      name: "Elegant Earrings",
      price: "$25",
      description: "These elegant earrings are perfect for any occasion.",
      image: "/images/products/earrings.jpg",
    },
    2: {
      name: "Stylish Necklace",
      price: "$50",
      description: "This stylish necklace adds a touch of elegance to your outfit.",
      image: "/images/products/necklace.jpg",
    },
    3: {
      name: "Beautiful Bracelet",
      price: "$30",
      description: "A beautiful bracelet crafted with precision and style.",
      image: "/images/products/bracelet.jpg",
    },
    4: {
      name: "Classic Ring",
      price: "$20",
      description: "A classic ring that exudes timeless beauty.",
      image: "/images/products/ring.jpg",
    },
  };

  const product = products[Id];
console.log(Id);

  if (!product) {
    return <p className="text-center text-xl text-red-500 min-h-screen flex justify-center items-center">Product not found!</p>;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-lg text-grayDark">{product.description}</p>
          <p className="text-2xl font-bold text-secondary">{product.price}</p>
          <button className="bg-primary text-lightBackground px-6 py-3 rounded hover:bg-secondary transition">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
