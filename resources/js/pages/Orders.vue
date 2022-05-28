<template>
	<UserMenu>
		<h title="Orders"></h>
		<div class="px-3 px-sm-5 py-2">
			<div v-if="orders.length === 0">
				<p class="fw-medium text-center text-uppercase">WELCOME BACK, <span v-text="auth.firstname"></span></p>
				<p>YOU HAVE NOT PLACED ANY ORDER</p>
			</div>
			<div v-else>
				<div class="modal fade" id="details" tabindex="-1">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header border-0">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<p class="fs-4 text-center"><b>ORDER N°</b> {{ orders[index].uuid }}</p>
								<div class="table-responsive">
									<table class="table table-bordered border-secondary text-center">
										<thead>
											<tr class="align-middle">
												<th scope="col">#</th>
												<th scope="col">TITLE</th>
												<th scope="col">CATEGORY</th>
												<th scope="col">QUANTITY</th>
												<th scope="col">SIZE</th>
												<th scope="col">PRICE</th>
											</tr>
										</thead>
										<tbody class="border-top-0">
											<tr class="align-middle" v-for="(product, i) in orders[index].products" :key="Math.random()">
												<td v-text="i+1"></td>
												<td>
													<a :href="route('product', product.id)" class="text-dark underline" target="_blank" v-text="product.title"></a>
												</td>
												<td v-text="product.category"></td>
												<td v-text="product.qty"></td>
												<td v-text="product.size"></td>
												<td v-text="getFormatedPrice(product.price)"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="table-responsive">
					<table class="table table-bordered border-secondary text-center">
						<thead>
							<tr class="align-middle">
								<th class="text-nowrap" scope="col">ORDER N°</th>
								<th class="text-nowrap" scope="col">TRACKING N°</th>
								<th class="text-nowrap" scope="col">AMOUNT</th>
								<th class="text-nowrap" scope="col">ADDRESS</th>
								<th class="text-nowrap" scope="col">PHONE</th>
								<th class="text-nowrap" scope="col">DATE</th>
								<th class="text-nowrap" scope="col">STATUS</th>
								<th class="text-nowrap" scope="col">DETAILS</th>
							</tr>
						</thead>
						<tbody class="border-top-0">
							<tr class="align-middle" v-for="(order, i) in orders" :key="Math.random()">
								<td class="text-nowrap" v-text="order.uuid"></td>
								<td class="text-nowrap" v-text="order.tracking_number"></td>
								<td class="text-nowrap" v-text="getFormatedPrice(order.order_subtotal)"></td>
								<td style="min-width:200px">{{ order.address_street }}, {{ order.address_city }}, {{ order.address_zip }}, {{ order.address_country }}</td>
								<td class="text-nowrap" v-text="order.address_phone"></td>
								<td class="text-nowrap" v-text="order.created_at"></td>
								<td class="text-nowrap" v-text="order.status.toUpperCase()"></td>
								<td>
									<button type="button" class="btn btn-sm btn-secondary" data-bs-toggle="modal" data-bs-target="#details" @click="index = i">DETAILS</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
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
		},
		data() {
			return {
				index: 0,
			}
		}
	}
</script>
