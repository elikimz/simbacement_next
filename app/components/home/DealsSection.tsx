"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { Deal } from "../../lib/api";

interface DealsSectionProps {
  deal: Deal | null;
}

function formatCountdown(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  const pad = (x: number) => String(x).padStart(2, "0");
  return `${pad(d)} : ${pad(h)} : ${pad(m)} : ${pad(s)}`;
}

export function DealsSection({ deal }: DealsSectionProps) {
  const [now, setNow] = useState(Date.now());

  const endsAt = useMemo(() => {
    if (!deal?.ends_at) return null;
    const t = new Date(deal.ends_at).getTime();
    return Number.isFinite(t) ? t : null;
  }, [deal?.ends_at]);

  useEffect(() => {
    if (!endsAt) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [endsAt]);

  if (!deal || !deal.products || deal.products.length === 0) {
    return null;
  }

  const countdownLabel = endsAt ? formatCountdown(endsAt - now) : "00 : 00 : 00 : 00";

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex flex-wrap items-center justify-between border-b pb-6">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-semibold text-red-500">{deal.title}</h2>

            <span className="rounded-full bg-red-500 px-6 py-2 text-sm font-semibold text-white font-mono">
              {countdownLabel}
            </span>

            <span className="hidden text-sm text-gray-400 md:block">
              Remains until the end of the offer
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {deal.products.map((p) => (
            <ProductCard 
              key={p.id}
              id={p.id}
              name={p.name}
              image={p.image_url || ""}
              price={p.deal_price || p.price}
              stock={p.stock}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
