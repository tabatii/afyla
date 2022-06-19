<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-5">
				<div class="card bg-light border-0 shadow-sm">
					<div class="card-body text-center px-5">
						<img src="/img/icons/success.png" width="150px" />
						<p class="fs-3" style="color:#25ae88">Thank You</p>
						<p class="mb-0">Your order has been confirmed.</p>
						<p class="mb-0">The number of your order is <b v-text="uuid"></b>.</p>
						<p>We have already sent you a confirmation email with all the information and your tracking number.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			uuid: String,
			method: String,
		}
	}
</script>
