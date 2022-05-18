<template>
	<AppLayout>
		<h title="Looks"></h>
		<section class="py-5" style="margin-bottom:120px">
			<div class="container">
				<div class="row gy-4">
					<div class="col-sm-6 col-lg-4" v-for="item in looks" :key="Math.random()">
						<img :src="item.img" class="d-block w-100" />
						<div class="d-flex align-items-center py-3">
							<span class="me-auto" v-text="item.title"></span>
							<l :href="route('shop', {ids: item.products.map(i => i.product_id)})" class="btn btn-sm btn-outline-dark">SHOP</l>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import qs from 'query-string'
	export default {
		components: {
			AppLayout,
			h: Head,
			l: Link,
		},
		props: {
			looks: Array,
		}
	}
</script>

<style scoped>
	.video {
		position: relative;
		height: 0;
		padding-bottom: 56.25%;
	}
	.iframe {
		position: absolute;
		inset: 0 0 0 0;
	}
</style>
