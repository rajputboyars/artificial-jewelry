// src/app/components/CategorySection.jsx
"use client";

const CategorySection = () => {
  const categories = ["Earrings", "Necklaces", "Bracelets", "Rings"];

  return (
    <section className="w-full bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-3xl font-bold text-white mb-8">Shop by Category</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-white text-xl font-bold uppercase">
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
