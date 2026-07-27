"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("plats");

  const products = useMemo(
    () => PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="menu" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">Nos saveurs</h2>
      <p className="mt-1 text-center text-stone-500">Sélectionnez vos plats préférés et ajoutez-les au panier.</p>

      <div className="mt-6 -mx-4 flex justify-center gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.id
                ? "bg-orange-600 text-white"
                : "bg-orange-50 text-stone-600 hover:bg-orange-100"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
