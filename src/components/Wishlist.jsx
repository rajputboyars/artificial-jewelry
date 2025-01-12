"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "@/app/reducers/wishlistSlice";
import { addToCart } from "@/app/reducers/cartSlice";

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
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="w-full h-full flex flex-col bg-lightBackground rounded shadow p-4 gap-7 overflow-y-scroll" style={{scrollbarWidth:"none"}}>
          {wishlistItems.map((item) => (
            <div
            key={item.id}
            className="flex flex-col md:flex-row w-full items-center justify-between border rounded-sm shadow-md border-grayLight p-4 mb-4 relative"
          >
            {/* Product Details */}
            <div className="flex flex-col md:flex-row max-md:w-full gap-8">
              <div className="w-full md:w-40 h-80 md:h-32">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <h2 className="text-xl font-bold text-nowrap text-textPrimary">
                  {item.title}
                </h2>
                <p className="text-grayDark">${item.price}</p>
                <div className="w-full flex justify-between max-w-[120px]">
                  <button
                    onClick={() => handleQuantityUpdate(item.id, -1)}
                    className="px-4 py-2 bg-secondary text-lightBackground rounded hover:bg-primary"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.minimumOrderQuantity}</span>
                  <button
                    onClick={() => handleQuantityUpdate(item.id, 1)}
                    className="px-4 py-2 bg-secondary text-lightBackground rounded hover:bg-primary"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="max-md:w-full flex flex-col">
              {/* add Item to cart */}
              <button
                onClick={() => handleAddToCart(item)}
                className="text-red-600 pt-2 rounded-sm hover:text-red-800"
                >
                Add to cart
              </button>
                {/* Remove Item */}
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 pt-2 rounded-sm hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
