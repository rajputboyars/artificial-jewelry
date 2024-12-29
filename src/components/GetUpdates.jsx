// src/app/components/GetUpdates.jsx
"use client";

import { useState } from "react";

const GetUpdates = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input after submission
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold text-lightBackground">
          Get the Latest Updates
        </h2>
        <p className="text-grayLight">
          Subscribe to receive exclusive offers and the latest news from our store.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded border-2 border-grayLight focus:outline-none focus:border-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-lightBackground px-6 py-2 rounded hover:bg-lightBackground hover:text-primary transition"
          >
            Subscribe
          </button>
        </form>
        {message && <p className="text-lightBackground">{message}</p>}
      </div>
    </section>
  );
};

export default GetUpdates;
