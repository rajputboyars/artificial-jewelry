"use client"
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Pagination from "@/components/Pagination";
import PRODUCT_DATA from "@/data";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 20;

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // const response = await fetch("https://dummyjson.com/products");
        // const data = await response.json();
        // setProducts(data.products || []);
        setProducts([...PRODUCT_DATA]);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Calculate the displayed products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-lightBackground min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-primary text-3xl font-bold mb-4">New Arrivals</h1>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-secondary">Loading products...</p>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6 mt-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
