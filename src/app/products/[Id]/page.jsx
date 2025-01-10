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
      smallImages: [
        "/images/products/earrings.jpg",
        "/images/products/earrings2.jpg",
        "/images/products/earrings3.jpg",
      ],
    },
    2: {
      name: "Stylish Necklace",
      price: "$50",
      description: "This stylish necklace adds a touch of elegance to your outfit.",
      image: "/images/products/necklace.jpg",
      smallImages: [
        "/images/products/necklace.jpg",
        "/images/products/necklace2.jpg",
        "/images/products/necklace3.jpg",
      ],
    },
  };

  const product = products[Id];

  if (!product) {
    return (
      <p className="text-center text-xl text-red-500 min-h-screen flex justify-center items-center">
        Product not found!
      </p>
    );
  }

  const similarProducts = Object.values(products).filter(
    (p) => p.name !== product.name
  );

  return (
    <section className="container mx-auto px-4 py-12 space-y-16">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            {product.smallImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg shadow cursor-pointer hover:ring-2 hover:ring-primary"
              />
            ))}
          </div>
        </div>
        {/* Details Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-lg text-grayDark">{product.description}</p>
          <p className="text-2xl font-bold text-secondary">{product.price}</p>
          <button className="bg-primary text-lightBackground px-6 py-3 rounded hover:bg-secondary transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products Section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">View Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {similarProducts.map((product, index) => (
            <div key={index} className="bg-lightBackground p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold text-primary mt-4">
                {product.name}
              </h3>
              <p className="text-grayDark">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description Section */}
      <div className="space-y-12">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={product.image}
              alt={`Detailed ${index + 1}`}
              className="md:w-1/2 w-full h-auto rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-bold text-primary">
                High-Quality Material
              </h3>
              <p className="text-grayDark">
                This product is made from the finest materials, ensuring both
                durability and style for any occasion.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Reviews Section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Customer Reviews</h2>
        <div className=" grid grid-cols-5 gap-4">
          <div className="bg-lightBackground p-4 rounded shadow">
            <p className="text-grayDark">
              "I absolutely love these earrings! They are stunning and perfect
              for every occasion." - <strong>Jane Doe</strong>
            </p>
          </div>
          <div className="bg-lightBackground p-4 rounded shadow">
            <p className="text-grayDark">
              "Such a beautiful product! The quality is amazing, and it arrived
              on time." - <strong>John Smith</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
