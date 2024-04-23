import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "Learn VitePress Project",
  description: "A VitePress Site",
  srcDir: "./", //可以設定根目錄位置
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Learn VitePress",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present for DaYi'
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "API Examples", link: "/api-examples" },
      { text: "Example", link: "/example" },
      { text: "Sub Page", link: "guide/index" },

      // {
      //   text: "Dropdown Menu",
      //   items: [
      //     { text: "Home", link: "/" },
      //     { text: "Examples", link: "/markdown-examples" },
      //     { text: "Get Started", link: "/example" },
      //   ],
      // },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "API Examples", link: "/api-examples" },
          { text: "Example", link: "/example" },
          { text: "Sub Page", link: "guide/index" },          
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
