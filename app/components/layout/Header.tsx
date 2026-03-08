"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>Free shipping on orders over KES 5,000</div>
          <div className="flex gap-4">
            <a href="tel:+254700000000" className="hover:text-gray-300">
              Call: +254 700 000 000
            </a>
            <a href="https://wa.me/254700000000" className="hover:text-gray-300">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="hidden sm:inline">Simba Cement</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-red-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-600 transition">
            Products
          </Link>
          <Link href="/deals" className="hover:text-red-600 transition">
            Deals
          </Link>
          <Link href="/about" className="hover:text-red-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex gap-4 items-center">
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link href="/login" className="p-2 hover:bg-gray-100 rounded-lg">
            <User size={24} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-red-600 transition">
              Products
            </Link>
            <Link href="/deals" className="hover:text-red-600 transition">
              Deals
            </Link>
            <Link href="/about" className="hover:text-red-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
