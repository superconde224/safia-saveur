"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONTACT_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from "@/lib/emailjs-config";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError("Merci de renseigner votre nom et votre message.");
      return;
    }
    setError("");
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          customer_name: name.trim(),
          customer_contact: email.trim() || "—",
          message: message.trim(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
    } catch {
      setError("L'envoi a échoué. Réessaie dans un instant ou contacte-nous directement.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact-form" className="mx-auto max-w-2xl px-4 py-10">
      <h2 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">Nous contacter</h2>
      <p className="mt-1 text-center text-sm text-stone-500">
        Une question, une remarque ? Écrivez-nous, on vous répond rapidement.
      </p>

      {sent ? (
        <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
          Merci, votre message a bien été envoyé !
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <div>
            <label className="block text-sm font-medium text-stone-700">Nom</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-terracotta-500 focus:outline-none"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">Email ou téléphone</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-terracotta-500 focus:outline-none"
              placeholder="Pour qu'on puisse vous répondre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm focus:border-terracotta-500 focus:outline-none"
              placeholder="Votre message"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-terracotta-600 py-3 font-semibold text-white transition hover:bg-terracotta-700 disabled:cursor-not-allowed disabled:bg-stone-300"
          >
            {sending ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      )}
    </section>
  );
}
