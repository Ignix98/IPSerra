import { getCollection, type CollectionEntry } from "astro:content";
import type { Language } from "./ui";
import { getTagPath } from "./tags";
import { isHome, localizePath, withoutLanguage } from "./utils";

export type LocalizedCollection = "projects" | "experiences" | "posts";
export type LocalizedEntry = CollectionEntry<LocalizedCollection>;

export async function getLocalizedCollection<C extends LocalizedCollection>(collection: C, language: Language) {
  const entries = (await getCollection(collection)).filter(entry => entry.data.lang === language);
  const keys = new Set<string>();
  for (const entry of entries) {
    if (keys.has(entry.data.translationKey)) throw new Error("Duplicate translationKey in " + collection + "/" + language + ": " + entry.data.translationKey);
    keys.add(entry.data.translationKey);
  }
  return entries;
}

export function getEntryPath(entry: LocalizedEntry): string {
  return localizePath("/" + entry.collection + "/" + entry.data.translationKey, entry.data.lang);
}

export async function getDetailPaths(collection: LocalizedCollection, language: Language) {
  return (await getLocalizedCollection(collection, language)).map(entry => ({
    params: { slug: entry.data.translationKey }, props: { entry },
  }));
}

// Only emit links to translations which really exist.
export async function getAlternatePaths(url: URL): Promise<Partial<Record<Language, string>>> {
  const route = withoutLanguage(decodeURIComponent(url.pathname));
  if (isHome(url.pathname) || route === "/projects" || route === "/experiences" || route === "/posts" || route === "/tags") {
    return { es: localizePath(route, "es"), en: localizePath(route, "en") };
  }
  if (route.startsWith("/tags/")) {
    const tag = route.slice("/tags/".length);
    const alternates: Partial<Record<Language, string>> = {};
    for (const language of ["es", "en"] as const) {
      if ((await getTagGroups(language)).has(tag)) alternates[language] = getTagPath(tag, language);
    }
    return alternates;
  }
  const match = route.match(/^\/(projects|experiences|posts)\/(.+)$/);
  if (!match) return {};
  const collection = match[1] as LocalizedCollection;
  const entries = await getCollection(collection);
  const alternates: Partial<Record<Language, string>> = {};
  for (const entry of entries.filter(entry => entry.data.translationKey === match[2])) {
    if (alternates[entry.data.lang]) throw new Error("Duplicate translation: " + route);
    alternates[entry.data.lang] = getEntryPath(entry);
  }
  return alternates;
}

export type TaggedEntry = LocalizedEntry | CollectionEntry<"books">;

export async function getTagGroups(language: Language): Promise<Map<string, TaggedEntry[]>> {
  const collections = await Promise.all([
    getLocalizedCollection("projects", language),
    getLocalizedCollection("experiences", language),
    getLocalizedCollection("posts", language),
  ]);
  const entries: TaggedEntry[] = collections.flat();
  // Books have no English content yet; retain existing Spanish entries only.
  if (language === "es") entries.push(...await getCollection("books"));
  const groups = new Map<string, TaggedEntry[]>();
  for (const entry of entries) {
    for (const tag of new Set(entry.data.tags ?? [])) {
      if (!tag) continue;
      const items = groups.get(tag) ?? [];
      items.push(entry);
      groups.set(tag, items);
    }
  }
  return groups;
}

export async function getTagDetailPaths(language: Language) {
  return Array.from(await getTagGroups(language), ([tag, items]) => ({
    params: { tag }, props: { tag, items },
  }));
}

export function getTaggedEntryPath(entry: TaggedEntry): string {
  return entry.collection === "books" ? "/books/" + entry.id : getEntryPath(entry);
}
