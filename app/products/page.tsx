import type { Metadata } from "next";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Products - Browse Our Building Materials",
  description:
    "Shop our wide selection of premium building materials including roofing sheets, cement, and more.",
  openGraph: {
    title: "Products - Simba Cement",
    description: "Browse our premium building materials collection",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <aside className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Filters
              </h2>
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Roofing Sheets</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Cement</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Steel Products</span>
                  </label>
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  className="w-full"
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="bg-gray-300 h-48 flex items-center justify-center">
                    <span className="text-gray-500">Product {i}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Product {i}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      High quality building material
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-red-600">
                        KES 5,000
                      </span>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
