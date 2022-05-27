<template>
	<div class="tab-pane fade show active" id="login">
		<PopUp v-model="sent">
			<div class="text-center py-2">
				<p class="fw-medium">We have sent you a password reset link to that email address.</p>
			</div>
		</PopUp>
		<form @submit.prevent="send" v-if="tab">
			<div class="mb-3">
				<input type="email" class="form-control input" v-model="forgot.email" placeholder="Email" />
				<small class="text-danger" v-text="forgot.errors.email"></small>
			</div>
			<div class="d-grid gap-2">
				<button type="submit" class="btn btn-primary py-3" :disabled="forgot.processing">RECEIVE PASSWORD RESET LINK</button>
				<button type="button" class="btn btn-light py-3" @click="tab = false">CANCEL</button>
			</div>
		</form>
		<form @submit.prevent="login.post(route('login', {redirect}))" v-else>
			<div class="py-3" v-if="login.errors.auth">
				<span class="text-danger" v-text="login.errors.auth"></span>
			</div>
			<div class="mb-3">
				<input type="email" class="form-control input" v-model="login.email" placeholder="Email" />
				<small class="text-danger" v-text="login.errors.email"></small>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control input" v-model="login.password" placeholder="Password" />
				<small class="text-danger" v-text="login.errors.password"></small>
			</div>
			<div class="d-flex flex-column flex-sm-row mb-3">
				<div class="form-check me-auto">
					<input type="checkbox" class="form-check-input shadow-none" :id="`remember${_uid}`" v-model="login.remember" />
					<label class="form-check-label" :for="`remember${_uid}`">REMEMBER ME</label>
				</div>
				<l href="#" @click.prevent="tab = true">FORGOT PASSWORD ?</l>
			</div>
			<div class="d-grid gap-2">
				<button type="submit" class="btn btn-primary py-3" :disabled="login.processing">SIGN IN</button>
				<p class="text-center mb-0">SIGN IN WITH <a :href="route('facebook')" class="underline">FACEBOOK</a> OR <a :href="route('google')" class="underline">GOOGLE</a></p>
			</div>
		</form>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import PopUp from '../components/PopUp'
	export default {
		components: {
			PopUp,
			l: Link,
		},
		computed: {
			redirect() {
				return this.route(this.route().current())
			}
		},
		methods: {
			send() {
				this.forgot.post(this.route('password.send'), {
					onSuccess: () => {
						this.tab = false
						this.sent = true
						this.forgot.reset()
					}
				})
			}
		},
		data() {
			return {
				tab: false,
				sent: false,
				login: this.$inertia.form({
					email: null,
					password: null,
					remember: false,
				}),
				forgot: this.$inertia.form({
					email: null,
				})
			}
		}
	}
</script>
