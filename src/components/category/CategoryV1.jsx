"use client";

import { useRouter } from "next/navigation";

const CategoryV1 = () => {
  const router = useRouter();

  const categories = [
    {
      id: "traditional",
      title: "Traditional Jewelry",
      image: "/images/products/treditional-jewelary.jpeg",
    },
    {
      id: "party",
      title: "Party Jewelry",
      image: "/images/products/party-jewelary.avif",
    },
  ];

  const handleRedirect = (categoryId) => {
    router.push(`/categories/${categoryId}`);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-textPrimary mb-8 text-center">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onClick={() => handleRedirect(category.id)}
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex justify-center items-center">
              <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.title}
              </h3>
            </div>
            <h3 className="absolute bottom-0 w-full p-4 text-black translate-x-0 translate-y-0 transition-all duration-700 group-hover:translate-x-40 group-hover:-translate-y-24 group-hover:text-white text-xl font-bold opacity-100 group-hover:opacity-0 ">
              {category.title}
            </h3>
            {/* <div className="p-4">
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryV1;
