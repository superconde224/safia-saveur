"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { buildOrderMailto, type OrderMode } from "@/lib/order";

const MODES: { id: OrderMode; label: string }[] = [
  { id: "sur-place", label: "Sur place" },
  { id: "emporter", label: "À emporter" },
  { id: "livraison", label: "Livraison" },
];

export function OrderForm({ onBack, onSubmitted }: { onBack: () => void; onSubmitted: () => void }) {
  const { lines, subtotal, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mode, setMode] = useState<OrderMode>("sur-place");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Merci de renseigner votre nom et votre téléphone.");
      return;
    }
    if (mode === "livraison" && !address.trim()) {
      setError("Merci de renseigner une adresse de livraison.");
      return;
    }
    setError("");

    const mailtoUrl = buildOrderMailto(lines, subtotal, {
      name: name.trim(),
      phone: phone.trim(),
      mode,
      address: address.trim(),
      notes,
    });

    window.location.href = mailtoUrl;
    clear();
    onSubmitted();
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
        <button type="button" onClick={onBack} className="text-sm font-medium text-orange-700">
          ← Retour au panier
        </button>

        <div>
          <label className="block text-sm font-medium text-stone-700">Nom</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">Téléphone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
            placeholder="Votre numéro"
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-stone-700">Mode de commande</span>
          <div className="mt-2 flex gap-2">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  mode === m.id ? "bg-orange-600 text-white" : "bg-orange-50 text-stone-600"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {mode === "livraison" && (
          <div>
            <label className="block text-sm font-medium text-stone-700">Adresse de livraison</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
              placeholder="Quartier, rue, repère..."
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-stone-700">Notes (optionnel)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
            placeholder="Allergies, préférences..."
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      <div className="border-t border-orange-100 px-4 py-4">
        <div className="mb-3 flex items-center justify-between text-sm font-medium text-stone-700">
          <span>Total</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Envoyer la commande par email
        </button>
      </div>
    </form>
  );
}
