<template>
	<header>

		<div class="fixed-navbar" :class="{shadow: scroll > 60}">
			<nav class="top-navbar navbar navbar-expand-lg navbar-light bg-white py-0" :class="{hide: scroll !== 0}">
				<div class="container-fluid">
					<ul class="nav ms-auto">
						<li class="nav-item d-none d-sm-block">
							<l :href="route('page', 'shipping-returns-policy')" class="nav-link text-dark mx-2" style="padding: 7px 0">
								<img src="/img/icons/truck.png" class="align-text-top" height="24px" />
								<small class="underline">Free shipping & returns</small>
							</l>
						</li>
						<li class="nav-item d-none d-sm-block">
							<a :href="'tel:'+settings.phone" class="nav-link text-dark mx-2" style="padding: 7px 0">
								<img src="/img/icons/mobile.png" class="align-text-top" height="19px" style="opacity:.7" />
								<small class="underline">+212666700661</small>
							</a>
						</li>
						<li class="nav-item">
							<div class="d-flex align-items-center p-1 mx-2 pointer" data-bs-toggle="modal" data-bs-target="#search">
								<i class="bi bi-search fs-5" style="line-height:1.55"></i>
							</div>
						</li>
						<li class="nav-item">
							<div class="d-flex align-items-center p-1 mx-2 pointer" data-bs-toggle="offcanvas" :data-bs-target="auth ? '#menu' : '#forms'">
								<i class="bi bi-person fs-5 user-icon"></i>
								<span class="ms-2" v-text="auth.name.split(' ')[0]" v-if="auth"></span>
							</div>
						</li>
						<li class="nav-item position-relative">
							<div class="d-flex align-items-center p-1 mx-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#wishlist">
								<img src="/img/icons/heart.png" height="23px" />
								<small class="counter" v-text="wishlist.length"></small>
							</div>
						</li>
						<li class="nav-item position-relative">
							<div class="d-flex align-items-center p-1 mx-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#bag">
								<img src="/img/icons/bag.png" height="23px" />
								<small class="counter" v-text="bag.length"></small>
							</div>
						</li>
					</ul>
				</div>
			</nav>
			<nav class="navbar navbar-expand-lg navbar-light bg-white py-lg-0">
				<div class="container-fluid">
					<l href="/" class="navbar-brand fs-1 fw-bold py-0">AFYLA</l>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse pb-3 pb-lg-0" id="navbarContent">
						<ul class="navbar-nav me-auto">
							<li class="nav-item">
								<l :href="route('shop', {sort: 'n'})" class="nav-link text-dark underline-hover mx-lg-2">WHAT'S NEW</l>
							</li>
							<li class="nav-item dropdown dropdown-hover">
								<l :href="route('shop')" class="nav-link text-dark underline-hover mx-lg-2" @click.prevent>SHOP</l>
								<ul class="dropdown-menu">
									<li><l :href="route('shop')" class="dropdown-item underline-hover">VIEW ALL</l></li>
									<li v-for="category in categories" :key="category.id">
										<l :href="route('shop', {categories: [category.id]})" class="dropdown-item underline-hover">
											{{ category.name }}
										</l>
									</li>
									<li>
										<l :href="route('shop', {discounts: 1})" class="dropdown-item text-danger underline-hover">SPECIAL PRICES</l>
									</li>
								</ul>
							</li>
							<li class="nav-item dropdown dropdown-hover">
								<l :href="route('shop')" class="nav-link text-dark underline-hover mx-lg-2" @click.prevent>COLLECTIONS</l>
								<ul class="dropdown-menu">
									<li v-for="collection in collections" :key="collection.id">
										<l :href="route('collection', collection.id)" class="dropdown-item underline-hover">
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
						<ul class="navbar-nav" v-show="scroll !== 0">
							<li class="nav-item">
								<div class="d-flex align-items-center p-1 mx-lg-2 pointer" data-bs-toggle="modal" data-bs-target="#search">
									<i class="bi bi-search fs-5"></i>
									<span class="d-block d-lg-none ms-2">SEARCH</span>
								</div>
							</li>
							<li class="nav-item">
								<div class="d-flex align-items-center p-1 mx-lg-2 pointer" data-bs-toggle="offcanvas" :data-bs-target="auth ? '#menu' : '#forms'">
									<i class="bi bi-person fs-5 user-icon"></i>
									<span class="d-none d-lg-block ms-2" v-text="auth.name.split(' ')[0]" v-if="auth"></span>
									<span class="d-block d-lg-none ms-2">{{ auth ? auth.name.split(' ')[0] : 'SIGN IN' }}</span>
								</div>
							</li>
							<li class="nav-item position-relative">
								<div class="d-flex align-items-center p-1 mx-lg-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#wishlist">
									<img src="/img/icons/heart.png" height="23px" />
									<span class="d-block d-lg-none ms-2">WISHLIST ({{ wishlist.length }})</span>
									<small class="counter d-none d-lg-block" v-text="wishlist.length"></small>
								</div>
							</li>
							<li class="nav-item position-relative">
								<div class="d-flex align-items-center p-1 mx-lg-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#bag">
									<img src="/img/icons/bag.png" height="23px" />
									<span class="d-block d-lg-none ms-2">BAG ({{ bag.length }})</span>
									<small class="counter d-none d-lg-block" v-text="bag.length"></small>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>

		<div class="offcanvas offcanvas-end" id="bag" tabindex="-1" data-bs-scroll="true" style="width:500px">
			<div class="offcanvas-header">
				<h5 class="fs-2 fw-light mb-0">Shopping bag</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body p-0">
				<BagMenu></BagMenu>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="wishlist" tabindex="-1" data-bs-scroll="true" style="width:500px">
			<div class="offcanvas-header">
				<h5 class="fs-2 fw-light mb-0"><i class="bi bi-heart fs-4"></i> Your wishlist</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body p-0">
				<WishlistMenu></WishlistMenu>
			</div>
		</div>

		<div class="modal fade" id="search" tabindex="-1">
			<div class="modal-dialog modal-fullscreen">
				<div class="modal-content">
					<div class="modal-body p-4">
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
						<p class="px-3 mb-0">HELLO, {{ auth.name.split(' ')[0].toUpperCase() }}!</p>
						<p class="px-3 mb-4">WE HOPE YOU'RE DOING WELL.</p>
					</li>
					<li class="nav-item" v-if="admin">
						<a :href="route('voyager.dashboard')" class="nav-link" target="_blank">DASHBOARD</a>
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
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		components: {
			WishlistMenu,
			RegisterForm,
			LoginForm,
			SearchForm,
			BagMenu,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			admin() {
				return this.$page.props.admin
			},
			settings() {
				return this.$page.props.settings
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
				scroll: null,
				search: null,
			}
		},
		mounted() {
			this.scroll = pageYOffset
			addEventListener('scroll', () => {
				this.scroll = pageYOffset
			})
		}
	}
</script>

<style scoped>
	.fixed-navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
	}
	.top-navbar {
		height: 60px;
		overflow: hidden;
	}
	.top-navbar.hide {
		display: none;
	}
	.navbar-brand {
		font-family: 'Avenir-Heavy';
	}
	.dropdown-item {
		padding-top: .5rem;
		padding-bottom: .5rem;
		background-color: transparent;
		color: var(--bs-dark);
	}
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
