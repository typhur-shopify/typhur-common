import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'TyphurShopifyUI',
			formats: ['es', 'umd', 'cjs'],
			fileName: (format) => `typhur-shopify-ui.${format}.js`
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				dir: 'dist',
				entryFileNames: `[name].[format].js`,
				chunkFileNames: `[name].[format].[hash].js`,
				assetFileNames: `[name].[ext]`,
				preserveModules: true,
				preserveModulesRoot: 'src',
				inlineDynamicImports: false // 明确禁用 inlineDynamicImports
			}
		}
	}
})
