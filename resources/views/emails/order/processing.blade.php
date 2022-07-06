<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<style>
		* {
			font-size: 16px;
		}
		.link {
			text-decoration: none;
		}
		.link:hover {
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
		@charset "UTF-8";
		:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ul{padding-left:2rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}img{vertical-align:middle}[role=button]{cursor:pointer}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit]{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item;cursor:pointer}[hidden]{display:none!important}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-fill .nav-item .nav-link{width:100%}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}@-webkit-keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-dark{border-color:#212529!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-center{justify-content:center!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.fw-bold{font-weight:700!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:#6c757d!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}
	</style>
</head>
<body>
	<div class="mail-container">
		<h1 class="text-center"><a href="{{route('home')}}" class="text-dark fw-bold text-decoration-none" target="_blank" style="font-size:inherit">AFYLA</a></h1>
		<ul class="nav nav-pills nav-fill mb-3">
			<li class="nav-item">
				<a href="{{route('shop')}}" class="nav-link text-dark link" target="_blank">SHOP</a>
			</li>
			<li class="nav-item">
				<a href="{{route('shop', ['tag' => 'new'])}}" class="nav-link text-dark link" target="_blank">WHAT’S NEW</a>
			</li>
			<li class="nav-item">
				<a href="{{route('collection', 10)}}" class="nav-link text-dark link" target="_blank">COLLECTION</a>
			</li>
			<li class="nav-item">
				<a href="{{route('shop', ['tag' => 'discount'])}}" class="nav-link link" target="_blank" style="color:#a30000">SPECIAL PRICES</a>
			</li>
		</ul>
		<div class="mb-3">
			<img src="http://localhost:8000/storage/sliders/May2022/XSJuEwj4u65sqQAYoJwI.jpg" width="100%" />
		</div>
		<div class="mb-3">
			<p class="mb-2">Thank you for shopping with us.</p>
			<p class="mb-2">Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
			<p class="mb-2">Your order is now being processed.</p>
			<p class="mb-2">Once the order is confirmed, you'll receive another email from us with the tracking information.</p>
			<p class="mb-2">If you are registered, you can follow the status of your order by logging into your account.</p>
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
			</div>
			<div>
				<p class="fw-bold mb-0">Shipping</p>
				<p class="mb-0">{{$order->order_shipping > 0 ? '$' . number_format($order->order_shipping, 2) : 'Free'}}</p>
			</div>
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
									<a href="{{route('product', $item->product_id)}}" class="text-dark link" target="_blank">{{$item->title}}</a>
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
			<p><a href="{{route('home')}}" class="text-dark link" target="_blank">afylaworld.com</a> team.</p>
		</div>
		<div>
			<ul class="nav nav-pills justify-content-center">
				<li class="nav-item">
					<a href="{{route('contact')}}" class="nav-link text-dark link" target="_blank">CONTACT US</a>
				</li>
				<li class="nav-item">
					<a href="{{route('customer')}}" class="nav-link text-dark link" target="_blank">CUSTOMER CARE</a>
				</li>
				<li class="nav-item">
					<a href="{{route('page', 'shipping-returns-policy')}}" class="nav-link text-dark link" target="_blank">SHIPPING & RETURNS</a>
				</li>
			</ul>
			<ul class="nav nav-pills justify-content-center">
				<li class="nav-item">
					<a href="{{setting('site.instagram')}}" class="nav-link text-dark link" target="_blank">INSTAGRAM</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.youtube')}}" class="nav-link text-dark link" target="_blank">YOUTUBE</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.twitter')}}" class="nav-link text-dark link" target="_blank">TWITTER</a>
				</li>
				<li class="nav-item">
					<a href="{{setting('site.facebook')}}" class="nav-link text-dark link" target="_blank">FACEBOOK</a>
				</li>
			</ul>
		</div>
	</div>
</body>
</html>