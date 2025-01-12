"use client";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { addToCart, removeFromCart, updateQuantity } from "@/app/reducers/cartSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => [...state.cart.items]); // Get the cart items from Redux store

  const handleQuantityUpdate = (id, increment) => {
    dispatch(updateQuantity({ id, increment })); // Dispatch the updateQuantity action
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id })); // Dispatch the removeFromCart action
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.minimumOrderQuantity, 0);

  return (
    <section className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className=" flex flex-col items-center justify-center min-h-[60vh]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <p className="text-center text-grayDark">Your cart is empty!</p>
        </div>
      ) : (
        <div className="space-y-4 md:space-x-8 flex flex-col md:flex-row">
          {/* Cart Items */}
          <div className="w-full md:w-2/3 bg-lightBackground rounded shadow p-4 gap-7">
            {cartItems.map((item) => (
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
                <div className="max-md:w-full">
                  {/* Remove Item */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 pt-2 rounded-sm hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 bg-lightBackground p-4 rounded shadow flex justify-between items-center">
            <div className="flex gap-2 flex-col border max-w-[400px] w-full p-4 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-textPrimary">Subtotal:</h2>
                <p className="text-lg">${calculateTotal()}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-textPrimary">Items:</h2>
                <p className="text-lg">{cartItems.length}</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-textPrimary">Shipping:</h2>
                <p className="text-lg">Free</p>
              </div>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold text-textPrimary">Total:</h2>
                <p className="text-lg">${calculateTotal()}</p>
              </div>
              <Link href={"/checkout"} className="w-full">
                <button className="bg-primary w-full text-lightBackground px-6 py-2 rounded-lg hover:bg-secondary transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
