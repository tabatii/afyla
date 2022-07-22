<template>
	<AppLayout>
		<h title="Contact Us"></h>
		<section class="bg-primary pb-5">
			<div class="container py-5">
				<p class="fs-4">CONTACT US</p>
				<p>Thank you for reaching out. We would be glad to help you and assist you about any request. Please fill the form below.</p>
				<form @submit.prevent="send">
					<div class="row gy-4">
						<div class="col-sm-6">
							<label>FULL NAME*</label>
							<input type="text" class="form-control border shadow-none py-2" v-model="form.name" />
							<small class="text-danger" v-text="form.errors.name"></small>
						</div>
						<div class="col-sm-6">
							<label>EMAIL*</label>
							<input type="text" class="form-control border shadow-none py-2" v-model="form.email" />
							<small class="text-danger" v-text="form.errors.email"></small>
						</div>
						<div class="col-sm-6">
							<label>TOPIC*</label>
							<select class="form-select border shadow-none py-2" v-model="form.topic">
								<option :value="t" v-text="t" v-for="t in topics" :key="Math.random()"></option>
							</select>
							<small class="text-danger" v-text="form.errors.topic"></small>
						</div>
						<div class="col-12">
							<textarea class="form-control" rows="6" v-model="form.message" placeholder="Type here (if your request is about orders, shipping, returns don’t forget to include the orders number)"></textarea>
							<small class="text-danger" v-text="form.errors.message"></small>
						</div>
						<div class="col-12">
							<div class="d-grid d-sm-flex align-items-sm-center">
								<p class="me-auto">Required fields are marked*</p>
								<button type="submit" class="btn btn-secondary px-4 py-3" :disabled="form.processing">SEND</button>
							</div>
						</div>
						<div class="col-12">
							<div class="row gy-4">
								<div class="col-12">
									<p class="fw-medium mb-0">YOU CAN USE MORE WAYS TO REACH US OUT</p>
								</div>
								<div class="col-sm-4 col-lg-3">
									<div class="d-grid">
										<a :href="'mailto:'+settings.contact_email" class="btn btn-light py-3">
											<img src="/img/icons/mail.png" class="me-3" height="26px" />
											<span>EMAIL US</span>
										</a>
									</div>
								</div>
								<div class="col-sm-4 col-lg-3">
									<div class="d-grid">
										<a :href="'https://wa.me/'+settings.whatsapp" class="btn btn-light py-3" target="_blank">
											<img src="/img/icons/chat.png" class="me-3" height="26px" />
											<span>CHAT WITH US</span>
										</a>
									</div>
								</div>
								<div class="col-sm-4 col-lg-3">
									<div class="d-grid">
										<a :href="'tel:'+settings.phone" class="btn btn-light py-3">
											<img src="/img/icons/phone.png" class="me-3" height="26px" />
											<span>CALL US</span>
										</a>
									</div>
								</div>
								<div class="col-12">
									<p class="mb-0">Calls available every day from 9 am to 10 pm [GMT+1], English, French and Arabic.</p>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		components: {
			AppLayout,
			h: Head,
		},
		computed: {
			settings() {
				return this.$page.props.settings
			}
		},
		methods: {
			send() {
				this.form.post(this.route('contact'), {
					preserveScroll: true,
					onSuccess: () => this.form.reset()
				})
			}
		},
		data() {
			return {
				topics: [
					'ORDERS, SHIPPING, RETURNS',
					'PRODUCT INFORMATION',
					'AFTER SALES ASSISTANT',
					'OTHER',
					'PRESS',
					'CARRERS',
					'SUPPLIERS',
					'COLLABORATION',
					'WHOLESALE',
				],
				form: this.$inertia.form({
					name: null,
					email: null,
					topic: 'ORDERS, SHIPPING, RETURNS',
					message: null,
				})
			}
		}
	}
</script>
