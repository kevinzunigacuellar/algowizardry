import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "slug",
  getImageOptions: (_path, { data }) => {
    return {
      title: data.title,
      description: data.description,
      bgGradient: [[24, 24, 27]],
      border: { color: [169, 171, 233], width: 15 },
      padding: 120,
    };
  },
});
