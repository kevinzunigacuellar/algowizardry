import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: (ctx) =>
      docsSchema()(ctx).extend({
        problemUrl: z.string().url().optional(),
        difficulty: z.enum(["easy", "medium", "hard"]).optional(),
        dataStructures: z
          .array(z.enum(["two pointers", "hash table", "stack"]))
          .optional(),
      }),
  }),
};
