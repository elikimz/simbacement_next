"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Banner } from "../../lib/api";

interface PromoBannerProps {
  banners: Banner[];
}

const CHANGE_INTERVAL = 10000;

function collectAllImages(banners: Banner[]): string[] {
  if (!banners?.length) return [];
  const urls: string[] = [];
  for (const b of banners) {
    const imgs = Array.isArray(b.images) ? b.images : [];
    for (const img of imgs) {
      if (img?.url) urls.push(img.url);
    }
  }
  return Array.from(new Set(urls));
}

export function PromoBanner({ banners }: PromoBannerProps) {
  const images = useMemo(() => collectAllImages(banners), [banners]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIndex(0);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, CHANGE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  if (!images.length) return null;

  const currentImage = images[index];

  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="relative overflow-hidden rounded-3xl min-h-[320px]">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(\'${currentImage}\')` }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Right image (visible on md+) */}
          <img
            src={currentImage}
            alt="Promotion"
            className="absolute bottom-0 right-0 hidden h-[85%] w-auto md:block transition-opacity duration-700"
            loading="lazy"
          />

          {/* Content */}
          <div className="relative z-10 grid h-full items-center p-8 md:p-12">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full bg-indigo-900/90 px-3 py-1.5 text-xs font-medium text-white">
                Limited Offer
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Get Genuine Simba Cement & <br />
                Building Materials at Great Prices
              </h2>

              <p className="mt-4 text-sm text-white/70">
                Bulk and retail supply available for cement, steel, sand,
                ballast, roofing sheets and more.
              </p>

              <a
                href="/products"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                Order Now <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
