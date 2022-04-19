<template>
	<div class="row">
		<div class="col-3">
			<div class="d-grid" style="padding-bottom:2px">
				<button type="button" class="btn btn-primary shadow-none py-0" :disabled="index < 1" @click="up">
					<i class="bi bi-caret-up-fill"></i>
				</button>
			</div>
			<img :src="gallery[index]" class="image my-1" @click="active(gallery[index])" />
			<img :src="gallery[index+1]" class="image my-1" @click="active(gallery[index+1])" />
			<img :src="gallery[index+2]" class="image my-1" @click="active(gallery[index+2])" />
			<div class="d-grid" style="padding-top:2px">
				<button type="button" class="btn btn-primary shadow-none py-0" :disabled="index+3 === gallery.length" @click="down">
					<i class="bi bi-caret-down-fill"></i>
				</button>
			</div>
		</div>
		<div class="col-9">
			<div ref="zoom">
				<img :src="gallery[0]" class="d-block w-100" ref="image" />
			</div>
		</div>
	</div>
</template>

<script>
	import ImageZoom from 'js-image-zoom'
	export default {
		props: {
			gallery: Array,
		},
		methods: {
			up() {
				if (this.index > 0) {
					this.index -= 1
				}
			},
			down() {
				if (this.index < this.gallery.length - 3) {
					this.index += 1
				}
			},
			active(src) {
				this.$refs.zoom.querySelectorAll('div').forEach(e => e.remove())
				this.$refs.image.src = src
				this.zoom()
			},
			zoom() {
				new ImageZoom(this.$refs.zoom, {
					zoomStyle: 'z-index:1',
					offset: {
						horizontal: 24
					}
				})
			}
		},
		data() {
			return {
				index: 0,
			}
		},
		mounted() {
			this.zoom()
		}
	}
</script>

<style scoped>
	.image {
		display: block;
		width: 100%;
		cursor: pointer;
	}
</style>
