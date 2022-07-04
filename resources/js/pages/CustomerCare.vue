<template>
	<AppLayout>
		<h title="Customer Care"></h>
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
		<section class="bg-primary p-3 p-sm-5">
			<h1 class="fs-4 mb-4">
				<l :href="route('customer')" class="text-dark text-decoration-none">CUSTOMER CARE</l>
			</h1>
			<div class="row">
				<div class="col-sm-4 col-lg-3 pb-5 pb-sm-0">
					<ul class="nav flex-column">
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#follow-order">Follow your order</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#follow-return">Follow your return</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#shopping">Shopping</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#orders">Orders & pre-order</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#size">Find your size</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#shipping">Shipping</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#returns">Returns & refunds</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#payment">Payment</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#account">My account</a>
						</li>
						<li>
							<l :href="route('faq')">FAQs</l>
						</li>
						<li>
							<l :href="route('contact')">Contact Us</l>
						</li>
					</ul>
				</div>
				<div class="col-sm-8 col-lg-9">
					<div class="tab-content" id="nav-tabContent">

						<div class="tab-pane fade show active" id="main-tab">
							<div class="row gy-4">
								<div class="col-sm-4 text-center">
									<img src="/img/icons/truck.png" class="mb-2" width="124px" style="opacity:.6;" />
									<p class="mb-0"><l :href="route('page', 'shipping-returns-policy')">Free shipping & returns</l></p>
								</div>
								<div class="col-sm-4 text-center">
									<img src="/img/icons/secure.png" class="mb-2" width="124px" style="opacity:.6; transform: scale(.75);" />
									<p class="text-muted mb-0">Secure & diverse payment</p>
								</div>
								<div class="col-sm-4 text-center">
									<img src="/img/icons/mobile.png" class="mb-2" width="124px" style="opacity:.6; transform: scale(.85);" />
									<p class="text-muted mb-0">Available 7 /7</p>
								</div>
								<div class="col-sm-4 text-center">
									<img src="/img/icons/sustainability.png" class="mb-2" width="124px" style="opacity:.6;" />
									<p class="mb-0"><l :href="route('sustainability')">Sustainability</l></p>
								</div>
								<div class="col-sm-4 text-center">
									<img src="/img/icons/empowering.png" class="mb-2" width="114px" />
									<p class="text-muted mb-0">Empowering</p>
								</div>
								<div class="col-sm-4 text-center">
									<img src="/img/icons/quality.png" class="mb-2" width="124px" style="opacity:.6; transform: scale(1.2);" />
									<p class="text-muted mb-0">High quality</p>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="follow-order">
							<p class="fw-medium mb-2">Enter your order number to see all the details and information.</p>
							<div class="mb-5">
								<div class="row">
									<div class="col-sm-10 mb-2 mb-sm-0">
										<input type="text" class="form-control bg-primary border-dark" v-model="uuid" />
									</div>
									<div class="col-sm-2">
										<div class="d-grid">
											<button type="button" class="btn btn-outline-dark" :disabled="loading" @click="getOrder">SEARCH</button>
										</div>
									</div>
								</div>
								<p class="text-danger" v-if="notfound">This order number is not found.</p>
							</div>
							<div v-if="order.id">
								<p class="mb-2"><b>ORDER Nº</b> {{ order.uuid }}</p>
								<div class="table-responsive">
									<table class="table table-bordered border-secondary mb-2">
										<tbody>
											<tr>
												<td>Shipping address</td>
												<td>{{ order.delivery.street }}, {{ order.delivery.city }}, {{ order.delivery.zip }}, {{ order.delivery.country }}</td>
											</tr>
											<tr>
												<td>Phone</td>
												<td v-text="order.delivery.phone"></td>
											</tr>
											<tr>
												<td>Date</td>
												<td v-text="order.created_at"></td>
											</tr>
											<tr>
												<td>Tracking Nº</td>
												<td v-text="order.tracking_number"></td>
											</tr>
											<tr>
												<td>Status</td>
												<td v-text="order.status.toUpperCase()"></td>
											</tr>
										</tbody>
									</table>
								</div>
								<p class="mb-5">You can track your order via our partner <a href="http://www.fedex.com" target="_blank">fedex.com</a>.</p>
								<div class="table-responsive">
									<table class="table table-bordered border-secondary text-center mb-2">
										<thead>
											<tr class="align-middle">
												<th scope="col">#</th>
												<th scope="col">TITLE</th>
												<th scope="col">CATEGORY</th>
												<th scope="col">QUANTITY</th>
												<th scope="col">SIZE</th>
												<th scope="col">PRICE</th>
											</tr>
										</thead>
										<tbody>
											<tr class="align-middle" v-for="(product, i) in order.products" :key="Math.random()">
												<td v-text="i+1"></td>
												<td>
													<a :href="route('product', product.product_id)" class="text-dark underline" target="_blank" v-text="product.title"></a>
												</td>
												<td v-text="product.category"></td>
												<td v-text="product.qty"></td>
												<td v-text="product.size"></td>
												<td v-text="getFormatedPrice(product.price)"></td>
											</tr>
											<tr class="border-bottom-0">
												<td class="border-0"></td>
												<td class="border-0"></td>
												<td class="border-0"></td>
												<td class="border-0"></td>
												<td class="border-bottom border-secondary">SUBTOTAL</td>
												<td class="border-bottom border-secondary" v-text="getFormatedPrice(order.order_subtotal)"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="follow-return">
						</div>

						<div class="tab-pane fade" id="shopping">
							<p class="fw-medium mb-0">SHOPPING</p>
							<p>To make a purchase in <l :href="route('home')">www.afylaworld.com</l> you don’t need to register, however we suggest you create an account to access exclusive areas and services dedicated to our customers. You can browse our home page and discover the product categories we have and that lead you to our online shops.</p>
							<p class="fw-medium mb-0"><i class="bi bi-search"></i> SEARCH</p>
							<p>You can also use our search tool located the head of all the pages. You easily click on the search button and type the item’s name you are looking for.. We offer you suggestions of each shop we have, before even writing something. We use a very advanced search feature to make it easier for you</p>
							<p class="fw-medium mb-0"><i class="bi bi-list"></i> MENU</p>
							<p class="mb-0">In our menu tab, you can find the different shops we have.</p>
							<p class="mb-0">“WHAT’S NEW” is the link to a listing all the newest products and last arrivals.</p>
							<p class="mb-0">“SPECIAL PRICES” is the link to a listing of all the products with a special offer or promotion.</p>
							<p class="mb-0">“VIEW ALL” is the link to a listing of all the products we have in store.</p>
							<p class="mb-0">“COATS & JACKETS” is the link to a listing of the coats, blazers, and any type of jackets.</p>
							<p class="mb-0">“SHIRTS & TOPS” is the link to a listing of the shirts and any kind of tops.</p>
							<p class="mb-0">“DRESSES” is the link to a listing of the short, long and mid dresses.</p>
							<p class="mb-0">“SKIRTS” is the link to a listing of the short, long and mid skirts.</p>
							<p class="mb-0">“PANTS” is the link to a listing of all kind of pants.</p>
							<p>In every shop, you can use filters, or sort your listing to make it easier for you to find what you need. You can sort by price, newness or name. You can add filters such as a specific materials, colors or sizes . You can also choose to list only a specific sub-category.</p>
							<p class="fw-medium mb-0">PRODUCT PAGE</p>
							<p>Once you select a product, you will find all available sizes, the different colors, the compositions and a description in the product page. You will also find pictures, able to be zoomed, and in different forms to see all the details. For each product, you’ll find a product card describing any further information and product detail. You’ll find also a reminder of our packaging, our payment methods, our shipping&returns policy and contact information. At the bottom of the page, you’ll find similar products that you may like too.</p>
							<p class="fw-medium mb-0">PURCHASE</p>
							<p class="mb-0">1. Select the size and the color of the product you want to purchase.</p>
							<p class="mb-0">2. Make sure to read our shipping and return policy.</p>
							<p class="mb-0">3. You can choose either to shop more or checkout. If you want to shop more you can easily comeback to all the shops and your item will be saved in your shopping bag.</p>
							<p class="mb-0">4. Once you have finished your shopping click on the shopping bag button <img src="/img/icons/bag.png" height="23px" /> , then click on “CHECKOUT”.</p>
							<p class="mb-0">5. You can register, login if you have already an account in our website, or continue as a guest.</p>
							<p class="mb-0">6. Enter the required information and make sure it’s correct.</p>
							<p class="mb-0">7. After choosing your payment and checking that the information you entered are correct you can proceed.</p>
							<p>8. You will receive a confirmation mail with all the details for delivery.</p>
							<p class="fw-medium mb-0"><i class="bi bi-heart"></i> WISHLIST</p>
							<p>You can add items you liked or you want to shop in future to your wishlist by clicking on the heart button. You can consult them whenever you need which make them easier to be found for next time.</p>
						</div>

						<div class="tab-pane fade" id="orders">
							<p class="fw-medium mb-0">ORDER</p>
							<p class="mb-0">Once you have a AFYLA account, you can consult all your previous orders in the orders section. You’ll find a table that contains various information of each order including Order’s number, amount, statuts, etc..</p>
							<p class="mb-0">You can find different order’s status that represent the process of the purchase.</p>
							<p class="mb-0"><span class="fw-medium">Processing:</span> Your order has been confirmed; we have already sent you a confirmation email with all the information and your tracking number.</p>
							<p class="mb-0"><span class="fw-medium">Shipped:</span> Your order is shipped from our warehouse; you can use your tracking number on <a href="http://www.fedex.com" target="_blank">www.fedex.com</a> to track your order.</p>
							<p class="mb-0"><span class="fw-medium">Delivered:</span> You received your order.</p>
							<p><span class="fw-medium">Cancelled:</span> You are allowed to cancel your order at anytime before the shipping stage.</p>
							<p class="fw-medium mb-0">PRE-ORDER</p>
							<p>AFYLA gives you the opportunity to pre-order a selection of products before their launching day, if they are sold out, or any articles for which a pre-order is possible on the website. Your order will be shipped when ready. You’ll be charged only when the product is ready and shipped. Once your order will be shipped, we will send you an email with the tracking number of the package and all the products details.</p>
							<p class="fw-medium mb-0">ORDER & PRE-ORDER</p>
							<p>If your purchase contains both pre-ordered products and available products. Our team will contact you and ask you either to ship the available products first and then ship again the pre-ordered ones when available, or to wait for pre-ordered product to be available, then ship all the products together.</p>
						</div>

						<div class="tab-pane fade" id="size">
							<FindSize></FindSize>
						</div>

						<div class="tab-pane fade" id="shipping">
							<p class="fw-medium">SHIPPING</p>
							<p>We offer free shipment to our customers and we take care of the customs clearance for countries in the E.U., U.S., U.K., U.A.E. and Morocco.</p>
							<p>We work with FedEx Express Worldwide as a third party. Once the order is confirmed, you will be informed as soon as the goods are ready for shipping.</p>
							<p>You can follow your order using the tracking number in <a href="http://www.fedex.com" target="_blank">www.fedex.com</a> or using your account in our website <l :href="route('home')">www.afylaworld.com</l></p>
							<p>Shipping timing may vary from country to another. Delivery times begin one business day after the order is placed.</p>
							<p>Read more in our <l :href="route('page', 'shipping-returns-policy')">Shipping & Returns policy</l>.</p>
						</div>

						<div class="tab-pane fade" id="returns">
							<p class="fw-medium">RETURNS & REFUNDS</p>
							<p>You may exchange the items purchased from <l :href="route('home')">www.afylaworld.com</l> within 15 days of receipt of your purchase. AFYLA will cover the shipping costs to our warehouse and you main free of charge. Please follow these four steps:</p>
							<p>1.Contact us: Our team of advisors will assist you on the return by offering a complete service or pick up by the courier company. They will also provide the documents needed by email. Contact us by choosing the subject “Returns”. You can also email or call us.</p>
							<p>2.Complete the questions in the form: You will receive a “Return form” with questions on it. You should complete them and include the form in the packaging.</p>
							<p>3.Prepare the packaging: Including the return form completed and with the documents requested by our advisors team.</p>
							<p>4.Give the package to the courier: We will contact the courier to schedule a pickup and shipment of your return or We can hand you the courier’s contact an arrange a pick up that will suit you better. Or You can drop the package off at Our carrier shipping location. All returns shipped using the prepaid shipping label is complimentary.</p>
							<p>Once the parcel arrives at our warehouse, it will be checked by our quality control team. After approval AFYLA will refund the amount paid to the card which you made the payment, This process may take up to 15 days.</p>
							<p>Read more in our <l :href="route('page', 'shipping-returns-policy')">Shipping & Returns policy</l>.</p>
						</div>

						<div class="tab-pane fade" id="payment">
							<p class="fw-medium">PAYMENT</p>
							<p>AFYLA accepts:</p>
							<div class="row gx-0 mb-3">
								<div class="col-sm-4 col-lg-3 col-xl-2">
									<img src="/img/icons/mastercard.png" width="64px" />
								</div>
								<div class="col-sm-4 col-lg-3 col-xl-2">
									<img src="/img/icons/visa.png" width="64px" />
								</div>
								<div class="col-sm-4 col-lg-3 col-xl-2">
									<img src="/img/icons/paypal.png" width="64px" />
								</div>
								<div class="col-sm-4 col-lg-3 col-xl-2">
									<img src="/img/icons/applepay.png" width="64px" />
								</div>
								<div class="col-sm-4 col-lg-3 col-xl-2">
									<img src="/img/icons/afterpay.png" width="64px" />
								</div>
							</div>
							<p>Payment will include only the price of the products. The costs of the shipping and delivery are totally free. Under no circumstances will You be charged more than the product price relative to the payment method chosen by You.</p>
							<p>The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping.</p>
						</div>

						<div class="tab-pane fade" id="account">
							<p class="fw-medium mb-0">MY ACCOUNT</p>
							<p class="mb-0">Creating an account in AFYLA’s website will give you the opportunity to access to exclusive services, such as:</p>
							<p class="mb-0">1. Saving your wishlist;</p>
							<p class="mb-0">2. Following and accessing all your orders;</p>
							<p class="mb-0">3. Access to private sales;</p>
							<p class="mb-0">4. Priority for pre-sales;</p>
							<p class="mb-0">5. Access to promotions reserved exclusively for our members;</p>
							<p class="mb-0">6. Fast checkouts;</p>
							<p>7. More personalized customer experience.</p>
							<p class="fw-medium mb-0">NEWSLETTER</p>
							<p class="mb-0">By subscribing to our newsletter, you can:</p>
							<p class="mb-0">1. Be informed among the first about our latest news;</p>
							<p class="mb-0">2. Receive our style tips;</p>
							<p class="mb-0">3. Be informed about our sustainable practices and how you can engage in a more ethical life;</p>
							<p class="mb-0">4. Be informed about special events;</p>
							<p>5. Receive our recommended tips that can help you achieve self-empowerment.</p>
						</div>

					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import FindSize from '../components/FindSize'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import axios from 'axios'
	export default {
		components: {
			AppLayout,
			FindSize,
			h: Head,
			l: Link,
		},
		methods: {
			getOrder() {
				if (this.uuid) {
					this.loading = true
					axios.get(this.route('order', this.uuid)).then(response => {
						this.notfound = response.data.order ? false : true
						this.order = response.data.order || {}
						this.loading = false
					})
				}
			}
		},
		data() {
			return {
				notfound: false,
				loading: false,
				uuid: null,
				order: {},
			}
		}
	}
</script>

<style scoped>
	a:not(.active) {
		text-decoration: underline;
	}
</style>
