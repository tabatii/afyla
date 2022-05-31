<template>
	<div class="popup-backdrop" v-show="value">
		<div class="popup-content" :style="{width}">
			<button type="button" class="btn btn-close popup-close" @click="close"></button>
			<div class="popup-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: [Boolean, Number],
			width: {
				default: '500px',
				type: String
			}
		},
		methods: {
			close() {
				this.$emit('input', null)
			}
		}
	}
</script>

<style scoped>
	.popup-backdrop {
		position: fixed;
		inset: 0 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: rgba(0,0,0,.5);
		z-index: 1085;
	}
	.popup-content {
		position: relative;
		max-width: 100%;
		overflow: auto;
		background-color: var(--bs-primary);
	}
	.popup-body {
		padding: 1.5rem;
		color: var(--bs-dark);
	}
	.popup-close {
		position: absolute;
		top: .5rem;
		right: .5rem;
	}
</style>
