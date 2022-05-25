<template>
	<AppLayout>
		<h title="Home"></h>
		<section>
			<div id="slider" class="carousel slide overflow-hidden" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item h-100" :class="{active: i===0}" v-for="(slider, i) in sliders" :key="Math.random()">
						<img :src="xs ? slider.mobile : slider.web" class="d-block w-100" />
						<div class="carousel-caption">
							<p class="fw-bold" :class="[xs ? 'fs-5 w-75' : 'fs-2 w-50']" v-text="slider.title"></p>
							<div class="text-center">
								<l :href="slider.url" class="btn btn-outline-light border-4 px-4" :class="{'btn-lg': !xs}">SHOP NOW</l>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</section>
		<section class="bg-primary py-4">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-md-6 col-xl-5 p-2">
						<div class="category">
							<img src="/img/home/coats.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-5 fw-bolder text-white">DISCOVER OUR COATS & JACKETS</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-xl-5 p-2">
						<div class="category">
							<img src="/img/home/pants.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-5 fw-bolder text-white">DISCOVER OUR PANTS & SHORTS</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-xl-5 p-2">
						<div class="category">
							<img src="/img/home/dresses.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-5 fw-bolder text-white">DISCOVER OUR DRESSES</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-xl-5 p-2">
						<div class="category">
							<img src="/img/home/skirts.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-5 fw-bolder text-white">DISCOVER OUR SKIRTS</span>
							</l>
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
	export default {
		props: {
			sliders: Array,
		},
		components: {
			AppLayout,
			h: Head,
			l: Link,
		},
		data() {
			return {
				xs: false,
			}
		},
		mounted() {
			this.xs = innerWidth < 576 ? true : false
			addEventListener('resize', () => {
				this.xs = innerWidth < 576 ? true : false
			})
		}
	}
</script>

<style scoped>
	.carousel-caption {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.category {
		position: relative;
	}
	.category .overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		text-decoration: none;
	}
</style>
