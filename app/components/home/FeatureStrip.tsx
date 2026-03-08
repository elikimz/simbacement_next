"use client";

import { Truck, Shield, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping across Kenya",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium materials with quality guarantee",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description: "10+ years of excellence",
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Icon size={32} className="text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
