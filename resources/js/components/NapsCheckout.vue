<template>
	<div></div>
</template>

<script>
	import 'public/js/tramegatewaynapsv4.js'
	export default {
		props: {
			data: Object,
		},
		methods: {
			request() {
		        var mxgateway = new MXGateway(this.data.cmr, this.data.gal, this.data.key, this.data.lang)
		        var encrypteddata1 = mxgateway.cryptageTrame1(this.data.name, this.data.order, this.data.amount, this.data.email, this.data.operation)
		        var encrypteddata2 = mxgateway.cryptageTrame2(this.data.successURL, this.data.timeoutURL)
		        var encrypteddata3 = mxgateway.cryptageTrame3(this.data.failURL, this.data.recallURL)
		        var encrypteddata4 = mxgateway.cryptageTrame4(this.data.phone, this.data.street, this.data.city, this.data.state, 'MA', this.data.zip)
		        var gateway = mxgateway.generateLien(encrypteddata1, encrypteddata2, encrypteddata3, encrypteddata4)
		        window.top.location.href = gateway
			}
		},
		data() {
			return {
				//
			}
		}
	}
</script>
