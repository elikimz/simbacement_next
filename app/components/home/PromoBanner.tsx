"use client";

export function PromoBanner() {
  return (
    <section className="py-16 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Limited Time Offer
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get up to 30% off on selected roofing materials
        </p>
        <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
