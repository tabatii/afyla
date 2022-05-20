<template>
	<a :href="url" class="btn btn-primary px-5 py-3">PAY WITH CREDIT CARD</a>
</template>

<script>
	import MXGateway from 'public/js/tramegatewaynapsv4.js'
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
			var mxgateway = new MXGateway(this.data.cmr, this.data.gal, this.data.key, this.data.lang)
			var encrypted1 = mxgateway.cryptageTrame1(this.data.name, this.data.order, this.data.amount, this.data.email, this.data.operation)
			var encrypted2 = mxgateway.cryptageTrame2(this.data.successURL, this.data.timeoutURL)
			var encrypted3 = mxgateway.cryptageTrame3(this.data.failURL, this.data.recallURL)
			var encrypted4 = mxgateway.cryptageTrame4(this.data.phone, this.data.street, this.data.city, this.data.state, this.data.country, this.data.zip)
			this.url = mxgateway.generateLien(encrypted1, encrypted2, encrypted3, encrypted4)
		}
	}
</script>
