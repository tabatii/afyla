<template>
	<div>
		<h>
			<meta head-key="description" name="description" :content="settings.description" />
		</h>
		<Notification v-model="notification" title="Thank you for joining us.">
			<p class="mb-0">If this is your first time subscribing to our newsletter, you will receive a promo code in this email address. You can use it in your first order.</p>
		</Notification>
		<div class="newsletter" v-if="!newsletter">
			<div class="content px-3 px-sm-5 py-5">
				<button type="button" class="btn btn-close close" @click="closeNewsletter"></button>
				<div class="row gy-4">
					<div class="col-md-6 align-self-center order-2 order-md-1">
						<p class="fs-4 fw-medium mb-3 mb-sm-4">JOIN OUR COMMUNITY</p>
						<div class="mb-3 mb-sm-5">
							<p class="mb-2 mb-sm-3">GET 25% OFF YOUR FIRST ORDER.</p>
							<p class="mb-2 mb-sm-3">RECEIVE EARLY ACCESS TO PRE-SALE.</p>
							<p class="mb-2 mb-sm-3">EXCLUSIVE SERVICES, SHOP FASTER.</p>
							<p class="mb-2 mb-sm-3">CHECK YOUR ORDERS AND RETURNS.</p>
							<p class="mb-2 mb-sm-3">SAVE YOUR FAVORITE ITEMS.</p>
						</div>
						<form @submit.prevent="subscribe">
							<div class="mb-3">
								<input type="text" class="form-control input" v-model="form.email" placeholder="Enter your email" />
								<small class="text-danger" v-text="form.errors.email"></small>
							</div>
							<div class="d-grid">
								<button type="submit" class="btn btn-dark">SUBSCRIBE</button>
							</div>
						</form>
					</div>
					<div class="col-md-6 order-1 order-md-2">
						<img src="/img/newsletter.jpg" class="d-block w-100" />
					</div>
				</div>
			</div>
		</div>
		<div class="cookies" v-if="!cookies">
			<button type="button" class="btn btn-close btn-close-white close" @click="closeCookies"></button>
			<div class="px-4 py-5">
				<p>AFYLA uses cookies to give you the best experience. Cookies allows you shop our collections and use any personalized features available on our website. <l :href="route('page', 'cookies-policy')" class="text-white underline">click here</l> to view our cookies policy to learn more about this.</p>
				<button type="button" class="btn btn-light" @click="closeCookies">ACCEPT</button>
			</div>
		</div>
		<PopUp v-model="popup" v-if="flash.auth !== null">
			<div class="text-center py-2">
				<p class="fw-medium" v-text="flash.auth"></p>
			</div>
		</PopUp>
		<AppHeader />
		<main>
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import { Head } from '@inertiajs/inertia-vue'
	import Notification from './Notification'
	import AppHeader from './AppHeader'
	import AppFooter from './AppFooter'
	import PopUp from './PopUp'
	import Cookies from 'js-cookie'
	export default {
		components: {
			Notification,
			AppHeader,
			AppFooter,
			PopUp,
			h: Head,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			settings() {
				return this.$page.props.settings
			},
			flash() {
				return this.$page.props.flash
			}
		},
		methods: {
			closeNewsletter() {
				Cookies.set('newsletter-popup', 'hide', { expires: 7 })
				this.newsletter = Cookies.get('newsletter-popup')
			},
			closeCookies() {
				Cookies.set('cookies-popup', 'hide', { expires: 365 })
				this.cookies = Cookies.get('cookies-popup')
			},
			subscribe() {
				this.form.post(this.route('subscription.add'), {
					onSuccess: () => {
						this.form.reset()
						this.closeNewsletter()
						this.notification = true
					}
				})
			}
		},
		data() {
			return {
				notification: false,
				newsletter: null,
				cookies: null,
				popup: true,
				form: this.$inertia.form({
					email: null,
				})
			}
		},
		mounted() {
			if (this.auth && this.auth.sub) {
				this.closeNewsletter()
			}
			this.newsletter = Cookies.get('newsletter-popup')
			this.cookies = Cookies.get('cookies-popup')
		}
	}
</script>

<style scoped>
	.newsletter {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		background-color: rgba(0,0,0,.5);
		z-index: 1095;
	}
	.newsletter .content {
		position: relative;
		width: 700px;
		max-width: 100%;
		overflow: auto;
		background-color: white;
	}
	.cookies {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: black;
		color: white;
		z-index: 1090;
	}
	.newsletter .close,
	.cookies .close {
		position: absolute;
		top: .5rem;
		right: .5rem;
	}
</style>
