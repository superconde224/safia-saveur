/**
 * Logo temporaire pour Safia Saveur — à remplacer par le vrai logo du restaurant
 * (voir README pour la marche à suivre).
 */
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Logo Safia Saveur">
      <circle cx="32" cy="32" r="30" fill="#B5451B" />
      <circle cx="32" cy="32" r="24" fill="#F2A65A" />
      <path
        d="M32 14c-6 0-9 5-9 11 0 4 2 7 5 9v14a4 4 0 0 0 8 0V34c3-2 5-5 5-9 0-6-3-11-9-11Z"
        fill="#FFF7ED"
      />
      <path d="M23 20v10M32 20v10M41 20v10" stroke="#B5451B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
