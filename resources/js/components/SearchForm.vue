<template>
	<div>
		<div class="input-group">
			<span class="input-group-text bg-white border-0 ps-4 pe-2">
				<a :href="route('shop', {search})">
					<i class="bi bi-search fs-4 text-dark"></i>
				</a>
			</span>
			<input type="text" class="form-control form-control-lg border-0 shadow-none py-3" v-model="search" placeholder="SEARCH FOR SOMETHING YOU LOVE…" />
			<span class="input-group-text bg-white border-0 ps-2 pe-4">
				<span class="btn-close pointer" data-bs-dismiss="modal" aria-label="Close"></span>
			</span>
		</div>
		<hr />
		<div class="px-4 py-5">
			<div v-if="search.length === 0">
				<p class="fw-medium mb-4">SUGGESTIONS</p>
				<div class="row gy-4">
					<div class="col-2" v-for="category in categories" :key="category.id">
						<l :href="route('shop', {categories: [category.id]})" class="text-center underline" v-text="category.name"></l>
						<img :src="category.img" class="d-block w-100" />
					</div>
				</div>
			</div>
			<div v-else>
				<div v-if="noresult">
					<div class="mb-5">
						<p class="fw-medium">No results were found for the keyword "{{ search }}"</p>
						<p>Try using the navigation to find what you’re looking for or you can use another keyword</p>
					</div>
					<div class="mb-5">
						<p>You can also search here:</p>
						<ul class="nav flex-column">
							<li class="nav-item" v-for="category in categories" :key="category.id">
								<l :href="route('shop', {categories: [category.id]})" class="underline" v-text="category.name"></l>
							</li>
						</ul>
					</div>
					<div class="row justify-content-center gy-4">
						<div class="col-12">
							<p class="fw-medium text-center mb-0">HOW CAN WE HELP YOU?</p>
						</div>
						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="d-grid">
								<a :href="'mailto:'+settings.email" class="btn btn-primary py-3">
									<img src="/img/icons/mail.png" class="me-3" height="26px" />
									<span>EMAIL US</span>
								</a>
							</div>
						</div>
						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="d-grid">
								<a :href="'https://wa.me/'+settings.whatsapp" class="btn btn-primary py-3" target="_blank">
									<img src="/img/icons/chat.png" class="me-3" height="26px" />
									<span>CHAT WITH US</span>
								</a>
							</div>
						</div>
						<div class="col-sm-4 col-lg-3 col-xl-2">
							<div class="d-grid">
								<a :href="'tel:'+settings.phone" class="btn btn-primary py-3">
									<img src="/img/icons/phone.png" class="me-3" height="26px" />
									<span>CALL US</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="mb-5">
						<p class="fw-medium">Categories :</p>
						<ul class="nav flex-column">
							<li class="nav-item" v-for="cat in cats" :key="cat.id">
								<l :href="route('shop', {categories: [cat.id]})" class="underline" v-text="cat.name"></l>
							</li>
							<li class="nav-item" v-for="sub in subs" :key="sub.id">
								<l :href="route('shop', {subs: [sub.id]})" class="underline" v-text="sub.name"></l>
							</li>
						</ul>
					</div>
					<div class="mb-5">
						<p class="fw-medium">Products :</p>
						<div class="row gy-3">
							<div class="col-md-6 col-lg-4 col-xl-3" v-for="product in products" :key="product.id">
								<a :href="route('product', product.id)" class="row g-0">
									<div class="col-md-4 col-xl-3">
										<img :src="product.gallery[0]" class="d-block w-100" />
									</div>
									<div class="col-md-8 col-xl-9 d-flex align-items-center bg-primary">
										<p class="text-dark fw-medium px-3 py-2 mb-0" v-text="product.title"></p>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div class="colors">
						<p class="fw-medium">Colors :</p>
						<ul class="nav flex-column">
							<li class="nav-item d-flex align-items-center mb-1" v-for="color in colors" :key="color.id">
								<span class="me-2" :style="{backgroundColor: color.hex}"></span>
								<l :href="route('shop', {colors: [color.id]})" class="fw-medium" v-text="color.name"></l>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Link } from '@inertiajs/inertia-vue'
	import axios from 'axios'
	export default {
		components: {
			l: Link,
		},
		computed: {
			categories() {
				return this.$page.props.categories
			},
			settings() {
				return this.$page.props.settings
			},
			noresult() {
				return this.search.length !== 0
					&& this.products.length === 0
					&& this.colors.length === 0
					&& this.cats.length === 0
					&& this.subs.length === 0
			}
		},
		watch: {
			search(newValue) {
				var search = newValue
				axios.get(route('search', {search})).then(response => {
					this.products = response.data.products
					this.colors = response.data.colors
					this.cats = response.data.categories
					this.subs = response.data.subs
				})
			}
		},
		data() {
			return {
				search: '',
				products: [],
				colors: [],
				cats: [],
				subs: [],
			}
		}
	}
</script>

<style scoped>
	.colors span {
		height: 19px;
		width: 19px;
	}
</style>
