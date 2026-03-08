import type { Metadata } from "next";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { generateOrganizationSchema } from "@/app/lib/structured-data";

export const metadata: Metadata = {
  title: "About Us - Simba Cement's Story",
  description:
    "Learn about Simba Cement's mission, vision, and commitment to providing premium building materials for over 10 years.",
  openGraph: {
    title: "About Simba Cement",
    description:
      "Discover our story, mission, and commitment to quality building materials",
    type: "website",
  },
};

export default function AboutPage() {
  const schema = generateOrganizationSchema();

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Simba Cement</h1>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              To provide premium quality building materials and roofing solutions
              that empower construction professionals and homeowners to build
              lasting structures with confidence.
            </p>
            <p className="text-gray-600">
              We are committed to delivering exceptional products, competitive
              pricing, and outstanding customer service.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 mb-4">
              To be the most trusted and preferred supplier of building materials
              across Kenya, recognized for quality, reliability, and customer
              excellence.
            </p>
            <p className="text-gray-600">
              We envision a future where every construction project benefits from
              our premium products and expert support.
            </p>
          </div>
        </div>

        {/* History */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 mb-4">
              Founded over 10 years ago, Simba Cement started with a simple vision:
              to provide high-quality building materials at fair prices. What began
              as a small operation has grown into a trusted name in the construction
              industry.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have served thousands of satisfied customers,
              from individual homeowners to large construction companies. Our
              commitment to quality and customer satisfaction has never wavered.
            </p>
            <p className="text-gray-600">
              Today, Simba Cement continues to innovate and expand our product
              range, always keeping our customers' needs at the forefront of
              everything we do.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products. Every item is
                carefully selected and tested.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Integrity
              </h3>
              <p className="text-gray-600">
                We conduct our business with honesty and transparency, building
                trust with every customer.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product quality
                to customer service.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ✓ Premium Products
              </h3>
              <p className="text-gray-600">
                All our products meet international quality standards and are
                sourced from trusted manufacturers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ✓ Competitive Pricing
              </h3>
              <p className="text-gray-600">
                We offer the best value for money without compromising on quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ✓ Fast Delivery
              </h3>
              <p className="text-gray-600">
                We ensure timely delivery across Kenya with reliable logistics
                partners.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                ✓ Expert Support
              </h3>
              <p className="text-gray-600">
                Our team is available 24/7 to answer your questions and provide
                technical support.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
