import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  output: "server",
  site: "https://br.analyzemydream.com/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    isProduction && partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ].filter(Boolean), 
  adapter: netlify(),
});
