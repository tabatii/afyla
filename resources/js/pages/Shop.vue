<template>
	<AppLayout>
		<section>
			<div class="offcanvas offcanvas-end" id="categories" tabindex="-1" data-bs-scroll="true">
				<div class="offcanvas-header">
					<h5 class="fs-2 fw-light mb-0">Categories</h5>
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="px-1">
						<div class="mb-4">
							<div class="form-check mb-2" v-for="category in categories" :key="category.id">
								<input type="checkbox" class="form-check-input" :id="category.slug" :value="category.id" v-model="params.categories" />
								<label class="form-check-label" :for="category.slug" v-text="category.name"></label>
							</div>
						</div>
						<div class="d-grid gap-2">
							<button type="button" class="btn btn-primary py-3" @click="result">SEE RESULTS</button>
							<button type="button" class="btn btn-light py-3" @click="reset(['categories'])">RESET</button>
						</div>
					</div>
				</div>
			</div>
			<div class="offcanvas offcanvas-end" id="filters" tabindex="-1" data-bs-scroll="true">
				<div class="offcanvas-header">
					<h5 class="fs-2 fw-light mb-0">Filters</h5>
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div>
						<h6 class="fs-4 fw-light mb-2">Colors</h6>
						<div class="row g-0 px-1 mb-4">
							<div class="col-6" v-for="color in colors" :key="color.id">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="color.slug" :value="color.id" v-model="params.colors" style="border-color:rgba(0, 0, 0, 0.25)" :style="{backgroundColor:color.hex}" />
									<label class="form-check-label" :for="color.slug" v-text="color.name"></label>
								</div>
							</div>
						</div>
						<h6 class="fs-4 fw-light mb-2">Sizes</h6>
						<div class="row px-1 g-0 mb-4">
							<div class="col-6" v-for="size in sizes" :key="size.id">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="size.number" :value="size.id" v-model="params.sizes" />
									<label class="form-check-label" :for="size.number" v-text="size.number"></label>
								</div>
							</div>
						</div>
						<div class="d-grid gap-2">
							<button type="button" class="btn btn-primary py-3" @click="result">SEE RESULTS</button>
							<button type="button" class="btn btn-light py-3" @click="reset(['colors', 'sizes'])">RESET</button>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="d-flex pb-5">
					<button type="button" class="btn btn-primary px-4 me-2" data-bs-toggle="offcanvas" data-bs-target="#categories">
						<i class="bi bi-list-check"></i> CATEGORIES
					</button>
					<button type="button" class="btn btn-primary px-4 me-auto" data-bs-toggle="offcanvas" data-bs-target="#filters">
						<i class="bi bi-sliders"></i> FILTERS
					</button>
					<div class="dropdown">
						<button type="button" class="btn btn-primary shadow-none" data-bs-toggle="dropdown" style="min-width:10rem">
							<i class="bi bi-sort-down"></i> SORT BY
						</button>
						<ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuButton1">
							<li v-for="(text, key) in sort" :key="key">
								<span class="dropdown-item text-dark pointer" :class="{active: key === params.sort}" v-text="text" @click="sortBy(key)"></span>
							</li>
						</ul>
					</div>
				</div>
				<div class="row gy-4">
					<div class="col-sm-6 col-lg-4 col-xl-3" v-for="product in products.data" :key="product.id">
						<ProductCard :product="product"></ProductCard>
					</div>
				</div>
			</div>
		</section>
		<section class="py-0">
			<div class="container">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<span class="page-link text-dark pointer disabled" @click="paginate(products.current_page - 1)">&laquo;</span>
					</li>
					<li class="page-item" :class="{active: (params.page === null && p === 1) || p == params.page}" v-for="p in products.last_page" :key="p">
						<span class="page-link text-dark pointer pointer" v-text="p" @click="paginate(p)"></span>
					</li>
					<li class="page-item">
						<span class="page-link text-dark pointer" @click="paginate(products.current_page + 1)">&raquo;</span>
					</li>
				</ul>
			</div>
		</section>
		<section></section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import ProductCard from '../components/ProductCard'
	import { Link } from '@inertiajs/inertia-vue'
	export default {
		props: {
			products: Object,
			colors: Array,
			sizes: Array,
		},
		components: {
			ProductCard,
			AppLayout,
			l: Link,
		},
		computed: {
			categories() {
				return this.$page.props.categories
			}
		},
		methods: {
			result() {
				this.$inertia.get(this.route('shop', this.params))
			},
			paginate(page) {
				this.params.page = (page > 0 && page <= this.products.last_page) ? page : this.params.page
				this.result()
			},
			sortBy(key) {
				this.params.sort = key
				this.result()
			},
			reset(targets) {
				targets.forEach(target => {
					this.params[target] = []
				})
				this.result()
			}
		},
		data() {
			return {
				params: {
					categories: [],
					colors: [],
					sizes: [],
					sort: null,
					page: null,
					search: null,
				},
				sort: {
					r: 'Recommended',
					n: 'Newest',
					lp: 'Lowest price',
					hp: 'Highest price',
				}
			}
		},
		created() {
			this.params.categories = this.route().params.categories || []
			this.params.colors = this.route().params.colors || []
			this.params.sizes = this.route().params.sizes || []
			this.params.sort = this.route().params.sort || null
			this.params.page = this.route().params.page || null
			this.params.search = this.route().params.search || null
		}
	}
</script>
