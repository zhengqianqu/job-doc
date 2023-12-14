import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "求职助手",
  description: "专为求职者量身定制的自动化工具",
  base: '/job-doc/',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/doc' },
      { text: '下载', link: '' },
    ],

    sidebar: [
      {
        // text: '文档',
        items: [
          { text: '概况', link: '/doc' },
          { text: '安装教程', link: '/fix' },
          { text: '使用教程', link: '/use' },
          { text: '浏览器路径获取', link: '/browser' },
          { text: '提示以损坏和无法验证开发者', link: '/damage' },
          { text: '提示有病毒，无法下载，安装', link: '/virus' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
})
