"use client";

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Simba Cement
            </h2>
            <p className="text-gray-600 mb-4">
              With over 10 years of experience in the building materials industry,
              Simba Cement has become a trusted name for quality products and
              excellent customer service.
            </p>
            <p className="text-gray-600 mb-6">
              We provide premium galvanized and color steel roofing sheets, cement,
              and other building materials to construction professionals and
              homeowners across Kenya.
            </p>
            <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
              Learn More
            </button>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">About Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
