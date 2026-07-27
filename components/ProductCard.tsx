"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/products";
import { withBasePath } from "@/lib/site-config";

export function ProductCard({ product }: { product: Product }) {
  const { lines, addItem, removeItem } = useCart();
  const line = lines.find((l) => l.product.id === product.id);
  const quantity = line?.quantity ?? 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition hover:shadow-md">
      {product.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={withBasePath(product.photo)} alt={product.name} className="h-28 w-full object-cover" />
      ) : (
        <div className="flex h-28 w-full items-center justify-center bg-orange-50 text-4xl">
          {product.image}
        </div>
      )}

      <div className="flex flex-1 flex-col p-3">
        <h3 className="text-base font-semibold text-stone-900">{product.name}</h3>
        <p className="mt-0.5 flex-1 text-sm text-stone-500">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-semibold text-orange-700">{formatPrice(product.price)}</span>
          {quantity === 0 ? (
            <button
              onClick={() => addItem(product.id)}
              className="rounded-full bg-orange-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-orange-700 active:scale-95"
            >
              Ajouter
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-full bg-orange-50 px-1.5 py-1">
              <button
                onClick={() => removeItem(product.id)}
                aria-label={`Retirer un ${product.name}`}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-orange-700 shadow-sm active:scale-95"
              >
                −
              </button>
              <span className="w-4 text-center text-sm font-medium text-stone-800">{quantity}</span>
              <button
                onClick={() => addItem(product.id)}
                aria-label={`Ajouter un ${product.name}`}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-orange-700 shadow-sm active:scale-95"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
