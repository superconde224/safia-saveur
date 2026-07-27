"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export function MobileCartBar({ onOpenCart }: { onOpenCart: () => void }) {
  const { itemCount, subtotal } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-orange-100 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] sm:hidden">
      <button
        onClick={onOpenCart}
        className="flex w-full items-center justify-between rounded-full bg-orange-600 px-4 py-3 text-white"
      >
        <span className="text-sm font-medium">{itemCount} article{itemCount > 1 ? "s" : ""}</span>
        <span className="font-semibold">{formatPrice(subtotal)}</span>
        <span className="text-sm font-medium">Voir le panier</span>
      </button>
    </div>
  );
}
