"use client"
import { useState, useEffect } from "react";
import { Card, Text, Metric, Flex, Grid, DonutChart, Title, LineChart } from "@tremor/react";
import { ShoppingCart, Users, AlertTriangle } from "lucide-react";

// Simulated data - replace with actual API calls
const salesData = [
  { date: "Jan", sales: 2000 },
  { date: "Feb", sales: 1800 },
  { date: "Mar", sales: 2200 },
  { date: "Apr", sales: 2500 },
  { date: "May", sales: 2300 },
  { date: "Jun", sales: 3000 },
];

const inventoryData = [
  { name: "In Stock", value: 70 },
  { name: "Low Stock", value: 20 },
  { name: "Out of Stock", value: 10 },
];

export default function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);

  useEffect(() => {
    // Simulating real-time updates
    const eventSource = new EventSource("/api/dashboard-metrics");
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTotalSales(data.totalSales);
      setActiveUsers(data.activeUsers);
      setPendingOrders(data.pendingOrders);
    };
    return () => eventSource.close();
  }, []);

  return (
    <div className="space-y-6">
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-6">
        <Card decoration="top" decorationColor="blue">
          <Flex justifyContent="start" className="space-x-4">
            <ShoppingCart size={36} className="text-blue-500" />
            <div className="truncate">
              <Text>Total Sales</Text>
              <Metric>${totalSales.toLocaleString()}</Metric>
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="green">
          <Flex justifyContent="start" className="space-x-4">
            <Users size={36} className="text-green-500" />
            <div className="truncate">
              <Text>Active Users</Text>
              <Metric>{activeUsers.toLocaleString()}</Metric>
            </div>
          </Flex>
        </Card>
        <Card decoration="top" decorationColor="yellow">
          <Flex justifyContent="start" className="space-x-4">
            <AlertTriangle size={36} className="text-yellow-500" />
            <div className="truncate">
              <Text>Pending Orders</Text>
              <Metric>{pendingOrders}</Metric>
            </div>
          </Flex>
        </Card>
      </Grid>

      <Grid numItems={1} numItemsLg={2} className="gap-6">
        <Card>
          <Title>Revenue Trend</Title>
          <LineChart
            className="mt-6"
            data={salesData}
            index="date"
            categories={["sales"]}
            colors={["blue"]}
            valueFormatter={(number) => `$${number.toLocaleString()}`}
            yAxisWidth={48}
          />
        </Card>
        <Card>
          <Title>Inventory Status</Title>
          <DonutChart
            className="mt-6"
            data={inventoryData}
            category="value"
            index="name"
            valueFormatter={(number) => `${number}%`}
            colors={["green", "yellow", "red"]}
          />
        </Card>
      </Grid>

      <Card>
        <Title>Quick Actions</Title>
        <Flex className="mt-4 space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add New Product
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            View Reports
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            Manage Orders
          </button>
        </Flex>
      </Card>
    </div>
  );
}
