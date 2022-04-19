<template>
	<div>
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<script>
	import AppHeader from './AppHeader'
	import AppFooter from './AppFooter'
	export default {
		components: {
			AppHeader,
			AppFooter,
		}
	}
</script>
