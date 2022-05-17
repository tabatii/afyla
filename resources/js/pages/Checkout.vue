<template>
	<AppLayout>
		<h title="Checkout"></h>
		<section class="py-5">
			<div class="container">
				<div class="row gx-0 gy-4">
					<div class="col-lg-8">
						<div class="p-5">
							<div v-if="step === 1">
								<div class="d-flex mb-4">
									<span>PERSONAL INFORMATION</span>
								</div>
								<div class="mb-5">
									<LoginForm></LoginForm>
								</div>
								<div class="d-grid">
									<button type="button" class="btn btn-primary py-3" @click="step = 2">CONTINUE AS GUEST</button>
								</div>
							</div>
							<div v-else-if="step === 2">
								<div class="d-flex mb-4">
									<span class="me-auto">PERSONAL INFORMATION</span>
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
											<input type="checkbox" class="form-check-input shadow-none" id="subscribe" v-model="guest.subscribe" />
											<label class="form-check-label" for="subscribe" style="user-select:none">Subscribe to Newsletter</label>
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
								<div class="d-flex mb-4">
									<span class="me-auto">SHIPPING INFORMATION</span>
									<span class="underline pointer" v-if="!auth" @click="step = 2">BACK</span>
								</div>
								<div class="row gy-4">
									<div class="col-6">
										<input type="text" class="form-control input" v-model="address.firstname" placeholder="First name" />
									</div>
									<div class="col-6">
										<input type="text" class="form-control input" v-model="address.lastname" placeholder="Last name" />
									</div>
									<div class="col-12">
										<input type="text" class="form-control input" v-model="address.street" placeholder="Email" />
									</div>
									<div class="col-4">
										<input type="text" class="form-control input" v-model="address.city" placeholder="City" />
									</div>
									<div class="col-4">
										<input type="text" class="form-control input" v-model="address.zip" placeholder="Zip code" />
									</div>
									<div class="col-4">
										<input type="text" class="form-control input" v-model="address.state" placeholder="State" />
									</div>
									<div class="col-6">
										<select class="form-select input" v-model="address.country">
											<option :value="null">COUNTRY</option>
											<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
										</select>
									</div>
									<div class="col-6">
										<input type="text" class="form-control input" v-model="address.phone" placeholder="Phone number" />
									</div>
									<div class="col-12">
										<div class="d-flex justify-content-end">
											<button type="button" class="btn btn-primary px-5 py-3" @click="step = 4">NEXT</button>
										</div>
									</div>
								</div>
							</div>
							<div v-else-if="step === 4">
								<div class="d-flex mb-4">
									<span class="me-auto">SHIPPING METHOD</span>
									<span class="underline pointer" @click="step = 3">BACK</span>
								</div>
								<div class="form-check mb-4">
									<input type="checkbox" class="form-check-input shadow-none opacity-100" id="fedex" checked disabled />
									<label class="form-check-label opacity-100" for="fedex" style="user-select:none">FedEx Express worldwide</label>
								</div>
								<div class="d-flex justify-content-end">
									<button type="button" class="btn btn-primary px-5 py-3" @click="step = 5">NEXT</button>
								</div>
							</div>
							<div v-else-if="step === 5">
								<div class="d-flex mb-4">
									<span class="me-auto">PAYMENT METHOD</span>
									<span class="underline pointer" @click="step = 4">BACK</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="p-5">
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
										<div class="mb-2">
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
	import NapsCheckout from '../components/NapsCheckout'
	import AppLayout from '../components/AppLayout'
	import LoginForm from '../components/LoginForm'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import { countries } from 'countries-list'
	export default {
		components: {
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
			naps() {
				return {
					key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh2q4viqQwzVWCKT1KRPvsiixEoNm8dg95gE7h4OUVuERp9csLKYHM9I9EaQ/SUYwgBBLHOslpe5qbvX3x1oAcksO5BT8SYHmtbgUpH1yZjcU1lI2/M3qyRUb03NQaF6vgxCOLGlLpDQqdg0jxl4ySDYu3bcMQto6J2eRAnIPIZkC/h4GQMwhBheFEHf7uMCqj8uNkNf5yU1Js9/Yj8FGbS1fSYwQ1ZQ7Jr94eUhCuTgjFKYUxD18QIPgYEnYbir4mKagtnF8fv3S1+COsVlUXkix77KGW5SYMbeJJYtOVTs1/Cr+/8eHRf5al5249binOJxWLkANpsZtLNI60i9UUQIDAQAB',
					cmr: 1012202,
					gal: 2007,
					lang: 'EN',
					name: this.auth ? this.auth.name : `${this.guest.firstname} ${this.guest.lastname}`,
					order: null,
					amount: this.getBagTotal + this.shipping + this.vat,
					email: null,
					operation: null,
					successURL: null,
					timeoutURL: null,
					failURL: null,
					recallURL: null,
					phone: this.address.phone,
					street: this.address.street,
					city: this.address.city,
					state: this.address.state,
					zip: this.address.zip,
					country: 'MA',
				}
			}
		},
		data() {
			return {
				loading: false,
				coupon: null,
				shipping: 0,
				vat: 20,
				step: 0,
				guest: this.$inertia.form({
					email: null,
					firstname: null,
					lastname: null,
					subscribe: false,
				}),
				address: this.$inertia.form({
					firstname: null,
					lastname: null,
					phone: null,
					street: null,
					city: null,
					state: null,
					zip: null,
					country: null,
					default: false,
				})
			}
		},
		created() {
			this.step = this.auth ? 3 : 1
		}
	}
</script>
