<template>
	<div class="bg-light text-start">
		<div class="modal fade" :id="`shareOne${id}`" tabindex="-1">
			<div class="modal-dialog">
				<div class="modal-content bg-primary">
					<div class="modal-header border-0 pb-0">
						<h5 class="modal-title">Share this product</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<p class="text-center fw-medium" v-if="sent">Your message has been sent.</p>
						<form @submit.prevent="email" v-else>
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
		<ul class="nav">
			<li class="mx-2">
				<a :href="facebook" class="text-dark" target="_blank"><i class="bi bi-facebook"></i></a>
			</li>
			<li class="mx-2">
				<a :href="twitter" class="text-dark" target="_blank"><i class="bi bi-twitter"></i></a>
			</li>
			<li class="mx-2">
				<a :href="linkedin" class="text-dark" target="_blank"><i class="bi bi-linkedin"></i></a>
			</li>
			<li class="mx-2">
				<a :href="pinterest" class="text-dark" target="_blank"><i class="bi bi-pinterest"></i></a>
			</li>
			<li class="mx-2">
				<a href="#" class="text-dark" data-bs-toggle="modal" :data-bs-target="`#shareOne${id}`">
					<i class="bi bi-envelope-fill"></i>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import qs from 'query-string'
	export default {
		props: {
			id: Number,
			title: String,
		},
		computed: {
			facebook() {
				var site = 'https://www.facebook.com/sharer.php?'
				var query = qs.stringify({
					u: this.route('product', this.id),
				})
				return site + query
			},
			twitter() {
				var site = 'https://www.twitter.com/intent/tweet?'
				var query = qs.stringify({
					url: this.route('product', this.id),
					text: this.title,
				})
				return site + query
			},
			linkedin() {
				var site = 'https://www.linkedin.com/sharing/share-offsite?'
				var query = qs.stringify({
					mini: true,
					url: this.route('product', this.id),
					text: this.title,
				})
				return site + query
			},
			pinterest() {
				var site = 'https://www.pinterest.com/pin/create/button?'
				var query = qs.stringify({
					url: this.route('product', this.id),
					description: this.title,
				})
				return site + query
			}
		},
		methods: {
			email() {
				this.loading = true
				this.form.id = this.id
				this.form.post(this.route('share.one'), {
					onSuccess: () => {
						this.sent = true
						this.loading = false
					}
				})
			}
		},
		data() {
			return {
				sent: false,
				loading: false,
				form: this.$inertia.form({
					id: null,
					from: 'tabatii@outlook.fr',
					to: 'anatanjaawi@gmail.com',
				})
			}
		},
		mounted() {
			addEventListener('hidden.bs.modal', () => {
				this.sent = false
			})
		}
	}
</script>

<style scoped>

</style>
