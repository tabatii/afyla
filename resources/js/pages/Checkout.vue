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
									<div class="col-6">
										<input type="text" class="form-control input" v-model="user.firstname" :disabled="auth" placeholder="First name" />
										<small class="text-danger" v-text="user.errors.firstname"></small>
									</div>
									<div class="col-6">
										<input type="text" class="form-control input" v-model="user.lastname" :disabled="auth" placeholder="Last name" />
										<small class="text-danger" v-text="user.errors.lastname"></small>
									</div>
									<div class="col-12">
										<input type="text" class="form-control input" v-model="user.email" :disabled="auth" placeholder="Email" />
										<small class="text-danger" v-text="user.errors.email"></small>
									</div>
									<div class="col-12">
										<div class="form-check">
											<input type="checkbox" class="form-check-input shadow-none" id="sub" v-model="user.subscribe" />
											<label class="form-check-label" for="sub">Subscribe to Newsletter</label>
										</div>
									</div>
									<div class="col-12">
										<div class="d-flex justify-content-end">
											<button type="button" class="btn btn-primary px-5 py-3" :disabled="user.processing" @click="next('user')">NEXT</button>
										</div>
									</div>
								</div>
							</div>
							<div v-else-if="step === 3">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">SHIPPING INFORMATION</span>
									<span class="underline pointer" @click="step = 2">BACK</span>
								</div>
								<div>
									<p class="fw-medium">Shipping address :</p>
									<div class="dropdown" v-if="addresses.length > 0">
										<button type="button" class="btn btn-secondary mw-100 text-truncate shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
											<span v-if="selected > -1">
												{{ addresses[selected].street }}, {{ addresses[selected].city }}, {{ addresses[selected].state }}, {{ addresses[selected].zip }}
												<i class="bi bi-caret-down-fill"></i>
											</span>
											<span v-else>SELECT ADDRESS <i class="bi bi-caret-down-fill"></i></span>
										</button>
										<ul class="dropdown-menu shadow">
											<li>
												<div class="dropdown-item text-dark pointer" @click="selected = -1">
													<i class="bi bi-check" :class="{show: false}"></i>
													<span>New address</span>
												</div>
											</li>
											<li v-for="(a, i) in addresses" :key="Math.random()">
												<div class="d-flex align-items-baseline dropdown-item text-dark pointer" style="white-space:initial" @click="selected = i">
													<div class="me-1"><i class="bi bi-check" :class="{show: selected === i}"></i></div>
													<div>
														<span>{{ a.street }}, {{ a.city }}, {{ a.state }}, {{ a.zip }}</span>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div class="row gy-3 mt-0" v-if="selected === -1">
										<div class="col-6">
											<input type="text" class="form-control input" v-model="address.delivery.firstname" placeholder="First name" />
											<small class="text-danger" v-text="address.errors['delivery.firstname']"></small>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="address.delivery.lastname" placeholder="Last name" />
											<small class="text-danger" v-text="address.errors['delivery.lastname']"></small>
										</div>
										<div class="col-12">
											<input type="text" class="form-control input" v-model="address.delivery.street" placeholder="Email" />
											<small class="text-danger" v-text="address.errors['delivery.street']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.delivery.city" placeholder="City" />
											<small class="text-danger" v-text="address.errors['delivery.city']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.delivery.state" placeholder="State" />
											<small class="text-danger" v-text="address.errors['delivery.state']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.delivery.zip" placeholder="Zip code" />
											<small class="text-danger" v-text="address.errors['delivery.zip']"></small>
										</div>
										<div class="col-6">
											<select class="form-select input" v-model="address.delivery.country">
												<option :value="null">COUNTRY</option>
												<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
											</select>
											<small class="text-danger" v-text="address.errors['delivery.country']"></small>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="address.delivery.phone" placeholder="Phone number" />
											<small class="text-danger" v-text="address.errors['delivery.phone']"></small>
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
											<input type="text" class="form-control input" v-model="address.billing.firstname" placeholder="First name" />
											<small class="text-danger" v-text="address.errors['billing.firstname']"></small>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="address.billing.lastname" placeholder="Last name" />
											<small class="text-danger" v-text="address.errors['billing.lastname']"></small>
										</div>
										<div class="col-12">
											<input type="text" class="form-control input" v-model="address.billing.street" placeholder="Email" />
											<small class="text-danger" v-text="address.errors['billing.street']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.billing.city" placeholder="City" />
											<small class="text-danger" v-text="address.errors['billing.city']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.billing.state" placeholder="State" />
											<small class="text-danger" v-text="address.errors['billing.state']"></small>
										</div>
										<div class="col-4">
											<input type="text" class="form-control input" v-model="address.billing.zip" placeholder="Zip code" />
											<small class="text-danger" v-text="address.errors['billing.zip']"></small>
										</div>
										<div class="col-6">
											<select class="form-select input" v-model="address.billing.country">
												<option :value="null">COUNTRY</option>
												<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
											</select>
											<small class="text-danger" v-text="address.errors['billing.country']"></small>
										</div>
										<div class="col-6">
											<input type="text" class="form-control input" v-model="address.billing.phone" placeholder="Phone number" />
											<small class="text-danger" v-text="address.errors['billing.phone']"></small>
										</div>
									</div>
								</div>
								<div class="d-flex justify-content-end mt-4">
									<button type="button" class="btn btn-primary px-5 py-3" :disabled="address.processing" @click="next('address')">NEXT</button>
								</div>
							</div>
							<div v-else-if="step === 4">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">SHIPPING METHOD</span>
									<span class="underline pointer" @click="step = 3">BACK</span>
								</div>
								<div class="mb-4">
									<div class="form-check" v-for="company in companies" :key="Math.random()">
										<input type="radio" class="form-check-input shadow-none opacity-100" :id="company.slug" :value="company.id" v-model="shipping.company" />
										<label class="form-check-label opacity-100" :for="company.slug" v-text="company.name"></label>
									</div>
									<small class="text-danger" v-text="shipping.errors.company"></small>
								</div>
								<div class="d-flex justify-content-end">
									<button type="button" class="btn btn-primary px-5 py-3" :disabled="shipping.processing" @click="next('shipping')">NEXT</button>
								</div>
							</div>
							<div v-else-if="step === 5">
								<div class="d-flex mb-5">
									<span class="fw-medium me-auto">PAYMENT</span>
									<span class="underline pointer" @click="step = 4">BACK</span>
								</div>
								<div class="row gx-2">
									<div class="col-sm-6 col-lg-4">
										<NapsCheckout :uuid="uuid"></NapsCheckout>
									</div>
									<div class="col-sm-6 col-lg-4">
										<PaypalCheckout :uuid="uuid"></PaypalCheckout>
									</div>
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
								<span class="text-danger fw-medium text-end" v-text="getFormatedPrice(getTotal)"></span>
							</div>
							<hr />
							<div class="d-flex">
								<span class="text-muted me-auto">Shipping:</span>
								<span class="fw-medium text-end">{{ getCompanyPrice === 0 ? 'Free' : getFormatedPrice(getCompanyPrice) }}</span>
							</div>
							<div class="d-flex">
								<span class="text-muted me-auto">VAT (included):</span>
								<span class="fw-medium text-end" v-text="getFormatedPrice(getTax(getBagTotal))"></span>
							</div>
							<div class="d-flex align-items-baseline">
								<span class="text-muted me-auto">Promo code:</span>
								<div>
									<div class="d-flex">
										<input type="text" class="form-control form-control-sm border shadow-none me-1" v-model="coupon.code" placeholder="Code" />
										<button type="button" class="btn btn-sm btn-primary shadow-none" :disabled="loading" @click="checkCoupon">APPLY</button>
									</div>
									<small class="text-danger" v-text="coupon.error"></small>
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
	import randomstring from 'randomstring'
	import axios from 'axios'
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
			companies: Array,
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
			getCompanyPrice() {
				var company = this.companies.find(c => c.id === this.shipping.company)
				return company ? company.price : 0
			},
			getTotal() {
				return (this.getBagTotal - this.coupon.value) + this.getCompanyPrice
			},
			uuid() {
				return randomstring.generate({
					charset: 'numeric',
					length: 15,
				})
			}
		},
		watch: {
			selected() {
				this.fillAddress()
				this.fillBilling()
			},
			same() {
				this.fillBilling()
			}
		},
		methods: {
			next(target) {
				this[target].post(this.route(`checkout.${target}`), {
					preserveScroll: true,
					onSuccess: () => {
						if (target === 'user') {
							this.step = 3
						} else if (target === 'address') {
							this.step = 4
						} else if (target === 'shipping') {
							this.step = 5
						}
					}
				})
			},
			checkCoupon() {
				this.loading = true
				axios.post(this.route('coupon'), {
					code: this.coupon.code,
				}).then(response => {
					this.loading = false
					this.coupon.error = null
					this.coupon.details = response.data.coupon
					this.applyCoupon()
				}).catch(error => {
					this.loading = false
					this.coupon.error = error.response.data.errors.code[0]
				})
			},
			applyCoupon() {
				var min = this.coupon.details.min || 1
				var max = this.coupon.details.max || 1000000000
				if (this.getBagTotal >= min && this.getBagTotal <= max) {
					this.shipping.coupon = this.coupon.details.id
					if (this.coupon.details.type === 'fixed') {
						this.coupon.value = this.coupon.details.value
					} else if (this.coupon.details.type === 'percentage') {
						this.coupon.value = (this.getBagTotal * this.coupon.details.value) / 100
					}
				}
			},
			fillUser() {
				if (this.auth) {
					this.user.firstname = this.auth.firstname
					this.user.lastname = this.auth.lastname
					this.user.email = this.auth.email
				}
			},
			fillAddress() {
				for (var [key, value] of Object.entries(this.address.delivery)) {
					if (key === 'uuid') {
						continue
					}
					this.address.delivery[key] = this.selected > -1 ? this.addresses[this.selected][key] : null
				}
			},
			fillBilling() {
				for (var [key, value] of Object.entries(this.address.billing)) {
					if (key === 'uuid') {
						continue
					}
					this.address.billing[key] = this.same ? this.address.delivery[key] : null
				}
			}
		},
		data() {
			return {
				loading: false,
				orderID: null,
				step: 0,
				same: true,
				selected: -1,
				user: this.$inertia.form({
					uuid: null,
					firstname: null,
					lastname: null,
					email: null,
					subscribe: false,
				}),
				address: this.$inertia.form({
					delivery: {
						uuid: null,
						firstname: null,
						lastname: null,
						street: null,
						city: null,
						state: null,
						zip: null,
						country: null,
						phone: null,
					},
					billing: {
						uuid: null,
						firstname: null,
						lastname: null,
						street: null,
						city: null,
						state: null,
						zip: null,
						country: null,
						phone: null,
					}
				}),
				shipping: this.$inertia.form({
					uuid: null,
					company: null,
					coupon: null,
				}),
				coupon: {
					details: {},
					value: 0,
					code: null,
					error: null,
				}
			}
		},
		created() {
			this.fillUser()
			this.user.uuid = this.uuid
			this.address.delivery.uuid = this.uuid
			this.address.billing.uuid = this.uuid
			this.shipping.uuid = this.uuid
			this.shipping.company = this.companies.length > 0 ? this.companies[0].id : null
			this.step = this.auth ? 2 : 1
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
