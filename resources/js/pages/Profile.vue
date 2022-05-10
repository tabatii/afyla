<template>
	<UserMenu>
		<h title="Profile"></h>
		<div class="px-3 px-sm-5 py-2">
			<p class="fw-medium text-center text-uppercase">WELCOME BACK, <span v-text="auth.name"></span></p>
			<form class="row gy-3 mb-3" v-if="showform" @submit.prevent="edit">
				<div class="col-12">
					<span>PROFILE INFORMATION</span>
				</div>
				<div class="col-sm-6">
					<input type="text" class="form-control border shadow-none py-3" v-model="form.firstname" placeholder="FIRST NAME" />
				</div>
				<div class="col-sm-6">
					<input type="text" class="form-control border shadow-none py-3" v-model="form.lastname" placeholder="LAST NAME" />
				</div>
				<div class="col-sm-6">
					<input type="text" class="form-control border shadow-none bg-white py-3" :value="auth.email" placeholder="EMAIL" disabled />
				</div>
				<div class="col-sm-6">
					<select class="form-select border shadow-none py-3" v-model="form.country">
						<option :value="null">COUNTRY</option>
						<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
					</select>
				</div>
				<div class="col-sm-8">
					<div class="row gx-2">
						<div class="col-sm-4">
							<select class="form-select border shadow-none py-3" v-model="date.day" @change="setBirthday">
								<option :value="null" selected>Day</option>
								<option :value="n" v-text="n" v-for="n in 31" :key="n"></option>
							</select>
						</div>
						<div class="col-sm-4">
							<select class="form-select border shadow-none py-3" v-model="date.month" @change="setBirthday">
								<option :value="null" selected>Month</option>
								<option :value="n-1" v-text="n" v-for="n in 12" :key="n"></option>
							</select>
						</div>
						<div class="col-sm-4">
							<select class="form-select border shadow-none py-3" v-model="date.year" @change="setBirthday">
								<option :value="null" selected>Year</option>
								<option :value="n" v-text="n" v-for="n in years" :key="n"></option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-sm-4">
					<input type="text" class="form-control border shadow-none py-3" v-model="form.phone" placeholder="PHONE" />
				</div>
				<div class="col-12">
					<div class="form-check">
						<input type="checkbox" class="form-check-input shadow-none bg-white border-0" id="subscribe" v-model="form.subscribe" />
						<label class="form-check-label" for="subscribe" style="user-select:none">SUBSCRIBE TO THE NEWSLETTER</label>
					</div>
				</div>
				<div class="col-12 d-flex justify-content-end">
					<button type="button" class="btn px-5 py-3 me-3" @click="showform = false" style="background:#d5cdc5">CANCEL</button>
					<button type="submit" class="btn btn-secondary px-5 py-3" :disabled="form.processing">SAVE</button>
				</div>
			</form>
			<div class="row gx-0 gy-3 mb-3" v-else>
				<div class="col-12 d-flex align-items-center">
					<span class="me-auto">PROFILE INFORMATION</span>
					<button type="button" class="btn btn-secondary" @click="showform = true">EDIT</button>
				</div>
				<div class="col-sm-4">
					<span class="text-uppercase" v-text="auth.name"></span>
				</div>
				<div class="col-sm-8">
					<span class="text-uppercase" v-text="auth.email"></span>
				</div>
				<div class="col-sm-4">
					<span class="text-uppercase">DOB: {{ birthday }}</span>
				</div>
				<div class="col-sm-8">
					<span class="text-uppercase" v-text="auth.country"></span>
				</div>
				<div class="col-12">
					<span class="text-uppercase">PHONE: {{ auth.phone }}</span>
				</div>
				<div class="col-12">
					<p class="mb-0" v-if="auth.sub">YOU ARE SUBSCRIBED FOR THE NEWSLETTER</p>
					<p class="mb-0" v-else>YOU ARE NOT SUBSCRIBED FOR THE NEWSLETTER</p>
				</div>
			</div>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	import { Head } from '@inertiajs/inertia-vue'
	import { countries } from 'countries-list'
	import moment from 'moment'
	export default {
		props: {
			errors: Object,
		},
		components: {
			UserMenu,
			h: Head,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			birthday() {
				return this.auth.birthday ? moment(this.auth.birthday).format('DD-MM-YYYY') : null
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
				this.form.birthday = moment().set({
					date: this.date.day,
					month: this.date.month,
					year: this.date.year,
				}).toISOString()
			},
			edit() {
				this.form.put(this.route('profile'), {
					preserveScroll: true,
					onSuccess: () => {
						this.showform = false
					}
				})
			}
		},
		data() {
			return {
				showform: false,
				date: {
					day: null,
					month: null,
					year: null,
				},
				form: this.$inertia.form({
					firstname: null,
					lastname: null,
					country: null,
					birthday: null,
					phone: null,
					subscribe: null,
				})
			}
		},
		created() {
			this.form.firstname = this.auth.name.split(' ')[0]
			this.form.lastname = this.auth.name.split(' ')[1]
			this.form.country = this.auth.country
			this.form.phone = this.auth.phone
			this.form.subscribe = this.auth.sub
			this.date.day = this.auth.birthday ? moment(this.auth.birthday).get('date') : null
			this.date.month = this.auth.birthday ? moment(this.auth.birthday).get('month') : null
			this.date.year = this.auth.birthday ? moment(this.auth.birthday).get('year') : null
			this.setBirthday()
		}
	}
</script>
