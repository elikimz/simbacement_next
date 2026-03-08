import { Hero } from "@/app/components/home/Hero";
import { FeatureStrip } from "@/app/components/home/FeatureStrip";
import { AboutSection } from "@/app/components/home/AboutSection";
import { DealsSection } from "@/app/components/home/DealsSection";
import { ProductsShowcase } from "@/app/components/home/ProductsShowcase";
import { WhyMaisha } from "@/app/components/home/WhyMaisha";
import { PromoBanner } from "@/app/components/home/PromoBanner";
import { TestimonialsIntro } from "@/app/components/home/TestimonialsIntro";
import { TestimonialsSection } from "@/app/components/home/TestimonialsSection";
import { bannersAPI, productsAPI, dealsAPI } from "@/app/lib/api";

export const metadata = {
  title: "Simba Cement | Premium Building Materials in Kenya",
  description: "Your trusted supplier for genuine Simba Cement, steel roofing sheets, and quality construction materials. Fast delivery across Kenya.",
};

async function getHomeData() {
  try {
    const [bannersRes, productsRes, latestDealRes] = await Promise.all([
      bannersAPI.getActive(),
      productsAPI.getAll(),
      dealsAPI.getLatest().catch(() => ({ data: null })),
    ]);

    return {
      banners: bannersRes.data || [],
      products: productsRes.data || [],
      latestDeal: latestDealRes.data,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      banners: [],
      products: [],
      latestDeal: null,
    };
  }
}

export default async function HomePage() {
  const { banners, products, latestDeal } = await getHomeData();

  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-[1400px] px-6">
          <Hero banners={banners} />
        </div>
        <FeatureStrip />
        <AboutSection banners={banners} />
        <DealsSection deal={latestDeal} />
        <ProductsShowcase products={products} />
        <WhyMaisha banners={banners} />
        <PromoBanner banners={banners} />
        <TestimonialsIntro />
        <TestimonialsSection />
      </main>
    </div>
  );
}
