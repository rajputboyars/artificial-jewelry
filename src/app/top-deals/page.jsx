"use client"
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import PRODUCT_DATA from "@/data";

const TopDeals = () => {
  // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for mobile filter

  const [filteredData, setFilteredData] = useState([...PRODUCT_DATA]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  // Calculate the displayed products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  console.log(indexOfLastItem,
    indexOfFirstItem,
    currentProducts.length,);
  
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
    <div className="bg-lightBackground min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-textPrimary text-3xl font-bold mb-4">Top Deals</h1>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-secondary">Loading products...</p>
        ) : (
          <>
            {/* Products Grid */}
            <div  className="container mx-auto px-4 py-12 flex gap-8">
              <aside className="hidden lg:block lg:w-1/4 bg-lightBackground p-4 rounded shadow">
                <h2 className="text-xl font-bold text-textPrimary mb-4">Filters</h2>
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
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between w-full">
                  {/* Mobile Filter Dropdown */}
                  <div className="block lg:hidden relative">
                    <button
                      className=" bg-primary text-lightBackground px-2 rounded mb-4"
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                      {isFilterOpen ? "Filters" : "Filters"}
                    </button>
                    {isFilterOpen && (
                      <div className="bg-lightBackground p-4 rounded absolute right-0 w-48 shadow z-20 bg-white">
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

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination
                  totalItems={filteredData.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopDeals;
