<template>
	<AppLayout>
		<h title="Shopping Bag"></h>
		<PopUp v-model="del">
			<div class="text-center py-2">
				<p class="fw-medium">Are you sure you want to delete this item from your bag ?</p>
				<button type="button" class="btn btn-secondary" :disabled="loading" @click="deleteFromBag(del)">DELETE</button>
				<button type="button" class="btn btn-outline-secondary text-dark" @click="del = null">CANCEL</button>
			</div>
		</PopUp>
		<section class="mb-5">
			<div class="container py-5">
				<p class="fs-2">MY SHOPPING BAG</p>
				<div class="d-flex align-items-stretch align-items-sm-end mb-3">
					<img src="/img/icons/tree.png" class="me-2" height="36px" />
					<p class="text-success fw-medium mb-0">For each purchase, we plant a tree for Forest Fire Recovery.</p>
				</div>
				<div class="fs-4 text-center mt-5" v-if="bag.length === 0">
					<p>Your shopping bag is still empty.</p>
					<p>We invite you to discover our <l class="underline" :href="route('shop')">products</l> and save what you like.</p>
				</div>
				<div class="row g-0 mb-3" v-for="item in bag" :key="Math.random()" v-else>
					<div class="col-lg-8 col-xl-7 border">
						<div class="row g-0">
							<div class="col-sm-4 col-xl-3 p-3">
								<l :href="route('product', item.product.id)">
									<img :src="item.product.gallery[0]" class="d-block w-100" />
								</l>
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
										<option :value="s.size_id" :selected="s.size_id === item.size_id" :disabled="s.qty === 0" v-if="s.size && s.qty !== null" v-for="s in item.product.sizes" :key="s.id">
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
									<button type="button" class="btn btn-primary ms-auto" :disabled="loading" @click="del = item.id">DELETE</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row g-0" v-if="bag.length > 0">
					<div class="col-lg-8 col-xl-7 border">
						<div class="p-3">
							<p class="fs-4 mb-2">ORDER SUMMARY</p>
							<div class="d-flex">
								<span class="text-muted me-auto">Subtotal:</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(getBagTotal)"></span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">Shipping:</span>
								<span class="fw-medium text-end">{{ getFormatedPrice(getCompanyPrice) }} (via {{ getCompanyName }})</span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">Total:</span>
								<span class="text-danger fw-medium text-end" v-text="getFormatedPrice(getBagTotal + getCompanyPrice)"></span>
							</div>
							<div class="d-flex mb-3">
								<span class="text-muted me-auto">VAT (included):</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(getTax(getBagTotal))"></span>
							</div>
							<div class="d-grid">
								<l :href="route('checkout')" class="btn btn-primary py-3">CHECKOUT</l>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import PopUp from '../components/PopUp'
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		props: {
			companies: Array,
		},
		components: {
			AppLayout,
			PopUp,
			h: Head,
			l: Link,
		},
		computed: {
			bag() {
				return this.$page.props.bag
			},
			getCompanyName() {
				return this.companies.length > 0 ? this.companies[0].name : null
			},
			getCompanyPrice() {
				return this.companies.length > 0 ? this.companies[0].price : 0
			}
		},
		methods: {
			deleteFromBag(id) {
				this.loading = true
				this.$inertia.delete(this.route('bag.delete', id), {
					preserveScroll: true,
					onSuccess: () => {
						this.loading = false
						this.del = null
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
				del: null,
			}
		}
	}
</script>
