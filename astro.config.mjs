// @ts-check
import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server", // Use 'static' if you don't need SSR
  adapter: netlify(),
});
