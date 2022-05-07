<template>
	<UserMenu>
		<h title="Change Password"></h>
		<form class="px-3 px-sm-5" @submit.prevent="change">
			<p>CHANGE PASSWORD</p>
			<div class="mb-3">
				<input type="password" class="form-control border shadow-none py-3" v-model="form.current_password" placeholder="CURRENT PASSWORD" />
				<small class="text-danger" v-text="errors.current_password"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control border shadow-none py-3" v-model="form.new_password" placeholder="NEW PASSWORD" />
				<small class="text-danger" v-text="errors.new_password"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control border shadow-none py-3" v-model="form.new_password_confirmation" placeholder="CONFIRM PASSWORD" />
			</div>
			<div class="d-flex justify-content-end">
				<button type="submit" class="btn btn-secondary px-5 py-3" :disabled="form.processing">SAVE</button>
			</div>
		</form>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		props: {
			errors: Object,
		},
		components: {
			UserMenu,
			h: Head,
		},
		methods: {
			change() {
				this.form.patch(route('password'), {
					preserveScroll: true,
					onSuccess: () => {
						this.form.reset()
					}
				})
			}
		},
		data() {
			return {
				form: this.$inertia.form({
					current_password: null,
					new_password: null,
					new_password_confirmation: null,
				})
			}
		}
	}
</script>
