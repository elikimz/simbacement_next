"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+254731030404";
  const whatsappNumber = "254731030404";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden sm:block">Genuine Simba Cement & Building Materials</div>
          <div className="flex gap-4 items-center">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Phone size={14} />
              <span>{phoneNumber}</span>
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition-colors font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-xl group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold group-hover:bg-red-700 transition-colors">
            S
          </div>
          <span className="text-indigo-900 group-hover:text-indigo-700 transition-colors">Simba Cement</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link href="/" className="text-gray-700 hover:text-red-600 transition">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-red-600 transition">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex gap-2 md:gap-4 items-center">
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ShoppingCart size={22} className="text-gray-700" />
            <span className="absolute top-0.5 right-0.5 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </Link>
          <Link href="/login" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <User size={22} className="text-gray-700" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-6 absolute w-full shadow-lg">
          <div className="flex flex-col gap-6 font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-red-600 transition text-lg">
              Home
            </Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-red-600 transition text-lg">
              Products
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-red-600 transition text-lg">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:text-red-600 transition text-lg">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
