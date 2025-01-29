"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/app/reducers/wishlistSlice";
import { addToCart } from "@/app/reducers/cartSlice";
import ProductCard from "./ProductCard";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ id }));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart( product));
  };

  return (
    <div className="h-full py-6 pb-36 px-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
       <div className=" flex flex-col items-center justify-center min-h-[60vh]">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24">
         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
       </svg>
       <p className="text-center text-grayDark">Your wishlist is empty!</p>
     </div>
      ) : (
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8" style={{scrollbarWidth:"none"}}>
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
