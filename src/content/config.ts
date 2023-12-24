import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const dataStructures = z.enum(["two pointers", "hash table", "stack", "tree"]);
const difficulties = z.enum(["easy", "medium", "hard"]);

const solutionSchema = z.object({
  type: z.literal("solution"),
  problemUrl: z.string().url(),
  difficulty: difficulties,
  dataStructures: z.array(dataStructures),
});

const baseSchema = z.object({
  type: z.literal("base").default("base"),
});

const schemas = z.union([solutionSchema, baseSchema]);

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: schemas }),
  }),
};
