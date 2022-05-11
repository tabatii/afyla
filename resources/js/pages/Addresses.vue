<template>
	<UserMenu>
		<h title="Address Book"></h>
		<div class="d-flex align-items-center px-3 px-sm-5">
			<p class="fw-medium me-auto mb-0">ADDRESS BOOK</p>
			<button type="button" class="btn btn-secondary fw-medium px-4" @click="formshow = true">ADD A NEW ADDRESS</button>
		</div>
		<hr />
		<div v-if="formshow === false">
			<p class="px-3 px-sm-5" v-if="addresses.length === 0">NO SAVED ADDRESSES</p>
			<div v-for="(address, i) in addresses" :key="Math.random()" v-else>
				<p class="fw-medium px-3 px-sm-5" v-if="address.default">DEFAULT</p>
				<div class="row g-0 px-3 px-sm-5">
					<div class="col-sm-3 mb-4 mb-sm-0">
						<p class="mb-0" v-text="address.name"></p>
						<p class="mb-0" v-text="address.phone"></p>
					</div>
					<div class="col-sm-5 mb-4 mb-sm-0">
						<span>{{ address.street }},</span>
						<span>{{ address.city }},</span><br />
						<span>{{ address.state }},</span>
						<span>{{ address.zip }},</span>
						<span>{{ address.country }}.</span>
					</div>
					<div class="col-sm-4 mb-4 mb-sm-0">
						<u class="pointer text-muted me-5" @click="fill(i)">Edit</u>
						<u class="pointer text-muted" @click="remove(address.id)">Delete</u>
					</div>
				</div>
				<hr />
			</div>
		</div>
		<div v-else>
			<form class="p-3 p-sm-5" @submit.prevent="addOrEdit">
				<div class="row gx-2">
					<div class="col-sm-6">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.firstname" placeholder="FIRST NAME" />
							<small class="text-danger" v-text="form.errors.firstname"></small>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.lastname" placeholder="LAST NAME" />
							<small class="text-danger" v-text="form.errors.lastname"></small>
						</div>
					</div>
				</div>
				<div class="mb-3">
					<input type="text" class="form-control border shadow-none py-3" v-model="form.street" placeholder="YOUR ADDRESS" />
					<small class="text-danger" v-text="form.errors.street"></small>
				</div>
				<div class="row gx-2">
					<div class="col-sm-4">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.city" placeholder="CITY" />
							<small class="text-danger" v-text="form.errors.city"></small>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.zip" placeholder="ZIP CODE" />
							<small class="text-danger" v-text="form.errors.zip"></small>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.state" placeholder="STATE" />
							<small class="text-danger" v-text="form.errors.state"></small>
						</div>
					</div>
				</div>
				<div class="row gx-2">
					<div class="col-sm-6">
						<div class="mb-3">
							<select class="form-select border shadow-none py-3" v-model="form.country">
								<option :value="null">COUNTRY</option>
								<option :value="country.name" v-text="country.name" v-for="(country, code) in countries" :key="code"></option>
							</select>
							<small class="text-danger" v-text="form.errors.country"></small>
						</div>
					</div>
					<div class="col-sm-6">
						<div class="mb-3">
							<input type="text" class="form-control border shadow-none py-3" v-model="form.phone" placeholder="PHONE NUMBER" />
							<small class="text-danger" v-text="form.errors.phone"></small>
						</div>
					</div>
				</div>
				<div class="form-check">
					<input type="checkbox" class="form-check-input shadow-none bg-white border-0" id="default" v-model="form.default" />
					<label class="form-check-label" for="default" style="user-select:none">THIS IS MY DEFAULT ADDRESS</label>
				</div>
				<div class="d-flex justify-content-end">
					<button type="button" class="btn px-5 py-3 me-3" @click="reset" style="background:#d5cdc5">CANCEL</button>
					<button type="submit" class="btn btn-secondary px-5 py-3" :disabled="form.processing">SAVE ADDRESS</button>
				</div>
			</form>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	import { Head } from '@inertiajs/inertia-vue'
	import { countries } from 'countries-list'
	export default {
		props: {
			addresses: Array,
		},
		components: {
			UserMenu,
			h: Head,
		},
		computed: {
			countries() {
				return countries
			}
		},
		methods: {
			addOrEdit() {
				if (this.selected === false) {
					return this.add()
				}
				return this.edit()
			},
			reset() {
				this.formshow = false
				this.selected = false
				this.form.reset()
			},
			fill(i) {
				this.selected = i
				this.form.firstname = this.addresses[i].name.split(' ')[0]
				this.form.lastname = this.addresses[i].name.split(' ')[1]
				this.form.phone = this.addresses[i].phone
				this.form.street = this.addresses[i].street
				this.form.city = this.addresses[i].city
				this.form.state = this.addresses[i].state
				this.form.zip = this.addresses[i].zip
				this.form.country = this.addresses[i].country
				this.form.default = this.addresses[i].default
				this.formshow = true
			},
			add() {
				this.form.post(this.route('address.add'), {
					preserveScroll: true,
					onSuccess: () => {
						this.reset()
					}
				})
			},
			edit() {
				this.form.put(this.route('address.edit', this.addresses[this.selected].id), {
					preserveScroll: true,
					onSuccess: () => {
						this.reset()
					}
				})
			},
			remove(id) {
				this.$inertia.delete(this.route('address.delete', id), {
					preserveScroll: true,
				})
			}
		},
		data() {
			return {
				formshow: false,
				selected: false,
				form: this.$inertia.form({
					firstname: null,
					lastname: null,
					phone: null,
					street: null,
					city: null,
					state: null,
					zip: null,
					country: null,
					default: false,
				}),
			}
		}
	}
</script>
