<template>
	<AppLayout>
		<h title="Checkout"></h>
		<section class="py-5" style="margin-bottom:200px">
			<div class="container">
				<div class="row gx-0 gy-4">
					<div class="col-lg-8">
						<div class="px-sm-5">
							<div v-if="step === 1">
								<div class="d-flex mb-5">
									<span class="fw-medium">PERSONAL INFORMATION</span>
								</div>
								<div class="mb-5">
									<LoginForm></LoginForm>
								</div>
								<div class="d-grid">
									<button type="button" class="btn btn-primary py-3" @click="step = 2">CONTINUE AS GUEST</button>
								</div>
							</div>
							<div v-else-if="step === 2">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">PERSONAL INFORMATION</span>
									<span class="underline pointer" v-if="!auth" @click="step = 1">BACK</span>
								</div>
								<div class="row gy-4">
									<div class="col-12">
										<input type="text" class="form-control input" v-model="guest.email" placeholder="Email" />
									</div>
									<div class="col-6">
										<input type="text" class="form-control input" v-model="guest.firstname" placeholder="First name" />
									</div>
									<div class="col-6">
										<input type="text" class="form-control input" v-model="guest.lastname" placeholder="Last name" />
									</div>
									<div class="col-12">
										<div class="form-check">
											<input type="checkbox" class="form-check-input shadow-none" id="sub" v-model="guest.subscribe" />
											<label class="form-check-label" for="sub">Subscribe to Newsletter</label>
										</div>
									</div>
									<div class="col-12">
										<div class="d-flex justify-content-end">
											<button type="button" class="btn btn-primary px-5 py-3" @click="step = 3">NEXT</button>
										</div>
									</div>
								</div>
							</div>
							<div v-else-if="step === 3">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">SHIPPING INFORMATION</span>
									<span class="underline pointer" v-if="!auth" @click="step = 2">BACK</span>
								</div>
								<div>
									<p class="fw-medium">Shipping address :</p>
									<div class="dropdown" v-if="addresses.length > 0">
										<button type="button" class="btn btn-secondary mw-100 text-truncate shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
											<span v-if="selected > -1">
												{{ addresses[selected].street }}, {{ addresses[selected].city }}, {{ addresses[selected].state }}, {{ addresses[selected].zip }}
												<i class="bi bi-caret-down-fill"></i>
											</span>
											<span v-else>
												SELECT ADDRESS
												<i class="bi bi-caret-down-fill"></i>
											</span>
										</button>
										<ul class="dropdown-menu shadow">
											<li>
												<div class="dropdown-item text-dark pointer" @click="selected = -1">
													<i class="bi bi-check" :class="{show: false}"></i>
													<span>New address</span>
												</div>
											</li>
											<li v-for="(address, i) in addresses" :key="Math.random()">
												<div class="d-flex align-items-baseline dropdown-item text-dark pointer" style="white-space:initial" @click="selected = i">
													<div class="me-1"><i class="bi bi-check" :class="{show: selected === i}"></i></div>
													<div>
														<span>{{ address.street }}, {{ address.city }}, {{ address.state }}, {{ address.zip }}</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div class="row gy-3 mt-0" v-if="selected === -1">
										<div class="col-6">
											<input type="text" class="form-control input" v-model="sa.firstname" placeholder="First name" />
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="sa.lastname" placeholder="Last name" />
										</div>
										<div class="col-12">
											<input type="text" class="form-control input" v-model="sa.street" placeholder="Email" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="sa.city" placeholder="City" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="sa.zip" placeholder="Zip code" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="sa.state" placeholder="State" />
										</div>
										<div class="col-6">
											<select class="form-select input" v-model="sa.country">
												<option :value="null">COUNTRY</option>
												<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
											</select>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="sa.phone" placeholder="Phone number" />
										</div>
									</div>
								</div>
								<div class="pt-3 pb-5">
									<div class="form-check">
										<input type="checkbox" class="form-check-input shadow-none" id="same" v-model="same" />
										<label class="form-check-label" for="same">My billing address is the same as my shipping address.</label>
									</div>
								</div>
								<div v-if="same === false">
									<p class="fw-medium">Billing Address :</p>
									<div class="row gy-3">
										<div class="col-6">
											<input type="text" class="form-control input" v-model="ba.firstname" placeholder="First name" />
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="ba.lastname" placeholder="Last name" />
										</div>
										<div class="col-12">
											<input type="text" class="form-control input" v-model="ba.street" placeholder="Email" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="ba.city" placeholder="City" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="ba.zip" placeholder="Zip code" />
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="ba.state" placeholder="State" />
										</div>
										<div class="col-6">
											<select class="form-select input" v-model="ba.country">
												<option :value="null">COUNTRY</option>
												<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
											</select>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="ba.phone" placeholder="Phone number" />
										</div>
									</div>
								</div>
								<div class="d-flex justify-content-end mt-4">
									<button type="button" class="btn btn-primary px-5 py-3" @click="step = 4">NEXT</button>
								</div>
							</div>
							<div v-else-if="step === 4">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">SHIPPING METHOD</span>
									<span class="underline pointer" @click="step = 3">BACK</span>
								</div>
								<div class="form-check mb-4">
									<input type="checkbox" class="form-check-input shadow-none opacity-100" id="fedex" checked disabled />
									<label class="form-check-label opacity-100" for="fedex">FedEx Express worldwide</label>
								</div>
								<div class="d-flex justify-content-end">
									<button type="button" class="btn btn-primary px-5 py-3" @click="step = 5">NEXT</button>
								</div>
							</div>
							<div v-else-if="step === 5">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">PAYMENT METHOD</span>
									<span class="underline pointer" @click="step = 4">BACK</span>
								</div>
								<div>
									<NapsCheckout class="me-2" :data="napsData"></NapsCheckout>
									<PaypalCheckout></PaypalCheckout>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="px-sm-5">
							<div class="d-flex align-items-baseline">
								<img src="/img/icons/bag.png" class="me-2" height="16px" />
								<span>{{ bag.length }} Item(s)</span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">Total:</span>
								<span class="text-danger fw-medium text-end" v-text="getFormatedPrice(getBagTotal + shipping + vat)"></span>
							</div>
							<hr />
							<div class="d-flex">
								<span class="text-muted me-auto">Shipping:</span>
								<span class="fw-medium text-end">{{ shipping === 0 ? 'Free' : getFormatedPrice(shipping) }}</span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">VAT (included):</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(vat)"></span>
							</div>
							<div class="d-flex align-items-center">
								<span class="text-muted me-auto">Promo code:</span>
								<div>
									<input type="text" class="form-control form-control-sm border shadow-none" v-model="coupon" />
								</div>
							</div>
							<hr />
							<div v-for="(item, i) in bag" :key="Math.random()">
								<div class="d-flex">
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
										<div>
											<span>Size:</span>
											<span class="text-muted" v-text="item.size.name"></span>
										</div>
										<div>
											<span>Qty:</span>
											<span class="text-muted" v-text="item.qty"></span>
										</div>
									</div>
								</div>
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import PaypalCheckout from '../components/PaypalCheckout'
	import NapsCheckout from '../components/NapsCheckout'
	import AppLayout from '../components/AppLayout'
	import LoginForm from '../components/LoginForm'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import { countries } from 'countries-list'
	export default {
		components: {
			PaypalCheckout,
			NapsCheckout,
			AppLayout,
			LoginForm,
			h: Head,
			l: Link,
		},
		props: {
			addresses: Array,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			bag() {
				return this.$page.props.bag
			},
			countries() {
				return countries
			},
			napsData() {
				return {
					key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh2q4viqQwzVWCKT1KRPvsiixEoNm8dg95gE7h4OUVuERp9csLKYHM9I9EaQ/SUYwgBBLHOslpe5qbvX3x1oAcksO5BT8SYHmtbgUpH1yZjcU1lI2/M3qyRUb03NQaF6vgxCOLGlLpDQqdg0jxl4ySDYu3bcMQto6J2eRAnIPIZkC/h4GQMwhBheFEHf7uMCqj8uNkNf5yU1Js9/Yj8FGbS1fSYwQ1ZQ7Jr94eUhCuTgjFKYUxD18QIPgYEnYbir4mKagtnF8fv3S1+COsVlUXkix77KGW5SYMbeJJYtOVTs1/Cr+/8eHRf5al5249binOJxWLkANpsZtLNI60i9UUQIDAQAB',
					cmr: 1012202,
					gal: 2007,
					lang: 'EN',
					name: `${this.ba.firstname} ${this.ba.lastname}`,
					email: this.auth ? this.auth.email : this.guest.email,
					order: this.orderID,
					amount: this.getBagTotal + this.shipping + this.vat,
					operation: null,
					successURL: this.route('orders'),
					timeoutURL: this.route('checkout'),
					failURL: this.route('checkout'),
					recallURL: this.route('home'),
					street: this.ba.street,
					city: this.ba.city,
					state: this.ba.state,
					zip: this.ba.zip,
					country: this.ba.country,
					phone: this.ba.phone,
				}
			}
		},
		watch: {
			selected() {
				if (this.selected > -1) {
					this.fillAddress()
					return
				}
				this.clearAddress()
			}
		},
		methods: {
			billing() {
				if (this.same === true) {
					for (var [key, value] of Object.entries(this.ba)) {
						this.ba[key] = this.sa[key]
					}
				}
			},
			fillAddress() {
				this.sa.firstname = this.addresses[this.selected].firstname
				this.sa.lastname = this.addresses[this.selected].lastname
				this.sa.street = this.addresses[this.selected].street
				this.sa.city = this.addresses[this.selected].city
				this.sa.state = this.addresses[this.selected].state
				this.sa.zip = this.addresses[this.selected].zip
				this.sa.country = this.addresses[this.selected].country
				this.sa.phone = this.addresses[this.selected].phone
			},
			clearAddress() {
				this.sa.firstname = null
				this.sa.lastname = null
				this.sa.street = null
				this.sa.city = null
				this.sa.state = null
				this.sa.zip = null
				this.sa.country = null
				this.sa.phone = null
			}
		},
		data() {
			return {
				loading: false,
				orderID: null,
				coupon: null,
				shipping: 0,
				vat: 20,
				step: 0,
				same: false,
				selected: -1,
				guest: this.$inertia.form({
					firstname: null,
					lastname: null,
					email: null,
					subscribe: false,
				}),
				sa: this.$inertia.form({
					firstname: null,
					lastname: null,
					street: null,
					city: null,
					state: null,
					zip: null,
					country: null,
					phone: null,
				}),
				ba: {
					firstname: null,
					lastname: null,
					street: null,
					city: null,
					state: null,
					zip: null,
					country: null,
					phone: null,
				}
			}
		},
		created() {
			this.step = this.auth ? 3 : 1
			this.selected = this.addresses.map(address => address.default).indexOf(true)
		}
	}
</script>

<style scoped>
	.bi-check {
		display: inline-block;
		transform: scale(1.5);
		visibility: hidden;
	}
	.bi-check.show {
		visibility: visible;
	}
</style>
