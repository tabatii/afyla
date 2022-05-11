<template>
	<AppLayout>
		<h title="Our Products"></h>
		<section style="margin-bottom:200px">
			<div class="offcanvas offcanvas-end" id="categories" tabindex="-1" data-bs-scroll="true" data-bs-touch="true">
				<div class="offcanvas-header">
					<h5 class="fs-2 fw-light mb-0">Categories</h5>
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="px-1">
						<div class="mb-4" v-if="selected.categories.length === 0">
							<div class="form-check mb-2" v-for="category in categories" :key="Math.random()">
								<input type="checkbox" class="form-check-input" :id="category.slug" :value="category.id" v-model="params.categories" />
								<label class="form-check-label" :for="category.slug" v-text="category.name"></label>
							</div>
						</div>
						<div class="mb-4" v-else>
							<div v-for="id in selected.categories" :key="Math.random()">
								<div class="form-check mb-2" v-for="sub in categories.find(item => item.id == id).sub_categories" :key="Math.random()">
									<input type="checkbox" class="form-check-input" :id="sub.slug" :value="sub.id" v-model="params.subs" />
									<label class="form-check-label" :for="sub.slug" v-text="sub.name"></label>
								</div>
							</div>
						</div>
						<div class="d-grid gap-2">
							<button type="button" class="btn btn-primary py-3" @click="filter">SEE RESULTS</button>
							<button type="button" class="btn btn-light py-3" @click="reset(['categories', 'subs'])">RESET</button>
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
						<h6 class="fs-4 fw-light mb-2">Color</h6>
						<div class="row g-0 px-1 mb-4">
							<div class="col-6" v-for="color in colors" :key="Math.random()">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="color.slug" :value="color.id" v-model="params.colors" style="border-color:rgba(0, 0, 0, 0.25)" :style="{backgroundColor:color.hex}" />
									<label class="form-check-label" :for="color.slug" v-text="color.name"></label>
								</div>
							</div>
						</div>
						<h6 class="fs-4 fw-light mb-2">Material</h6>
						<div class="row px-1 g-0 mb-4">
							<div class="col-6" v-for="material in materials" :key="Math.random()">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="material.slug" :value="material.id" v-model="params.materials" />
									<label class="form-check-label" :for="material.slug" v-text="material.name"></label>
								</div>
							</div>
						</div>
						<h6 class="fs-4 fw-light mb-2">Collection</h6>
						<div class="row px-1 g-0 mb-4">
							<div class="col-12" v-for="collection in collections" :key="Math.random()">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="collection.id" :value="collection.id" v-model="params.collections" />
									<label class="form-check-label" :for="collection.id" v-text="collection.title"></label>
								</div>
							</div>
						</div>
						<h6 class="fs-4 fw-light mb-2">Size</h6>
						<div class="row px-1 g-0 mb-4">
							<div class="col-6" v-for="size in sizes" :key="Math.random()">
								<div class="form-check mb-2">
									<input type="checkbox" class="form-check-input" :id="size.slug" :value="size.id" v-model="params.sizes" />
									<label class="form-check-label" :for="size.slug" v-text="size.name"></label>
								</div>
							</div>
						</div>
						<div class="d-grid gap-2">
							<button type="button" class="btn btn-primary py-3" @click="filter">SEE RESULTS</button>
							<button type="button" class="btn btn-light py-3" @click="reset(['colors', 'sizes', 'materials', 'collections'])">RESET</button>
						</div>
					</div>
				</div>
			</div>
			<div class="offcanvas offcanvas-end" id="sort" tabindex="-1" data-bs-scroll="true">
				<div class="offcanvas-header">
					<h5 class="fs-2 fw-light mb-0">Sort by</h5>
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="px-1">
						<div class="mb-4">
							<div class="" v-for="(text, key) in sort" :key="Math.random()">
								<span class="pointer fs-5" :class="{'fw-bold': params.sort === key}" v-text="text" @click="sortBy(key)"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container mb-5">
				<div class="py-5">
					<h1 class="fs-2 text-center mb-4">OUR PRODUCTS</h1>
					<div class="d-flex justify-content-sm-end flex-column flex-sm-row mb-3">
						<span class="pointer fw-medium me-3 me-sm-5" data-bs-toggle="offcanvas" data-bs-target="#categories">
							<i class="bi bi-list-check"></i> CATEGORIES <i class="bi bi-caret-down-fill"></i>
						</span>
						<span class="pointer fw-medium me-3 me-sm-5" data-bs-toggle="offcanvas" data-bs-target="#filters">
							<i class="bi bi-sliders"></i> FILTERS <i class="bi bi-caret-down-fill"></i>
						</span>
						<span class="pointer fw-medium" data-bs-toggle="offcanvas" data-bs-target="#sort">
							<i class="bi bi-sort-up"></i> SORT BY <i class="bi bi-caret-down-fill"></i>
						</span>
					</div>
					<div class="d-flex flex-wrap">
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-if="params.search">
							<span style="font-size:.8rem">{{ params.search }}</span>
							<span class="pointer fs-6" @click="remove('search')">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-if="params.discounts">
							<span style="font-size:.8rem">SPECIAL PRICES</span>
							<span class="pointer fs-6" @click="remove('discounts')">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(category, i) in selected.categories" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('categories.name', category) }}</span>
							<span class="pointer fs-6" @click="remove('categories', i)">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(sub, i) in selected.subs" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('subs.name', sub) }}</span>
							<span class="pointer fs-6" @click="remove('subs', i)">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(color, i) in selected.colors" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('colors.name', color) }}</span>
							<span class="pointer fs-6" @click="remove('colors', i)">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(material, i) in selected.materials" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('materials.name', material) }}</span>
							<span class="pointer fs-6" @click="remove('materials', i)">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(collection, i) in selected.collections" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('collections.title', collection) }}</span>
							<span class="pointer fs-6" @click="remove('collections', i)">&times;</span>
						</span>
						<span class="badge bg-primary text-dark py-2 me-2 mb-2" v-for="(size, i) in selected.sizes" :key="Math.random()">
							<span style="font-size:.8rem">{{ getNameById('sizes.name', size) }}</span>
							<span class="pointer fs-6" @click="remove('sizes', i)">&times;</span>
						</span>
					</div>
				</div>
				<div class="row gy-4">
					<div class="col-sm-6 col-lg-4" v-for="product in products.data" :key="Math.random()">
						<div class="product">
							<div class="gallery">
								<div :id="'gallery'+product.id" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="false">
									<div class="carousel-inner">
										<div class="carousel-item" :class="{active: i===0}" v-for="(img, i) in product.gallery">
											<l :href="route('product', product.id)"><img :src="img" class="d-block w-100" /></l>
										</div>
									</div>
									<button class="arrows carousel-control-prev" type="button" :data-bs-target="'#gallery'+product.id" data-bs-slide="prev">
										<span class="carousel-control-prev-icon" aria-hidden="true"></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button class="arrows carousel-control-next" type="button" :data-bs-target="'#gallery'+product.id" data-bs-slide="next">
										<span class="carousel-control-next-icon" aria-hidden="true"></span>
										<span class="visually-hidden">Next</span>
									</button>
								</div>
								<span class="wishlist" @click="addToWishlist(product.id)">
									<i class="bi fs-3" :class="[searchWishlist(product.id) ? 'bi-heart-fill text-danger' : 'bi-heart']"></i>
								</span>
								<div class="colors">
									<span class="me-2 shadow" :style="{backgroundColor:c.color.hex}" v-for="c in product.colors" :key="Math.random()"></span>
								</div>
							</div>
							<div class="py-3">
								<div class="d-flex">
									<l :href="route('product', product.id)" class="h6 text-dark me-auto" v-text="product.title"></l>
									<div class="flex-shrink-0 fw-medium">
										<del class="text-muted me-1" v-text="getFormatedPrice(product.price)" v-if="product.discount"></del>
										<span class="text-danger" v-text="getFormatedPrice(product.price, product.discount)" v-if="product.discount"></span>
										<span v-text="getFormatedPrice(product.price)" v-else></span>
									</div>
								</div>
								<div class="d-flex">
									<div class="d-flex me-auto">
										<div class="text-dark me-2" v-for="s in product.sizes" :key="Math.random()" v-if="s.qty !== null">
											<del class="text-muted" v-text="s.size.name" v-if="s.qty === 0"></del>
											<span v-text="s.size.name" v-else></span>
										</div>
									</div>
									<span class="flex-shrink-0 fw-medium text-danger" v-if="product.discount">save {{ product.discount }}%</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container" v-if="products.last_page > 1">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<span class="page-link text-dark pointer disabled" @click="paginate(products.current_page - 1)">&laquo;</span>
					</li>
					<li class="page-item" :class="{active: (params.page === null && p === 1) || p == params.page}" v-for="p in products.last_page" :key="Math.random()">
						<span class="page-link text-dark pointer pointer" v-text="p" @click="paginate(p)"></span>
					</li>
					<li class="page-item">
						<span class="page-link text-dark pointer" @click="paginate(products.current_page + 1)">&raquo;</span>
					</li>
				</ul>
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
			products: Object,
			subs: Array,
			colors: Array,
			materials: Array,
			sizes: Array,
		},
		components: {
			AppLayout,
			h: Head,
			l: Link,
		},
		computed: {
			collections() {
				return this.$page.props.collections
			},
			categories() {
				return this.$page.props.categories
			},
			wishlist() {
				return this.$page.props.wishlist
			}
		},
		methods: {
			searchWishlist(id) {
				return this.wishlist.find(item => item.product.id === id)
			},
			addToWishlist(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.post(this.route('wishlist.toggle', id), {}, {
						preserveScroll: true,
						onSuccess: () => {
							this.loading = false
						}
					})
				}
			},
			result() {
				this.$inertia.get(this.route('shop', this.params))
			},
			filter() {
				this.params.page = null
				this.result()
			},
			paginate(page) {
				this.params.page = (page > 0 && page <= this.products.last_page) ? page : this.params.page
				this.result()
			},
			sortBy(key) {
				this.params.page = null
				this.params.sort = key
				this.result()
			},
			remove(target, index = null) {
				if (index === null) {
					this.params[target] = null
				} else {
					this.params[target].splice(index, 1)
				}
				this.result()
			},
			reset(targets) {
				targets.forEach(target => {
					this.params[target] = []
				})
				this.result()
			},
			getNameById(target, id) {
				return this[target.split('.')[0]].find(item => item.id == id)[target.split('.')[1]]
			}
		},
		data() {
			return {
				loading: false,
				selected: {},
				params: {
					ids: [],
					collections: [],
					categories: [],
					subs: [],
					colors: [],
					materials: [],
					sizes: [],
					sort: null,
					page: null,
					search: null,
					discounts: null,
				},
				sort: {
					n: 'Newest',
					lp: 'Lowest to highest price',
					hp: 'Highest to lowest price',
					az: 'Name A-Z',
					za: 'Name Z-A',
				}
			}
		},
		created() {
			this.params.ids = this.route().params.ids || []
			this.params.collections = this.route().params.collections || []
			this.params.categories = this.route().params.categories || []
			this.params.subs = this.route().params.subs || []
			this.params.colors = this.route().params.colors || []
			this.params.materials = this.route().params.materials || []
			this.params.sizes = this.route().params.sizes || []
			this.params.sort = this.route().params.sort || null
			this.params.page = this.route().params.page || null
			this.params.search = this.route().params.search || null
			this.params.discounts = this.route().params.discounts || null
			Object.assign(this.selected, this.params)
		}
	}
</script>

<style scoped>
	.product .gallery {
		position: relative;
		overflow: hidden;
	}
	.product .carousel-control-prev,
	.product .carousel-control-next {
		visibility: hidden;
		opacity: 0;
		transition: .3s;
	}
	.product:hover .carousel-control-prev,
	.product:hover .carousel-control-next {
		visibility: visible;
		opacity: 1;
	}
	.product .wishlist {
		position: absolute;
		top: 1rem;
		right: 1rem;
		cursor: pointer;
	}
	.product .colors {
		position: absolute;
		left: 1rem;
		bottom: 1rem;
		display: flex;
	}
	.product .colors span {
		display: block;
		height: 20px;
		width: 20px;
	}
</style>
