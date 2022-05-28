import Vue from 'vue'
import route from 'ziggy'
import createServer from '@inertiajs/server'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import { createRenderer } from 'vue-server-renderer'


createServer((page) => createInertiaApp({
	page,
	render: createRenderer().renderToString,
	title: title => `${title} - AFYLA`,
	resolve: name => require(`./Pages/${name}`),
	setup({ app, props, plugin }) {
		const Ziggy = { 
            ...props.props.initialPage.props.ziggy,
            location: new URL(props.props.initialPage.props.ziggy.url)
        }
		Vue.use(plugin).mixin({
			computed: {
				getBagLength() {
					var qty = 0;
					this.$page.props.bag.forEach(item => {
						qty += item.qty
					})
					return qty
				},
				getBagTotal() {
					var total = 0;
					this.$page.props.bag.forEach(item => {
						var price = item.product.discount ? item.product.price - ((item.product.price * item.product.discount) / 100) : item.product.price
						total += price * item.qty
					})
					return total
				}
			},
			methods: {
				route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
				getFormatedPrice(price, discount = null) {
					var value = discount ? price - ((price * discount) / 100) : price
					return new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
					}).format(value)
				},
				getTax(price) {
					return (price * 20) / 100
				}
			}
		})
		return new Vue({
			render: h => h(app, props),
		})
	},
}))
