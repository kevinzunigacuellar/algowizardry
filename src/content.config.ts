import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";

const difficulties = z.enum(["easy", "medium", "hard"]);

const schema = z.object({
  problemUrl: z.string().url().optional(),
  difficulty: difficulties.optional(),
});

export const collections = {
  docs: defineCollection({
    schema: docsSchema({ extend: schema }),
    loader: docsLoader(),
  }),
};
