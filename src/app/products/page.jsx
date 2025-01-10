"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import PRODUCT_DATA from "@/data";
import { useState } from "react";

const ProductPage = () => {
    const [filteredData, setFilteredData] = useState([...PRODUCT_DATA]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter

    const filters = {
        categories: ["bracelets", "rings", "necklaces", "earrings"],
        prices: ["Under $20", "$20-$50", "Over $50"],
    };

    const filterArray = Object.entries(filters).map(([key, value]) => ({
        key,
        values: value,
    }));

    const handleCategoryFilter = (e) => {
        const { value, checked } = e.target;

        const updatedCategories = checked
            ? [...selectedCategories, value]
            : selectedCategories.filter((category) => category !== value);

        setSelectedCategories(updatedCategories);

        applyFilters(updatedCategories, selectedPriceRanges);
    };

    const handlePriceFilter = (e) => {
        const { value, checked } = e.target;

        const updatedPriceRanges = checked
            ? [...selectedPriceRanges, value]
            : selectedPriceRanges.filter((priceRange) => priceRange !== value);

        setSelectedPriceRanges(updatedPriceRanges);

        applyFilters(selectedCategories, updatedPriceRanges);
    };

    const applyFilters = (categories, priceRanges) => {
        let filteredProducts = [...PRODUCT_DATA];

        // Filter by categories
        if (categories.length > 0) {
            filteredProducts = filteredProducts.filter((product) =>
                categories.includes(product.category)
            );
        }

        // Filter by price ranges
        if (priceRanges.length > 0) {
            filteredProducts = filteredProducts.filter((product) => {
                const price = product.price;
                return priceRanges.some((range) => {
                    if (range === "Under $20") return price < 20;
                    if (range === "$20-$50") return price >= 20 && price <= 50;
                    if (range === "Over $50") return price > 50;
                });
            });
        }

        setFilteredData(filteredProducts);
    };

    return (
        <section>
            {/* Banner Image */}
            <div className="w-full h-[70vh] bg-cover bg-center relative">
                <div className="absolute h-full w-full">
                    <img
                        src="/images/home-section/Rectangle30.png"
                        alt="Elegant Jewelry"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-10 absolute w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-lightBackground">Our Products</h1>
                    <Breadcrumbs />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 flex gap-8">
                {/* Left Sidebar */}
                <aside className="hidden md:block md:w-1/4 bg-lightBackground p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-primary mb-4">Filters</h2>
                    {filterArray.map((filter, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg font-bold text-grayDark mb-2 capitalize">{filter.key}</h3>
                            {filter.values.map((value, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id={`${filter.key}-${value}`}
                                        value={value}
                                        checked={
                                            filter.key === "categories"
                                                ? selectedCategories.includes(value)
                                                : selectedPriceRanges.includes(value)
                                        }
                                        onChange={
                                            filter.key === "categories"
                                                ? handleCategoryFilter
                                                : handlePriceFilter
                                        }
                                        className="form-checkbox"
                                    />
                                    <label
                                        htmlFor={`${filter.key}-${value}`}
                                        className="text-grayDark capitalize"
                                    >
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                </aside>


                {/* Product Cards */}
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between w-full">
                        <h2 className="pb-4 font-semibold text-xl">All Products</h2>
                        {/* Mobile Filter Dropdown */}
                        <div className="block md:hidden relative">
                            <button
                                className=" bg-primary text-lightBackground px-2 rounded mb-4"
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                            >
                                {isFilterOpen ? "Filters" : "Filters"}
                            </button>
                            {isFilterOpen && (
                                <div className="bg-lightBackground p-4 rounded absolute -right-4 sm:-right-10 sm:w-[95vw] w-[98vw] shadow">
                                    {filterArray.map((filter, index) => (
                                        <div key={index} className="mb-6">
                                            <h3 className="text-lg font-bold text-grayDark mb-2 capitalize">
                                                {filter.key}
                                            </h3>
                                            {filter.values.map((value, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <input
                                                        type="checkbox"
                                                        id={`mobile-${filter.key}-${value}`}
                                                        value={value}
                                                        checked={
                                                            filter.key === "categories"
                                                                ? selectedCategories.includes(value)
                                                                : selectedPriceRanges.includes(value)
                                                        }
                                                        onChange={
                                                            filter.key === "categories"
                                                                ? handleCategoryFilter
                                                                : handlePriceFilter
                                                        }
                                                        className="form-checkbox"
                                                    />
                                                    <label
                                                        htmlFor={`mobile-${filter.key}-${value}`}
                                                        className="text-grayDark capitalize"
                                                    >
                                                        {value}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                    <p onClick={() => setIsFilterOpen(!isFilterOpen)}>Apply Filter</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredData.map((product) => (
                            <div key={product.id} className="bg-lightBackground p-4 rounded shadow">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-auto aspect-square object-cover rounded"
                                />
                                <h2 className="text-xl font-bold text-primary mt-4">{product.title}</h2>
                                <p className="text-grayDark">${product.price}</p>
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
            </div>
        </section>
    );
};

export default ProductPage;
