import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const tags = z.enum([
  "two pointers",
  "hash table",
  "stack",
  "tree",
  "backtracking",
]);
const difficulties = z.enum(["easy", "medium", "hard"]);

const schema = z.object({
  problemUrl: z.string().url().optional(),
  difficulty: difficulties.optional(),
});

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: schema }),
  }),
};
