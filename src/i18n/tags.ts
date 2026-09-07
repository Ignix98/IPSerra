import type { Language } from "./ui";

const tags: Record<string, string> = {
  "Programación": "Programming", "Algoritmia": "Algorithms", "En proceso": "In progress",
  "Historia de la tecnología": "Technology history", "Videojuegos": "Video games",
  "Robótica": "Robotics", "Gemelo digital": "Digital twin", "Diseño mecánico": "Mechanical design",
  "Sistemas Empotrados": "Embedded systems", "Concurrencia": "Concurrency", "Linux Embebido": "Embedded Linux",
  "Verificación": "Verification", "Interfaces de video": "Video interfaces",
  "Automatizacion de pruebas": "Test automation", "Analisis de logs": "Log analysis",
  "Base de datos": "Databases", "Desarrollo de aplicaciones": "Application development",
  "Electrónica": "Electronics", "Instrumentación": "Instrumentation",
  "Bancos de prueba": "Test benches", "Señales": "Signals", "Validación HW": "Hardware validation",
};
export function translateTag(tag: string, language: Language) { return language === "en" ? tags[tag] ?? tag : tag; }

export function getTagPath(tag: string, language: Language): string {
  return (language === "en" ? "/en" : "") + "/tags/" + encodeURIComponent(tag);
}
