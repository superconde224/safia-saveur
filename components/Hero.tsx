import { RESTAURANT_NAME } from "@/lib/products";
import { withBasePath } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:py-12">
        <p className="text-xs font-medium uppercase tracking-wide text-orange-600">Cuisine africaine fait maison</p>
        <h1 className="mt-1.5 text-2xl font-bold text-stone-900 sm:text-4xl">{RESTAURANT_NAME}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/images/profil-safia.jpg")}
          alt="Cuisinière préparant un plat Les Saveurs de Safia"
          className="mx-auto mt-4 h-36 w-36 rounded-full object-cover sm:h-48 sm:w-48"
        />
        <p className="mx-auto mt-3 max-w-xl text-sm text-stone-600">
          Des plats africains faits maison, généreux et pleins de saveurs. Commandez en ligne et
          profitez d&apos;une cuisine authentique, préparée avec passion et livrée chez vous.
        </p>
        <p className="mx-auto mt-1.5 max-w-xl text-sm font-semibold text-orange-700">
          Les Saveurs de Safia : l&apos;Afrique dans votre assiette !
        </p>
        <a
          href="#menu"
          className="mt-4 inline-block rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700"
        >
          Voir nos saveurs
        </a>
      </div>
    </section>
  );
}
