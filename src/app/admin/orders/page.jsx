"use client";
import { useState } from "react";
import { Search, Plus, Eye, Edit, Trash, Download } from "lucide-react"; // Icons from lucide-react
import { jsPDF } from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // Import jsPDF autoTable plugin

const ordersData = [
  { id: 1, productName: "Golden Necklace", orderId: "ORD001", price: "$50", quantity: 1, payment: "Paid", status: "Shipped", tracking: "12345XYZ" },
  { id: 2, productName: "Silver Earrings", orderId: "ORD002", price: "$25", quantity: 2, payment: "Pending", status: "Processing", tracking: "67890ABC" },
  { id: 3, productName: "Pearl Bracelet", orderId: "ORD003", price: "$40", quantity: 1, payment: "Paid", status: "Delivered", tracking: "11223DEF" },
  { id: 4, productName: "Crystal Ring", orderId: "ORD004", price: "$30", quantity: 3, payment: "Paid", status: "Shipped", tracking: "44567GHI" },
  // Add more orders as needed
];

export default function AdminOrders() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState(ordersData);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Status options for editing
  const statusOptions = [
    "Not Shipped", "Shipped", "Processing", "Delivering", "Cancelled", "Pending", "Out for Delivery", "Returned"
  ];

  // Filter orders based on search
  const filteredOrders = orders.filter((order) =>
    order.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const currentOrders = filteredOrders.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Export all orders to PDF
  const exportOrdersToPDF = () => {
    const doc = new jsPDF();
    doc.text("All Orders", 14, 16);

    // Column headers
    const headers = ["Product Name", "Order ID", "Price", "Quantity", "Payment", "Status", "Tracking"];
    const rows = orders.map(order => [
      order.productName,
      order.orderId,
      order.price,
      order.quantity,
      order.payment,
      order.status,
      order.tracking
    ]);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 20,
    });

    doc.save("orders.pdf");
  };

  // Handle Edit Order (Only status can be edited)
  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // Handle View Order
  const handleViewOrder = (order) => {
    window.location.href = `/admin/orders/view?id=${order.id}`;
  };

  // Handle Delete Order
  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  // Handle Submit (Edit Order - Only update status)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedOrder = {
      ...selectedOrder,
      status: formData.get("status"), // Only update the status field
    };

    setOrders(
      orders.map((order) => (order.id === selectedOrder.id ? updatedOrder : order))
    );

    setShowModal(false); // Close modal after saving changes
  };

  return (
    <div className="container mx-auto p-5">
      {/* Page Title & Breadcrumb */}
      <div className="mb-5">
        <h1 className="text-3xl font-semibold">Orders</h1>
        <nav className="text-sm text-gray-500">
          <span>Home</span> / <span>Admin</span> / <span>Orders</span>
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
              placeholder="Search orders"
              value={searchTerm}
              onChange={handleSearchChange}
              className="outline-none"
            />
          </div>
        </div>

        {/* Export All Orders Button */}
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded" onClick={exportOrdersToPDF}>
          <Download size={18} className="mr-2" />
          Export All Orders
        </button>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Payment</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Tracking</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <td className="py-2 px-4 flex items-center space-x-2">
                <img src={`https://via.placeholder.com/50`} alt="product-img" className="w-12 h-12 object-cover" />
                <span>{order.productName}</span>
              </td>
              <td className="py-2 px-4">{order.orderId}</td>
              <td className="py-2 px-4">{order.price}</td>
              <td className="py-2 px-4">{order.quantity}</td>
              <td className="py-2 px-4">{order.payment}</td>
              <td className="py-2 px-4">{order.status}</td>
              <td className="py-2 px-4">{order.tracking}</td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <button className="text-blue-500" onClick={() => handleViewOrder(order)}>
                  <Eye size={18} />
                </button>
                <button className="text-yellow-500" onClick={() => handleEditOrder(order)}>
                  <Edit size={18} />
                </button>
                <button className="text-red-500" onClick={() => handleDeleteOrder(order.id)}>
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
          Showing {Math.min(itemsPerPage, filteredOrders.length)} of {filteredOrders.length} orders
        </span>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for Edit Order */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold">Edit Order</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block">Status</label>
                <select
                  name="status"
                  defaultValue={selectedOrder ? selectedOrder.status : ""}
                  className="w-full p-2 border rounded mt-2"
                  required
                >
                  {statusOptions.map((status, index) => (
                    <option key={index} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
