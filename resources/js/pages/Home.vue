<template>
	<AppLayout>
		<section class="p-3">
			<div id="carouselControls" class="carousel slide overflow-hidden" data-bs-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item h-100 active">
						<img src="/img/slider-1.jpg" class="d-block w-100" />
						<div class="carousel-caption">
							<p class="display-6 w-50">Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus rutrum tortor nisl quis maximus nulla</p>
							<div class="text-center">
								<l href="#" class="btn btn-outline-light btn-lg rounded-0">DISCOVER</l>
							</div>
						</div>
					</div>
					<div class="carousel-item h-100">
						<img src="/img/slider-2.jpg" class="d-block w-100" />
						<div class="carousel-caption">
							<p class="display-6 w-50">Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus rutrum tortor nisl quis maximus nulla</p>
							<div class="text-center">
								<l href="#" class="btn btn-outline-light btn-lg rounded-0">DISCOVER</l>
							</div>
						</div>
					</div>
					<div class="carousel-item h-100">
						<img src="/img/slider-3.jpg" class="d-block w-100" />
						<div class="carousel-caption">
							<p class="display-6 w-50">Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus rutrum tortor nisl quis maximus nulla</p>
							<div class="text-center">
								<l href="#" class="btn btn-outline-light btn-lg rounded-0">DISCOVER</l>
							</div>
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</section>
		<section>
			<div class="container">
				<h3 class="display-6 text-center mb-5">SHOP BY CATEGORY</h3>
				<div class="row gy-4">
					<div class="col-md-6 col-lg-4">
						<div class="category">
							<img src="/img/shirts.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-3 fw-light text-white">SHIRTS & TOPS</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="category">
							<img src="/img/coats.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-3 fw-light text-white">COATS & JACKETS</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-lg-4">
						<div class="category">
							<img src="/img/pants.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-3 fw-light text-white">PANTS & SHORTS</span>
							</l>
						</div>
					</div>
					<div class="col-md-6 col-lg-6">
						<div class="category">
							<img src="/img/dresses.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-3 fw-light text-white">DRESSES</span>
							</l>
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="category">
							<img src="/img/skirts.jpg" class="d-block w-100" />
							<l :href="route('shop')" class="overlay">
								<span class="fs-3 fw-light text-white">SKIRTS</span>
							</l>
						</div>
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
		}
	}
</script>

<style scoped>
	.carousel-inner {
		max-height: calc(100vh - 100px - 2rem);
	}
	.carousel-caption {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: calc(100vh - 100px - 2rem);
		background-color: rgba(0, 0, 0, 0.3);
	}
	.carousel-control-prev,
	.carousel-control-next {
		top: calc(50% - 28px);
		bottom: auto;
		width: 56px;
		height: 56px;
		background-color: rgba(0, 0, 0, 0.8);
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
		background-color: rgba(0, 0, 0, 0.4);
		text-decoration: none;
		visibility: hidden;
		opacity: 0;
		transition: all .5s;
	}
	.category .overlay span {
		transform: translateY(-20px);
		transition: all .5s;
	}
	.category:hover .overlay {
		visibility: visible;
		opacity: 1;
	}
	.category:hover .overlay span {
		transform: translateY(0px);
	}
</style>
