"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function Footer() {
  const whatsappNumber = "254731030404";
  const phoneNumber = "+254731030404";
  const email = "simbacement775@gmail.com";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I’d like to place an order / inquire about delivery."
  )}`;
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Floating side buttons */}
      <div className="fixed right-4 bottom-6 z-[9999] flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
            <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor">
              <path d="M19.11 17.53c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.2-.52-.34z" />
              <path d="M26.67 5.33A13.9 13.9 0 0 0 16 .67C8.47.67 2.33 6.8 2.33 14.33c0 2.45.64 4.83 1.86 6.93L2 30.67l9.6-2.51a13.6 13.6 0 0 0 4.4.73c7.53 0 13.67-6.13 13.67-13.66 0-3.65-1.42-7.08-4-9.9zM16 26.67c-1.41 0-2.8-.27-4.1-.8l-.29-.12-5.7 1.5 1.52-5.55-.19-.29a11.9 11.9 0 0 1-1.86-6.34C5.38 8.3 10.1 3.58 16 3.58c3.16 0 6.12 1.23 8.35 3.46A11.7 11.7 0 0 1 27.8 15c0 5.9-4.8 11.67-11.8 11.67z" />
            </svg>
          </span>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-none">WhatsApp</div>
            <div className="text-xs opacity-90">Chat with us</div>
          </div>
        </a>

        {/* Call / Contact */}
        <a
          href={phoneLink}
          className="group flex items-center gap-3 rounded-full bg-indigo-700 px-4 py-3 text-white shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
          aria-label="Call us"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
            <Phone className="h-5 w-5" />
          </span>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold leading-none">Contact</div>
            <div className="text-xs opacity-90">Call us now</div>
          </div>
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-bold text-indigo-900 mb-6">About Us</h4>
          <p className="text-sm leading-7 text-gray-700">
            We are a trusted supplier of genuine Simba Cement and quality
            building materials across Kenya. Our mission is to provide strong,
            reliable and affordable construction products for both bulk
            and retail customers.
          </p>
        </div>

        {/* Need Help */}
        <div className="md:pl-10 md:border-l md:border-gray-200">
          <h4 className="text-lg font-bold text-indigo-900 mb-6">Need Help?</h4>
          <p className="text-sm font-bold text-gray-900 mb-2">{phoneNumber}</p>
          <div className="space-y-1 text-sm text-gray-500 mb-4">
            <p>Monday – Friday: 8:00 – 18:00</p>
            <p>Saturday: 9:00 – 15:00</p>
          </div>
          <a
            href={`mailto:${email}`}
            className="text-sm text-blue-600 hover:underline break-all"
          >
            {email}
          </a>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-bold text-indigo-900 mb-6">Customer Service</h4>
          <ul className="space-y-4 text-sm text-gray-800">
            <li className="hover:text-red-600 cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">My Account</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Track Orders</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Bulk Orders</li>
          </ul>
        </div>

        {/* Store Information */}
        <div>
          <h4 className="text-lg font-bold text-indigo-900 mb-6">Store Information</h4>
          <ul className="space-y-4 text-sm text-gray-800">
            <li><Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Delivery Info</li>
            <li className="hover:text-red-600 cursor-pointer transition-colors">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-900">
          <div className="flex gap-8">
            <div className="py-2">Fast & Reliable Delivery</div>
            <div className="py-2 border-l border-gray-200 pl-8">
              Bulk & Same Day Delivery Available
            </div>
          </div>
          <p className="text-gray-400 font-normal">
            Copyright 2026 © Simba Cement Wholesale Distributor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
