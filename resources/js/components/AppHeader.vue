<template>
	<header>

		<div class="shipping-popup" v-if="mobile">
			<div class="alert alert-light alert-dismissible fade show mb-0" role="alert">
				Check out our <l :href="route('page', 'shipping-returns-policy')" class="alert-link underline">Free shipping & returns</l> policy.
				<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
			</div>
		</div>

		<div class="fixed-navbar" :class="{shadow: scroll > 60}">
			<nav class="navbar navbar-expand-lg navbar-light bg-white overflow-hidden pb-0" v-show="mobile || !scroll" style="padding-top:11px">
				<div class="container-fluid">
					<AppNav :mobile="mobile" :scroll="scroll"></AppNav>
				</div>
			</nav>
			<nav class="navbar navbar-expand-lg navbar-light bg-white py-0">
				<div class="container-fluid">
					<l href="/" class="navbar-brand py-0 pe-xl-5 me-xxl-5">AFYLA</l>
					<button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse pb-3 pb-lg-0" id="navbarContent">
						<ul class="navbar-nav ps-xl-5">
							<li class="nav-item">
								<l :href="route('shop', {tag: 'new'})" class="nav-link text-dark underline-hover mx-lg-2">WHAT'S NEW</l>
							</li>
							<li class="nav-item dropdown dropdown-hover" ref="categoriesItem">
								<l :href="route('shop')" class="nav-link text-dark underline-hover mx-lg-2" v-if="mobile" @click.prevent>SHOP</l>
								<l :href="route('shop')" class="nav-link text-dark underline-hover mx-lg-2" v-else>SHOP</l>
								<ul class="dropdown-menu" :class="{'d-block': !centered}" ref="categoriesMenu">
									<li><l :href="route('shop')" class="dropdown-item text-lg-center underline-hover">VIEW ALL</l></li>
									<li v-for="category in categories" :key="Math.random()">
										<l :href="route('shop', {categories: [category.id]})" class="dropdown-item text-lg-center underline-hover">
											{{ category.name }}
										</l>
									</li>
									<li>
										<l :href="route('shop', {tag: 'discount'})" class="dropdown-item text-lg-center text-danger underline-hover">SPECIAL PRICES</l>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown dropdown-hover" ref="collectionsItem">
								<l :href="route('shop')" class="nav-link text-dark underline-hover mx-lg-2" @click.prevent>COLLECTIONS</l>
								<ul class="dropdown-menu" :class="{'d-block': !centered}" ref="collectionsMenu">
									<li v-for="collection in collections" :key="Math.random()">
										<l :href="route('collection', collection.id)" class="dropdown-item text-lg-center underline-hover">
											{{ collection.title }}
										</l>
									</li>
								</ul>
							</li>
							<li class="nav-item">
								<l :href="route('about')" class="nav-link text-dark underline-hover mx-lg-2">AFYLA WORLD</l>
							</li>
							<li class="nav-item">
								<l :href="route('sustainability')" class="nav-link text-dark underline-hover mx-lg-2">SUSTAINABILITY</l>
							</li>
						</ul>
						<AppNav :mobile="mobile" :scroll="scroll" v-show="!mobile && scroll"></AppNav>
					</div>
				</div>
			</nav>
		</div>

		<div class="offcanvas offcanvas-end" id="bag" tabindex="-1" data-bs-scroll="true" style="width:500px">
			<div class="offcanvas-header">
				<h5 class="fw-light mb-0"><img src="/img/icons/bag.png" class="align-text-top" height="24px" /> SHOPPING BAG</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body p-0">
				<BagMenu></BagMenu>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="wishlist" tabindex="-1" data-bs-scroll="true" style="width:500px">
			<div class="offcanvas-header">
				<h5 class="fw-light mb-0"><i class="bi bi-heart fs-4 align-text-top"></i> YOUR WISHLIST</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body p-0">
				<WishlistMenu></WishlistMenu>
			</div>
		</div>

		<div class="modal fade" id="search" data-bs-backdrop="false" tabindex="-1">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-body px-0 px-sm-4 py-4">
						<SearchForm></SearchForm>
					</div>
				</div>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="menu" tabindex="-1" data-bs-scroll="true" v-if="auth">
			<div class="offcanvas-header pb-0">
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body d-flex flex-column justify-content-between">
				<ul class="nav flex-column">
					<li class="nav-item text-center fw-medium">
						<p class="px-3 mb-0">HELLO, {{ auth.firstname.toUpperCase() }}!</p>
						<p class="px-3 mb-4">WE HOPE YOU'RE DOING WELL.</p>
					</li>
					<li class="nav-item" v-if="admin">
						<a href="/admin" class="nav-link" target="_blank">DASHBOARD</a>
					</li>
					<li class="nav-item">
						<l :href="route('profile')" class="nav-link underline">MY AFYLA ACCOUNT</l>
					</li>
					<li class="nav-item">
						<l :href="route('profile')" class="nav-link">PROFILE</l>
					</li>
					<li class="nav-item">
						<l :href="route('orders')" class="nav-link">ORDERS</l>
					</li>
					<li class="nav-item">
						<l :href="route('addresses')" class="nav-link">ADDRESS BOOK</l>
					</li>
				</ul>
				<div class="px-3 mb-4">
					<p>If you have any queries or need further assistance, please <l :href="route('contact')" class="underline">Contact Us</l>.</p>
					<l :href="route('logout')" class="btn btn-primary py-3">SIGN OUT</l>
				</div>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="forms" tabindex="-1" data-bs-scroll="true" v-else>
			<div class="offcanvas-header">
				<h5 class="fs-2 fw-light mb-0"></h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body">
				<ul class="nav justify-content-between mb-3">
					<li class="nav-item">
						<a href="#login" class="nav-link text-dark active px-0" data-bs-toggle="pill">SIGN IN</a>
					</li>
					<li class="nav-item">
						<a href="#register" class="nav-link text-dark px-0" data-bs-toggle="pill">CREATE AN ACCOUNT</a>
					</li>
				</ul>
				<div class="tab-content">
					<LoginForm></LoginForm>
					<RegisterForm></RegisterForm>
				</div>
			</div>
		</div>

	</header>
</template>

<script>
	import WishlistMenu from '../components/WishlistMenu'
	import RegisterForm from '../components/RegisterForm'
	import LoginForm from '../components/LoginForm'
	import SearchForm from '../components/SearchForm'
	import BagMenu from '../components/BagMenu'
	import AppNav from '../components/AppNav'
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		components: {
			WishlistMenu,
			RegisterForm,
			LoginForm,
			SearchForm,
			BagMenu,
			AppNav,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			admin() {
				return this.$page.props.admin
			},
			categories() {
				return this.$page.props.categories
			},
			collections() {
				return this.$page.props.collections
			},
			wishlist() {
				return this.$page.props.wishlist
			},
			bag() {
				return this.$page.props.bag
			}
		},
		data() {
			return {
				search: null,
				centered: false,
				mobile: false,
				scroll: 0,
			}
		},
		mounted() {
			this.$refs.categoriesMenu.style.left = `-${(this.$refs.categoriesMenu.clientWidth/2)-(this.$refs.categoriesItem.clientWidth/2)}px`
			this.$refs.collectionsMenu.style.left = `-${(this.$refs.collectionsMenu.clientWidth/2)-(this.$refs.collectionsItem.clientWidth/2)}px`
			this.mobile = innerWidth < 992 ? true : false
			this.scroll = pageYOffset
			this.centered = true
			addEventListener('scroll', () => {
				this.scroll = pageYOffset
			})
			addEventListener('resize', () => {
				this.mobile = innerWidth < 992 ? true : false
			})
		}
	}
</script>

<style scoped>
	.shipping-popup {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
	}
	.fixed-navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.navbar-brand {
		font-family: 'Avenir-Heavy';
		font-size: 2.5rem;
		font-weight: bold;
		line-height: 1.3;
	}
	.dropdown-item {
		padding-top: .5rem;
		padding-bottom: .5rem;
		background-color: transparent;
		color: var(--bs-dark);
	}
</style>
