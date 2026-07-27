"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { OrderForm } from "@/components/OrderForm";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { lines, subtotal, addItem, removeItem } = useCart();
  const [step, setStep] = useState<"cart" | "form">("cart");

  function handleClose() {
    setStep("cart");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        aria-label="Fermer le panier"
        onClick={handleClose}
        className="absolute inset-0 bg-stone-900/40"
      />
      <div className="relative flex h-full w-full max-w-sm flex-col bg-white shadow-xl">
        {step === "cart" ? (
          <>
            <div className="flex items-center justify-between border-b border-orange-100 px-4 py-4">
              <h2 className="text-lg font-semibold text-stone-900">Votre panier</h2>
              <button onClick={handleClose} aria-label="Fermer" className="text-stone-400 hover:text-stone-600">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {lines.length === 0 ? (
                <p className="text-sm text-stone-500">Votre panier est vide.</p>
              ) : (
                <ul className="space-y-4">
                  {lines.map((line) => (
                    <li key={line.product.id} className="flex items-start gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-2xl">
                        {line.product.image}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-stone-900">{line.product.name}</p>
                        <p className="text-sm text-stone-500">{formatPrice(line.product.price)}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-orange-50 px-1.5 py-1">
                        <button
                          onClick={() => removeItem(line.product.id)}
                          aria-label={`Retirer un ${line.product.name}`}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-orange-700 shadow-sm"
                        >
                          −
                        </button>
                        <span className="w-4 text-center text-sm font-medium text-stone-800">{line.quantity}</span>
                        <button
                          onClick={() => addItem(line.product.id)}
                          aria-label={`Ajouter un ${line.product.name}`}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-orange-700 shadow-sm"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-orange-100 px-4 py-4">
              <div className="mb-3 flex items-center justify-between text-sm font-medium text-stone-700">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                onClick={() => setStep("form")}
                disabled={lines.length === 0}
                className="w-full rounded-full bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-stone-300"
              >
                Passer la commande
              </button>
            </div>
          </>
        ) : (
          <OrderForm onBack={() => setStep("cart")} onSubmitted={handleClose} />
        )}
      </div>
    </div>
  );
}
