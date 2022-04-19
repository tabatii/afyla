<template>
	<UserMenu>
		<p class="display-6 text-center" v-if="wishlist.length === 0">You don't have any products in your wishlist.</p>
		<div class="row gy-4" v-else>
			<div class="col-sm-6 col-lg-6 col-xl-4" v-for="w in wishlist" :key="w.product.id">
				<ProductCard :product="w.product"></ProductCard>
			</div>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	import ProductCard from '../components/ProductCard'
	export default {
		props: {
			wishlist: Array,
		},
		components: {
			UserMenu,
			ProductCard,
		}
	}
</script>
