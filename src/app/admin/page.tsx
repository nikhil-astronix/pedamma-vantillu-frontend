import React from "react";

export default function AdminDashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-gold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary rounded-xl shadow p-8 text-primary">
          <h2 className="text-xl font-semibold mb-4">Product Management</h2>
          <p>Manage products here (add/edit/delete).</p>
        </div>
        <div className="bg-secondary rounded-xl shadow p-8 text-primary">
          <h2 className="text-xl font-semibold mb-4">Order Management</h2>
          <p>View and manage orders here.</p>
        </div>
      </div>
    </main>
  );
}
