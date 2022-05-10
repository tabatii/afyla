const path = require('path')
const mix = require('laravel-mix')
const webpackNodeExternals = require('webpack-node-externals')

mix.options({ manifest: false })
	.js('resources/js/ssr.js', 'public/js')
	.vue({
		useVueStyleLoader: true,
		version: 2,
		options: {
			optimizeSSR: true
		}
	})
	.alias({
		ziggy: path.resolve('vendor/tightenco/ziggy/src/js'),
		'@': path.resolve('resources/js'),
	})
	.webpackConfig({
		target: 'node',
		externals: [webpackNodeExternals()],
	})