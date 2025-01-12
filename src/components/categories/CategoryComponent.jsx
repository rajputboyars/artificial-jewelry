"use client"
import PRODUCT_DATA from "@/data";
import Link from "next/link";

const CategoryComponent = () => {

  // Extract unique categories from PRODUCT_DATA
  const categories = [
    ...new Map(
      PRODUCT_DATA.map((product) => [
        product.category,
        { name: product.category, image: product.images[0] }
      ])
    ).values()
  ];

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group bg-white shadow rounded-lg translate-y-0 hover:-translate-y-1 duration-500 transition-all hover:shadow-lg p-4 flex flex-col items-center max-md:items-center"
          >

            <div className="relative">
              <div className="absolute rounded-md w-0 h-full bg-black opacity-50 transition-all duration-700 group-hover:w-full bottom-0 left-0" />
              <img
                src={category.image}
                alt={category.name}
                className="h-auto w-full aspect-square rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col justify-start relative">
              <h3 className="absolute text-lg font-semibold mb-4 capitalize translate-x-0 group-hover:translate-x-28 duration-500 transition-all group-hover:opacity-0">{category.name}</h3>
              <Link href={`/products/category/${category.name}`}
                className="flex gap-2 items-center py-1 px-4 font-semibold rounded-lg text-nowrap -translate-x-28 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0"
              >
                View All...<span>👉</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
