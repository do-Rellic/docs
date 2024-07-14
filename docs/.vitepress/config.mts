import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rellic",
  description: "Rellic documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: "Concepts" },
          { text: "Create a Container" },
          { text: "Configuration" },
        ],
      },
      {
        text: 'Installations',
        items: [
          { text: "Google Analytics" },
          { text: "Facebook Pixel" },
          { text: "HiStats" },
          { text: "Vercel Analytics" },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhinea/rellic-docs' }
    ]
  }
})
