"use client";
import { useEffect, useRef } from "react";
import { TopBanner } from "@/components/TopBanner";
import { BottomBanner } from "@/components/BottomBanner";
import { getProductBySlug } from "@/public/lib/products";
import * as React from "react";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = getProductBySlug(slug);

  if (!product) return <div>Product not found</div>;

  return (

    <main className="min-h-screen bg-white flex flex-col">
      <TopBanner />
      <img src={product.src} className="w-100"/>
      <h1>{product.name}</h1>
      <p>{product.price}</p>

        {/* TEMPORARY SPACER */}
        {<div className="h-[200vh] bg-stone-100" />}

      <BottomBanner />
    </main>
  );
}