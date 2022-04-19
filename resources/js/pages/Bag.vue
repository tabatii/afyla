<template>
	<AppLayout>
		<section>
			<div class="container">
				<div class="row g-0 mb-3 bg-primary">
					<div class="col-4">
						<div class="p-3">Product</div>
					</div>
					<div class="col-2">
						<div class="p-3">Unit price</div>
					</div>
					<div class="col-2">
						<div class="p-3">Quantity</div>
					</div>
					<div class="col-2">
						<div class="p-3">Subtotal</div>
					</div>
					<div class="col-2">
						<div class="p-3">Operation</div>
					</div>
				</div>
				<div class="display-6 text-center mt-5" v-if="bag.length === 0">
					<p>Your shopping bag is empty.</p>
					<p>Go shopping!</p>
				</div>
				<div class="row g-0 mb-3 bg-light" v-for="item in bag" :key="item.id" v-else>
					<div class="col-4">
						<div class="d-flex p-3">
							<div class="flex-shrink-0" style="width:64px">
								<img :src="item.product.gallery[0]" class="d-block w-100" />
							</div>
							<div class="flex-grow-1 ps-3">
								<p class="fw-medium mb-2" v-text="item.product.title"></p>
								<div>
									<span class="text-muted">Size:</span>
									<span v-text="item.size.number"></span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-2">
						<div class="p-3" v-text="getFormatedPrice(item.product.price)"></div>
					</div>
					<div class="col-2">
						<div class="p-3" v-text="item.qty"></div>
					</div>
					<div class="col-2">
						<div class="fw-medium p-3" v-text="getFormatedPrice(item.product.price * item.qty)"></div>
					</div>
					<div class="col-2">
						<div class="p-3">
							<u class="pointer text-muted" @click="deleteFromBag(item.id)">Delete</u>
						</div>
					</div>
				</div>
				<div class="row g-0 bg-light" v-if="bag.length !== 0">
					<div class="col-9"></div>
					<div class="col-3">
						<div class="p-3">
							<div class="d-flex">
								<span class="text-muted me-auto">Subtotal:</span>
								<span class="fw-medium" v-text="getFormatedPrice(getBagTotal)"></span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">Shipping:</span>
								<span class="fw-medium" v-text="getFormatedPrice(shipping)"></span>
							</div>
							<div class="d-flex mb-2">
								<span class="text-muted me-auto">VAT:</span>
								<span class="fw-medium" v-text="getFormatedPrice(vat)"></span>
							</div>
							<div class="d-flex mb-3">
								<span class="text-muted me-auto">Total:</span>
								<span class="text-danger fw-medium" v-text="getFormatedPrice(getBagTotal + shipping + vat)"></span>
							</div>
							<div class="d-flex">
								<button type="button" class="btn btn-primary px-5 ms-auto">CHECKOUT</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section></section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	export default {
		components: {
			AppLayout,
		},
		computed: {
			bag() {
				return this.$page.props.bag
			}
		},
		methods: {
			deleteFromBag(id) {
				this.$inertia.delete(this.route('bag.delete', id))
			}
		},
		data() {
			return {
				shipping: 0,
				vat: 20,
			}
		}
	}
</script>
