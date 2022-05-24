<template>
	<div>
		<PopUp v-model="soldout">
			<div class="text-center py-2">
				<p class="fw-medium">Unfortunately, this item is out of stock.</p>
				<button type="button" class="btn btn-secondary">EMAIL WHEN AVAILABLE</button>
			</div>
		</PopUp>
		<PopUp v-model="done">
			<div class="text-center py-2">
				<p class="fw-medium">This item has been added to your shopping bag.</p>
				<l :href="route('bag')" class="btn btn-secondary">VIEW MY BAG</l>
			</div>
		</PopUp>
		<div class="p-4" v-if="wishlist.length === 0">
			<p>Your wishlist is still empty.</p>
			<p>We invite you to discover our <l class="underline" :href="route('shop')">products</l> and save what you like.</p>
		</div>
		<div v-else>
			<div class="p-4">
				<div class="d-flex mb-3" v-for="(item, i) in wishlist" :key="Math.random()">
					<div style="width:20%">
						<img :src="item.product.gallery[0]" class="d-block w-100" />
					</div>
					<div class="ps-2" style="width:80%">
						<div class="d-flex mb-2">
							<p class="pe-2 me-auto mb-0" v-text="item.product.title"></p>
							<div class="flex-shrink-0 fw-medium">
								<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
								<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
								<span v-text="getFormatedPrice(item.product.price)" v-else></span>
							</div>
						</div>
						<div class="d-flex mb-3">
							<span class="me-2">Size:</span>
							<select class="form-select input py-0" style="max-width:70px" v-model="sizes[i]">
								<option :value="s.size_id" v-if="s.size && s.qty !== null" v-for="s in item.product.sizes" :key="Math.random()">
									{{ s.size.name }}
								</option>
							</select>
						</div>
						<div class="d-flex justify-content-end">
							<button type="button" class="btn btn-primary btn-sm" :disabled="!sizes[i] || loading" @click="addToBag(i)">
								<span v-if="sizes[i]">{{ stock[i] === 0 ? 'SOLD OUT' : 'ADD TO BAG' }}</span>
								<span v-else>CHOOSE A SIZE</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="d-grid px-4">
				<l :href="route('wishlist')" class="btn btn-primary py-3">MANAGE MY WISHLIST ({{ wishlist.length }})</l>
			</div>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import PopUp from '../components/PopUp'
	export default {
		components: {
			PopUp,
			l: Link,
		},
		computed: {
			wishlist() {
				return this.$page.props.wishlist
			}
		},
		watch: {
			sizes(newValue) {
				newValue.forEach((sizeId, i) => {
					var size = this.wishlist[i].product.sizes.find(s => s.size_id === sizeId)
					this.stock[i] = size.qty
				})
			}
		},
		methods: {
			addToBag(index) {
				if (this.stock[index]) {
					this.loading = true
					this.bag.size = this.sizes[index]
					this.bag.product = this.wishlist[index].product.id
					return this.$inertia.post(this.route('bag.add'), this.bag, {
						onSuccess: () => {
							this.loading = false
							this.bag.product = null
							this.bag.size = null
							this.done = true
						}
					})
				}
				this.soldout = true
			}
		},
		data() {
			return {
				loading: false,
				soldout: false,
				done: false,
				stock: [],
				sizes: [],
				bag: {
					product: null,
					size: null,
					qty: 1,
				}
			}
		}
	}
</script>
