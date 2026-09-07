// Configure local Markdown and MDX collections with the Content Layer.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
// Define a loader and schema for each collection
const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    lang: z.enum(["es", "en"]),
    translationKey: z.string().min(1),
    title: z.string(),
    summary: z.string().optional(),
    startDate: z.date(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/experiences" }),
  schema: z.object({
    lang: z.enum(["es", "en"]),
    translationKey: z.string().min(1),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    company: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const bookCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    readYear: z.number(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    lang: z.enum(["es", "en"]),
    translationKey: z.string().min(1),
    title: z.string(),
    startDate: z.date(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
  experiences: experienceCollection,
  books: bookCollection,
  posts: postCollection,
};
