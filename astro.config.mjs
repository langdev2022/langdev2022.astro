// @ts-check

import mdx from '@astrojs/mdx';
//import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://astro.build/config
export default defineConfig({
	site: 'https://langdev2022.github.io/',
    compressHTML: false,
	integrations: [mdx()],
    vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: './src/assets/*.png', // Source path
            dest: 'assets', // Destination in dist/
          },
        ],
      }),
    ],
  },
    //integrations: [mdx(), sitemap()],
    markdown: {
        shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: 'one-light',
        // Add custom languages
        // Note: Shiki has countless langs built-in, including .astro!
        // https://github.com/shikijs/shiki/blob/main/docs/languages.md
        langs: [],
        // Enable word wrap to prevent horizontal scrolling
        wrap: true,
        },
  },    
});


// // @ts-check
// import { defineConfig } from 'astro/config';
// import starlight from '@astrojs/starlight';




// // https://astro.build/config
// export default defineConfig({
//     compressHTML: false,

//     integrations: [
//         starlight({
//             title: 'My Docs',
//             head: [
//                 // Google tag (gtag.js)
//                 {
//                     tag: 'script',
//                     attrs: {
//                         async: true,
//                         src: 'https://www.googletagmanager.com/gtag/js?id=G-HF9HH7G5MK',
//                     },
//                 },
//                 {
//                     tag: 'script',
//                     content: `
//                     window.dataLayer = window.dataLayer || [];
//                     function gtag(){dataLayer.push(arguments);}
//                     gtag('js', new Date());
//                     gtag('config', 'G-HF9HH7G5MK');
//                 `,
//                 },
//             ],
//             social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
//             sidebar: [
//                 {
//                     label: 'Guides',
//                     items: [
//                         // Each item here is one entry in the navigation menu.
//                         { label: 'Example Guide', slug: 'guides/example' },
//                     ],
//                 },
//                 {
//                     label: 'Reference',
//                     autogenerate: { directory: 'reference' },
//                 },
//             ],
//         }),
//     ],
// });







