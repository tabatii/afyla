<template>
	<UserMenu>
		<div class="shadow p-3 p-sm-5">
			<div class="row g-0 mb-3">
				<label class="col-2 col-form-label">First name</label>
				<div class="col-7">
					<input type="text" class="px-3" :class="input(disabled.firstname)" v-model="form.firstname" :disabled="disabled.firstname" />
					<small class="text-danger" v-text="errors.firstname"></small>
				</div>
				<div class="col-3">
					<div class="d-flex justify-content-end">
						<button type="button" class="btn btn-primary me-2" v-show="!disabled.firstname" @click="firstname">SAVE</button>
						<button type="button" class="btn btn-light" v-show="disabled.firstname" @click="disabled.firstname = false">EDIT</button>
						<button type="button" class="btn btn-light" v-show="!disabled.firstname" @click="disabled.firstname = true">CANCEL</button>
					</div>
				</div>
			</div>
			<div class="row g-0 mb-3">
				<label class="col-2 col-form-label">Last name</label>
				<div class="col-7">
					<input type="text" class="px-3" :class="input(disabled.lastname)" v-model="form.lastname" :disabled="disabled.lastname" />
					<small class="text-danger" v-text="errors.lastname"></small>
				</div>
				<div class="col-3">
					<div class="d-flex justify-content-end">
						<button type="button" class="btn btn-primary me-2" v-show="!disabled.lastname" @click="lastname">SAVE</button>
						<button type="button" class="btn btn-light" v-show="disabled.lastname" @click="disabled.lastname = false">EDIT</button>
						<button type="button" class="btn btn-light" v-show="!disabled.lastname" @click="disabled.lastname = true">CANCEL</button>
					</div>
				</div>
			</div>
			<div class="row g-0">
				<label class="col-2 col-form-label">Password</label>
				<div class="col-7">
					<div class="mb-2">
						<input type="password" class="px-3" :class="input(disabled.password)" v-model="form.current_password" v-show="!disabled.password" placeholder="Current password" />
						<small class="text-danger" v-text="errors.current_password"></small>
					</div>
					<div class="mb-2">
						<input type="password" class="px-3" :class="input(disabled.password)" v-model="form.new_password" v-show="!disabled.password" placeholder="New password" />
						<small class="text-danger" v-text="errors.new_password"></small>
					</div>
					<div class="mb-2">
						<input type="password" class="px-3" :class="input(disabled.password)" v-model="form.new_password_confirmation" v-show="!disabled.password" placeholder="Confirm new password" />
					</div>
				</div>
				<div class="col-3">
					<div class="d-flex justify-content-end">
						<button type="button" class="btn btn-primary me-2" v-show="!disabled.password" @click="password">SAVE</button>
						<button type="button" class="btn btn-light" v-show="disabled.password" @click="disabled.password = false">EDIT</button>
						<button type="button" class="btn btn-light" v-show="!disabled.password" @click="disabled.password = true">CANCEL</button>
					</div>
				</div>
			</div>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	export default {
		props: {
			errors: Object,
		},
		components: {
			UserMenu,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			}
		},
		methods: {
			input(value) {
				if (value) {
					return ['form-control-plaintext']
				}
				return ['form-control']
			},
			firstname() {
				this.$inertia.post(route('firstname'), {
					firstname: this.form.firstname,
				}, {
					preserveScroll: true,
					onSuccess: () => {
						this.disabled.firstname = true
					}
				})
			},
			lastname() {
				this.$inertia.post(route('lastname'), {
					lastname: this.form.lastname,
				}, {
					preserveScroll: true,
					onSuccess: () => {
						this.disabled.lastname = true
					}
				})
			},
			password() {
				this.$inertia.post(route('password'), {
					current_password: this.form.current_password,
					new_password: this.form.new_password,
					new_password_confirmation: this.form.new_password_confirmation,
				}, {
					preserveScroll: true,
					onSuccess: () => {
						this.disabled.password = true
					}
				})
			}
		},
		data() {
			return {
				form: {
					firstname: null,
					lastname: null,
					current_password: null,
					new_password: null,
					new_password_confirmation: null,
				},
				disabled: {
					firstname: true,
					lastname: true,
					password: true,
				},
			}
		},
		created() {
			this.form.firstname = this.auth.name.split(' ')[0]
			this.form.lastname = this.auth.name.split(' ')[1]
		}
	}
</script>
