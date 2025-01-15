import { defineConfig } from 'dumi'
import path from 'path'

let base: string | undefined
let publicPath: string | undefined

if (process.env.PREVIEW !== '1') {
	base = '/@typhur-shopify:ui/'
	publicPath = '/@typhur-shopify:ui/'
}

export default defineConfig({
	base,
	publicPath,
	title: 'Perfect Design', // 站点名称
	outputPath: 'docs-dist', // 输出文件夹
	resolve: {
		docDirs: ['docs'],
		atomDirs: [
			{ type: 'component', dir: '/packages/@typhur-shopify:ui/src/components' }
		],
		codeBlockMode: 'passive'
	},
	alias: {
		perfectD: path.join(__dirname, 'packages/@typhur-shopify:ui/src')
	},
	themeConfig: {
		name: 'Perfect D',
		carrier: 'dumi', // 设备状态栏左侧的文本内容
		hd: true,
		rtl: true,
		footer: 'Copyright ©',
		nav: [
			{
				title: '指南',
				link: '/guide'
			},
			{
				title: '组件',
				link: '/components/alert'
			}
		]
	}
})
