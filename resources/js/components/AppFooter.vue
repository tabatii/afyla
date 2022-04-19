<template>
	<footer class="bg-primary">
		<div class="container"> 
			<div class="row gy-4">
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-3"><span>INFORMATION</span></li>
						<li class="nav-item"><l href="#">AFYLA WORLD</l></li>
						<li class="nav-item"><l href="#">SUSTAINABILITY</l></li>
						<li class="nav-item"><l href="#">FAQ</l></li>
						<li class="nav-item"><l href="#">CONTACT US</l></li>
						<li class="nav-item"><l href="#">CUSTOMER CARE</l></li>
						<li class="nav-item"><l href="#">SHIPPING & RETURNS</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-3"><span>LEGALS</span></li>
						<li class="nav-item"><l href="#">TERMS & CONDITIONS OF USE</l></li>
						<li class="nav-item"><l href="#">TERMS & CONDITIONS OF SALE</l></li>
						<li class="nav-item"><l href="#">ZERO TOLERANCE POLICY</l></li>
						<li class="nav-item"><l href="#">PRIVACY POLICY</l></li>
						<li class="nav-item"><l href="#">COOKIES POLICY</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-3"><span>CUSTOMER SERVICE</span></li>
						<li class="nav-item">CALL US: <a href="tel:212666700661">+212666700661</a></li>
						<li class="nav-item">EMAIL: <a href="mailto:customer@afylaworld.com">customer@afylaworld.com</a></li>
						<li class="nav-item">SHOP ASSISTANT: <l href="#">whatsapp</l> | <l href="#">wechat</l></li>
					</ul>
				</div>
				<div class="col-md-6 col-lg-3">
					<ul class="nav flex-column">
						<li class="nav-item mb-3"><span>NEWSLETTER</span></li>
						<li class="nav-item"><p>Get instant updates about our new products and special promos.</p></li>
						<li class="nav-item">
							<form class="d-flex" @submit.prevent="subscribe">
								<input type="text" class="form-control border-0 shadow-none" v-model="subscription.email" placeholder="Enter your email" />
								<button type="submit" class="btn btn-primary border-0 bg-white text-dark shadow-none">
									<i class="bi bi-send"></i>
								</button>
							</form>
							<small class="text-danger" v-text="subscription.errors.email"></small>
						</li>
					</ul>
				</div>
			</div>
			<hr class="mt-5 mb-4" />
			<div class="d-flex">
				<p class="me-auto mb-0">&copy;2022 <l href="/" class="text-dark">AFYLA</l>, All Rights Reserved</p>
				<div class="d-flex">
					<a :href="social.instagram" class="text-dark mx-1" target="_blank"><i class="bi bi-instagram fs-5"></i></a>
					<a :href="social.facebook" class="text-dark mx-1" target="_blank"><i class="bi bi-facebook fs-5"></i></a>
					<a :href="social.twitter" class="text-dark mx-1" target="_blank"><i class="bi bi-twitter fs-5"></i></a>
					<a :href="social.youtube" class="text-dark mx-1" target="_blank"><i class="bi bi-youtube fs-5"></i></a>
					<a :href="social.linkedin" class="text-dark mx-1" target="_blank"><i class="bi bi-linkedin fs-5"></i></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		components: {
			l: Link,
		},
		methods: {
			subscribe() {
				this.subscription.post(route('subscription.add'), {
					preserveScroll: true,
					onSuccess: () => {
						this.subscription.reset()
					}
				})
			}
		},
		data() {
			return {
				subscription: this.$inertia.form({
					email: null,
				}),
				social: {
					instagram: 'https://www.instagram.com/afyla.world',
					facebook: 'https://www.facebook.com/Afyla.world',
					twitter: 'https://twitter.com/Afylaworld',
					youtube: 'https://www.youtube.com/channel/UCq4DKi0GK0dk0feRRWKla6Q',
					linkedin: 'https://www.linkedin.com/company/afyla',
				}
			}
		}
	}
</script>

<style scoped>
	footer {
		padding: 70px 0;
	}
	.bi-instagram:hover {
		color:  #C13584;
	}
	.bi-facebook:hover {
		color:  #4267B2;
	}
	.bi-twitter:hover {
		color:  #1DA1F2;
	}
	.bi-youtube:hover {
		color:  #FF0000;
	}
	.bi-linkedin:hover {
		color:  #0072B1;
	}
</style>
