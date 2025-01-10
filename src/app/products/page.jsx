// src/app/product/page.jsx
"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

const ProductPage = () => {
  const categories = [
    { name: "Earrings", image: "/images/products/earrings.jpg" },
    { name: "Necklaces", image: "/images/products/necklaces.jpg" },
    { name: "Bracelets", image: "/images/products/bracelets.jpg" },
    { name: "Rings", image: "/images/products/ring.jpg" },
  ];

    const products = [
        { id: 1, name: "Elegant Earrings", price: "$25", image: "/images/products/earrings.jpg" },
        { id: 2, name: "Stylish Necklace", price: "$50", image: "/images/products/necklaces.jpg" },
        { id: 3, name: "Beautiful Bracelet", price: "$30", image: "/images/products/bracelets.jpg" },
        { id: 4, name: "Classic Ring", price: "$20", image: "/images/products/ring.jpg" },
    ];

    const filters = {
        sizes: ["Small", "Medium", "Large"],
        prices: ["Under $20", "$20-$50", "Over $50"],
        colors: ["Gold", "Silver", "Rose Gold"],
        types: ["Studs", "Hoops", "Chains", "Charms"],
    };

    return (
        <section>
            {/* Banner Image */}
            <div
                className="w-full h-[50vh] bg-cover bg-center relative"
            >
                <div className="absolute h-full w-full ">
                    <img
                        src="/images/home-section/Rectangle30.png" // Replace with your image path
                        alt="Elegant Jewelry"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-10 absolute w-full h-full bg-black bg-opacity-30 items-center justify-center
                flex flex-col">
                    <h1 className="text-4xl font-bold text-lightBackground">Our Products</h1>
                    <Breadcrumbs/>
                </div>
            </div>

            {/* Category Strip */}
            <div className="bg-primary py-2">
                <div className="container mx-auto flex justify-around items-center">
                    {categories.map((category, index) => (
                        <div key={index} className="text-center">
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-lightBackground">
                                <img src={category.image} alt={category.name} className="w-full h-full transition transform hover:scale-110 duration-700 object-cover" />
                            </div>
                            <p className="text-white mt-2 font-bold">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 flex gap-8">
                {/* Left Sidebar */}
                <aside className="w-1/4 bg-lightBackground p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-primary mb-4">Filters</h2>

                    {/* Sizes */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-grayDark mb-2">Sizes</h3>
                        {filters.sizes.map((size, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input type="checkbox" id={`size-${index}`} className="form-checkbox" />
                                <label htmlFor={`size-${index}`} className="text-grayDark">
                                    {size}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Prices */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-grayDark mb-2">Prices</h3>
                        {filters.prices.map((price, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input type="checkbox" id={`price-${index}`} className="form-checkbox" />
                                <label htmlFor={`price-${index}`} className="text-grayDark">
                                    {price}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Colors */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-grayDark mb-2">Colors</h3>
                        {filters.colors.map((color, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input type="checkbox" id={`color-${index}`} className="form-checkbox" />
                                <label htmlFor={`color-${index}`} className="text-grayDark">
                                    {color}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Types */}
                    <div>
                        <h3 className="text-lg font-bold text-grayDark mb-2">Types</h3>
                        {filters.types.map((type, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input type="checkbox" id={`type-${index}`} className="form-checkbox" />
                                <label htmlFor={`type-${index}`} className="text-grayDark">
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Product Cards */}
                <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-lightBackground p-4 rounded shadow">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h2 className="text-xl font-bold text-primary mt-4">{product.name}</h2>
                            <p className="text-grayDark">{product.price}</p>
                            <Link
                                href={`/products/${product.id}`}
                                className="inline-block bg-primary text-lightBackground px-4 py-2 rounded mt-4 hover:bg-secondary transition"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
