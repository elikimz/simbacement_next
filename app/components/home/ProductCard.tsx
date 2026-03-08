"use client";

import { useMemo } from "react";
import { Heart, RefreshCcw, Eye, Package, Ban } from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number | string;
  max_price?: number | string | null;
  stock: number;
  categoryName?: string;
  availableInText?: string;
}

const WHATSAPP_NUMBER = "254731030404";
const CALL_NUMBER = "+254731030404";

function toNumber(v: unknown): number | null {
  if (v == null) return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string") {
    const t = v.trim();
    if (!t) return null;
    const cleaned = t.replace(/,/g, "").replace(/[^\d.]+/g, "");
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function formatKES(n: number): string {
  return `Sh ${n.toLocaleString()}`;
}

function formatPriceRange(minVal: unknown, maxVal: unknown): string {
  const minN = toNumber(minVal);
  const maxN = toNumber(maxVal);

  if (minN == null && typeof minVal === "string" && minVal.trim()) {
    return minVal.trim();
  }

  if (minN == null) return "—";
  if (maxN == null) return formatKES(minN);
  if (maxN < minN) return formatKES(minN);
  if (maxN === minN) return formatKES(minN);

  return `${formatKES(minN)} - ${formatKES(maxN)}`;
}

export function ProductCard({
  id,
  image,
  name,
  price,
  max_price,
  stock,
  categoryName,
  availableInText,
}: ProductCardProps) {
  const displayPrice = useMemo(
    () => formatPriceRange(price, max_price),
    [price, max_price]
  );

  const inStock = stock > 0;
  const waText = encodeURIComponent(`Hi, I want to order: ${name}`);
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <div className="group w-full cursor-pointer text-left outline-none bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-square w-full">
          <img
            src={image || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop"}
            alt={name}
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur hover:bg-black/35 transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur">
            <RefreshCcw className="h-4 w-4" />
          </div>
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur">
            <Eye className="h-4 w-4" />
          </div>
        </div>

        {categoryName && (
          <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {categoryName}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="min-w-0 flex-1 line-clamp-2 text-sm font-semibold text-gray-900">
            {name}
          </h4>
          <span className={`shrink-0 whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
            inStock ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"
          }`}>
            {inStock ? "In stock" : "Out of stock"}
          </span>
        </div>

        <div className="mt-2">
          <p className="text-base font-extrabold tracking-tight text-gray-900">
            {displayPrice}
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-gray-600">
          <span className={`inline-flex h-7 w-7 items-center justify-center rounded-xl ${
            inStock ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
          }`}>
            {inStock ? <Package className="h-4 w-4" /> : <Ban className="h-4 w-4" />}
          </span>
          <span>{inStock ? "Ready to ship" : "Currently unavailable"}</span>
        </div>

        <div className="mt-3 overflow-hidden max-h-0 opacity-0 transition-all duration-300 group-hover:max-h-[220px] group-hover:opacity-100 md:group-hover:max-h-[220px]">
          <div className="text-xs text-gray-700">
            <span className="text-gray-500">Available in:</span>{" "}
            <span className="font-medium text-gray-800">
              {availableInText ?? "Ask seller for details"}
            </span>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-emerald-700 transition"
            >
              Order via WhatsApp
            </a>
            <a
              href={`tel:${CALL_NUMBER}`}
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-900 bg-transparent px-4 py-2.5 text-sm font-extrabold text-gray-900 hover:bg-gray-50 transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
