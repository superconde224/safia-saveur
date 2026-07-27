"use client";

import { useCart } from "@/lib/cart-context";
import { RESTAURANT_NAME } from "@/lib/products";
import { withBasePath } from "@/lib/site-config";

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
        <a href="#top" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBasePath("/images/logo.png")} alt="" className="h-10 w-auto" />
          <span className="text-lg font-bold text-stone-900">{RESTAURANT_NAME}</span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md border border-orange-600 px-4 py-1.5 text-sm font-medium text-orange-600 transition hover:bg-orange-50 sm:inline-block"
          >
            Nous contacter
          </a>

          <button
            onClick={onOpenCart}
            aria-label="Ouvrir le panier"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-700 transition hover:bg-orange-100"
          >
            <CartIcon className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-xs font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}
