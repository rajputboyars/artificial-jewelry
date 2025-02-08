// "use client"
import AdminNavbar from "@/components/AdminNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({children}) => {
 
  return (
    <div className="h-screen flex">
      <div>
        <Sidebar/>
      </div>
      <div className="w-full">
        <AdminNavbar/>
        <main className="overflow-y-scroll h-[80vh]" style={{scrollbarWidth:"none"}}>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
