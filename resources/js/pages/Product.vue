<template>
	<AppLayout>
		<h>
			<title>{{ product.title }}</title>
			<meta head-key="description" name="description" :content="product.overview" />
		</h>
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
		<div class="modal fade" id="sizeModal" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">AFYLA SIZE</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<FindSize></FindSize>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="helpModal" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header border-0">
						<p class="modal-title fw-medium ps-3 ms-auto mb-0">HOW CAN WE HELP YOU ?</p>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="row gy-4">
							<div class="col-sm-4">
								<div class="d-grid d-sm-block text-center">
									<a :href="'mailto:'+settings.email" class="btn btn-primary">
										<img src="/img/icons/mail.png" class="me-3" height="26px" />
										<span>EMAIL US</span>
									</a>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="d-grid d-sm-block text-center">
									<a :href="'https://wa.me/'+settings.whatsapp" class="btn btn-primary" target="_blank">
										<img src="/img/icons/chat.png" class="me-3" height="26px" />
										<span>CHAT WITH US</span>
									</a>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="d-grid d-sm-block text-center">
									<a :href="'tel:'+settings.phone" class="btn btn-primary">
										<img src="/img/icons/phone.png" class="me-3" height="26px" />
										<span>CALL US</span>
									</a>
								</div>
							</div>
							<div class="col-12">
								<p class="text-muted text-center">Our client advisors are available every day from 9 am to 10 pm [GMT+1] excluding holidays.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="pt-5">
			<div class="container-fluid px-3 px-sm-5">
				<div class="row gy-4">
					<div class="col-lg-5">
						<div class="carousel carousel-dark slide" id="gallery" data-bs-ride="carousel" data-bs-interval="false">
							<div class="carousel-inner">
								<div class="carousel-item" :class="{active: i===0}" v-for="(img, i) in product.gallery" :key="Math.random()">
									<img :src="img" class="d-block w-100 mx-auto" />
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</div>
					<div class="col-lg-7 col-xl-6">
						<div class="d-flex flex-column flex-sm-row">
							<h1 class="fs-2 me-sm-auto mb-0" v-text="product.title"></h1>
							<div class="d-flex align-items-baseline flex-shrink-0">
								<span class="text-muted me-auto me-sm-3">REF: {{ product.sku }}</span>
								<span class="pointer" @click="addToWishlist(product.id)">
									<i class="bi fs-3" :class="searchWishlist(product.id) ? 'bi-heart-fill text-danger' : 'bi-heart'"></i>
								</span>
							</div>
						</div>
						<hr />
						<p class="mb-5" v-text="product.overview"></p>
						<div class="d-flex align-items-baseline flex-wrap mb-4">
							<span class="fw-medium me-sm-3">Size:</span>
							<button type="button" class="btn text-dark" :class="[s.size_id === size ? 'btn-primary' : 'btn-link']" v-for="s in product.sizes" :key="Math.random()" v-if="s.qty !== null" @click="size = s.size_id">
								<del class="text-muted" v-if="s.qty === 0">{{ s.size.name }}</del>
								<span v-else>{{ s.size.name }}</span>
							</button>
							<span class="pointer underline ms-auto" data-bs-toggle="modal" data-bs-target="#sizeModal">Find your size</span>
						</div>
						<div class="d-flex align-items-baseline flex-column flex-sm-row mb-4">
							<div class="fs-5 fw-medium me-3">
								<span class="text-danger me-1" v-text="getFormatedPrice(product.price, product.discount)" v-if="product.discount"></span>
								<del class="text-muted" v-text="getFormatedPrice(product.price)" v-if="product.discount"></del>
								<span v-text="getFormatedPrice(product.price)" v-else></span>
							</div>
							<span class="me-auto">Enjoy free shipping and return</span>
							<div v-if="size">
								<span v-if="getSizeQty === 0"><i class="bi bi-circle-fill text-danger"></i> Sold out</span>
								<span v-else-if="getSizeQty > 5"><i class="bi bi-circle-fill text-success"></i> Available</span>
								<span v-else><i class="bi bi-circle-fill text-warning"></i> Only {{ getSizeQty }} left</span>
							</div>
						</div>
						<div class="mb-5">
							<div class="d-sm-flex mb-2">
								<QtyField class="me-3 mb-2 mb-sm-0" v-model.number="qty" :max="getSizeQty"></QtyField>
								<button type="button" class="btn btn-primary fw-medium px-5 py-3" :disabled="!size || !qty || loading" @click="addToBag">
									<span>{{ size ? 'ADD TO BAG' : 'CHOOSE A SIZE' }}</span>
								</button>
							</div>
						</div>
						<div class="d-flex align-items-stretch align-items-sm-end">
							<img src="/img/icons/tree.png" class="me-2" height="36px" />
							<p class="text-success fw-medium mb-0">For each purchase, we plant a tree for Forest Fire Recovery.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="container-fluid px-3 px-sm-5">
				<div class="d-flex py-4">
					<div class="me-auto">
						<l :href="route('shop')" class="underline me-2">VIEW ALL</l>
						<l :href="route('shop', {categories: [c.category_id]})" class="underline me-2" v-for="c in product.categories" :key="Math.random()">
							{{ c.category.name }}
						</l>
					</div>
					<div class="text-end">
						<span class="pointer text-muted underline me-2" data-bs-toggle="modal" data-bs-target="#helpModal">Need help ?</span>
						<span class="pointer" @click="social = !social"><i class="bi bi-share-fill"></i></span>
						<SocialShare :id="product.id" :title="product.title" v-show="social"></SocialShare>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-primary py-5">
			<div class="container-fluid px-3 px-sm-5">
				<div class="row">
					<div class="col-lg-6 col-xl-8 order-2 order-lg-1">
						<div class="accordion accordion-flush border-bottom border-dark" id="accordionFlush">
							<div class="accordion-item border-dark">
								<div class="accordion-header">
									<button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#packaging" aria-expanded="false">
										PACKAGING & LABELING
									</button>
								</div>
								<div id="packaging" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
									<div class="accordion-body bg-primary px-1">
										<p>In order to build a better planet, our labelings are made from 100% recycled fibers issued from FSC-certified forests.</p>
										<p>Our shipping boxes are made from biodegradable and recyclable cardboard.</p>
										<p>We use eco-friendly tissue paper and stickers.</p>
										<p>All our gift cards, thank you cards and invoices are printed in 100% recycled paper.</p>
										<p>We use 100% cotton canvas garment covers.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item border-dark">
								<div class="accordion-header">
									<button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#payment" aria-expanded="false">
										PAYMENT
									</button>
								</div>
								<div id="payment" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
									<div class="accordion-body bg-primary px-1">
										<p>AFYLA accepts</p>
										<div class="row gx-0">
											<div class="col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center">
												<img src="/img/icons/mastercard.png" width="64px" />
												<p>MasterCard</p>
											</div>
											<div class="col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center">
												<img src="/img/icons/visa.png" width="64px" />
												<p>Visa</p>
											</div>
											<div class="col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center">
												<img src="/img/icons/paypal.png" width="64px" />
												<p>PayPal</p>
											</div>
											<div class="col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center">
												<img src="/img/icons/applepay.png" width="64px" />
												<p>Apple Pay</p>
											</div>
											<div class="col-sm-4 col-lg-3 col-xl-2 text-start text-sm-center">
												<img src="/img/icons/afterpay.png" width="64px" />
												<p>Pay monthly with afterpay</p>
											</div>
										</div>
										<p>Payment will include only the price of the products. The costs of the shipping and delivery are totally free. Under no circumstances will You be charged more than the product price relative to the payment method chosen by You.</p>
										<p>The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item border-dark">
								<div class="accordion-header">
									<button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#shipping" aria-expanded="false">
										SHIPPING
									</button>
								</div>
								<div id="shipping" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
									<div class="accordion-body bg-primary px-1">
										<p class="mb-0">We offer free shipping worldwide.</p>
										<p>Shipping timing may vary from country to another. Delivery times begin one business day after the order is placed.</p>
										<table class="table table-bordered">
											<tbody>
												<tr>
													<td>COUNTRY</td>
													<td>EU-UK</td>
													<td>US-CHINA-JAPAN</td>
													<td>MOROCOO</td>
													<td>WORLD</td>
												</tr>
												<tr>
													<td>SHIPPING TIME</td>
													<td>3-5 working days</td>
													<td>4-8 working days</td>
													<td>1-2 working days</td>
													<td>4-9 working days</td>
												</tr>
											</tbody>
										</table>
										<p>Orders are not shipped out on weekends and holidays. All orders are processed automatically and We are unable to expedite or delay shipping times. If an order is placed over the weekend, the earliest it will ship is Monday. Signature is required upon delivery.</p>
										<p class="mb-0">Kindly note that delivery times are provided as guidelines only. These times are flexible depending on the customs clearance and holidays.</p>
										<p>AFYLA cannot be held responsible for any actions or delays due to customs over which We have no control. We may contact You for any further information due to customs request.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item border-dark">
								<div class="accordion-header">
									<button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#returns" aria-expanded="false">
										RETURNS POLICY
									</button>
								</div>
								<div id="returns" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
									<div class="accordion-body bg-primary px-1">
										<p class="mb-0">You may exchange the items purchased from <l href="/" class="text-dark underline">www.afylaworld.com</l> within 15 days of receipt of your purchase, AFYLA will cover the shipping costs.</p>
										<p class="mb-0">Please make sure the merchandise You return is in its original condition, tags and packaging included, otherwise We will be unable to accept your return and issue a refund.</p>
										<p class="mb-0"><l :href="route('contact')" class="text-dark underline">Contact us</l> to inform you about all the return steps.</p>
										<p>Read more in our <l :href="route('page', 'shipping-returns-policy')" class="text-dark underline">Shipping & Returns Policy</l>.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-xl-4 order-1 order-lg-2">
						<div class="bg-white p-4">
							<p>PRODUCT CARD</p>
							<div class="mb-3">
								<img :src="product.gallery[0]" class="d-block w-50 mx-auto" />
							</div>
							<div v-html="product.description"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-primary position-relative carousel-dark p-0 p-sm-5">
			<p class="fs-2 text-center mb-4">YOU MAY ALSO LIKE</p>
			<div class="glider">
				<div class="glider-track mx-auto">
					<div class="recommendation px-3" v-for="item in product.recommendations" :key="item.id">
						<div class="position-relative">
							<l :href="route('product', item.product.id)">
								<img :src="item.product.gallery[0]" class="d-block w-100" />
							</l>
							<span class="wishlist" @click="addToWishlist(item.product.id)">
								<i class="bi fs-3" :class="[searchWishlist(item.product.id) ? 'bi-heart-fill text-danger' : 'bi-heart']"></i>
							</span>
						</div>
						<div class="text-center py-3">
							<p class="text-dark mb-1" v-text="item.product.title"></p>
							<p class="fw-medium mb-3">
								<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
								<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
								<span v-text="getFormatedPrice(item.product.price)" v-else></span>
							</p>
							<l :href="route('product', item.product.id)" class="btn btn-outline-dark">SHOP</l>
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="arrows carousel-control-prev prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button type="button" class="arrows carousel-control-next next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</section>
		<section class="bg-primary py-5">
			<div class="container-fluid px-3 px-sm-5">
				<p class="fs-2 text-center mb-4">YOUR REVIEW MATTERS TO US</p>
				<div class="row gy-4">
					<div class="col-sm-6">
						<label>FULL NAME*</label>
						<input type="text" class="form-control border shadow-none py-3" />
					</div>
					<div class="col-sm-6">
						<label>EMAIL*</label>
						<input type="text" class="form-control border shadow-none py-3" />
					</div>
					<div class="col-12">
						<label>YOUR RATING*</label>
						<div>
							<i class="bi bi-star fs-3"></i>
							<i class="bi bi-star fs-3"></i>
							<i class="bi bi-star fs-3"></i>
							<i class="bi bi-star fs-3"></i>
							<i class="bi bi-star fs-3"></i>
						</div>
					</div>
					<div class="col-12">
						<label>YOUR REVIEW*</label>
						<textarea class="form-control border shadow-none" rows="6"></textarea>
					</div>
					<div class="col-12">
						<div class="d-grid d-sm-flex">
							<p class="me-auto">Required fields are marked*</p>
							<button type="button" class="btn btn-secondary">SUBMIT</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import AppLayout from '../components/AppLayout'
	import SocialShare from '../components/SocialShare'
	import QtyField from '../components/QtyField'
	import FindSize from '../components/FindSize'
	import PopUp from '../components/PopUp'
	import Glider from 'glider-js'
	export default {
		props: {
			product: Object,
		},
		components: {
			AppLayout,
			SocialShare,
			QtyField,
			FindSize,
			PopUp,
			h: Head,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			settings() {
				return this.$page.props.settings
			},
			wishlist() {
				return this.$page.props.wishlist
			},
			getSizeQty() {
				var size = this.product.sizes.find(s => s.size.id === this.size)
				return size ? size.qty : null
			}
		},
		watch: {
			size() {
				this.qty = 1
			}
		},
		methods: {
			addToBag() {
				if (this.getSizeQty) {
					this.loading = true
					return this.$inertia.post(this.route('bag.add'), {
						product: this.product.id,
						size: this.size,
						qty: this.qty,
					}, {
						preserveScroll: true,
						onSuccess: () => {
							this.loading = false
							this.done = true
						}
					})
				}
				this.soldout = true
			},
			addToWishlist(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.post(this.route('wishlist.toggle', id), {}, {
						preserveScroll: true,
						onSuccess: () => {
							this.loading = false
						}
					})
				}
			},
			searchWishlist(id) {
				return this.wishlist.find(item => item.product.id === id)
			}
		},
		data() {
			return {
				social: false,
				loading: false,
				soldout: false,
				done: false,
				size: null,
				qty: 1,
			}
		},
		mounted() {
			new Glider(document.querySelector('.glider'), {
				slidesToScroll: 1,
				slidesToShow: 1,
				skipTrack: true,
				arrows: {
					prev: '.prev',
					next: '.next'
				},
				responsive: [
					{
						breakpoint: 1400,
						settings: {
							slidesToShow: 5,
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: 2,
						}
					},
				]
			})
		}
	}
</script>

<style scoped>
	@media (min-width: 576px) {
		.carousel img {
			max-height: 520px;
			width: auto !important;
		}
	}
	.accordion-button {
		padding: 1rem .25rem;
		background-color: var(--bs-primary);
		color: var(--bs-dark);
		font-weight: 600;
		box-shadow: none;
	}
	.recommendation .wishlist {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
	}
	.arrows.carousel-control-prev,
	.arrows.carousel-control-next {
		top: calc(50% - 70px);
	}
</style>
