import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs-demo/",
  head: [["link", { rel: "icon", href: "/docs-demo/logo.png" }]],
  title: "半步的博客",
  description: "学习记录",
  themeConfig: {
    logo: '/logo.png',
    outlineTitle: '目录',
    outline: [2, 6],

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家目录', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      { text: '百度', link: 'https://www.baidu.com' },
      {
        text: 'home',
        items: [
          { text: 'mardown-examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'VuePress', link: 'https://vitepress.vuejs.org' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'pve导入cloud-image创建虚拟机', link: '/ops/pve导入cloud-image创建虚拟机/pve导入cloud-image创建虚拟机' },
          { text: 'NodeJS学习', link: '/ops/NodeJS学习/NodeJS学习' }
        ]
      }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      },
      {
        text: '示例2',
        items: [
          { text: 'Markdown 演示', link: '/markdown-examples' },
          { text: 'Runtime API 演示', link: '/api-examples' }
        ]
      },
      {
        text: '运维',
        items: [
          { text: 'pve导入cloud-image创建虚拟机', link: '/ops/pve导入cloud-image创建虚拟机/pve导入cloud-image创建虚拟机' },
          { text: 'NodeJS学习', link: '/ops/NodeJS学习/NodeJS学习' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/banbu1118' }
    ],
    footer: {
      copyright: 'Copyright © 2023-present Banbu1118'
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }


  }
})
