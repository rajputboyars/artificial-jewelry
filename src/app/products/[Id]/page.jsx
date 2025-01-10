"use client";

import { addToCart } from "@/app/reducers/cartSlice";
import ProductCard from "@/components/ProductCard";
import PRODUCT_DATA from "@/data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";

const ProductDetailPage = () => {
  const { Id } = useParams();
  const product = PRODUCT_DATA[(Id -1)];
 const dispatch = useDispatch()
  if (!product) {
    return (
      <p className="text-center text-xl text-red-500 min-h-screen flex justify-center items-center">
        Product not found!
      </p>
    );
  }

  const similarProducts = Object.values(PRODUCT_DATA).filter(
    (p) => p.category === product.category && p.id !== product.id
  );


  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product
  };

  return (
    <section className="container mx-auto px-4 py-12 space-y-16">
      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[400px] h-[400px] rounded-lg shadow-lg object-cover"
          />
          <div className="flex w-full gap-4 mt-4">
            {product.images.map((src, index) => (
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
        <div className="w-full md:w-1/2 ">
          <div className="space-y-4 max-w-[400px] bg-white p-4 rounded-md shadow-md mx-auto">
            <h1 className="text-3xl font-bold text-primary">{product.title}</h1>
            <p className="text-lg text-grayDark">{product.description}</p>
            <p className="text-xl font-medium text-gray-700">
              Category: <span className="capitalize">{product.category}</span>
            </p>
            <p className="text-2xl font-bold text-secondary">
              ${product.price.toFixed(2)}{" "}
              <span className="text-sm text-gray-500">
                ({product.discountPercentage}% off)
              </span>
            </p>
            <div className="flex gap-4 flex-col md:flex-row">
              <p className="flex-1 border p-2 shadow-sm rounded-md text-sm text-gray-600">
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
              </p>
              <p className="flex-1 border p-2 shadow-sm rounded-md text-sm text-gray-600">
                <strong>Brand:</strong> {product.brand}
              </p>
            </div>
            {/* <p className="text-sm text-gray-600">
            <strong>SKU:</strong> {product.sku}
          </p> */}
            <div className="flex gap-4 flex-col md:flex-row">
              <p className="flex-1 border p-2 shadow-sm rounded-md text-sm text-gray-600">
                <strong>Weight:</strong> {product.weight} kg
              </p>
              <p className="flex-1 border p-2 shadow-sm rounded-md text-sm text-gray-600">
                <strong>Dimensions:</strong>{" "}
                {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
              </p>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button onClick={handleAddToCart} className="bg-primary flex-1 text-lightBackground px-6 py-2 rounded-lg hover:bg-secondary transition">
                Add to Cart
              </button>
              <button className="bg-primary flex-1 text-lightBackground px-6 py-2 rounded-lg hover:bg-secondary transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {similarProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>

      {/* Product Description Section */}
      <div className="space-y-12">
        {product.images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
          >
            <img
              src={image}
              alt={`Detailed ${index + 1}`}
              className="md:w-1/4 w-full h-auto aspect-square rounded-lg shadow-lg"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="bg-lightBackground p-4 rounded shadow">
                <p className="text-grayDark">{review.text}</p>
                <p className="text-sm text-primary mt-2">
                  - <strong>{review.author}</strong>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No reviews yet for this product.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
