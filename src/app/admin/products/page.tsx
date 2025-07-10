"use client";
import React, { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import { products as initialProducts } from "@/data/dummyData";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    category: "",
    tags: "",
    price: 0,
    image: "",
    description: "",
  });

  const handleEdit = (product: any) => {
    setEditProduct(product);
    setForm({ ...product, tags: product.tags.join(", ") });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    toast.success("Product deleted");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArr = form.tags.split(",").map((t) => t.trim()).filter(Boolean);
    if (editProduct) {
      setProducts((prev) => prev.map((p) => (p.id === form.id ? { ...form, tags: tagsArr } : p)));
      toast.success("Product updated");
    } else {
      setProducts((prev) => [
        ...prev,
        { ...form, id: Date.now(), tags: tagsArr },
      ]);
      toast.success("Product added");
    }
    setShowForm(false);
    setEditProduct(null);
    setForm({ id: 0, name: "", category: "", tags: "", price: 0, image: "", description: "" });
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-emerald-900">Manage Products</h1>
          <button onClick={() => { setShowForm(true); setEditProduct(null); setForm({ id: 0, name: "", category: "", tags: "", price: 0, image: "", description: "" }); }} className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition"><FiPlus /> Add Product</button>
        </div>
        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
              <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
                <button className="absolute top-3 right-3 text-2xl text-emerald-700" onClick={() => setShowForm(false)}>&times;</button>
                <h2 className="text-xl font-bold mb-4 text-emerald-900">{editProduct ? "Edit Product" : "Add Product"}</h2>
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  <input required placeholder="Name" className="border rounded px-3 py-2" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  <input required placeholder="Category" className="border rounded px-3 py-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} />
                  <input required placeholder="Tags (comma separated)" className="border rounded px-3 py-2" value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} />
                  <input required type="number" min={1} placeholder="Price" className="border rounded px-3 py-2" value={form.price} onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} />
                  <input required placeholder="Image URL" className="border rounded px-3 py-2" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} />
                  <textarea required placeholder="Description" className="border rounded px-3 py-2" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                  <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded font-semibold hover:bg-emerald-700 transition">{editProduct ? "Update" : "Add"} Product</button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 bg-white rounded-xl shadow">
            <thead>
              <tr className="text-left text-emerald-800">
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Tags</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-emerald-400 text-lg">No products found. Add your first product!</td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <motion.tr key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }}>
                      <td className="py-2 px-4 font-semibold text-emerald-900">{product.name}</td>
                      <td className="py-2 px-4">{product.category}</td>
                      <td className="py-2 px-4">{product.tags.join(", ")}</td>
                      <td className="py-2 px-4">₹{product.price}</td>
                      <td className="py-2 px-4"><img src={product.image} alt={product.name} className="w-14 h-14 object-cover rounded-lg" /></td>
                      <td className="py-2 px-4 flex gap-2">
                        <button onClick={() => handleEdit(product)} className="p-2 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition" title="Edit"><FiEdit2 /></button>
                        <button onClick={() => handleDelete(product.id)} className="p-2 rounded bg-red-100 text-red-700 hover:bg-red-200 transition" title="Delete"><FiTrash2 /></button>
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
