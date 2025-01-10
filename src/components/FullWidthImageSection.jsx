// src/app/components/FullWidthImageSection.jsx
"use client";

const FullWidthImageSection = () => {
  return (
    <div>

      <section className="relative w-full h-[500px]">
        {/* Image Section */}
        <img
          src="/images/home-section/Rectangle30.png" // Replace with your image path
          alt="Elegant Jewelry"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute bottom-8 right-8 text-right text-lightBackground space-y-2">
          <h2 className="text-4xl font-bold">Elegant Jewelry</h2>
          <p className="text-lg text-grayLight">
            Discover timeless designs crafted for every occasion.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FullWidthImageSection;
