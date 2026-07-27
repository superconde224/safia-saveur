"use client";

import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import { PRODUCTS, type Product } from "@/lib/products";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartState = Record<string, number>; // productId -> quantity

type Action =
  | { type: "add"; productId: string }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "add": {
      const current = state[action.productId] ?? 0;
      return { ...state, [action.productId]: current + 1 };
    }
    case "remove": {
      const current = state[action.productId] ?? 0;
      if (current <= 1) {
        const next = { ...state };
        delete next[action.productId];
        return next;
      }
      return { ...state, [action.productId]: current - 1 };
    }
    case "setQuantity": {
      if (action.quantity <= 0) {
        const next = { ...state };
        delete next[action.productId];
        return next;
      }
      return { ...state, [action.productId]: action.quantity };
    }
    case "clear":
      return {};
    default:
      return state;
  }
}

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  subtotal: number;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {});

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = Object.entries(state)
      .map(([productId, quantity]) => {
        const product = PRODUCTS.find((p) => p.id === productId);
        if (!product) return null;
        return { product, quantity };
      })
      .filter((line): line is CartLine => line !== null);

    const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0);

    return {
      lines,
      itemCount,
      subtotal,
      addItem: (productId) => dispatch({ type: "add", productId }),
      removeItem: (productId) => dispatch({ type: "remove", productId }),
      setQuantity: (productId, quantity) => dispatch({ type: "setQuantity", productId, quantity }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
