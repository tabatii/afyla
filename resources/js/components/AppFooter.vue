<template>
	<footer class="bg-primary">
		<Notification v-model="notification" title="Thank you for joining us.">
			<p class="mb-0">Check your email address to get a promo code and use it in your first order.</p>
		</Notification>
		<div class="container-fluid px-3 px-sm-5">
			<div class="row gy-4 pb-5 my-0">
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">NEWSLETTER</span></li>
						<li class="nav-item">
							<form class="subscribe d-flex" @submit.prevent="subscribe">
								<input type="text" class="form-control input" v-model="subscription.email" placeholder="Email" />
								<button type="submit" class="btn">
									<img src="/img/icons/send.png" height="24px" />
								</button>
							</form>
							<small class="text-danger" v-text="subscription.errors.email"></small>
						</li>
					</ul>
				</div>
				<div class="col-md-6 offset-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">CUSTOMER SERVICE</span></li>
						<li class="nav-item">
							<a class="underline me-2" :href="'tel:'+settings.phone">
								{{ settings.phone[0] === '+' ? settings.phone : `+${settings.phone}` }}
							</a>
							<a class="underline" :href="'mailto:'+settings.contact_email" v-text="settings.contact_email"></a>
						</li>
						<li class="nav-item">
							Shop Assistant via
							<a class="underline" :href="'https://wa.me/'+settings.whatsapp" target="_blank">WhatsApp</a> |
							<a class="underline" :href="'weixin://dl/chat?'+settings.wechat" target="_blank">WeChat</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="row gy-4 my-0">
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">ABOUT AFYLA</span></li>
						<li class="nav-item"><l class="underline" :href="route('about')">AFYLA WORLD</l></li>
						<li class="nav-item"><l class="underline" :href="route('sustainability')">SUSTAINABILITY</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">NEED HELP ?</span></li>
						<li class="nav-item"><l class="underline" :href="route('faq')">FAQ</l></li>
						<li class="nav-item"><l class="underline" :href="route('contact')">CONTACT US</l></li>
						<li class="nav-item"><l class="underline" :href="route('customer')">CUSTOMER CARE</l></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'shipping-returns-policy')">SHIPPING & RETURNS</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">LEGALS</span></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'terms-conditions-of-use')">TERMS & CONDITIONS OF USE</l></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'terms-conditions-of-sale')">TERMS & CONDITIONS OF SALE</l></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'zero-tolerance-policy')">ZERO TOLERANCE POLICY</l></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'privacy-policy')">PRIVACY POLICY</l></li>
						<li class="nav-item"><l class="underline" :href="route('page', 'cookies-policy')">COOKIES POLICY</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-2"><span class="fw-medium">JOIN US</span></li>
						<li class="nav-item"><a class="underline" :href="settings.instagram" target="_blank">INSTAGRAM</a></li>
						<li class="nav-item"><a class="underline" :href="settings.facebook" target="_blank">FACEBOOK</a></li>
						<li class="nav-item"><a class="underline" :href="settings.twitter" target="_blank">TWITTER</a></li>
						<li class="nav-item"><a class="underline" :href="settings.youtube" target="_blank">YOUTUBE</a></li>
						<li class="nav-item"><a class="underline" :href="settings.linkedin" target="_blank">LINKEDIN</a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import Notification from './Notification'
	export default {
		components: {
			Notification,
			l: Link,
		},
		computed: {
			settings() {
				return this.$page.props.settings
			}
		},
		methods: {
			subscribe() {
				this.subscription.post(this.route('subscription.add'), {
					preserveScroll: true,
					onSuccess: () => {
						this.subscription.reset()
						this.notification = true
					}
				})
			}
		},
		data() {
			return {
				notification: false,
				subscription: this.$inertia.form({
					email: null,
				})
			}
		}
	}
</script>

<style scoped>
	footer {
		padding-top: 50px;
		padding-bottom: 100px;
	}
	.subscribe button {
		padding-bottom: 0;
		border: 0;
		border-bottom: 2px solid var(--bs-primary);
		box-shadow: none !important;
	}
</style>
