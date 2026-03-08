"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Banner } from "../../lib/api";

interface AboutSectionProps {
  banners: Banner[];
}

const SWITCH_MS = 10000;

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

function pickDifferentRandom(urls: string[], current: string | null) {
  if (!urls.length) return null;
  if (urls.length === 1) return urls[0];
  let next = current;
  while (next === current) {
    next = urls[Math.floor(Math.random() * urls.length)];
  }
  return next;
}

export function AboutSection({ banners }: AboutSectionProps) {
  const images = useMemo(() => collectAllImages(banners), [banners]);
  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!images.length) {
      setCurrentImg(null);
      return;
    }
    setCurrentImg((prev) => pickDifferentRandom(images, prev));
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => pickDifferentRandom(images, prev));
    }, SWITCH_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images]);

  if (!currentImg) return null;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-2xl font-bold leading-snug text-indigo-900 md:text-3xl">
              SIMBA CEMENT & <br />
              BUILDING MATERIALS YOU CAN TRUST
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600">
              We supply genuine Simba Cement and a wide range of construction
              materials at affordable prices for homes, contractors, and project
              sites across Kenya. From cement and steel to sand, ballast,
              binding wire, nails and roofing sheets, our focus is on durable,
              reliable, and cost-effective products that help you build strong
              and finish on time.
            </p>
          </div>

          {/* RIGHT IMAGE (from backend, random switching) */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={currentImg}
              alt="Simba Cement and building materials"
              className="h-auto w-full object-contain transition-opacity duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
