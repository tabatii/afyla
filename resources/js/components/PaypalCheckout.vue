<template>
	<div class="position-relative">
		<div class="btn-disabled" v-show="!accepted"></div>
		<div class="btn-paypal" ref="paypal"></div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default {
		props: {
			uuid: String,
			accepted: Boolean,
		},
		computed: {
			headers () {
				return {
					'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
					'Content-Type': 'application/json',
				}
			}
		},
		methods: {
			paypal () {
				paypal.Buttons({
					style: {
						layout: 'horizontal',
						tagline: 'false',
						height: 54,
					},
					createOrder: () => {
						return fetch(this.route('paypal.create'), {
							method: 'POST',
							headers: this.headers,
							body: JSON.stringify({
								uuid: this.uuid,
							})
						}).then(response => {
							return response.json()
						}).then(response => {
							return response.result.id
						})
					},
					onApprove: (data) => {
						return fetch(this.route('paypal.capture'), {
							method: 'POST',
							headers: this.headers,
							body: JSON.stringify({
								capture: data.orderID,
								uuid: this.uuid,
							})
						}).then(response => {
							window.location.href = this.route('paypal.success', this.uuid)
						})
					}
				}).render(this.$refs.paypal)
			}
		},
		mounted () {
			let script = document.createElement('script')
			script.src = 'https://www.paypal.com/sdk/js?client-id=AdtnVAof37ZkZLBWMB819sMNlpbycfDvC15bQ2Mq1tS_BWG6iYwB5Kl0x-eCmZl7eaeOuDAhrNxwECpH'
			document.body.appendChild(script)
			script.addEventListener('load', () => {
				this.paypal()
			})
		}
	}
</script>

<style scoped>
	.btn-disabled {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background-color: rgba(255, 255, 255, .65);
	}
</style>
