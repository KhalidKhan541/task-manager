"use client";
import Link from "next/link";
export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">Home</Link>
          <div className="space-x-4">
            <Link href="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <Link href="/auth/login" className="hover:text-blue-500">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
