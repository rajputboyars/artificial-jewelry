"use client"
import React from 'react'
import { usePathname } from "next/navigation"
import { BarChart2, Bell, LayoutDashboard, List, Package, Settings, ShoppingCart, User, Users } from "lucide-react";
import Link from 'next/link'

const navItems = [
    { name: "Dashboard", href: "/admin/", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: List },
    { name: "Reports", href: "/admin/reports", icon: BarChart2 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]
  



const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div>
      <aside className="w-64 bg-white shadow-md min-h-screen">
                <div className="p-4">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
                </div>
                <nav className="mt-4">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href)
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-4 py-2 text-gray-700 ${isActive ? "bg-gray-200" : "hover:bg-gray-100"
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-2" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </aside>
    </div>
  )
}

export default Sidebar
