"use client"
import { addToCart } from "@/app/reducers/cartSlice";
import { addToWishlist, removeFromWishlist } from "@/app/reducers/wishlistSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const [wishlistedProducts, setWishlistedProducts] = useState(false);

  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product
  };
  const handleAddToWishlist = () => {
    setWishlistedProducts(true)
    dispatch(addToWishlist(product)); // Dispatch the addToCart action with the product
  };
  const handleRemoveToWishlist = () => {
    setWishlistedProducts(false)
    dispatch(removeFromWishlist(product)); // Dispatch the addToCart action with the product
  };

  return (
    <div className="bg-white group shadow-md rounded-lg p-4 flex flex-col hover:shadow-2xl border transition-all duration-500 xl:last:hidden ">
      <div className="relative">
        <span className="absolute right-0 top-0 z-10" >
          {
            !wishlistedProducts ?
              <svg onClick={handleAddToWishlist} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg> :
              <svg onClick={handleRemoveToWishlist} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-6" >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
          }

        </span>
        {/* <div className="absolute w-0 h-0 bg-black opacity-50 transition-all duration-700 group-hover:w-full group-hover:h-full bottom-0 left-0" /> */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-auto aspect-square object-cover rounded"
        />
      </div>
      <h2 className="text-textSecondary text-lg font-semibold mt-2">
        {product.title}
      </h2>
      <p className="text-textPrimary text-sm sm:text-xl font-bold mt-1 w-full flex justify-between">${product.price} <span className="line-through font-normal">${product.price + 500}</span></p>
      <div className="mt-auto flex flex-col space-y-2">
        <Link href={`/products/${product.id}`} className="bg-primary max-sm:text-xs text-white text-center py-1 px-4 rounded hover:bg-secondary">
          View Product
        </Link>
        <button onClick={handleAddToCart} className="bg-secondary  max-sm:text-xs text-white py-1 px-4 rounded hover:bg-primary">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
