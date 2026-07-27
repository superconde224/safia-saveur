import type { CartLine } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

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

export function buildOrderEmailParams(lines: CartLine[], subtotal: number, customer: CustomerInfo) {
  const itemsText = lines
    .map((line) => `- ${line.quantity} x ${line.product.name} (${formatPrice(line.product.price)} / unité) = ${formatPrice(line.quantity * line.product.price)}`)
    .join("\n");

  return {
    customer_name: customer.name,
    customer_phone: customer.phone,
    order_mode: MODE_LABELS[customer.mode],
    delivery_address: customer.mode === "livraison" ? customer.address : "—",
    order_items: itemsText,
    order_total: formatPrice(subtotal),
    notes: customer.notes.trim() || "—",
  };
}
