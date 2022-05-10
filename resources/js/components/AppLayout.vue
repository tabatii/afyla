<template>
	<div>
		<h>
			<meta head-key="description" name="description" :content="settings.description" />
		</h>
		<div class="newsletter" v-if="!newsletter">
			<div class="content">
				<button type="button" class="btn btn-close close" @click="closeNewsletter"></button>
				<div class="row">
					<div class="col-6">
						<p class="fs-4 fw-medium mb-4">JOIN OUR COMMUNITY</p>
						<div class="mb-5">
							<p>GET 25% OFF YOUR FIRST ORDER.</p>
							<p>RECEIVE EARLY ACCESS TO PRE-SALE.</p>
							<p>EXCLUSIVE SERVICES, SHOP FASTER.</p>
							<p>CHECK YOUR ORDERS AND RETURNS.</p>
							<p>SAVE YOUR FAVORITE ITEMS.</p>
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
					<div class="col-6">
						<img src="/img/newsletter.jpg" class="d-block w-100" />
					</div>
				</div>
			</div>
		</div>
		<div class="cookies" v-if="!cookies">
			<button type="button" class="btn btn-close btn-close-white close" @click="closeCookies"></button>
			<div class="px-4 py-5">
				<p>AFYLA uses cookies to give you the best experience. Cookies allows you shop our collections and use any personalized features available on our website. <l href="#" class="text-white underline">click here</l> to view our cookies policy to learn more about this.</p>
				<button type="button" class="btn btn-light" @click="closeCookies">ACCEPT</button>
			</div>
		</div>
		<PopUp v-model="popup" v-if="flash.auth !== null">
			<div class="text-center py-2">
				<p class="fw-medium" v-text="flash.auth"></p>
			</div>
		</PopUp>
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import { Head } from '@inertiajs/inertia-vue'
	import AppHeader from './AppHeader'
	import AppFooter from './AppFooter'
	import PopUp from './PopUp'
	import Cookies from 'js-cookie'
	export default {
		components: {
			AppHeader,
			AppFooter,
			PopUp,
			h: Head,
			l: Link,
		},
		computed: {
			settings() {
				return this.$page.props.settings
			},
			flash() {
				return this.$page.props.flash
			}
		},
		methods: {
			closeNewsletter() {
				Cookies.set('newsletter-popup', 'hide', { expires: 30 })
				this.newsletter = Cookies.get('newsletter-popup')
			},
			closeCookies() {
				Cookies.set('cookies-popup', 'hide', { expires: 30 })
				this.cookies = Cookies.get('cookies-popup')
			},
			subscribe() {
				this.form.post(this.route('subscription.add'), {
					onSuccess: () => {
						this.form.reset()
						this.closeNewsletter()
					}
				})
			}
		},
		data() {
			return {
				newsletter: null,
				cookies: null,
				popup: true,
				form: this.$inertia.form({
					email: null,
				})
			}
		},
		mounted() {
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
		background-color: rgba(0,0,0,.5);
		z-index: 1095;
	}
	.newsletter .content {
		position: relative;
		width: 100%;
		max-width: 800px;
		padding: 3rem;
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
