import { ui, type Language } from "./ui";

export function getLanguage(url: URL): Language {
  return /^\/en(?:\/|$)/.test(url.pathname) ? "en" : "es";
}
export function withoutLanguage(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/+$/, "") || "/";
}
export function isHome(pathname: string): boolean {
  return withoutLanguage(pathname) === "/";
}
export function isLocalizedPath(pathname: string): boolean {
  const route = withoutLanguage(pathname);
  return route === "/" || /^\/(projects|experiences|posts|tags)(?:\/|$)/.test(route);
}
export function localizePath(pathname: string, language: Language): string {
  if (!isLocalizedPath(pathname)) return pathname;
  const route = withoutLanguage(pathname);
  return language === "en" ? "/en" + (route === "/" ? "/" : route) : route;
}
export function getUI(language: Language) { return ui[language]; }
export const locales: Record<Language, string> = { es: "es-ES", en: "en-GB" };
