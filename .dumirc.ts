import { defineConfig } from 'dumi'
import path from 'path'

let base: string | undefined
let publicPath: string | undefined

if (process.env.PREVIEW !== '1') {
	base = '/typhur-common/'
	publicPath = '/typhur-common/'
}

export default defineConfig({
	base,
	publicPath,
	title: 'Typhur Common', // 站点名称
	outputPath: 'docs-dist', // 输出文件夹
	resolve: {
		docDirs: ['docs'],
		atomDirs: [
			{ type: 'component', dir: '/packages/typhur-ui/src/components' }
		],
		codeBlockMode: 'passive'
	},
	alias: {
		'typhur-ui': path.join(__dirname, 'packages/typhur-ui/src')
	},
	themeConfig: {
		name: 'Typhur',
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
