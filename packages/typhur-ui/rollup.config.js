import cjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import clear from 'rollup-plugin-clear'
import copy from 'rollup-plugin-copy'
import less from 'rollup-plugin-less'
import { terser } from 'rollup-plugin-terser'
import ts from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify'

function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [
		resolve(),
		cjs({
			ignoreGlobal: true,
			include: /\/node_modules\//,
			external: ['react', 'react-dom', 'styled-components']
		}),
		ts(typescript),
		terser(),
		uglify()
	]
}

export default {
	input: ['./src/index.ts'],
	output: [
		{
			file: 'dist/cjs/index.js',
			format: 'cjs',
			name: 'cjs.js'
		},
		{
			file: 'dist/umd/index.js',
			format: 'umd',
			name: 'umd.js'
		},
		{
			file: 'dist/es/index.js',
			format: 'es',
			name: 'index.js'
		}
	],
	plugins: [
		less({ output: './dist/style/index.css' }),
		clear({
			targets: ['dist']
		}),
		...getBaseRollupPlugins(),
		babel({
			exclude: 'node_modules/**',
			runtimeHelpers: true
		}),
		copy({
			targets: [
				{
					src: '../../scripts/globalStyle/compiled-colors.less',
					dest: 'dist/style'
				}
			]
		})
	],
	external: ['react', 'react-dom']
}
