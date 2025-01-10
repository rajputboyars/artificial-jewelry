"use client"
import PRODUCT_DATA from "@/data";

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
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group bg-white shadow rounded-lg translate-y-0 hover:-translate-y-1 duration-500 transition-all hover:shadow-lg p-4 flex flex-col items-center max-md:items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-40 w-full rounded-md object-cover mb-4"
            />
            <div className="flex flex-col justify-start relative">
              <h3 className="absolute text-lg font-semibold mb-4 capitalize translate-x-0 group-hover:translate-x-28 duration-500 transition-all group-hover:opacity-0">{category.name}</h3>
              <button
                className="flex gap-2 items-center py-1 px-4 font-semibold rounded-lg text-nowrap -translate-x-28 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-0"
              >
                View All<span>👉</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
