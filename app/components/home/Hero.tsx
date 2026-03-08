"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Banner } from "../../lib/api";

interface HeroProps {
  banners: Banner[];
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop";

export function Hero({ banners }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => {
    if (!banners || banners.length === 0) {
      return [
        {
          id: "fallback-1",
          image: FALLBACK_IMAGE,
          title: "Sheltering You\nToday & Tomorrow",
          description:
            "High quality galvanized and color steel roofing sheets with durable lifespan for a trusted shelter.",
          cta_text: "Shop Now",
          cta_href: "/products",
        },
      ];
    }

    const out: any[] = [];
    for (const b of banners) {
      const imgs = [...(b.images || [])].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
      
      // Move primary image to front
      const primaryIndex = imgs.findIndex(img => img.is_primary);
      if (primaryIndex > 0) {
        const [primary] = imgs.splice(primaryIndex, 1);
        imgs.unshift(primary);
      }

      if (imgs.length > 0) {
        imgs.forEach((img, idx) => {
          out.push({
            id: `${b.id}-${img.id || idx}`,
            image: img.url || FALLBACK_IMAGE,
            title: b.title || "",
            description: b.description || "",
            cta_text: b.cta_text || "Shop Now",
            cta_href: b.cta_href || "/products",
          });
        });
      } else {
        out.push({
          id: `${b.id}-fallback`,
          image: FALLBACK_IMAGE,
          title: b.title || "",
          description: b.description || "",
          cta_text: b.cta_text || "Shop Now",
          cta_href: b.cta_href || "/products",
        });
      }
    }
    return out;
  }, [banners]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToPrevious = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[520px] overflow-hidden rounded-3xl my-8">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide: any) => (
          <div
            key={slide.id}
            className="relative w-full h-full flex-shrink-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-10 md:px-14">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl whitespace-pre-line">
                  {slide.title}
                </h1>
                {slide.description && (
                  <p className="mt-6 text-lg text-white/80 max-w-2xl">
                    {slide.description}
                  </p>
                )}
                <a 
                  href={slide.cta_href}
                  className="mt-8 inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                  {slide.cta_text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-r-2xl p-3 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} className="text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-l-2xl p-3 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={32} className="text-gray-800" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 space-y-3">
          {slides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`block h-2 w-2 rounded-full transition ${
                index === activeSlide ? "bg-red-600" : "bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
