<template>
	<div class="d-flex">
		<input type="number" class="form-control bg-white border border-end-0 shadow-none" v-model.number="number" readonly />
		<div class="border border-start-0">
			<span class="border-start border-bottom" @click="plus">+</span>
			<span class="border-start border-top" @click="minus">-</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: Number,
			max: {
				default: 1000000,
				type: Number,
			},
		},
		watch: {
			value() {
				this.number = this.value
			},
			number() {
				this.$emit('input', this.number)
			}
		},
		methods: {
			plus() {
				if (this.number < this.max) {
					this.number++
				}
			},
			minus() {
				if (this.number > 1) {
					this.number--
				}
			}
		},
		data() {
			return {
				number: null,
			}
		},
		created() {
			this.number = this.value
		}
	}
</script>

<style scoped>
	input {
		width: 80px;
		text-align: center;
	}
	span {
		display: block;
		width: 28px;
		height: 50%;
		text-align: center;
		cursor: pointer;
		user-select: none;
	}
	span:hover {
		background-color: var(--bs-light);
	}
</style>
