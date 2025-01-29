"use client"
import { useState } from "react";

const OrderPage = () => {
    const [order, setOrder] = useState({
        orderNumber: "123456",
        customerName: "John Doe",
        items: [
            { id: 1, name: "Product 1", quantity: 2, price: 25.0 },
            { id: 2, name: "Product 2", quantity: 1, price: 15.0 },
        ],
        total: 65.0,
        shippingAddress: "123 Main St, City, Country",
        orderStatus: "Shipped",
    });

    return (
        <div className="container mx-auto p-4 sm:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Order #{order.orderNumber}</h1>
                <p className="mt-2 text-lg sm:text-xl text-gray-600">Customer: {order.customerName}</p>

                <div className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Items</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full mt-4 table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">Product</th>
                                    <th className="px-4 py-2 text-left">Quantity</th>
                                    <th className="px-4 py-2 text-left">Price</th>
                                    <th className="px-4 py-2 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.items.map((item) => (
                                    <tr key={item.id} className="border-t">
                                        <td className="px-4 py-2">{item.name}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                        <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                                        <td className="px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Shipping Address</h2>
                    <p className="mt-2 text-gray-600">{order.shippingAddress}</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Order Status</h2>
                    <p className="mt-2 text-gray-600">{order.orderStatus}</p>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Total</h2>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
