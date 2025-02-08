"use client"
// import { Bell, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BarChart2, Bell, LayoutDashboard, List, Package, Settings, ShoppingCart, User, Users } from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: List },
    { name: "Reports", href: "/admin/reports", icon: BarChart2 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]
  

const AdminNavbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
          {navItems.find((item) => pathname.startsWith(item.href))?.name ||
            "Dashboard"}
        </h2>
        <div className="flex items-center">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative">
            <Bell className="h-6 w-6" />
          </button>
          <Link
            href="/profile"
            className="ml-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            <User className="h-6 w-6 mr-1" />
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
