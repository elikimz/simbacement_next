import type { Metadata } from "next";
import { Hero } from "@/app/components/home/Hero";
import { FeatureStrip } from "@/app/components/home/FeatureStrip";
import { AboutSection } from "@/app/components/home/AboutSection";
import { DealsSection } from "@/app/components/home/DealsSection";
import { ProductsShowcase } from "@/app/components/home/ProductsShowcase";
import { WhyMaisha } from "@/app/components/home/WhyMaisha";
import { PromoBanner } from "@/app/components/home/PromoBanner";
import { TestimonialsIntro } from "@/app/components/home/TestimonialsIntro";
import { TestimonialsSection } from "@/app/components/home/TestimonialsSection";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Home - Premium Building Materials & Roofing Solutions",
  description:
    "Discover Simba Cement's premium selection of galvanized and color steel roofing sheets, cement, and building materials. Trusted quality for your construction projects.",
  openGraph: {
    title: "Simba Cement - Home",
    description:
      "Premium building materials and roofing solutions for your construction needs.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <AboutSection />
        <DealsSection />
        <ProductsShowcase />
        <WhyMaisha />
        <PromoBanner />
        <TestimonialsIntro />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
