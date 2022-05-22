<template>
	<ul class="nav ms-auto">
		<li class="nav-item" v-show="!mobile && !scroll">
			<div class="d-flex align-items-center h-100 mx-2" style="padding-top:2px">
				<l :href="route('page', 'shipping-returns-policy')" class="text-dark">
					<img src="/img/icons/truck.png" class="align-text-middle" height="27px" />
					<small class="underline">Free shipping & returns</small>
				</l>
			</div>
		</li>
		<li class="nav-item" v-show="!mobile && !scroll">
			<div class="d-flex align-items-center h-100 mx-2">
				<a :href="'tel:'+settings.phone" class="text-dark">
					<img src="/img/icons/mobile.png" class="align-text-top opacity-75" height="19px" />
					<small class="underline">
						{{ settings.phone[0] === '+' ? settings.phone : `+${settings.phone}` }}
					</small>
				</a>
			</div>
		</li>
		<li class="nav-item">
			<div class="d-flex align-items-center h-100 px-1 mx-2 pointer" data-bs-toggle="modal" data-bs-target="#search">
				<i class="bi bi-search fs-5"></i>
			</div>
		</li>
		<li class="nav-item">
			<div class="d-flex align-items-center h-100 px-1 mx-2 pointer" data-bs-toggle="offcanvas" :data-bs-target="auth ? '#menu' : '#forms'">
				<i class="bi bi-person fs-5 user-icon"></i>
				<span class="ms-2" v-text="auth.firstname" v-if="auth"></span>
			</div>
		</li>
		<li class="nav-item position-relative">
			<div class="d-flex align-items-center h-100 px-1 mx-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#wishlist">
				<img src="/img/icons/heart.png" height="23px" />
				<small class="counter" v-text="wishlist.length"></small>
			</div>
		</li>
		<li class="nav-item position-relative">
			<div class="d-flex align-items-center h-100 px-1 mx-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#bag">
				<img src="/img/icons/bag.png" height="23px" />
				<small class="counter" v-text="bag.length"></small>
			</div>
		</li>
	</ul>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		props: {
			mobile: Boolean,
			scroll: Number,
		},
		components: {
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			settings() {
				return this.$page.props.settings
			},
			wishlist() {
				return this.$page.props.wishlist
			},
			bag() {
				return this.$page.props.bag
			}
		}
	}
</script>

<style scoped>
	.counter {
		position: absolute;
		top: -5px;
		right: 3px;
		color: var(--bs-danger);
		font-weight: 600;
	}
	.user-icon {
		line-height: 1.4;
		transform:scale(1.4);
	}
</style>
