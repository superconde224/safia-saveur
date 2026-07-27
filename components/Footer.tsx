import { RESTAURANT_ADDRESS, RESTAURANT_NAME, RESTAURANT_PHONE } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-orange-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-stone-500">
        <p className="font-semibold text-stone-800">{RESTAURANT_NAME}</p>
        <p className="mt-1">{RESTAURANT_ADDRESS}</p>
        <p>{RESTAURANT_PHONE}</p>
        <p className="mt-4 text-xs text-stone-400">
          © {new Date().getFullYear()} {RESTAURANT_NAME}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
