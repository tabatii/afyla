import 'bootstrap'
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue'


InertiaProgress.init()
createInertiaApp({
	title: title => `${title} - AFYLA`,
	resolve: name => require(`./Pages/${name}`),
	setup({ el, app, props, plugin }) {
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
				route,
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
			render: h => h(app, props)
		}).$mount(el)
	}
})
