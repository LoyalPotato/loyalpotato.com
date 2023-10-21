import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://loyalpotato.dev/",
  integrations: [mdx(), sitemap(getSidemapConfig()), robots()]
});

function getSidemapConfig() {
  return {
    filter: (page) => !page.endsWith("/empty/")
  }
}