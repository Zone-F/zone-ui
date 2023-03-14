import { defineConfig } from 'vitepress'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import footer from './configs/footer'
// import { mdPlugin } from './configs/plugins'
const base = '/'

export default defineConfig({
  title: "zone-ui",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/images/zone-ui-icon.png',
    nav,
    sidebar,
    footer
  }
})
