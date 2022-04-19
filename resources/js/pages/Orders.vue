<template>
	<AppLayout>
		<section>
			<div class="container">
				<div class="row g-0 mb-3 bg-primary">
					<div class="col-4">
						<div class="p-3">Product</div>
					</div>
					<div class="col-2">
						<div class="p-3">Quantity</div>
					</div>
					<div class="col-2">
						<div class="p-3">Subtotal</div>
					</div>
					<div class="col-2">
						<div class="p-3">Status</div>
					</div>
					<div class="col-2">
						<div class="p-3">Operation</div>
					</div>
				</div>
				<div class="display-6 text-center mt-5">
					<p>Your dont have any orders yet.</p>
					<p>Go shopping!</p>
				</div>
			</div>
		</section>
		<section></section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	export default {
		props: {
			orders: Array,
		},
		components: {
			AppLayout,
		}
	}
</script>
