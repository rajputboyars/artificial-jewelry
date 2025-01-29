import PRODUCT_DATA from "@/data";
import Link from "next/link";

import ProductCard from "../ProductCard";

const FeaturedProducts1 = () => {
    // Example: Limit to the first 8 products as featured
    const featuredProducts = PRODUCT_DATA.slice(0, 6);

    return (
        <div className="p-6 container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} isfeatureCard />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts1;
