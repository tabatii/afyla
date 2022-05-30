<template>
	<UserMenu>
		<h title="Change Password"></h>
		<Notification v-model="notification" title="Your password has been changed.">
			<p class="mb-0">All your sessions on other devices has been logged out.</p>
		</Notification>
		<form class="px-3 px-sm-5" @submit.prevent="change">
			<p>CHANGE PASSWORD</p>
			<div class="mb-3">
				<input type="password" class="form-control border shadow-none py-3" v-model="form.current_password" placeholder="CURRENT PASSWORD" />
				<small class="text-danger" v-text="errors.current_password"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control border shadow-none py-3" v-model="form.new_password" placeholder="NEW PASSWORD" />
				<div class="rules">
					<PasswordCheck v-model="form.new_password"></PasswordCheck>
				</div>
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
	import PasswordCheck from '../components/PasswordCheck'
	import Notification from '../components/Notification'
	import UserMenu from '../components/UserMenu'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		props: {
			errors: Object,
		},
		components: {
			PasswordCheck,
			Notification,
			UserMenu,
			h: Head,
		},
		methods: {
			change() {
				this.form.patch(this.route('password'), {
					preserveScroll: true,
					onSuccess: () => {
						this.form.reset()
						this.notification = true
					}
				})
			}
		},
		data() {
			return {
				notification: false,
				form: this.$inertia.form({
					current_password: null,
					new_password: null,
					new_password_confirmation: null,
				})
			}
		}
	}
</script>
