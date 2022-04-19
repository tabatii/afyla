<template>
	<AppLayout>
		<section>
			<div class="container">
				<div class="row gy-4">
					<div class="col-md-4 col-lg-3">
						<div class="sticky">
							<div class="bg-primary p-3" style="margin-bottom:1px">
								<div v-text="auth.name"></div>
								<div v-text="auth.email"></div>
							</div>
							<ul class="nav flex-column bg-primary py-2">
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
					<div class="col-md-8 col-lg-9">
						<slot></slot>
					</div>
				</div>
			</div>
		</section>
		<section></section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		components: {
			AppLayout,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			admin() {
				return this.$page.props.admin
			}
		}
	}
</script>

<style scoped>
	.sticky {
		position: sticky;
		top: calc(100px + 1.5rem);
	}
</style>
