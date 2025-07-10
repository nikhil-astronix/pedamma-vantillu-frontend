import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-56 min-h-screen bg-emerald-50 border-r border-emerald-100 p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-emerald-900 mb-6">Admin Panel</h2>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <a className={`block px-4 py-2 rounded font-medium transition-colors ${pathname.startsWith(link.href) ? "bg-emerald-200 text-emerald-900" : "text-emerald-700 hover:bg-emerald-100"}`}>
            {link.label}
          </a>
        </Link>
      ))}
    </aside>
  );
};

export default AdminSidebar;
