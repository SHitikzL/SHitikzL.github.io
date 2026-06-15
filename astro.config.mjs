import { defineConfig, fontProviders } from "astro/config";

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shitikzl.github.io',
  integrations: [sitemap()],
  fonts: [
    //   {
    //   provider: fontProviders.fontsource(),
    //   name: "Manrope",
    //   cssVariable: "--font-manrope",
    //   // options: {
    //   //   variants: [{
    //   //     src: ['./src/assets/fonts/manrope.woff2'],
    //   //     weight: '400 600 700',
    //   //     style: 'normal'
    //   //   }]
    //   // }
    // },
    {
      provider: fontProviders.local(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      options: {
        variants: [{
          src: ['./src/assets/fonts/manrope-cyrillic-400-normal.woff2'],
          weight: '400',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/manrope-cyrillic-600-normal.woff2'],
          weight: '600',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/manrope-cyrillic-700-normal.woff2'],
          weight: '700',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/manrope-latin-400-normal.woff2'],
          weight: '400',
          style: 'normal',
          subsets: ['latin']
        },
        {
          src: ['./src/assets/fonts/manrope-latin-600-normal.woff2'],
          weight: '600',
          style: 'normal',
          subsets: ['latin']
        },
        {
          src: ['./src/assets/fonts/manrope-latin-700-normal.woff2'],
          weight: '700',
          style: 'normal',
          subsets: ['latin']
        },
        ]
      }
    },

    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [{
          src: ['./src/assets/fonts/inter-cyrillic-400-normal.woff2'],
          weight: '400',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/inter-cyrillic-500-normal.woff2'],
          weight: '500',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/inter-cyrillic-600-normal.woff2'],
          weight: '600',
          style: 'normal',
          subsets: ['cyrillic']
        },
        {
          src: ['./src/assets/fonts/inter-latin-400-normal.woff2'],
          weight: '400',
          style: 'normal',
          subsets: ['latin']
        },
        {
          src: ['./src/assets/fonts/inter-latin-500-normal.woff2'],
          weight: '500',
          style: 'normal',
          subsets: ['latin']
        },
        {
          src: ['./src/assets/fonts/inter-latin-600-normal.woff2'],
          weight: '600',
          style: 'normal',
          subsets: ['latin']
        },
        ]
      }
    }
  ],

});