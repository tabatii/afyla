<template>
	<div class="py-2">
		<p class="px-sm-5 text-center fw-medium mb-0" v-if="sent">We will send you an email immediately after we charge our stock with the right size.</p>
		<div v-else>
			<p class="px-sm-5 text-center fw-medium mb-0">Unfortunately, this item is out of stock.</p>
			<div class="px-sm-5 mt-3" v-if="qty === 0">
				<form class="px-sm-5" @submit.prevent="send">
					<div class="mb-2">
						<input type="text" class="form-control border shadow-none" v-model="form.email" placeholder="Email address" />
						<small class="text-danger" v-text="form.errors.email"></small>
					</div>
					<div class="d-grid">
						<button type="submit" class="btn btn-secondary" :disabled="form.processing">EMAIL WHEN AVAILABLE</button>
					</div>
				</form>
			</div>
			<div v-else-if="qty < 0">
				<p class="text-center fw-medium">We recommend this items for you.</p>
				<div class="row">
					<div class="col-sm-4" v-for="(item, i) in product.recommendations" :key="Math.random()" v-if="i < 3">
						<l :href="route('product', item.product.id)">
							<img :src="item.product.gallery[0]" class="d-block w-100 border border-dark" />
						</l>
						<div class="text-center">
							<p class="mb-2">
								<l :href="route('product', item.product.id)" class="text-dark" v-text="item.product.title"></l>
							</p>
							<p class="fw-medium">
								<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
								<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
								<span v-text="getFormatedPrice(item.product.price)" v-else></span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		props: {
			product: [Array, Object],
			size: Number,
			qty: Number,
			value: Boolean,
		},
		components: {
			l: Link,
		},
		watch: {
			value() {
				this.form.email = null
				this.sent = false
			}
		},
		methods: {
			send() {
				if (this.qty === 0) {
					this.form.product = this.product.id
					this.form.size = this.size
					this.form.post(route('soldout'), {
						onSuccess: () => {
							this.form.reset()
							this.sent = true
						}
					})
				}
			}
		},
		data() {
			return {
				sent: false,
				form: this.$inertia.form({
					email: null,
					product: null,
					size: null,
				})
			}
		}
	}
</script>
