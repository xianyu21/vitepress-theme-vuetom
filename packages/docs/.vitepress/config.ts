import { defineConfigWithTheme } from 'vitepress'
import { VuetomThemeConfig } from 'vitepress-theme-vuetom'
import { mdPlugin } from './utils/plugins'

// import head from './config/head'
// import pkg from '../package.json'
import { nav, sidebarGuide, sidebarMdShow, sidebarDaily } from './menus'

export default defineConfigWithTheme<VuetomThemeConfig>({
	lang: 'en-US',
	base: '/',
	title: 'Vuetom Theme',
	description: 'Theme For Vitepress',

	// head,
	themeConfig: {
		nav: nav(),
		sidebar: {
			'zh-CN/guide/': sidebarGuide(),
			'zh-CN/mdshow/': sidebarMdShow(),
			'zh-CN/daily/': sidebarDaily()
		},
		socialLinks: [
			{ icon: 'github', link: '' }
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2021-present Lauset'
		},
		// docsDir: 'docs',
		logoImg: '/logo/vuetom-logo-m.png',
		bgImg: '/imgs/homg-bg01.jpg',
		bgColor: '0,0,0',
		bgOpacity: 0.6,
		flashEnable: true,
		flashColor: ['238,17,17', '0,98,255'],
		parallaxEnable: true,
		pageBgEnable: true,
		pageBgOpacity: 0.8,
		featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)']

	},

	// locales: {
	//   '/zh-CN/': {
	//     lang: 'zh-CN',
	//     title: 'Vuetom 主题',
	//     description: '为 Vitepress 提供的一款主题'
	//   },
	//   '/en-US/': {
	//     lang: 'en-US',
	//     title: 'Vuetom Theme',
	//     description: 'Theme For Vitepress'
	//   }
	// },
	markdown: {
		lineNumbers: false,
		config: (md) => mdPlugin(md)
	},
	lastUpdated: false
})
