"use client";
import React, { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const initialOrders = [
  { id: 1, customer: "Ravi Kumar", items: 3, total: 720, status: "Pending" },
  { id: 2, customer: "Sita Devi", items: 2, total: 430, status: "Shipped" },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id: number, status: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    toast.success(`Order #${id} status updated to ${status}`);
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-emerald-900 mb-8">Manage Orders</h1>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 bg-white rounded-xl shadow">
            <thead>
              <tr className="text-left text-emerald-800">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Items</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-emerald-400 text-lg">No orders yet.</td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <motion.tr key={order.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }}>
                      <td className="py-2 px-4 font-semibold text-emerald-900">#{order.id}</td>
                      <td className="py-2 px-4">{order.customer}</td>
                      <td className="py-2 px-4">{order.items}</td>
                      <td className="py-2 px-4">₹{order.total}</td>
                      <td className="py-2 px-4">
                        <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)} className="border rounded px-2 py-1">
                          <option>Pending</option>
                          <option>Shipped</option>
                          <option>Delivered</option>
                          <option>Cancelled</option>
                        </select>
                      </td>
                      <td className="py-2 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : order.status === "Shipped" ? "bg-blue-100 text-blue-700" : order.status === "Delivered" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{order.status}</span>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
