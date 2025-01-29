"use client";

import Wishlist from "@/components/Wishlist";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
 

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
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row w-full h-[90vh]">
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-6 mb-12 w-full lg:w-1/3 h-full">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-textPrimary">{user.name}</h1>
          <p className="text-grayDark">{user.bio}</p>
          <p className="text-secondary">{user.email}</p>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        {/* Tabs */}
        <div className="flex justify-center md:justify-start gap-6 border-b border-grayLight pb-4 mb-8 w-full">
          <button
            className={`text-lg font-semibold px-4 py-2 text-textPrimary border-b-2 border-primary`}
           
          >
            Personal Details
          </button>

        </div>

        {/* Tab Content */}
 
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-textPrimary">Personal Details</h2>
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
            <Link href={"/wishlist"}
              className="text-grayDark border inline-block py-2 px-4 rounded-full mr-4 bg-primary"
            >
              Wishlist
            </Link>
            <Link href={"/order"}
              className="text-grayDark border inline-block py-2 px-4 rounded-full bg-primary"
            >
              Orders
            </Link>
          </div>
        
      </div>

    </section>
  );
};

export default ProfilePage;
