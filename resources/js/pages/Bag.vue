<template>
	<AppLayout>
		<h title="Shopping Bag"></h>
		<section class="mb-5">
			<div class="container py-5">
				<p class="fs-2">MY SHOPPING BAG</p>
				<div class="d-flex align-items-stretch align-items-sm-end mb-3">
					<img src="/img/icons/tree.png" class="me-2" height="36px" />
					<p class="text-success fw-medium mb-0">For each purchase, we plant a tree for Forest Fire Recovery.</p>
				</div>
				<div class="display-6 text-center mt-5" v-if="bag.length === 0">
					<p>Your shopping bag is empty.</p>
					<p>Go shopping!</p>
				</div>
				<div class="row g-0 mb-3" v-for="item in bag" :key="Math.random()" v-else>
					<div class="col-lg-8 col-xl-7 border">
						<div class="row g-0">
							<div class="col-sm-4 col-xl-3 p-3">
								<img :src="item.product.gallery[0]" class="d-block w-100" />
							</div>
							<div class="col-sm-8 col-xl-9 p-3 ps-sm-0">
								<div class="mb-4">
									<div class="d-flex">
										<p class="me-auto mb-0" v-text="item.product.title"></p>
										<div class="flex-shrink-0 fw-medium">
											<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
											<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
											<span v-text="getFormatedPrice(item.product.price)" v-else></span>
										</div>
									</div>
									<span class="text-muted" v-text="item.product.sku"></span>
								</div>
								<div class="d-flex align-items-center mb-4">
									<span class="me-3">Size:</span>
									<select class="form-select input py-0" :disabled="loading" style="max-width:70px" @input="size(item.id, $event)">
										<option :value="s.size_id" :selected="s.size_id === item.size_id" :disabled="s.qty === 0" v-if="s.qty !== null" v-for="s in item.product.sizes" :key="s.id">
											{{ s.size.name }}
										</option>
									</select>
								</div>
								<div class="mb-4">
									<span class="pointer px-1" @click="minus(item.id)">-</span>
									<span class="px-2" v-text="item.qty"></span>
									<span class="pointer px-1" @click="plus(item.id)">+</span>
								</div>
								<div class="d-flex">
									<button type="button" class="btn btn-primary ms-auto" :disabled="loading" @click="deleteFromBag(item.id)">DELETE</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row g-0" v-if="bag.length !== 0">
					<div class="col-lg-8 col-xl-7 border">
						<div class="p-3">
							<div class="d-flex">
								<span class="text-muted me-auto">Subtotal:</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(getBagTotal)"></span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">Shipping:</span>
								<span class="fw-medium text-end">{{ getFormatedPrice(shipping) }} (via FedEx Express Worldwide)</span>
							</div>
							<div class="d-flex mb-2">
								<span class="text-muted me-auto">VAT:</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(vat)"></span>
							</div>
							<div class="d-flex mb-3">
								<span class="text-muted me-auto">Total:</span>
								<span class="text-danger fw-medium text-end" v-text="getFormatedPrice(getBagTotal + shipping + vat)"></span>
							</div>
							<div class="d-grid">
								<button type="button" class="btn btn-primary py-3">CHECKOUT</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		components: {
			AppLayout,
			h: Head,
		},
		computed: {
			bag() {
				return this.$page.props.bag
			}
		},
		methods: {
			deleteFromBag(id) {
				this.loading = true
				this.$inertia.delete(this.route('bag.delete', id), {
					preserveScroll: true,
					onSuccess: () => {
						this.loading = false
					}
				})
			},
			plus(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.patch(this.route('bag.plus', id), {}, {
						preserveScroll: true,
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
						preserveScroll: true,
						onSuccess: () => {
							this.loading = false
						}
					})
				}
			},
			size(id, event) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.patch(this.route('bag.size', id), {size: event.target.value}, {
						preserveScroll: true,
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
				shipping: 0,
				vat: 20,
			}
		}
	}
</script>
