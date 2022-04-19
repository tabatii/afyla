<template>
	<AppLayout>
		<section class="pb-0">
			<div class="container">
				<div class="row gy-4">
					<div class="col-md-12 col-lg-5">
						<ProductGallery :gallery="product.gallery"></ProductGallery>
					</div>
					<div class="col-md-12 col-lg-7">
						<h1 class="display-6" v-text="product.title"></h1>
						<div class="mb-5">
							<span class="fs-4" v-text="getFormatedPrice(product.price)"></span>
						</div>
						<p class="mb-5" v-text="product.overview"></p>
						<div class="d-flex flex-wrap mb-5">
							<button type="button" class="btn me-3" :class="[s.size_id === size ? 'btn-primary' : 'btn-light']" v-for="s in product.sizes" :key="s.id" v-if="s.qty !== null" :disabled="s.qty === 0" @click="size = s.size_id">
								<del v-if="s.qty === 0">{{ s.size.number }}</del>
								<span v-else>{{ s.size.number }}</span>
							</button>
						</div>
						<div>
							<div class="d-flex mb-2">
								<QtyField class="me-3" v-model.number="qty" :value="qty" :max="100"></QtyField>
								<button type="button" class="btn btn-primary px-5 py-3" :disabled="size === null || qty === 0" @click="addToBag">
									<i class="bi bi-bag-plus"></i>
									<span>{{ size ? 'ADD TO BAG' : 'CHOOSE A SIZE' }}</span>
								</button>
							</div>
							<div>
								<span class="pointer" v-if="auth" @click="wishlist">
									<i class="bi" :class="product.wishlist ? 'bi-heart-fill' : 'bi-heart'"></i>
									{{ product.wishlist ? 'Remove from' : 'Add to' }} wishlist
								</span>
								<span class="pointer" data-bs-toggle="offcanvas" data-bs-target="#forms" v-else>
									<i class="bi bi-heart"></i> Add to wishlist
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container">
				<ul class="nav nav-pills" id="myTab">
					<li class="nav-item">
						<button type="button" class="nav-link text-dark active" data-bs-toggle="tab" data-bs-target="#description">Description</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark" data-bs-toggle="tab" data-bs-target="#packaging">Packaging</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark" data-bs-toggle="tab" data-bs-target="#payment">Payment</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark" data-bs-toggle="tab" data-bs-target="#shipping">Shipping</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark" data-bs-toggle="tab" data-bs-target="#returns">Returns</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark" data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane fade show active" id="description">
						<div class="py-4" v-html="product.description"></div>
					</div>
					<div class="tab-pane fade" id="packaging">...</div>
					<div class="tab-pane fade" id="payment">...</div>
					<div class="tab-pane fade" id="shipping">...</div>
					<div class="tab-pane fade" id="returns">...</div>
					<div class="tab-pane fade" id="reviews">...</div>
				</div>
			</div>
		</section>
		<section></section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import ProductGallery from '../components/ProductGallery'
	import QtyField from '../components/QtyField'
	import { Link } from '@inertiajs/inertia-vue'
	import Swal from 'sweetalert2'
	export default {
		props: {
			product: Object,
		},
		components: {
			ProductGallery,
			AppLayout,
			QtyField,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			}
		},
		methods: {
			addToBag() {
				this.$inertia.post(this.route('bag.add'), {
					product: this.product.id,
					size: this.size,
					qty: this.qty,
				}, {
					onSuccess() {
						Swal.fire({
							icon: 'success',
							title: 'Check your shopping bag',
							showConfirmButton: false,
							timer: 3000
						})
					}
				})
			},
			wishlist() {
				this.$inertia.post(this.route('wishlist.edit', this.product.id))
			}
		},
		data() {
			return {
				size: null,
				qty: 1,
			}
		}
	}
</script>
