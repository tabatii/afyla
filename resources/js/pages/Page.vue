<template>
	<AppLayout>
		<h :title="page.name"></h>
		<section class="bg-primary py-4">
			<div class="container">
				<div class="bg-white p-4">
					<div class="text-end">
						<img src="/img/icons/print.png" class="pointer" height="32px" @click="print" />
					</div>
					<div v-html="page.content" id="printable"></div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import { Head } from '@inertiajs/inertia-vue'
	import 'print-js'
	export default {
		props: {
			page: Object,
		},
		components: {
			AppLayout,
			h: Head,
		},
		methods: {
			print() {
				printJS({
					documentTitle: 'AFYLA',
					printable: 'printable',
					type: 'html',
				})
			}
		}
	}
</script>
