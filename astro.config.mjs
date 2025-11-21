import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import lenis from "astro-lenis";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://paris.democraft.studio",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), mdx(), lenis(), sitemap()]
});