<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-5">
				<div class="card bg-light border-0 shadow-sm">
					<div class="card-body text-center px-5">
						<img src="/img/icons/success.png" width="150px" />
						<p class="fs-3" style="color:#25ae88">Thank you for shopping with us</p>
						<p class="mb-0">Your order <b v-text="uuid"></b> is now being processed.</p>
						<p class="mb-0">We have already sent you a confirmation email with all the information.</p>
						<p>Once the order is confirmed, you'll receive another email from us with the tracking information.</p>
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
