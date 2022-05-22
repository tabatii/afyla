<template>
	<UserMenu>
		<h title="Orders"></h>
		<div class="px-3 px-sm-5 py-2">
			<div v-if="orders.length === 0">
				<p class="fw-medium text-center text-uppercase">WELCOME BACK, <span v-text="auth.firstname"></span></p>
				<p>YOU HAVE NOT PLACED ANY ORDER</p>
			</div>
			<div v-else>
				<div class="mb-3">
					<input type="text" class="form-control border shadow-none" placeholder="search..." />
				</div>
				<table class="table table-bordered border-secondary text-center">
					<thead>
						<tr>
							<th scope="col">ORDER N</th>
							<th scope="col">AMOUNT</th>
							<th scope="col">ADDRESS</th>
							<th scope="col">DATE</th>
							<th scope="col">PHONE</th>
							<th scope="col">STATUS</th>
							<th scope="col">DETAILS</th>
							<th scope="col">EDIT</th>
						</tr>
					</thead>
					<tbody class="border-top-0">
						<tr>
							<th scope="row"></th>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</UserMenu>
</template>

<script>
	import UserMenu from '../components/UserMenu'
	import { Head } from '@inertiajs/inertia-vue'
	export default {
		props: {
			orders: Array,
		},
		components: {
			UserMenu,
			h: Head,
		},
		computed: {
			auth() {
				return this.$page.props.auth
			}
		}
	}
</script>
