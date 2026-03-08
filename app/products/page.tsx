import type { Metadata } from "next";
import { productsAPI, categoriesAPI } from "@/app/lib/api";
import { ProductsList } from "@/app/components/products/ProductsList";

export const metadata: Metadata = {
  title: "Products - Simba Cement & Building Materials",
  description: "Browse our premium selection of genuine Simba Cement, steel roofing sheets, sand, ballast, and other quality construction materials in Kenya.",
  openGraph: {
    title: "Products - Simba Cement",
    description: "Browse our premium building materials collection",
  },
};

async function getProductsData() {
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      productsAPI.getAll(),
      categoriesAPI.getAll(),
    ]);

    return {
      products: productsRes.data || [],
      categories: categoriesRes.data || [],
    };
  } catch (error) {
    console.error("Error fetching products data:", error);
    return {
      products: [],
      categories: [],
    };
  }
}

export default async function ProductsPage() {
  const { products, categories } = await getProductsData();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-3xl">
            We supply a wide range of high-quality construction materials for all your building needs. 
            Filter by category or price to find exactly what you're looking for.
          </p>
        </div>

        <ProductsList initialProducts={products} categories={categories} />
      </main>
    </div>
  );
}
