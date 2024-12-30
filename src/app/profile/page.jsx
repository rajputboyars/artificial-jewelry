"use client";

import { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("details");

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate jewelry lover.",
    profileImage: "/images/profile.jpg", // Replace with actual profile image
    orders: [
      { id: 1, product: "Elegant Earrings", date: "2024-12-20", status: "Delivered", price: "$25" },
      { id: 2, product: "Stylish Necklace", date: "2024-12-18", status: "Processing", price: "$50" },
    ],
    wishlist: ["Beautiful Bracelet", "Classic Ring"],
  };

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">{user.name}</h1>
          <p className="text-grayDark">{user.bio}</p>
          <p className="text-secondary">{user.email}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center md:justify-start gap-6 border-b border-grayLight pb-4 mb-8">
        <button
          className={`text-lg font-semibold px-4 py-2 ${
            activeTab === "details"
              ? "text-primary border-b-2 border-primary"
              : "text-grayDark"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Personal Details
        </button>
        <button
          className={`text-lg font-semibold px-4 py-2 ${
            activeTab === "orders"
              ? "text-primary border-b-2 border-primary"
              : "text-grayDark"
          }`}
          onClick={() => setActiveTab("orders")}
        >
          Orders
        </button>
        <button
          className={`text-lg font-semibold px-4 py-2 ${
            activeTab === "wishlist"
              ? "text-primary border-b-2 border-primary"
              : "text-grayDark"
          }`}
          onClick={() => setActiveTab("wishlist")}
        >
          Wishlist
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "details" && (
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Personal Details</h2>
          <div className="space-y-4">
            <p className="text-grayDark">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-grayDark">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-grayDark">
              <strong>Bio:</strong> {user.bio}
            </p>
          </div>
        </div>
      )}

      {activeTab === "orders" && (
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Your Orders</h2>
          {user.orders.length > 0 ? (
            <table className="w-full bg-lightBackground border rounded-lg">
              <thead>
                <tr className="bg-primary text-lightBackground">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="py-3 px-4">{order.product}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">{order.status}</td>
                    <td className="py-3 px-4">{order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-grayDark">You have no orders yet.</p>
          )}
        </div>
      )}

      {activeTab === "wishlist" && (
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Your Wishlist</h2>
          {user.wishlist.length > 0 ? (
            <ul className="space-y-4">
              {user.wishlist.map((item, index) => (
                <li key={index} className="text-grayDark">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-grayDark">Your wishlist is empty.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ProfilePage;
