<template>
	<AppLayout>
		<section class="bg-primary border-bottom border-secondary">
			<div class="row gx-0">
				<div class="col-md-4 col-lg-3 border-end border-secondary">
					<div class="py-5">
						<ul class="nav flex-column">
							<li class="nav-item" v-if="admin">
								<a :href="route('voyager.dashboard')" class="nav-link px-3 px-sm-5" target="_blank">DASHBOARD</a>
							</li>
							<li class="nav-item" :class="{'bg-secondary': route().current() === 'profile'}">
								<l :href="route('profile')" class="nav-link px-3 px-sm-5">PROFILE</l>
							</li>
							<li class="nav-item" :class="{'bg-secondary': route().current() === 'password'}">
								<l :href="route('password')" class="nav-link px-3 px-sm-5">CHANGE YOUR PASSWORD</l>
							</li>
							<li class="nav-item" :class="{'bg-secondary': route().current() === 'orders'}">
								<l :href="route('orders')" class="nav-link px-3 px-sm-5">ORDERS</l>
							</li>
							<li class="nav-item" :class="{'bg-secondary': route().current() === 'addresses'}">
								<l :href="route('addresses')" class="nav-link px-3 px-sm-5">ADDRESS BOOK</l>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-8 col-lg-9">
					<div class="py-5" style="min-height:60vh">
						<slot></slot>
					</div>
				</div>
			</div>
		</section>
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
