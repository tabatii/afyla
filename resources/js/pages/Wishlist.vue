<template>
	<AppLayout>
		<h title="My Wishlist"></h>
		<PopUp v-model="soldout" width="600px">
			<SoldOut v-if="wishlist[card]" :product="wishlist[card].product" :size="bag.size" :qty="getSizeQty" v-model="soldout"></SoldOut>
		</PopUp>
		<PopUp v-model="done">
			<div class="text-center py-2">
				<p class="fw-medium">This item has been added to your shopping bag.</p>
				<l :href="route('bag')" class="btn btn-secondary">VIEW MY BAG</l>
			</div>
		</PopUp>
		<PopUp v-model="del">
			<div class="text-center py-2">
				<p class="fw-medium">Are you sure you want to delete this item from your wishlist ?</p>
				<button type="button" class="btn btn-secondary" :disabled="loading" @click="deleteFromWishlist(del)">DELETE</button>
				<button type="button" class="btn btn-outline-secondary text-dark" @click="del = null">CANCEL</button>
			</div>
		</PopUp>
		<div class="modal fade" id="sizeModal" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">AFYLA SIZE</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<FindSize></FindSize>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" id="shareAll" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content bg-primary">
					<div class="modal-header border-0 pb-0">
						<h5 class="modal-title">Share your wishlist</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<p class="text-center fw-medium" v-if="sent">Your message has been sent.</p>
						<form @submit.prevent="shareAll" v-else>
							<div class="row">
								<div class="col-3">
									<label class="py-1">From</label>
								</div>
								<div class="col-9">
									<div class="mb-2">
										<input type="text" class="form-control form-control-sm border shadow-none" v-model="form.from" />
										<small class="text-danger" v-text="form.errors.from"></small>
									</div>
								</div>
								<div class="col-3">
									<label class="py-1">To</label>
								</div>
								<div class="col-9">
									<div class="mb-2">
										<input type="text" class="form-control form-control-sm border shadow-none" v-model="form.to" />
										<small class="text-danger" v-text="form.errors.to"></small>
									</div>
								</div>
								<div class="col-3"></div>
								<div class="col-9">
									<button type="submit" class="btn btn-sm btn-outline-dark px-4" :disabled="loading">SEND</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<section style="margin-bottom:200px">
			<div class="container">
				<div class="py-3">
					<div class="alert alert-secondary alert-dismissible fade show" v-if="!auth">
						<p>Sign in to save your wishlist and manage your orders.</p>
						<div class="d-flex">
							<button type="button" class="btn btn-secondary me-2" data-bs-toggle="offcanvas" data-bs-target="#forms">SIGN IN</button>
						</div>
						<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
					</div>
				</div>
				<div class="py-3">
					<div class="d-flex flex-column flex-sm-row flex-wrap mb-3">
						<div class="d-flex align-items-center flex-wrap flex-grow-1 mb-2 mb-sm-0">
							<span class="fw-medium fs-5 me-auto" style="line-height:1.7">{{ wishlist.length }} Item(s)</span>
							<div class="me-sm-4">
								<span class="pointer" v-if="!share" @click="share = true">
									<i class="bi bi-share-fill fs-4"></i>
								</span>
								<div class="d-flex align-items-center rounded shadow-sm bg-light px-3" v-else>
									<span class="position-relative pointer text-muted underline me-4" :class="{tp: copied}" @click="copyWishlist">COPY LINK</span>
									<span class="pointer me-2" data-bs-toggle="modal" data-bs-target="#shareAll">
										<i class="bi bi-envelope pointer fs-5"></i>
									</span>
									<button type="button" class="btn-close" @click="share = false"></button>
								</div>
							</div>
						</div>
						<div class="d-flex align-items-center">
							<span class="fw-medium me-2">Sort by</span>
							<div class="dropdown">
								<button type="button" class="btn btn-primary shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
									<span v-text="sort[params.sort]"></span>
									<i class="bi bi-caret-down-fill"></i>
								</button>
								<ul class="dropdown-menu dropdown-menu-end shadow-sm">
									<li v-for="(text, key) in sort">
										<span class="dropdown-item pointer text-dark" @click="params.sort = key">
											<i class="bi bi-check" :class="{show: params.sort === key}"></i> {{ text }}
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="fs-4 text-center mt-5" v-if="sorted.length === 0">
					<p>Your wishlist is still empty.</p>
					<p>We invite you to discover our <l class="underline" :href="route('shop')">products</l> and save what you like.</p>
				</div>
				<div class="row gy-4" v-else>
					<div class="col-sm-6 col-lg-4 col-xl-3" v-for="(item, i) in sorted" :key="i">
						<div class="product position-relative">
							<img :src="item.product.gallery[0]" class="d-block w-100 pointer" @click="open(i)" />
							<div class="bag shadow" :class="{show: card === i}">
								<div class="mb-4">
									<div class="text-end">
										<span class="pointer" @click="card = null">
											<i class="bi bi-arrow-left fs-4 lh-1"></i>
										</span>
									</div>
									<p class="fw-medium mb-1" v-text="item.product.title"></p>
									<span class="text-muted" v-text="item.product.sku"></span>
								</div>
								<div class="mb-4">
									<div class="d-flex mb-1">
										<span class="me-2">Color:</span>
										<span class="text-muted me-1" v-if="c.color" v-for="(c, i) in item.product.colors" :key="Math.random()">
											{{ c.color.name }}<span v-if="i+1 !== item.product.colors.length">,</span>
										</span>
									</div>
									<div class="d-flex mb-1">
										<span class="me-2">Material:</span>
										<span class="text-muted me-1" v-if="m.material" v-for="(m, i) in item.product.materials" :key="Math.random()">
											{{ m.material.name }}<span v-if="i+1 !== item.product.materials.length">,</span>
										</span>
									</div>
									<div class="d-flex align-items-center flex-wrap">
										<span class="me-2">Size:</span>
										<select class="form-select input py-0 me-3" style="max-width:70px" v-model="bag.size">
											<option :value="s.size_id" v-if="s.size && s.qty !== null" v-for="s in item.product.sizes" :key="Math.random()">
												{{ s.size.name }}
											</option>
										</select>
										<small class="pointer underline text-muted" data-bs-toggle="modal" data-bs-target="#sizeModal">Find your size</small>
									</div>
								</div>
								<div class="d-grid gap-2">
									<div class="fw-medium">
										<span class="text-danger me-1" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
										<del class="text-muted" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
										<span v-text="getFormatedPrice(item.product.price)" v-else></span>
									</div>
									<button type="button" class="btn btn-primary" :disabled="bag.size === null || loading" @click="addToBag(item.product.id)">
										<span v-if="bag.size">{{ getSizeQty < 1 ? 'SOLD OUT' : 'ADD TO BAG' }}</span>
										<span v-else>CHOOSE A SIZE</span>
									</button>
									<l :href="route('product', item.product.id)" class="btn btn-outline-primary text-dark">MORE DETAILS</l>
								</div>
							</div>
							<div class="action">
								<SocialShare :id="item.product.id" :title="item.product.title" v-show="social === i"></SocialShare>
								<span class="pointer lh-1 ms-2" @click="social = (social === null) ? i : null">
									<i class="bi bi-share-fill"></i>
								</span>
								<button type="button" class="btn-close ms-2" @click="del = item.product.id"></button>
							</div>
							<div class="py-3">
								<div class="d-flex">
									<l :href="route('product', item.product.id)" class="text-dark me-auto" v-text="item.product.title"></l>
									<span class="add" @click="open(i)">+</span>
								</div>
								<div class="fw-medium">
									<del class="text-muted me-1" v-text="getFormatedPrice(item.product.price)" v-if="item.product.discount"></del>
									<span class="text-danger" v-text="getFormatedPrice(item.product.price, item.product.discount)" v-if="item.product.discount"></span>
									<span v-text="getFormatedPrice(item.product.price)" v-else></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import SocialShare from '../components/SocialShare'
	import FindSize from '../components/FindSize'
	import SoldOut from '../components/SoldOut'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import PopUp from '../components/PopUp'
	import copy from 'copy-to-clipboard'
	import qs from 'query-string'
	export default {
		components: {
			AppLayout,
			SocialShare,
			FindSize,
			SoldOut,
			PopUp,
			h: Head,
			l: Link,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			},
			wishlist() {
				return this.$page.props.wishlist
			},
			getSizeQty() {
				var item = this.wishlist.find(w => w.product.id === this.bag.product)
				var size = item ? item.product.sizes.find(s => s.size_id === this.bag.size) : null
				return size ? size.qty : null
			},
			shareAllLink() {
				var body = `Dear,\n\n`+
						   `I'd like to share my AFYLA wishlist with you. I thought you might be interested in the following products.\n\n\n`
				this.wishlist.forEach(item => {
					body += `${item.product.title}\n`
					body += `Color: `
					item.product.colors.forEach((c, i) => {
						var comma = i+1 !== item.product.colors.length ? ', ' : '\n'
						body += c.color.name + comma
					})
					body += `Material: `
					item.product.materials.forEach((m, i) => {
						var comma = i+1 !== item.product.materials.length ? ', ' : '\n'
						body += m.material.name + comma
					})
					body += `Link: ${this.route('product', item.product.id)}\n\n\n`
				})
				return 'mailto:?' + qs.stringify({
					subject: 'Discover my AFYLA wishlist',
					body
				})
			}
		},
		watch: {
			card(newValue) {
				if (newValue === null) {
					this.bag.size = null
					this.bag.product = null
				}
			},
			'params.sort'(newValue) {
				this.sorted.sort((a, b) => {
					if (newValue === 'n') {
						return a.id - b.id
					} else if (newValue === 'az') {
						return a.product.title > b.product.title ? 1 : (a.product.title < b.product.title ? -1 : 0)
					} else if (newValue === 'za') {
						return a.product.title < b.product.title ? 1 : (a.product.title > b.product.title ? -1 : 0)
					} else if (newValue === 'hp') {
						return b.product.price - a.product.price
					} else if (newValue === 'lp') {
						return a.product.price - b.product.price
					}
				})
			}
		},
		methods: {
			open(i) {
				this.card = i
				this.bag.size = null
				this.bag.product = this.sorted[i].product.id
			},
			deleteFromWishlist(id) {
				if (this.loading === false) {
					this.loading = true
					this.$inertia.post(this.route('wishlist.toggle', id), {}, {
						preserveScroll: true,
						onSuccess: () => {
							this.del = null
							this.loading = false
							this.sorted = [...this.wishlist]
						}
					})
				}
			},
			addToBag(id) {
				if (this.getSizeQty && this.getSizeQty > 0) {
					this.loading = true
					return this.$inertia.post(this.route('bag.add'), this.bag, {
						preserveScroll: true,
						onSuccess: () => {
							this.loading = false
							this.card = null
							this.done = true
						}
					})
				}
				this.soldout = true
			},
			shareAll() {
				this.loading = true
				this.form.ids = this.wishlist.map(item => item.product.id)
				this.form.post(this.route('share.all'), {
					onSuccess: () => {
						this.sent = true
						this.loading = false
					}
				})
			},
			copyWishlist() {
				var ids = this.wishlist.map(item => item.product.id)
				copy(this.route('shop', {ids}))
				this.copied = true
				setTimeout(() => {
					this.copied = false
				}, 2000)
			}
		},
		data() {
			return {
				sorted: [],
				del: null,
				done: false,
				sent: false,
				copied: false,
				soldout: false,
				loading: false,
				social: null,
				share: false,
				card: null,
				bag: {
					product: null,
					size: null,
					qty: 1,
				},
				params: {
					sort: 'n',
				},
				sort: {
					n: 'Date',
					az: 'Name A-Z',
					za: 'Name Z-A',
					hp: 'Highest to lowest price',
					lp: 'Lowest to highest price',
				},
				form: this.$inertia.form({
					ids: null,
					from: null,
					to: null,
				})
			}
		},
		mounted() {
			addEventListener('hidden.bs.modal', () => {
				this.sent = false
			})
		},
		created() {
			this.sorted = [...this.wishlist]
		}
	}
</script>

<style scoped>
	.product .bag {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		padding-bottom: 1.5rem;
		background-color: #fff;
		visibility: hidden;
		opacity: 0;
		z-index: 1;
		transform: rotateY(180deg);
		transition: .5s;
	}
	.product .bag.show {
		transform: rotateY(0);
		visibility: visible;
		opacity: 1;
	}
	.product .action {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
	}
	.product .add {
		line-height: .7;
		font-size: 2rem;
		cursor: pointer;
		user-select: none;
	}
	.bi-check {
		display: inline-block;
		transform: scale(1.5);
		visibility: hidden;
	}
	.bi-check.show {
		visibility: visible;
	}
	.tp:before {
		content: "";
		position: absolute;
		left: calc(50% - 5px);
		bottom: 0;
		height: 0;
		width: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid black;
		cursor: default;
	}
	.tp:after {
		content: "Copied!";
		position: absolute;
		left: calc(50% - 35px);
		bottom: calc(-100% - 5px);
		width: 70px;
		padding: .25rem 0;
		border-radius: .25rem;
		background-color: black;
		color: white;
		font-size: .875rem;
		text-align: center;
		cursor: default;
	}
</style>
