// Le site est exporté en statique et déployé sur GitHub Pages à
// https://superconde224.github.io/safia-saveur/ — d'où le basePath.
// Si un domaine personnalisé est branché plus tard (CNAME), passe BASE_PATH à "".
export const BASE_PATH = "/safia-saveur";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
