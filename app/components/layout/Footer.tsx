"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              S
            </div>
            Simba Cement
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Premium building materials and roofing solutions for your construction needs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/deals" className="hover:text-white transition">
                Deals
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white transition">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white transition">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-2">
              <Phone size={16} className="flex-shrink-0 mt-0.5" />
              <a href="tel:+254700000000" className="hover:text-white transition">
                +254 700 000 000
              </a>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="flex-shrink-0 mt-0.5" />
              <a href="mailto:info@simbacement.com" className="hover:text-white transition">
                info@simbacement.com
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="flex-shrink-0 mt-0.5" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2024 Simba Cement. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
