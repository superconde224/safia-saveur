import {
  RESTAURANT_FACEBOOK_URL,
  RESTAURANT_TIKTOK_URL,
  RESTAURANT_WHATSAPP_URL,
} from "@/lib/products";

export function SocialBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 flex h-12 items-center justify-center gap-6 border-t border-orange-100 bg-white">
      <a
        href={RESTAURANT_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="text-stone-500 transition hover:text-orange-600"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
      <a
        href={RESTAURANT_FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Suivez-nous sur Facebook"
        className="text-stone-500 transition hover:text-orange-600"
      >
        <FacebookIcon className="h-5 w-5" />
      </a>
      <a
        href={RESTAURANT_TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Suivez-nous sur TikTok"
        className="text-stone-500 transition hover:text-orange-600"
      >
        <TikTokIcon className="h-5 w-5" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.32a8.22 8.22 0 1 1 6.99 3.89Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.53c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.43 1.46-1.43h1.56V4.65c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.91v2.18H8.06v2.93h2.38V21h3.06Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 2h-2.63v13.3a2.6 2.6 0 1 1-1.87-2.5V9.9a5.4 5.4 0 1 0 4.5 5.32V8.1a6.9 6.9 0 0 0 4 1.28V6.75A4.28 4.28 0 0 1 16.5 2Z" />
    </svg>
  );
}
