<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
	<style>
		a,
		.nav-link {
			color: var(--bs-dark);
			text-decoration: none;
		}
		a:hover,
		.nav-link:hover {
			color: var(--bs-dark);
			text-decoration: underline;
		}
		.mail-container {
			max-width: 640px;
			margin: 0 auto;
		}
		.mail-title {
			display: inline-block;
			padding: 1rem 0;
			width: 300px;
			font-size: 1.25rem;
			background-color: #ece7df;
		}
	</style>
</head>
<body>
	<div class="mail-container">
		<h1 class="text-center"><a href="{{route('home')}}" class="text-decoration-none" target="_blank">AFYLA</a></h1>
		<ul class="nav nav-pills nav-fill mb-3">
			<li class="nav-item">
				<a href="{{route('shop')}}" class="nav-link" target="_blank">SHOP</a>
			</li>
			<li class="nav-item">
				<a href="{{route('shop', ['tag' => 'new'])}}" class="nav-link" target="_blank">WHAT’S NEW</a>
			</li>
			<li class="nav-item">
				<a href="{{route('collection', 10)}}" class="nav-link" target="_blank">COLLECTION</a>
			</li>
			<li class="nav-item">
				<a href="{{route('shop', ['tag' => 'discount'])}}" class="nav-link" target="_blank" style="color:#a30000">SPECIAL PRICES</a>
			</li>
		</ul>
		<div class="mb-3">
			<img src="http://localhost:8000/storage/sliders/May2022/XSJuEwj4u65sqQAYoJwI.jpg" width="100%" />
		</div>
		<div class="mb-3">
			<p class="mb-2">Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
			<p class="mb-2">We’re happy to say that your order is due to be delivered within the next few days.</p>
			<p class="mb-2">The link to track your delivery is below.</p>
			<p class="mb-2">Get more detail on your order by visiting your account or contact our customer service for assistance.</p>
			<p class="mb-2">Tracking number: {{$order->tracking_number}}</p>
		</div>
		<div class="border p-4 mb-4">
			<div class="text-center mb-3">
				<span class="mail-title">INFORMATION SUMMARY</span>
			</div>
			<div class="mb-3">
				<p class="fw-bold mb-0">Billing address</p>
				<p class="mb-0">{{$order->billing->firstname}} {{$order->billing->lastname}}</p>
				<p class="mb-0">{{$order->billing->street}}, {{$order->billing->zip}}, <br />{{$order->billing->city}}, {{$order->billing->country}}</p>
			</div>
			<div class="mb-3">
				<p class="fw-bold mb-0">Shipping to</p>
				<p class="mb-0">{{$order->delivery->firstname}} {{$order->delivery->lastname}}</p>
				<p class="mb-0">{{$order->delivery->street}}, {{$order->delivery->zip}}, <br />{{$order->delivery->city}}, {{$order->delivery->country}}</p>
			</div>
			<div class="mb-3">
				<p class="fw-bold mb-0">Payment</p>
				<p class="mb-0">Method: {{$order->payment_method}}</p>
				<p class="mb-0">Amount: ${{number_format($order->order_subtotal, 2)}}</p>
			</div class="mb-3">
			<div class="mb-3">
				<p class="fw-bold mb-0">Shipping</p>
				<p class="mb-0">{{$order->order_shipping > 0 ? '$' . number_format($order->order_shipping, 2) : 'Free'}}</p>
			</div>
			<p class="mb-0"><b>Tracking number:</b> {{$order->tracking_number}}</p>
		</div>
		<div class="border p-4 mb-4">
			<div class="text-center mb-4">
				<span class="mail-title">ORDER DETAILS</span>
			</div>
			<div>
				@foreach($order->products as $item)
					<div class="row mb-3">
						<div class="col-2 pe-0">
							<img src="{{$item->product->gallery[0]}}" width="100%" />
						</div>
						<div class="col-10">
							<div class="d-flex mb-3">
								<p class="pe-2 me-auto mb-0">
									<a href="{{route('product', $item->product_id)}}" target="_blank">{{$item->title}}</a>
								</p>
								<div class="flex-shrink-0">
									<span>${{number_format($item->price, 2)}}</span>
								</div>
							</div>
							<p class="mb-0">Ref: <span class="text-muted">{{$item->product->sku}}</span></p>
							<p class="mb-0">Quantity: <span class="text-muted">{{$item->qty}}</span></p>
						</div>
					</div>
				@endforeach
			</div>
			<div class="d-flex">
				<p class="me-auto mb-0">Subtotal</p>
				<p class="mb-0">${{number_format($order->order_subtotal, 2)}}</p>
			</div>
			<div class="d-flex">
				<p class="me-auto mb-0">Tax & duty</p>
				<p class="mb-0">Included</p>
			</div>
			<div class="d-flex mb-3">
				<p class="me-auto mb-0">Shipping</p>
				<p class="mb-0">{{$order->order_shipping > 0 ? '$' . number_format($order->order_shipping, 2) : 'Free'}}</p>
			</div>
			<div class="d-flex">
				<p class="fw-bold me-auto  mb-0">TOTAL AMOUNT</p>
				<p class="fw-bold mb-0">${{number_format($order->order_subtotal + $order->order_shipping, 2)}}</p>
			</div>
		</div>
		<div class="mb-5">
			<p class="mb-0">Yours sincerely,</p>
			<p><a href="{{route('home')}}" target="_blank">afylaworld.com</a> team.</p>
		</div>
		<div>
			<ul class="nav nav-pills justify-content-center">
				<li class="nav-item">
					<a href="{{route('contact')}}" class="nav-link" target="_blank">CONTACT US</a>
				</li>
				<li class="nav-item">
					<a href="{{route('customer')}}" class="nav-link" target="_blank">CUSTOMER CARE</a>
				</li>
				<li class="nav-item">
					<a href="{{route('page', 'shipping-returns-policy')}}" class="nav-link" target="_blank">SHIPPING & RETURNS</a>
				</li>
			</ul>
			<ul class="nav nav-pills justify-content-center">
				<li class="nav-item">
					<a href="{{setting('site.instagram')}}" class="nav-link" target="_blank">INSTAGRAM</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.youtube')}}" class="nav-link" target="_blank">YOUTUBE</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.twitter')}}" class="nav-link" target="_blank">TWITTER</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.facebook')}}" class="nav-link" target="_blank">FACEBOOK</a>
				</li>
			</ul>
		</div>
	</div>
</body>
</html>