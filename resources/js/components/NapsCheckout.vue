<template>
	<div class="d-grid">
		<a :href="url" class="btn btn-dark btn-naps">PAY WITH CREDIT CARD</a>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		props: {
			uuid: String,
		},
		data() {
			return {
				url: null,
			}
		},
		created() {
			axios.get(this.route('naps.create', this.uuid)).then(response => {
				this.url = response.data.url
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
