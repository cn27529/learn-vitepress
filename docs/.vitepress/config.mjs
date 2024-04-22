import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir: "./", //可以設定根目錄位置
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "My VitePress",
    nav: [
      { text: "Home", link: "/" },
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "API Examples", link: "/api-examples" },
      { text: "Example", link: "/example" },
      { text: "Sub folder", link: "guide/index" },
      { text: "Sub page", link: "guide/test-page" },

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
          { text: "Sub folder", link: "guide/index" },
          { text: "Sub page", link: "guide/test-page" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
