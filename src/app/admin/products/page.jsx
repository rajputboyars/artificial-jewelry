"use client";
import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash } from "lucide-react"; // Icons from lucide-react

const productsData = [
  { id: 1, name: "Golden Necklace", price: "$50", quantity: 100, sale: "10%", stock: "In Stock", startDate: "2025-01-01" },
  { id: 2, name: "Silver Earrings", price: "$25", quantity: 200, sale: "15%", stock: "In Stock", startDate: "2025-02-01" },
  { id: 3, name: "Pearl Bracelet", price: "$40", quantity: 150, sale: "5%", stock: "In Stock", startDate: "2025-03-01" },
  { id: 4, name: "Crystal Ring", price: "$30", quantity: 120, sale: "20%", stock: "In Stock", startDate: "2025-04-01" },
  { id: 5, name: "Gold Plated Choker", price: "$60", quantity: 75, sale: "25%", stock: "In Stock", startDate: "2025-05-01" },
  { id: 6, name: "Silver Bangles", price: "$35", quantity: 180, sale: "18%", stock: "In Stock", startDate: "2025-06-01" },
  { id: 7, name: "Diamond Stud Earrings", price: "$150", quantity: 90, sale: "30%", stock: "In Stock", startDate: "2025-07-01" },
  { id: 8, name: "Gold Hoop Earrings", price: "$45", quantity: 110, sale: "12%", stock: "In Stock", startDate: "2025-08-01" },
  { id: 9, name: "Sapphire Necklace", price: "$100", quantity: 60, sale: "8%", stock: "In Stock", startDate: "2025-09-01" },
  { id: 10, name: "Ruby Pendant", price: "$55", quantity: 140, sale: "18%", stock: "In Stock", startDate: "2025-10-01" },
  { id: 11, name: "Emerald Ring", price: "$75", quantity: 85, sale: "10%", stock: "In Stock", startDate: "2025-11-01" },
  { id: 12, name: "Gold Plated Anklet", price: "$40", quantity: 200, sale: "22%", stock: "In Stock", startDate: "2025-12-01" },
  { id: 13, name: "Artificial Diamond Bracelet", price: "$30", quantity: 250, sale: "15%", stock: "In Stock", startDate: "2025-01-15" },
  { id: 14, name: "Silver Chain", price: "$50", quantity: 90, sale: "5%", stock: "In Stock", startDate: "2025-02-15" },
  { id: 15, name: "Gold Plated Earrings", price: "$70", quantity: 120, sale: "30%", stock: "In Stock", startDate: "2025-03-15" },
  { id: 16, name: "Crystal Hairband", price: "$25", quantity: 180, sale: "12%", stock: "In Stock", startDate: "2025-04-15" },
  { id: 17, name: "Beaded Necklace", price: "$20", quantity: 220, sale: "18%", stock: "In Stock", startDate: "2025-05-15" },
  { id: 18, name: "Gold Plated Ring", price: "$45", quantity: 150, sale: "10%", stock: "In Stock", startDate: "2025-06-15" },
  { id: 19, name: "Multi-layered Necklace", price: "$65", quantity: 80, sale: "20%", stock: "In Stock", startDate: "2025-07-15" },
  { id: 20, name: "Silver Cufflinks", price: "$35", quantity: 130, sale: "25%", stock: "In Stock", startDate: "2025-08-15" }
];

export default function AdminProducts() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
console.log(selectedProduct);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle page selection
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle Add Product
  const handleAddProduct = () => {
    setSelectedProduct(null);
    setShowModal(true);
  };

  // Handle Edit Product
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Handle View Product
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Handle Delete Product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  // Handle Submit (Add or Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProduct = {
      id: selectedProduct ? selectedProduct.id : Date.now(),
      name: formData.get("name"),
      price: formData.get("price"),
      quantity: formData.get("quantity"),
      sale: formData.get("sale"),
      stock: formData.get("stock"),
      startDate: formData.get("startDate"),
    };

    if (selectedProduct) {
      setProducts(
        products.map((product) => (product.id === selectedProduct.id ? newProduct : product))
      );
    } else {
      setProducts([...products, newProduct]);
    }

    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-5">
      {/* Page Title & Breadcrumb */}
      <div className="mb-5">
        <h1 className="text-3xl font-semibold">Products</h1>
        <nav className="text-sm text-gray-500">
          <span>Home</span> / <span>Admin</span> / <span>Products</span>
        </nav>
      </div>

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          {/* Items per page select */}
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 border rounded"
          >
            <option value={10}>10 items per page</option>
            <option value={20}>20 items per page</option>
            <option value={30}>30 items per page</option>
          </select>

          {/* Search Bar */}
          <div className="flex items-center border rounded p-2">
            <Search size={18} className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={handleSearchChange}
              className="outline-none"
            />
          </div>
        </div>

        {/* Add New Product Button */}
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddProduct}>
          <Plus size={18} className="mr-2" />
          Add New Product
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Product ID</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Sale</th>
            <th className="py-2 px-4 text-left">Stock</th>
            <th className="py-2 px-4 text-left">Start Date</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.slice(0, itemsPerPage).map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 flex items-center space-x-2">
                <img src={`https://via.placeholder.com/50`} alt="product-img" className="w-12 h-12 object-cover" />
                <span>{product.name}</span>
              </td>
              <td className="py-2 px-4">{product.id}</td>
              <td className="py-2 px-4">{product.price}</td>
              <td className="py-2 px-4">{product.quantity}</td>
              <td className="py-2 px-4">{product.sale}</td>
              <td className="py-2 px-4">{product.stock}</td>
              <td className="py-2 px-4">{product.startDate}</td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <button className="text-blue-500" onClick={() => handleViewProduct(product)}>
                  <Eye size={18} />
                </button>
                <button className="text-yellow-500" onClick={() => handleEditProduct(product)}>
                  <Edit size={18} />
                </button>
                <button className="text-red-500" onClick={() => handleDeleteProduct(product.id)}>
                  <Trash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">
          Showing {Math.min(itemsPerPage, filteredProducts.length)} of {filteredProducts.length} products
        </span>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
        </div>
      </div>

      {/* Modal for Add/Edit/View Product */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold">{selectedProduct ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <div className="mt-4">
                <label className="block">Product Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedProduct ? selectedProduct.name : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Price</label>
                <input
                  type="text"
                  name="price"
                  defaultValue={selectedProduct ? selectedProduct.price : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={selectedProduct ? selectedProduct.quantity : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Sale</label>
                <input
                  type="text"
                  name="sale"
                  defaultValue={selectedProduct ? selectedProduct.sale : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Stock</label>
                <input
                  type="text"
                  name="stock"
                  defaultValue={selectedProduct ? selectedProduct.stock : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  defaultValue={selectedProduct ? selectedProduct.startDate : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                />
              </div>

              <div className="mt-6 flex flex-col md:flex-row justify-between md:col-span-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                  {selectedProduct ? "Save Changes" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
