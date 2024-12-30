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
            image: "/images/products/necklace.jpg",
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
                <div className="space-y-8">
                    {/* Cart Items */}
                    <div className="bg-lightBackground rounded shadow p-4 grid md:grid-cols-5 gap-7">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-between rounded-sm shadow-md border-grayLight pb-4 mb-4 relative"
                            >
                                {/* Product Details */}
                                <div className="flex flex-col">
                                    <div className="w-full h-32">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover rounded"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-primary">
                                            {item.name}
                                        </h2>
                                        <p className="text-grayDark">${item.price}</p>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center space-x-4">
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

                                {/* Remove Item */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="bg-red-600 text-white px-1 rounded-sm hover:text-red-800 absolute top-1 right-1"
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Summary Section */}
                    <div className="bg-lightBackground p-6 rounded shadow flex justify-between items-center">
                        <div className="flex gap-2">
                            <h2 className="text-xl font-bold text-primary">Total:</h2>
                            <p className="text-2xl font-bold text-secondary">
                                ${calculateTotal()}
                            </p>
                        </div>
                        <Link href={"/checkout"}>
                            <button className="bg-primary text-lightBackground px-6 py-3 rounded hover:bg-secondary transition">
                                Proceed to Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CartPage;

