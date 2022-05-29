<template>
	<div class="notification p-2 p-sm-4" v-if="show">
		<div class="toast show">
			<div class="toast-header">
				<span v-text="title"></span>
				<button type="button" class="btn-close ms-auto" @click="$emit('input', false)"></button>
			</div>
			<div class="toast-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: Boolean,
			title: {
				type: String,
				default: null,
			},
		},
		watch: {
			value(newValue) {
				this.show = newValue
			}
		},
		data() {
			return {
				show: false
			}
		},
		created() {
			this.show = this.value
		}
	}
</script>

<style scoped>
	.notification {
		position: fixed;
		right: 0;
		bottom: 0;
		max-width: 100%;
		z-index: 1090;
	}
</style>
