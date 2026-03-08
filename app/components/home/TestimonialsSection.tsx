"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Mwangi",
    role: "Contractor",
    content:
      "Excellent quality materials and fast delivery. Simba Cement is my go-to supplier.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mary Kipchoge",
    role: "Homeowner",
    content:
      "Great customer service and competitive prices. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Peter Ochieng",
    role: "Builder",
    content:
      "Reliable supplier with consistent quality. Been working with them for 3 years.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
