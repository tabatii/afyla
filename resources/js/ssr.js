import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { createRenderer } from 'vue-server-renderer'
import createServer from '@inertiajs/server'
import route from 'ziggy'

var mixin = {
	computed: {
		getBagTotal() {
			var total = 0;
			this.$page.props.bag.forEach(item => {
				var price = item.product.discount ? (item.product.price * item.product.discount) / 100 : item.product.price
				total += price * item.qty
			})
			return total
		}
	},
	methods: {
		route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
		getFormatedPrice(price, discount = null) {
			var value = discount ? (price * discount) / 100 : price
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(value)
		}
	}
}

createServer((page) => createInertiaApp({
	page,
	render: createRenderer().renderToString,
	title: title => `${title} - AFYLA`,
	resolve: name => require(`./Pages/${name}`),
	setup({ app, props, plugin }) {
		const Ziggy = { 
            ...props.initialPage.props.ziggy,
            location: new URL(props.initialPage.props.ziggy.url)
        }
		Vue.use(plugin).mixin(mixin)
		return new Vue({
			render: h => h(app, props),
		})
	},
}))
