import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "AlgoWizardry",
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kevinzunigacuellar/algowizardry",
        },
      ],
      sidebar: [
        {
          label: "Backtracking",
          autogenerate: {
            directory: "backtracking",
          },
        },
        {
          label: "Hash Table",
          autogenerate: {
            directory: "hash-table",
          },
        },
        {
          label: "Stack",
          autogenerate: {
            directory: "stack",
          },
        },
        {
          label: "Tree",
          autogenerate: {
            directory: "tree",
          },
        },
        {
          label: "Two Pointers",
          autogenerate: {
            directory: "two-pointers",
          },
        },
      ],
      customCss: ["./src/styles/custom.css", "@fontsource/ibm-plex-mono"],
      editLink: {
        baseUrl: "https://github.com/kevinzunigacuellar/algowizardry/edit/main",
      },
      components: {
        MarkdownContent: "./src/components/MarkdownContentWrapper.astro",
        Head: "./src/components/Head.astro",
      },
      expressiveCode: {
        themes: ["houston", "github-light"],
        styleOverrides: {
          codeFontFamily:
            "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },
        useStarlightUiThemeColors: true,
      },
    }),
    markdoc(),
  ],
  site: "https://algowizardry.kevinzc.com",
});
