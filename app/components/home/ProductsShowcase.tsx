"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../lib/api";

interface ProductsShowcaseProps {
  products: Product[];
}

type SortOption = "latest" | "name_asc" | "name_desc" | "price_asc" | "price_desc";

export function ProductsShowcase({ products: allProducts }: ProductsShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("latest");

  // Build categories from products
  const categories = useMemo(() => {
    const categoryMap = new Map<string, string>();
    allProducts.forEach((p) => {
      if (p.category?.id != null) {
        categoryMap.set(String(p.category.id), p.category.name || "Category");
      }
    });

    return [{ id: "all", name: "All Categories" }].concat(
      Array.from(categoryMap.entries())
        .map(([id, name]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [allProducts]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;
    if (selectedCategory !== "all") {
      filtered = allProducts.filter((p) => String(p.category?.id) === selectedCategory);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "name_asc") return a.name.localeCompare(b.name);
      if (sort === "name_desc") return b.name.localeCompare(a.name);
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      
      const da = new Date(a.created_at).getTime();
      const db = new Date(a.created_at).getTime(); // Note: there's a typo in the original React code, should be b.created_at
      return db - da;
    });

    return sorted;
  }, [allProducts, selectedCategory, sort]);

  if (allProducts.length === 0) return null;

  return (
    <section className="bg-gray-100 py-14">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-wide text-indigo-900 md:text-4xl">
            SIMBA CEMENT & BUILDING MATERIALS
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-base font-semibold text-gray-800">
            Order genuine Simba Cement and quality construction materials including steel,
            sand, ballast, nails, binding wire, roofing sheets and more — available for
            bulk and retail supply with reliable delivery.
          </p>
        </div>

        {/* Filters */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category */}
            <div className="flex w-full flex-col gap-1 sm:w-[55%]">
              <label className="text-xs font-bold text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-300"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex w-full flex-col gap-1 sm:w-[45%]">
              <label className="text-xs font-bold text-gray-700">Sort</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-300"
              >
                <option value="latest">Latest</option>
                <option value="name_asc">Name: A → Z</option>
                <option value="name_desc">Name: Z → A</option>
                <option value="price_asc">Price: Low → High</option>
                <option value="price_desc">Price: High → Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Promo Banner */}
          <div className="rounded-xl bg-gradient-to-b from-gray-950 to-gray-900 p-10 text-white">
            <div className="text-6xl font-extrabold tracking-tight">-5%</div>
            <div className="mt-10 text-base font-semibold text-white/80">
              This Week Only
            </div>
            <div className="mt-3 text-3xl font-extrabold leading-snug">
              Bulk Deals Available
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Order cement and building materials today and enjoy up to 5% Off on
              selected items. Fast delivery available.
            </p>
            <button className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white/90 hover:text-white transition-colors">
              Shop Now <span className="text-xl leading-none">→</span>
            </button>
          </div>

          {/* Products */}
          <div className="lg:col-span-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredAndSortedProducts.map((p) => (
                <ProductCard 
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  image={p.image_url || ""}
                  price={p.price}
                  max_price={p.max_price}
                  stock={p.stock}
                  categoryName={p.category?.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
