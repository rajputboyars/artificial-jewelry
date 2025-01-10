"use client";

import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Elegant Earrings",
            price: 25,
            image: "/images/products/earrings.jpg",
            quantity: 1,
        },
        {
            id: 2,
            name: "Stylish Necklace",
            price: 50,
            image: "/images/products/necklaces.jpg",
            quantity: 1,
        },
    ]);

    const updateQuantity = (id, increment) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + increment, 1) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-grayDark">Your cart is empty!</p>
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
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start  gap-2">
                                        <h2 className="text-xl font-bold text-nowrap text-primary">
                                            {item.name}
                                        </h2>
                                        <p className="text-grayDark">${item.price}</p>
                                        <div className="w-full flex justify-between max-w-[120px]">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="px-4 py-2 bg-secondary text-lightBackground rounded hover:bg-primary"
                                            >
                                                -
                                            </button>
                                            <span className="text-lg">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
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
                                        onClick={() => removeItem(item.id)}
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
                                <h2 className="text-xl font-bold text-primary">Subtotal:</h2>
                                <p className="text-lg">
                                    ${calculateTotal()}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold text-primary">Items:</h2>
                                <p className="text-lg">
                                    {cartItems.length}
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold text-primary">Shipping:</h2>
                                <p className="text-lg">
                                    Free
                                </p>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="text-xl font-bold text-primary">Total:</h2>
                                <p className="text-lg">
                                    {calculateTotal()}
                                </p>
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

