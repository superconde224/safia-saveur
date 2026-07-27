import { RESTAURANT_NAME } from "@/lib/products";
import { withBasePath } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:py-20">
        <p className="text-sm font-medium uppercase tracking-wide text-orange-600">Cuisine africaine maison</p>
        <h1 className="mt-2 text-3xl font-bold text-stone-900 sm:text-5xl">{RESTAURANT_NAME}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/images/profil-safia.jpg")}
          alt="Cuisinière préparant un plat Les Saveurs de Safia"
          className="mx-auto mt-6 h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
        />
        <p className="mx-auto mt-4 max-w-xl text-stone-600">
          Des plats africains faits maison, généreux et pleins de saveurs. Commandez en ligne et
          profitez d&apos;une cuisine authentique, préparée avec passion et livrée chez vous.
        </p>
        <p className="mx-auto mt-2 max-w-xl font-semibold text-orange-700">
          Les Saveurs de Safia : l&apos;Afrique dans votre assiette !
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
