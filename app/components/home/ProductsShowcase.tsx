"use client";

export function ProductsShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
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
                <p className="text-gray-600 text-sm mb-4">High quality materials</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-red-600">KES 3,500</span>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
