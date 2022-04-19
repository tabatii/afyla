<template>
	<div>
		<div class="image">
			<img :src="product.gallery[0]" class="d-block w-100" />
			<div class="buttons">
				<l :href="route('product', product.id)" class="btn btn-light shadow-none me-1">
					<i class="bi bi-eye"></i>
				</l>
				<button type="button" class="btn btn-light shadow-none me-1" v-if="auth" @click="wishlist">
					<i class="bi" :class="product.wishlist ? 'bi-heart-fill' : 'bi-heart'"></i>
				</button>
				<button type="button" class="btn btn-light shadow-none me-1" data-bs-toggle="offcanvas" data-bs-target="#forms" v-else>
					<i class="bi bi-heart"></i>
				</button>
				<button type="button" class="btn btn-light shadow-none me-1">
					<i class="bi bi-share"></i>
				</button>
			</div>
			<div class="details">
				<div class="badge bg-light text-dark me-1" v-for="s in product.sizes" :key="s.id" v-if="s.qty !== null">
					<del v-text="s.size.number" v-if="s.qty === 0"></del>
					<span v-text="s.size.number" v-else></span>
				</div>
				<div class="mx-auto"></div>
				<div class="badge d-block shadow" style="width:22px" :style="{backgroundColor:c.color.hex}" v-for="c in product.colors" :key="c.id"></div>
			</div>
		</div>
		<div class="content py-3">
			<l :href="route('product', product.id)" class="title h6 text-dark text-truncate" :title="product.title" v-text="product.title"></l>
			<div>
				<span class="fs-5 lh-1" v-text="getFormatedPrice(product.price)"></span>
			</div>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		props: {
			product: Object,
		},
		components: {
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			}
		},
		methods: {
			wishlist() {
				this.$inertia.post(this.route('wishlist.edit', this.product.id))
			}
		}
	}
</script>

<style scoped>
	.image {
		position: relative;
		overflow: hidden;
	}
	.image img {
		display: block;
		width: 100%;
		transition: .3s ease-in-out;
	}
	.image:hover img {
		transform: scale(1.05);
	}
	.image:hover .btn {
		transform: translateY(0);
	}
	.buttons {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		padding: 1rem;
	}
	.buttons .btn {
		transform: translateY(-100px);
	}
	.buttons .btn:nth-child(1) {
		transition: .3s ease-in-out;
	}
	.buttons .btn:nth-child(2) {
		transition: .6s ease-in-out;
	}
	.buttons .btn:nth-child(3) {
		transition: .9s ease-in-out;
	}
	.details {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		padding: 1rem;
	}
	.details .badge {
		height: 22px;
		cursor: default;
	}
	.title {
		display: inline-block;
		max-width: 100%;
		margin-bottom: 0;
		line-height: 1.5;
	}
</style>
