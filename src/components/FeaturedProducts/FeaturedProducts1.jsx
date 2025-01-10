import PRODUCT_DATA from "@/data";

const FeaturedProducts1 = () => {
    // Example: Limit to the first 8 products as featured
    const featuredProducts = PRODUCT_DATA.slice(0, 8);

    return (
        <div className="p-6">
            <h2 className="text-3xl text-center font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-40 w-full object-cover mb-4 rounded-lg"
                        />
                        <h3 className="text-lg font-semibold text-center mb-2">
                            {product.title}
                        </h3>
                        <div className="flex w-full  items-center justify-between">
                            <p className="text-gray-600 font-medium">
                                ${product.price.toFixed(2)}
                            </p>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l1.2-6H6.2m13.6 6a2 2 0 11-3.998.002A2 2 0 0119.8 13zm-11.6 0a2 2 0 11-3.998.002A2 2 0 018.2 13zM7 13L5.4 5H4"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts1;
