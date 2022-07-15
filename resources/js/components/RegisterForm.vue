<template>
	<div class="tab-pane fade" id="register">
		<form @submit.prevent="register.post(route('register', {redirect}))">
			<div class="mb-3">
				<input type="text" class="form-control input" v-model="register.email" placeholder="Email" />
				<small class="text-danger" v-text="register.errors.email"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control input" v-model="register.password" placeholder="Password" />
				<div class="rules">
					<PasswordCheck v-model="register.password"></PasswordCheck>
				</div>
				<small class="text-danger" v-text="register.errors.password"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control input" v-model="register.password_confirmation" placeholder="Confirm password" />
			</div>
			<div class="mb-3">
				<input type="text" class="form-control input" v-model="register.firstname" placeholder="First name" />
				<small class="text-danger" v-text="register.errors.firstname"></small>
			</div>
			<div class="mb-3">
				<input type="text" class="form-control input" v-model="register.lastname" placeholder="Last name" />
				<small class="text-danger" v-text="register.errors.lastname"></small>
			</div>
			<div class="mb-3">
				<select class="form-select input" v-model="register.country">
					<option :value="null" selected>Country</option>
					<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="Math.random()"></option>
				</select>
				<small class="text-danger" v-text="register.errors.country"></small>
			</div>
			<div class="mb-3">
				<div class="row gx-2">
					<div class="col-12">
						<small class="fw-medium">WE WOULD LOVE TO KNOW YOUR BIRTHDAY</small>
					</div>
					<div class="col-sm-4 mb-1 mb-sm-0">
						<select class="form-select" v-model="date.day" @change="setBirthday">
							<option :value="null" selected>Day</option>
							<option :value="n" v-text="n" v-for="n in 31" :key="Math.random()"></option>
						</select>
					</div>
					<div class="col-sm-4 mb-1 mb-sm-0">
						<select class="form-select" v-model="date.month" @change="setBirthday">
							<option :value="null" selected>Month</option>
							<option :value="n-1" v-text="n" v-for="n in 12" :key="Math.random()"></option>
						</select>
					</div>
					<div class="col-sm-4 mb-1 mb-sm-0">
						<select class="form-select" v-model="date.year" @change="setBirthday">
							<option :value="null" selected>Year</option>
							<option :value="n" v-text="n" v-for="n in years" :key="Math.random()"></option>
						</select>
					</div>
				</div>
				<small class="text-danger" v-text="register.errors.birthday"></small>
			</div>
			<div class="mb-3">
				<div class="form-check">
					<input type="checkbox" class="form-check-input shadow-none" id="subscribe" v-model="register.subscribe" />
					<label class="form-check-label" for="subscribe">I SUBSCRIBE FOR EXCLUSIVE UPDATES</label>
				</div>
				<div class="form-check">
					<input type="checkbox" class="form-check-input shadow-none" id="agree" v-model="register.agree" />
					<label class="form-check-label" for="agree">
						<span>I AGREE TO</span>
						<a :href="route('page', 'terms-conditions-of-use')" target="_blank">TERMS & CONDITIONS</a>
					</label><br />
					<small class="text-danger" v-text="register.errors.agree"></small>
				</div>
			</div>
			<div class="d-grid gap-2">
				<button type="submit" class="btn btn-primary py-3" :disabled="register.processing">CREATE AN ACCOUNT</button>
				<p class="text-center mb-0">SIGN IN WITH <a :href="route('facebook')" class="underline">FACEBOOK</a> OR <a :href="route('google')" class="underline">GOOGLE</a></p>
			</div>
		</form>
	</div>
</template>

<script>
	import PasswordCheck from '../components/PasswordCheck'
	import { Link } from '@inertiajs/inertia-vue'
	import { countries } from 'countries-list'
	import moment from 'moment'
	export default {
		components: {
			PasswordCheck,
			l: Link,
		},
		computed: {
			redirect() {
				return window.location.href
			},
			countries() {
				return countries
			},
			years() {
				var array = []
				for (var n = 2015; n >= 1930; n--) {
					array.push(n)
				}
				return array
			}
		},
		methods: {
			setBirthday() {
				this.register.birthday = moment().set({
					date: this.date.day,
					month: this.date.month,
					year: this.date.year,
				}).toISOString()
			}
		},
		data() {
			return {
				date: {
					day: null,
					month: null,
					year: null,
				},
				register: this.$inertia.form({
					firstname: null,
					lastname: null,
					email: null,
					country: null,
					birthday: null,
					password: null,
					password_confirmation: null,
					subscribe: false,
					agree: false,
				})
			}
		}
	}
</script>
