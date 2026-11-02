// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://halofisipol.com',
  integrations: [sitemap(), react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },fonts: [{
      provider: fontProviders.local(),
      name: "CowboyOutlaw",
      cssVariable: "--font-cowboy-outlaw",
      options: {
        variants: [{
          src: ['./src/fonts/CowboyOutlaw.otf'],
          weight: 'normal',
          style: 'normal'
        }]
      }
    }, 
  {
      provider: fontProviders.local(),
      name: "SatoshiVariable",
      cssVariable: "--font-satoshi-variable",
      options: {
        variants: [{
          src: ['./src/fonts/SatoshiVariable.ttf'],
          weight: 'normal',
          style: 'normal'
        }]
      }
    }]

});
