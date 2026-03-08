import type { Metadata } from "next";
import { dealsAPI } from "@/app/lib/api";
import { DealsSection } from "@/app/components/home/DealsSection";

export const metadata: Metadata = {
  title: "Special Deals - Limited Time Offers on Building Materials",
  description: "Save big on Simba Cement, steel roofing sheets, and other construction materials. Limited time offers and bulk discounts available.",
};

async function getDealsData() {
  try {
    const res = await dealsAPI.getLatest();
    return res.data;
  } catch (error) {
    console.error("Error fetching deals:", error);
    return null;
  }
}

export default async function DealsPage() {
  const latestDeal = await getDealsData();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Deals</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on our current promotions. These offers are for a limited time only 
            and while stocks last.
          </p>
        </div>

        {latestDeal ? (
          <DealsSection deal={latestDeal} />
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Active Deals</h2>
            <p className="text-gray-500">
              We don't have any active flash sales right now. Check back later or 
              browse our regular products for great prices.
            </p>
            <a 
              href="/products" 
              className="mt-6 inline-block px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all"
            >
              Browse Products
            </a>
          </div>
        )}

        {/* Additional Deals Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-indigo-50 rounded-2xl">
            <h3 className="text-xl font-bold text-indigo-900 mb-4">Bulk Discounts</h3>
            <p className="text-indigo-800/80 text-sm leading-relaxed">
              Ordering for a large project? Contact us for specialized wholesale pricing 
              on full truckloads of Simba Cement and bulk steel orders.
            </p>
          </div>
          <div className="p-8 bg-emerald-50 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Loyalty Program</h3>
            <p className="text-emerald-800/80 text-sm leading-relaxed">
              Frequent builders and contractors enjoy special perks and early access 
              to our best deals. Register an account to start saving.
            </p>
          </div>
          <div className="p-8 bg-rose-50 rounded-2xl">
            <h3 className="text-xl font-bold text-rose-900 mb-4">Flash Sales</h3>
            <p className="text-rose-800/80 text-sm leading-relaxed">
              Follow us on social media or check this page regularly for 24-hour 
              price drops on essential construction materials.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
