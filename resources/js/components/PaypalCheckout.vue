<template>
	<div class="btn-paypal" ref="paypal"></div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default {
		props: {
			uuid: String,
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
							window.location.href = this.route('orders')
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
