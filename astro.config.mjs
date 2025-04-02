// @ts-check
import netlify from "@astrojs/netlify";
import { defineConfig } from "astro/config";

export default defineConfig({
  // Site configuration
  site: "https://studentimpact.jp", // primary domain
  // trailingSlash: "never",
  output: "server", // Use 'static' if you don't need SSR
  adapter: netlify(),
  server: {
    host: true, // Enables network access
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  vite: {
    server: {
      allowedHosts: ["localhost", "studentimpact.jp", "japanccc.toh.is"],
    },
    resolve: {
      alias: {
        "@jccc": "/src/components/jccc",
        "@si": "/src/components/si",
        "@common": "/src/components/common",
      },
    },
  },
});
