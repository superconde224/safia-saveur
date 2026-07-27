import { RESTAURANT_NAME } from "@/lib/products";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-wide text-orange-600">Cuisine africaine maison</p>
        <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-5xl">{RESTAURANT_NAME}</h1>
        <p className="mx-auto mt-4 max-w-xl text-stone-600">
          Des plats préparés avec des produits frais et beaucoup d&apos;amour. Composez votre commande
          en quelques clics, on s&apos;occupe du reste.
        </p>
        <a
          href="#menu"
          className="mt-6 inline-block rounded-full bg-orange-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-orange-700"
        >
          Voir nos saveurs
        </a>
      </div>
    </section>
  );
}
