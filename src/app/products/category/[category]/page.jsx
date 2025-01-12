"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PRODUCT_DATA from "@/data";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

// Utility to capitalize words
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const CategoryPage = () => {
    const { category } = useParams(); // Get dynamic category from the URL
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filtered = PRODUCT_DATA.filter(
                (product) => product.category.toLowerCase() === category.toLowerCase()
            );
            setFilteredProducts(filtered);
        }
    }, [category]);

    return (
        <section>
            {/* Banner Image */}
            <div className="w-full h-[70vh] bg-cover bg-center relative">
                <div className="absolute h-full w-full">
                    <img
                        src="/images/home-section/Rectangle30.png"
                        alt={`${category} Banner`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="z-10 absolute w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-lightBackground capitalize">
                        {capitalize(category)}
                    </h1>
                    <Breadcrumbs current={capitalize(category)} />
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="pb-4 font-semibold text-xl capitalize">
                    {capitalize(category)} Products
                </h2>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            // <div
                            //     key={product.id}
                            //     className="bg-lightBackground p-4 rounded shadow"
                            // >
                            //     <img
                            //         src={product.thumbnail}
                            //         alt={product.title}
                            //         className="w-full h-auto aspect-square object-cover rounded"
                            //     />
                            //     <h2 className="text-xl font-bold text-textPrimary mt-4">
                            //         {product.title}
                            //     </h2>
                            //     <p className="text-grayDark">${product.price}</p>
                            //     <Link
                            //         href={`/products/${product.id}`}
                            //         className="inline-block bg-primary text-lightBackground px-4 py-2 rounded mt-4 hover:bg-secondary transition"
                            //     >
                            //         View Details
                            //     </Link>
                            // </div>
                            <ProductCard key={product.id} product={product}/>
                        ))
                    ) : (
                        <p className="text-grayDark">No products found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CategoryPage;
