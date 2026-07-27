import type { CartLine } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { RESTAURANT_EMAIL, RESTAURANT_NAME } from "@/lib/products";

export type OrderMode = "sur-place" | "emporter" | "livraison";

export type CustomerInfo = {
  name: string;
  phone: string;
  mode: OrderMode;
  address: string;
  notes: string;
};

const MODE_LABELS: Record<OrderMode, string> = {
  "sur-place": "Sur place",
  emporter: "À emporter",
  livraison: "Livraison",
};

export function buildOrderMailto(lines: CartLine[], subtotal: number, customer: CustomerInfo): string {
  const subject = `Nouvelle commande - ${RESTAURANT_NAME} - ${customer.name}`;

  const itemsText = lines
    .map((line) => `- ${line.quantity} x ${line.product.name} (${formatPrice(line.product.price)} / unité) = ${formatPrice(line.quantity * line.product.price)}`)
    .join("\n");

  const bodyLines = [
    `Client : ${customer.name}`,
    `Téléphone : ${customer.phone}`,
    `Mode : ${MODE_LABELS[customer.mode]}`,
  ];

  if (customer.mode === "livraison") {
    bodyLines.push(`Adresse de livraison : ${customer.address}`);
  }

  bodyLines.push("", "Commande :", itemsText, "", `Total : ${formatPrice(subtotal)}`);

  if (customer.notes.trim()) {
    bodyLines.push("", `Notes : ${customer.notes.trim()}`);
  }

  const body = bodyLines.join("\n");

  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", mailto needs %20 — replace after encoding.
  const query = params.toString().replace(/\+/g, "%20");

  return `mailto:${RESTAURANT_EMAIL}?${query}`;
}
