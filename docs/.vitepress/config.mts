import { defineConfig } from 'vitepress'
import { getSideBarList } from './utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite-press-blog/',
  title: "浅夏",
  description: "Blog",
  appearance: false,
  cleanUrls: false,// todo 隐藏URL后缀，如果用CICD 会部署报404
  head: [
    ['link', { rel: 'icon', href: '/vite-press-blog/extension.ico'}],
    ['script', {}, `
      console.log('window', window);
      console.log('document', document);
      `
    ]
  ],
  themeConfig: {
    logo: '/ext.svg',
    siteTitle: 'Project SitTitle',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2,4],
      label: '当前页'
    },
    nav: [
      {
        text: '基础',
        link: '/basic/index'
      },
      {
        text: 'API',
        link: '/api/index'
      },
      {
        text: '核心篇',
        link: '/core/index'
      },
      {
        text: '实战教学篇',
        items: [
          {
            text: '原生 JS 开发',
            link: '/teach/index'
          },
          {
            text: 'Vue',
            link: '/teach/index'
          },
          {
            text: 'React',
            link: '/teach/index'
          },
          {
            text: 'CRXJS Vue',
            link: '/teach/index'
          },
          {
            text: 'CRXJS React',
            link: '/teach/index'
          }
        ]
      },
      {
        text: '实用插件推荐',
        link: '/summarize/index'
      },
      {
        text: '团队',
        link: '/team/index'
      }
    ],
    sidebar: {
      'basic': getSideBarList('/basic'),
      'api': getSideBarList('/api'),
      'core': getSideBarList('/core'),
      'teach': getSideBarList('/teach'),
      'summarize': getSideBarList('/summarize'),
      'team': getSideBarList('/team'),
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg t="1713408687091" class="icon" viewBox="0 0 1316 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7801" width="64" height="64"><path d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z" fill="#1E80FF" p-id="7802"></path></svg>'
        },
        link: 'https://juejin.cn/user/3281355626528663001'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present gqk'
    }
  }
})
