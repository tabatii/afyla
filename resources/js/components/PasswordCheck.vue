<template>
	<ul>
		<li>
			<i class="bi" :class="[this.result.minimum ? 'bi-check' : 'bi-x']"></i>
			<span>At least 8 characters.</span>
		</li>
		<li>
			<i class="bi" :class="[this.result.letters ? 'bi-check' : 'bi-x']"></i>
			<span>At least 1 letter.</span>
		</li>
		<li>
			<i class="bi" :class="[this.result.numbers ? 'bi-check' : 'bi-x']"></i>
			<span>At least 1 number.</span>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			value: String,
		},
		watch: {
			value(newValue) {
				this.result.minimum = newValue.length >= 8
				this.result.letters = this.patterns.letters.test(newValue)
				this.result.numbers = this.patterns.numbers.test(newValue)
			}
		},
		data() {
			return {
				patterns: {
					letters: /[a-z]+/i,
					numbers: /[0-9]+/i,
				},
				result: {
					minimum: false,
					letters: false,
					numbers: false,
				}
			}
		}
	}
</script>

<style scoped>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	span {
		font-size: .875rem;
	}
	i {
		font-size: 1.3rem;
		line-height: 1;
		vertical-align: middle;
	}
	i.bi-check {
		color: var(--bs-success);
	}
	i.bi-x {
		color: var(--bs-danger);
	}
</style>
