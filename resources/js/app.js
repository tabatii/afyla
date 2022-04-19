import 'bootstrap'
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import { createInertiaApp } from '@inertiajs/inertia-vue'

var mixin = {
	computed: {
		getBagTotal() {
			var total = 0;
			this.$page.props.bag.forEach(item => {
				total += item.product.price * item.qty
			})
			return total
		}
	},
	methods: {
		route,
		getFormatedPrice(price) {
			return new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
			}).format(price)
		}
	}
}

InertiaProgress.init()
createInertiaApp({
	resolve: name => require(`./Pages/${name}`),
	setup({ el, app, props, plugin }) {
		Vue.use(plugin).mixin(mixin)
		new Vue({
			render: h => h(app, props)
		}).$mount(el)
	}
})
