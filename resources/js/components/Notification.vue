<template>
	<div class="notification">
		<div class="toast" :class="{show}">
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
		padding: 2rem;
		z-index: 9999999999;
	}
</style>
