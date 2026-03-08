"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "../home/ProductCard";
import { Product, Category } from "../../lib/api";

interface ProductsListProps {
  initialProducts: Product[];
  categories: Category[];
}

export function ProductsList({ initialProducts, categories }: ProductsListProps) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number>(100000);

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        (p.category && selectedCategories.includes(p.category.id));
      const priceMatch = p.price <= priceRange;
      return categoryMatch && priceMatch;
    });
  }, [initialProducts, selectedCategories, priceRange]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      <aside className="md:col-span-1">
        <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {cat.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-900">Max Price</h3>
              <span className="text-sm font-bold text-red-600">Sh {priceRange.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Sh 0</span>
              <span>Sh 100,000+</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="md:col-span-3">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
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
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            <button 
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange(100000);
              }}
              className="mt-4 text-red-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
