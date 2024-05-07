import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "彰化縣白玉功德會",
  description: "彰化縣白玉功德會",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/白玉logo.png",
    siteTitle: "彰化縣白玉功德會",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 powered by 彰化縣白玉功德會",
    },
    nav: [
      // { text: 'Home', link: '/' },
      { text: "認識白玉", link: "/about" },
      { text: "服務據點", link: "/service-locations" },
    ],

    sidebar: [
      {
        text: 'about',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },         
        ]
      }
    ],
    // sidebar: {
    //   // 当用户位于 `guide` 目录时，会显示此侧边栏
    //   "/about/": [
    //     {
    //       text: "about",
    //       items: [
    //         { text: "認識白玉", link: "/about/index" },
    //         { text: "緣起", link: "/about/doc1" },
    //         { text: "簡介", link: "/about/doc2" },
    //         { text: "展望", link: "/about/doc3" },
    //       ],
    //     },
    //   ],
    // },

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/chcpalyul" },
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
