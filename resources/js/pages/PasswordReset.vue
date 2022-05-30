<template>
	<AppLayout>
		<h title="Reset Password"></h>
		<section class="bg-primary p-3 p-sm-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8 col-lg-6">
						<form class="px-3 px-sm-5" @submit.prevent="reset">
							<div class="alert alert-danger" role="alert" v-text="form.errors.token" v-if="form.errors.token"></div>
							<div class="mb-3">
								<input type="password" class="form-control border shadow-none py-3" v-model="form.password" placeholder="NEW PASSWORD" />
								<small class="text-danger" v-text="errors.password"></small>
								<div class="rules">
									<PasswordCheck v-model="form.password"></PasswordCheck>
								</div>
							</div>
							<div class="mb-3">
								<input type="password" class="form-control border shadow-none py-3" v-model="form.password_confirmation" placeholder="CONFIRM PASSWORD" />
							</div>
							<div class="d-grid">
								<button type="submit" class="btn btn-secondary px-5 py-3" :disabled="form.processing">SAVE</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import PasswordCheck from '../components/PasswordCheck'
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		props: {
			errors: Object,
		},
		components: {
			PasswordCheck,
			AppLayout,
			h: Head,
		},
		methods: {
			reset() {
				this.form.post(this.route('password.update'), {
					preserveScroll: true,
				})
			}
		},
		data() {
			return {
				form: this.$inertia.form({
					token: null,
					email: null,
					password: null,
					password_confirmation: null,
				})
			}
		},
		created() {
			this.form.token = this.route().params.token
			this.form.email = this.route().params.email
		}
	}
</script>
