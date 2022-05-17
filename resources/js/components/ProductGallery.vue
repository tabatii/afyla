<template>
	<div class="carousel carousel-dark slide" id="gallery" data-bs-interval="false" data-bs-touch="true" data-bs-ride="carousel">
		<div class="carousel-inner" id="photoswipe">
			<div class="carousel-item" :class="{active: i===0}" v-for="(img, i) in gallery" :key="Math.random()">
				<a :href="img" target="_blank" :data-pswp-height="getHeight(i)" :data-pswp-width="getWidth(i)">
					<img :src="img" class="d-block w-100 mx-auto" />
				</a>
			</div>
		</div>
		<button type="button" class="carousel-control-prev" data-bs-target="#gallery" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button type="button" class="carousel-control-next" data-bs-target="#gallery" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</template>

<script>
	import PhotoSwipeLightbox from 'photoswipe/lightbox'
	export default {
		props: {
			gallery: Array,
		},
		methods: {
			getHeight(i) {
				return this.dimentions[i] ? this.dimentions[i].height : 1500
			},
			getWidth(i) {
				return this.dimentions[i] ? this.dimentions[i].width : 1000
			}
		},
		data() {
			return {
				dimentions: [],
			}
		},
		mounted() {
			this.gallery.forEach((url, i) => {
				var ImageObject = new Image()
				ImageObject.src = url
				ImageObject.onload = () => {
					this.dimentions.splice(i, 0, {
						height: ImageObject.height,
						width: ImageObject.width,
					})
				}
			})
			new PhotoSwipeLightbox({
				gallery: '#photoswipe',
				children: 'a',
				pswpModule: () => import('photoswipe')
			}).init()
		}
	}
</script>

<style scoped>
	a {
		cursor: zoom-in;
	}
	@media (min-width: 992px) {
		img {
			height: 520px;
			width: auto !important;
		}
	}
</style>
