<template>
	<AppLayout>
		<div class="bg-primary py-5">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-9 col-xl-8 col-xxl-7">
						<div class="card bg-primary border-0 shadow">
							<div class="card-body">
								<div class="body px-sm-5 px-4 pt-5">
									<p class="h4 text-center mb-3" style="color:#00921e">THANK YOU FOR SHOPPING WITH US</p>
									<p>Dear {{ order.user_firstname }} {{ order.user_lastname }},</p>
									<p>Driven by unconditional love, your order <b v-text="order.uuid"></b> is now being processed by the AFYLA team.</p>
									<p>We have already sent you a confirmation mail with all the details.</p>
									<p>Once your order is confirmed, you’ll receive another email with the tracking information.</p>
									<p>Please, don’t hesitate to <a :href="route('contact')" target="_blank">Contact us</a> for any further questions or suggestions.</p>
									<p>We thank you for the trust you put in the AFYLA world.</p>
									<div class="signature px-sm-5 px-4">
										<img src="/img/icons/signature.png" class="mb-1" height="36px" />
										<p class="mb-0">Sara Afailal,</p>
										<p class="mb-0">Artistic Director</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	export default {
		props: {
			order: Object,
		},
		components: {
			AppLayout,
		}
	}
</script>

<style scoped>
	.body {
		position: relative;
		padding-bottom: 100px;
		border: 2px solid #c29c6e;
		text-align: justify;
	}
	.signature {
		position: absolute;
		right: 0;
		bottom: 1rem;
		text-align: center;
	}
</style>
