<template>
	<div>
		<PopUp v-model="del">
			<div class="text-center py-2">
				<p class="fw-medium">Are you sure you want to delete this item from your bag ?</p>
				<button type="button" class="btn btn-secondary" :disabled="loading" @click="deleteFromBag(del)">DELETE</button>
				<button type="button" class="btn btn-outline-secondary text-dark" @click="del = null">CANCEL</button>
			</div>
		</PopUp>
		<div class="p-4" v-if="bag.length === 0">
			<p>Your shopping bag is still empty.</p>
			<p>We invite you to discover our <l class="underline" :href="route('shop')">products</l> and save what you like.</p>
		</div>
		<div v-else>
			<div class="p-4">
				<div class="d-flex mb-3" v-for="(item, i) in bag" :key="Math.random()">
					<div style="width:20%">
						<l :href="route('product', item.product.id)">
							<img :src="item.product.gallery[0]" class="d-block w-100" />
						</l>
					</div>
					<div class="ps-2" style="width:80%">
						<div class="d-flex mb-2">
							<p class="pe-2 me-auto mb-0">
								<l :href="route('product', item.product.id)" class="text-dark" v-text="item.product.title"></l>
							</p>
							<div class="flex-shrink-0 fw-medium">
								<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
								<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
								<span v-text="getFormatedPrice(item.product.price)" v-else></span>
							</div>
						</div>
						<div class="mb-2">
							<span>Size:</span>
							<span class="text-muted" v-text="item.size.name"></span>
						</div>
						<div class="d-flex">
							<div class="me-auto">
								<span class="pointer px-1"@click="minus(item.id)">-</span>
								<span class="px-2" v-text="item.qty"></span>
								<span class="pointer px-1"@click="plus(item.id)">+</span>
							</div>
							<u class="pointer text-muted" @click="del = item.id">Delete</u>
						</div>
					</div>
				</div>
			</div>
			<hr class="m-0" />
			<div class="d-flex px-4 py-3">
				<span class="me-auto">{{ bag.length }} item(s)</span>
				<span>{{ getFormatedPrice(getBagTotal) }}</span>
			</div>
			<hr class="m-0" />
			<div class="d-grid gap-2 px-4 py-3">
				<l :href="route('bag')" class="btn btn-primary py-3">VIEW MY BAG</l>
				<l :href="route('checkout')" class="btn btn-dark py-3">CHECKOUT</l>
			</div>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import PopUp from './PopUp'
	export default {
		components: {
			l: Link,
			PopUp
		},
		computed: {
			bag() {
				return this.$page.props.bag
			}
		},
		methods: {
			deleteFromBag(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.delete(this.route('bag.delete', id), {
						onSuccess: () => {
							this.loading = false
							this.del = null
						}
					})
				}
			},
			plus(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.patch(this.route('bag.plus', id), {}, {
						onSuccess: () => {
							this.loading = false
						}
					})
				}
			},
			minus(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.patch(this.route('bag.minus', id), {}, {
						onSuccess: () => {
							this.loading = false
						}
					})
				}
			}
		},
		data() {
			return {
				loading: false,
				del: null,
			}
		}
	}
</script>
