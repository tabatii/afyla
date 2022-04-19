<template>
	<header>

		<nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
			<div class="container">
				<l href="/" class="navbar-brand fs-3 fw-bold">AFYLA</l>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarContent">
					<ul class="navbar-nav mx-auto">
						<li class="nav-item">
							<l :href="route('shop', {sort: 'n'})" class="nav-link mx-lg-2">WHAT'S NEW</l>
						</li>
						<li class="nav-item dropdown dropdown-lg-hover">
							<l :href="route('shop')" class="nav-link mx-lg-2">SHOP</l>
							<ul class="dropdown-menu shadow">
								<li v-for="category in categories" :key="category.id">
									<l :href="route('shop', {categories: [category.id]})" class="dropdown-item text-dark py-2" v-text="category.name"></l>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<l href="#" class="nav-link mx-lg-2">COLLECTIONS</l>
						</li>
						<li class="nav-item">
							<l href="#" class="nav-link mx-lg-2">AFYLA WORLD</l>
						</li>
						<li class="nav-item">
							<l href="#" class="nav-link mx-lg-2">SUSTAINABILITY</l>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item">
							<div class="d-flex align-items-center mx-lg-2 pointer" data-bs-toggle="modal" data-bs-target="#search">
								<i class="bi bi-search fs-3"></i>
								<span class="d-block d-lg-none ms-2">SEARCH</span>
							</div>
						</li>
						<li class="nav-item">
							<div class="d-flex align-items-center mx-lg-2 pointer" data-bs-toggle="offcanvas" data-bs-target="#bag">
								<i class="bi bi-bag fs-3"></i>
								<span class="d-block d-lg-none ms-2">BAG</span>
							</div>
						</li>
						<li class="nav-item">
							<div class="d-flex align-items-center mx-lg-2 pointer" data-bs-toggle="offcanvas" :data-bs-target="auth ? '#menu' : '#forms'">
								<i class="bi bi-person-circle fs-3"></i>
								<span class="d-block d-lg-none ms-2">{{ auth ? 'ACCOUNT' : 'SIGN IN' }}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<div class="offcanvas offcanvas-end" id="bag" tabindex="-1" data-bs-scroll="true">
			<div class="offcanvas-header">
				<h5 class="fs-2 fw-light mb-0">Shopping bag</h5>
				<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="offcanvas-body p-4">
				<div class="fs-4 fw-light text-center" v-if="bag.length === 0">
					<p>Your shopping bag is empty.</p>
					<p>Go shopping!</p>
				</div>
				<div v-else>
					<div class="d-flex mb-3" v-for="(item, i) in bag" :key="i">
						<div style="width:12%">
							<img :src="item.product.gallery[0]" class="d-block w-100" />
						</div>
						<div class="ps-2" style="width:88%">
							<p class="text-truncate fw-medium mb-2" v-text="item.product.title"></p>
							<div class="d-flex">
								<div class="me-auto">
									<span>{{ item.size.number }}</span>
									<span class="text-muted">x{{ item.qty }}</span>
								</div>
								<div>
									<span v-text="getFormatedPrice(item.product.price)"></span>
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div class="d-flex mb-3">
						<span class="me-auto">{{ bag.length }} item(s)</span>
						<span>{{ getFormatedPrice(getBagTotal) }}</span>
					</div>
					<div class="d-grid">
						<l :href="route('bag')" class="btn btn-primary py-3">VIEW MY BAG</l>
					</div>
				</div>
			</div>
		</div>

		<div class="modal" id="search" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content rounded">
					<div class="modal-body p-4">
						<div class="input-group">
							<span class="input-group-text bg-light rounded-start border-0 ps-4 pe-2">
								<a :href="route('shop', {search})">
									<i class="bi bi-search fs-4 text-dark"></i>
								</a>
							</span>
							<input type="text" class="form-control form-control-lg bg-light rounded-end border-0 shadow-none py-3" v-model="search" placeholder="Search for products..." />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="menu" tabindex="-1" data-bs-scroll="true" style="width:300px" v-if="auth">
			<div class="offcanvas-body">
				<ul class="nav flex-column">
					<li class="nav-item">
						<p class="px-3 mb-0">Hello, {{ auth.name.split(' ')[0] }}!</p>
						<p class="px-3 mb-4">We hope you're doing well.</p>
					</li>
					<li class="nav-item" v-if="admin">
						<l :href="route('voyager.dashboard')" class="nav-link">DASHBOARD</l>
					</li>
					<li class="nav-item">
						<l :href="route('profile')" class="nav-link">PROFILE</l>
					</li>
					<li class="nav-item">
						<l :href="route('orders')" class="nav-link">ORDERS</l>
					</li>
					<li class="nav-item">
						<l :href="route('wishlist')" class="nav-link">WISHLIST</l>
					</li>
					<li class="nav-item">
						<l :href="route('addresses')" class="nav-link">ADDRESS BOOK</l>
					</li>
					<li class="nav-item">
						<l :href="route('logout')" class="nav-link">SIGN OUT</l>
					</li>
				</ul>
			</div>
		</div>

		<div class="offcanvas offcanvas-end" id="forms" tabindex="-1" data-bs-scroll="true" v-else>
			<div class="offcanvas-body">
				<ul class="nav nav-pills nav-fill mb-5">
					<li class="nav-item">
						<button type="button" class="nav-link text-dark active py-3" data-bs-toggle="pill" data-bs-target="#login">SIGN IN</button>
					</li>
					<li class="nav-item">
						<button type="button" class="nav-link text-dark py-3" data-bs-toggle="pill" data-bs-target="#register">SIGN UP</button>
					</li>
				</ul>
				<div class="tab-content">
					<form class="tab-pane fade show active" id="login" @submit.prevent="login.post(route('login'))">
						<div class="alert alert-danger" role="alert" v-text="login.errors.auth" v-if="login.errors.auth"></div>
						<div class="form-floating mb-3">
							<input type="email" class="form-control" v-model="login.email" placeholder="Email" />
							<label>Email</label><small class="text-danger" v-text="login.errors.email"></small>
						</div>
						<div class="form-floating mb-1">
							<input type="password" class="form-control" v-model="login.password" placeholder="Password" />
							<label>Password</label><small class="text-danger" v-text="login.errors.password"></small>
						</div>
						<div class="d-flex mb-3">
							<div class="form-check me-auto">
								<input type="checkbox" class="form-check-input shadow-none" id="remember" v-model="login.remember" />
								<label class="form-check-label" for="remember" style="user-select:none">Remember me</label>
							</div>
							<l href="#">Forgot password ?</l>
						</div>
						<div class="d-grid">
							<button type="submit" class="btn btn-primary py-3" :disabled="login.processing">SIGN IN</button>
						</div>
					</form>
					<form class="tab-pane fade" id="register" @submit.prevent="register.post(route('register'))">
						<div class="row gx-2">
							<div class="col">
								<div class="form-floating mb-3">
									<input type="text" class="form-control" v-model="register.firstname" placeholder="First name" />
									<label>First name</label><small class="text-danger" v-text="register.errors.firstname"></small>
								</div>
							</div>
							<div class="col">
								<div class="form-floating mb-3">
									<input type="text" class="form-control" v-model="register.lastname" placeholder="Last name" />
									<label>Last name</label><small class="text-danger" v-text="register.errors.lastname"></small>
								</div>
							</div>
						</div>
						<div class="form-floating mb-3">
							<input type="text" class="form-control" v-model="register.email" placeholder="Email" />
							<label>Email</label><small class="text-danger" v-text="register.errors.email"></small>
						</div>
						<div class="form-floating mb-3">
							<input type="password" class="form-control" v-model="register.password" placeholder="Password" />
							<label>Password</label><small class="text-danger" v-text="register.errors.password"></small>
						</div>
						<div class="form-floating mb-3">
							<input type="password" class="form-control" v-model="register.password_confirmation" placeholder="Confirm password" />
							<label>Confirm password</label>
						</div>
						<div class="d-grid">
							<button type="submit" class="btn btn-primary py-3" :disabled="register.processing">CREATE AN ACCOUNT</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	</header>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		components: {
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			admin() {
				return this.$page.props.admin
			},
			bag() {
				return this.$page.props.bag
			},
			categories() {
				return this.$page.props.categories
			}
		},
		data() {
			return {
				search: null,
				register: this.$inertia.form({
					firstname: null,
					lastname: null,
					email: null,
					password: null,
					password_confirmation: null,
				}),
				login: this.$inertia.form({
					email: null,
					password: null,
					remember: false,
				})
			}
		}
	}
</script>

<style scoped>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		min-height: 100px;
	}
</style>
