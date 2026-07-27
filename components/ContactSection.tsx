"use client";

import { useState, type FormEvent } from "react";
import { RESTAURANT_EMAIL } from "@/lib/products";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Merci de renseigner votre nom et votre message.");
      return;
    }
    setError("");

    const subject = `Message de contact - ${name.trim()}`;
    const body = [
      `Nom : ${name.trim()}`,
      email.trim() ? `Email / téléphone : ${email.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const params = new URLSearchParams({ subject, body });
    const query = params.toString().replace(/\+/g, "%20");
    window.location.href = `mailto:${RESTAURANT_EMAIL}?${query}`;
  }

  return (
    <section id="contact-form" className="mx-auto max-w-2xl px-4 py-14">
      <h2 className="text-center text-2xl font-bold text-stone-900 sm:text-3xl">Nous contacter</h2>
      <p className="mt-1 text-center text-stone-500">
        Une question, une remarque ? Écrivez-nous, on vous répond rapidement.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
          <label className="block text-sm font-medium text-stone-700">Email ou téléphone</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
            placeholder="Pour qu'on puisse vous répondre"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none"
            placeholder="Votre message"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-full bg-orange-600 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
}
