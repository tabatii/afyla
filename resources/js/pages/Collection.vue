<template>
	<AppLayout>
		<h>
			<title>{{ collection.title }}</title>
			<meta head-key="description" name="description" :content="collection.description" />
		</h>
		<section class="py-5">
			<div class="container">
				<h1>{{ collection.title }} . The movie</h1>
				<div class="video mb-4">
					<div class="iframe">
						<iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${video}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</div>
				</div>
				<p class="fs-5 text-center px-0 px-sm-5" v-text="collection.description"></p>
				<div class="row mb-4 gy-2 justify-content-center">
					<div class="col-sm-6 col-lg-4 col-xxl-3">
						<div class="d-grid">
							<l :href="route('looks', collection.id)" class="btn btn-outline-dark py-3">SEE ALL LOOKS</l>
						</div>
					</div>
					<div class="col-sm-6 col-lg-4 col-xxl-3">
						<div class="d-grid">
							<l :href="route('shop', {collections: [collection.id]})" class="btn btn-outline-dark py-3">SHOP COLLECTION</l>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-6">
						<img :src="collection.gallery[0]" class="d-block w-100 mb-1" />
						<img :src="collection.gallery[1]" class="d-block w-100" />
					</div>
					<div class="col-6">
						<img :src="collection.gallery[2]" class="d-block w-100" />
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
			collection: Object,
		},
		computed: {
			video() {
				return qs.parseUrl(this.collection.video).query.v
			}
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
