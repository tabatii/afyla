<template>
	<div class="d-grid">
		<a :href="url" class="btn btn-dark btn-naps">PAY WITH CREDIT CARD</a>
	</div>
</template>

<script>
	import MXGateway from 'public/js/tramegatewaynapsv4.js'
	import axios from 'axios'
	export default {
		props: {
			data: Object,
		},
		data() {
			return {
				url: null,
			}
		},
		created() {
			axios.get(`https://api.apilayer.com/exchangerates_data/convert?from=USD&to=MAD&amount=${this.data.amount}`, {
				headers: {apikey: 'xz9ay3pJexczn5OnyXPJF1LMHu4R6bAW'}
			}).then(response => {
				console.log(response.data)
				/*var mxgateway = new MXGateway(this.data.cmr, this.data.gal, this.data.key, this.data.lang)
				var encrypted1 = mxgateway.cryptageTrame1(this.data.name, this.data.order, response.data.result, this.data.email, this.data.operation)
				var encrypted2 = mxgateway.cryptageTrame2(this.data.successURL, this.data.timeoutURL)
				var encrypted3 = mxgateway.cryptageTrame3(this.data.failURL, this.data.recallURL)
				var encrypted4 = mxgateway.cryptageTrame4(this.data.phone, this.data.street, this.data.city, this.data.state, this.data.country, this.data.zip)
				this.url = mxgateway.generateLien(encrypted1, encrypted2, encrypted3, encrypted4)*/
			})
		}
	}
</script>

<style scoped>
	.btn-naps {
		padding-top: 14px;
		padding-bottom: 14px;
		border-radius: 4px;
	}
</style>
