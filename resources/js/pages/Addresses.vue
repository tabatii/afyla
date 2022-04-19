<template>
	<UserMenu>
		<div class="row gy-4" v-if="tab === 1">
			<div class="col-lg-6 col-xl-4">
				<div class="d-flex justify-content-center align-items-center pointer bg-light h-100" style="min-height:200px" @click="tab = 2">
					<i class="bi bi-plus display-1"></i>
				</div>
			</div>
			<div class="col-lg-6 col-xl-4" v-for="(address, i) in addresses" :key="address.id">
				<div class="d-flex flex-column justify-content-between bg-light h-100 p-4" style="min-height:200px">
					<div class="row g-0">
						<div class="col-1">
							<i class="bi bi-person-fill"></i>
						</div>
						<div class="col-11">
							<span v-text="address.name"></span>
						</div>
						<div class="col-1">
							<i class="bi bi-telephone-fill"></i>
						</div>
						<div class="col-11">
							<span v-text="address.phone"></span>
						</div>
						<div class="col-1">
							<i class="bi bi-geo-alt-fill"></i>
						</div>
						<div class="col-11">
							<span>{{ address.street }},</span>
							<span v-if="address.details">{{ address.details }},</span>
							<span>{{ address.city }},</span>
							<span>{{ address.state }},</span>
							<span>{{ address.zip }},</span>
							<span>{{ address.country }}</span>
						</div>
					</div>
					<div class="d-flex justify-content-end">
						<u class="pointer text-muted" @click="fill(i)">Edit</u>
						<u class="pointer text-muted ms-3" @click="remove(address.id)">Delete</u>
					</div>
				</div>
			</div>
		</div>
		<div class="row" v-else>
			<div class="col-xl-8">
				<form class="shadow p-3 p-sm-5" @submit.prevent="addOrEdit">
					<div class="row gx-2">
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" v-model="form.name" placeholder="Full name" />
								<label>Full name</label><small class="text-danger" v-text="form.errors.name"></small>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" v-model="form.phone" placeholder="Phone number" />
								<label>Phone number</label><small class="text-danger" v-text="form.errors.phone"></small>
							</div>
						</div>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" v-model="form.street" placeholder="Street address" />
						<label>Street address</label><small class="text-danger" v-text="form.errors.street"></small>
					</div>
					<div class="form-floating mb-3">
						<input type="text" class="form-control" v-model="form.details" placeholder="Apt, Suite, Floor, etc. (optional)" />
						<label>Apt, Suite, Floor, etc. (optional)</label><small class="text-danger" v-text="form.errors.details"></small>
					</div>
					<div class="row gx-2">
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" v-model="form.city" placeholder="City" />
								<label>City</label><small class="text-danger" v-text="form.errors.city"></small>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" v-model="form.state" placeholder="State" />
								<label>State</label><small class="text-danger" v-text="form.errors.state"></small>
							</div>
						</div>
					</div>
					<div class="row gx-2">
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<input type="text" class="form-control" v-model="form.zip" placeholder="Zip code" />
								<label>Zip code</label><small class="text-danger" v-text="form.errors.zip"></small>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-floating mb-3">
								<select class="form-select" v-model="form.country">
									<option :value="null">Select a country</option>
									<option value="morocco">Morocco</option>
								</select>
								<label>Country</label><small class="text-danger" v-text="form.errors.country"></small>
							</div>
						</div>
					</div>
					<div class="d-grid gap-2">
						<button type="submit" class="btn btn-primary py-3" :disabled="form.processing">SAVE ADDRESS</button>
						<button type="button" class="btn btn-light py-3" @click="reset">CANCEL</button>
					</div>
				</form>
			</div>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	export default {
		props: {
			addresses: Array,
		},
		components: {
			UserMenu,
		},
		methods: {
			addOrEdit() {
				if (this.selected === false) {
					return this.add()
				}
				return this.edit()
			},
			reset() {
				this.tab = 1
				this.selected = false
				this.form.reset()
			},
			fill(i) {
				this.selected = i
				this.form.name = this.addresses[i].name
				this.form.phone = this.addresses[i].phone
				this.form.street = this.addresses[i].street
				this.form.details = this.addresses[i].details
				this.form.city = this.addresses[i].city
				this.form.state = this.addresses[i].state
				this.form.zip = this.addresses[i].zip
				this.form.country = this.addresses[i].country
				this.tab = 2
			},
			add() {
				this.form.post(route('address.add'), {
					preserveScroll: true,
					onSuccess: () => {
						this.reset()
					}
				})
			},
			edit() {
				this.form.put(route('address.edit', this.addresses[this.selected].id), {
					preserveScroll: true,
					onSuccess: () => {
						this.reset()
					}
				})
			},
			remove(id) {
				this.$inertia.delete(this.route('address.delete', id))
			}
		},
		data() {
			return {
				tab: 1,
				selected: false,
				form: this.$inertia.form({
					name: null,
					phone: null,
					street: null,
					details: null,
					city: null,
					state: null,
					zip: null,
					country: null,
				}),
			}
		}
	}
</script>
