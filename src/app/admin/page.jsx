"use client"
import { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Import icons from lucide-react
import { ShoppingCart, Users, Box, Wallet, PlusCircle, BarChart2, PieChart } from 'lucide-react'; // Updated import

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Dummy data for illustration
  const [totalSales, setTotalSales] = useState(120000);
  const [totalOrders, setTotalOrders] = useState(340);
  const [totalProducts, setTotalProducts] = useState(52);
  const [newUsers, setNewUsers] = useState(15);

  // Monthly sales data
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales Trend (Monthly)',
        data: [10000, 12000, 8000, 15000, 20000, 25000, 30000],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  // Bar chart for monthly user registrations
  const userRegistrations = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Users (Monthly)',
        data: [5, 10, 7, 12, 8, 15, 20],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie chart for new user demographics (e.g., region)
  const userDemographics = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99'],
      },
    ],
  };

  // Yearly sales bar chart
  const yearlySales = {
    labels: ['2023', '2024'],
    datasets: [
      {
        label: 'Total Sales (Yearly)',
        data: [200000, 350000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Net profit calculation and graph
  const netProfit = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Net Profit',
        data: [5000, 8000, 4000, 10000, 15000, 20000, 25000],
        fill: false,
        borderColor: '#ffcc00',
        tension: 0.1,
      },
    ],
  };

  // New products over the months
  const newProducts = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'New Products Added',
        data: [2, 4, 3, 5, 2, 6, 7],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Simulate updating stats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSales(prevSales => prevSales + Math.floor(Math.random() * 5000));
      setTotalOrders(prevOrders => prevOrders + Math.floor(Math.random() * 20));
      setTotalProducts(prevProducts => prevProducts + Math.floor(Math.random() * 3));
      setNewUsers(prevNewUsers => prevNewUsers + Math.floor(Math.random() * 5));
    }, 5000); // Update stats every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-white mb-6">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Total Sales</p>
              <p className="text-3xl font-bold">${totalSales.toLocaleString()}</p>
            </div>
            <div className="text-5xl text-white opacity-75">
              <Wallet />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Total Orders</p>
              <p className="text-3xl font-bold">{totalOrders}</p>
            </div>
            <div className="text-5xl text-white opacity-75">
              <Box />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">Total Products</p>
              <p className="text-3xl font-bold">{totalProducts}</p>
            </div>
            <div className="text-5xl text-white opacity-75">
              <ShoppingCart />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <p className="text-xl font-semibold">Manage Products</p>
            <p className="mt-2">Add, update, or delete products</p>
            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
              Go to Products
            </button>
          </div>

          <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <p className="text-xl font-semibold">Manage Users</p>
            <p className="mt-2">Add, update, or delete users</p>
            <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
              Go to Users
            </button>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <p className="text-xl font-semibold">View Orders</p>
            <p className="mt-2">Manage all your orders</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out">
              Go to Orders
            </button>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8">
          {/* Monthly Sales */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sales Trend (Monthly)</h2>
            <div className="h-64">
              <Line data={salesData} />
            </div>
          </div>

          {/* User Registrations (Bar Chart) */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Users (Monthly)</h2>
            <div className="h-64">
              <Pie data={userRegistrations} />
            </div>
          </div>

          {/* User Demographics (Pie Chart) */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Demographics</h2>
            <div className="h-64">
              <Pie data={userDemographics} />
            </div>
          </div>

          {/* Yearly Sales */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sales (Yearly)</h2>
            <div className="h-64">
              <Pie data={yearlySales} />
            </div>
          </div>

          {/* Net Profit */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Net Profit</h2>
            <div className="h-64">
              <Line data={netProfit} />
            </div>
          </div>

          {/* New Products */}
          <div className="bg-white p-6 rounded-xl shadow-xl mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Products Added</h2>
            <div className="h-64">
              <Pie data={newProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
