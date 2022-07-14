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
			font-size: 1.5rem;
		}
		@charset "UTF-8";
		:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}address{margin-bottom:1rem;font-style:normal;line-height:inherit}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}img{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}[role=button]{cursor:pointer}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit]{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}summary{display:list-item;cursor:pointer}[hidden]{display:none!important}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.gx-0{--bs-gutter-x:0}.gx-1{--bs-gutter-x:0.25rem}.gx-2{--bs-gutter-x:0.5rem}.gx-3{--bs-gutter-x:1rem}.gx-4{--bs-gutter-x:1.5rem}.gx-5{--bs-gutter-x:3rem}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>:not(:first-child){border-top:2px solid currentColor}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}@-webkit-keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.align-middle{vertical-align:middle!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-dark{border-color:#212529!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.flex-row{flex-direction:row!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}
	</style>
</head>
<body>
	<div class="mail-container">
		<h1 class="text-center" style="font-size:4rem">
			<a href="{{route('home')}}" class="text-dark text-decoration-none" target="_blank" style="font-size:inherit; font-weight:600">AFYLA</a>
		</h1>
		<div class="py-2 mb-2">
			<div class="row gx-0">
				<div class="col text-center">
					<a href="{{route('shop')}}" class="text-dark link" target="_blank">SHOP</a>
				</div>
				<div class="col text-center">
					<a href="{{route('shop', ['tag' => 'new'])}}" class="text-dark link" target="_blank">WHAT’S NEW</a>
				</div>
				<div class="col text-center">
					<a href="{{route('collection', 10)}}" class="text-dark link" target="_blank">COLLECTION</a>
				</div>
				<div class="col text-center">
					<a href="{{route('shop', ['tag' => 'discount'])}}" class="link" target="_blank" style="color:#a30000">SPECIAL PRICES</a>
				</div>
			</div>
		</div>
		<div class="mb-3">
			<img src="https://afylaworld.com/storage/sliders/May2022/t8JXD87ODFsf7rlGSLVy.jpg" width="100%" />
		</div>
		<div class="mb-3">
			@yield('text')
		</div>
		<div class="border p-4 mb-4">
			<div class="text-center mb-3">
				<span class="mail-title">INFORMATION SUMMARY</span>
			</div>
			<div class="mb-3">
				<p class="mb-0" style="font-weight:600">Billing address</p>
				<p class="mb-0">{{$order->billing->firstname}} {{$order->billing->lastname}}</p>
				<p class="mb-0">{{$order->billing->street}}, {{$order->billing->zip}}, <br />{{$order->billing->city}}, {{$order->billing->country}}</p>
			</div>
			<div class="mb-3">
				<p class="mb-0" style="font-weight:600">Shipping to</p>
				<p class="mb-0">{{$order->delivery->firstname}} {{$order->delivery->lastname}}</p>
				<p class="mb-0">{{$order->delivery->street}}, {{$order->delivery->zip}}, <br />{{$order->delivery->city}}, {{$order->delivery->country}}</p>
			</div>
			<div class="mb-3">
				<p class="mb-0" style="font-weight:600">Payment</p>
				<p class="mb-0">Method: {{$order->payment_method}}</p>
				<p class="mb-0">Amount: ${{number_format($order->order_subtotal, 2)}}</p>
			</div>
			<div class="mb-3">
				<p class="mb-0" style="font-weight:600">Shipping</p>
				<p class="mb-0">{{$order->order_shipping > 0 ? '$' . number_format($order->order_shipping, 2) : 'Free'}}</p>
			</div>
			@yield('tracking')
		</div>
		<div class="border p-4 mb-4">
			<div class="text-center mb-4">
				<span class="mail-title">ORDER DETAILS</span>
			</div>
			<div class="mb-4">
				@foreach($order->products as $item)
					<div class="row mb-3">
						<div class="col-2 pe-3">
							<img src="{{$item->product->gallery[0]}}" width="100%" />
						</div>
						<div class="col-10">
							<div class="d-table h-100 w-100">
								<div class="d-table-cell align-middle">
									<div class="d-flex">
										<p class="pe-2 me-auto mb-0">
											<a href="{{route('product', $item->product_id)}}" class="text-dark link" target="_blank">{{$item->title}}</a>
										</p>
										<div class="flex-shrink-0">
											<span>${{number_format($item->price, 2)}}</span>
										</div>
									</div>
									<p class="mb-0">ID: {{$item->product->sku}}</p>
									<p class="mb-0">Quantity: {{$item->qty}}</p>
								</div>
							</div>
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
				<p class="me-auto  mb-0" style="font-weight:600">TOTAL AMOUNT</p>
				<p class="mb-0" style="font-weight:600">${{number_format($order->order_subtotal + $order->order_shipping, 2)}}</p>
			</div>
		</div>
		<div class="mb-5">
			<p>Yours sincerely,</p>
			<p><a href="{{route('home')}}" class="text-dark link" target="_blank">afylaworld.com</a> team.</p>
		</div>
		<div>
			<div class="text-center mb-2">
				<a href="{{route('contact')}}" class="text-dark link px-3 py-2" target="_blank">CONTACT US</a>
				<a href="{{route('customer')}}" class="text-dark link px-3 py-2" target="_blank">CUSTOMER CARE</a>
				<a href="{{route('page', 'shipping-returns-policy')}}" class="text-dark link px-3 py-2" target="_blank">SHIPPING & RETURNS</a>
			</div>
			<div class="text-center">
				<a href="{{setting('site.instagram')}}" class="text-dark link px-3 py-2" target="_blank">INSTAGRAM</a>
				<a href="{{setting('site.youtube')}}" class="text-dark link px-3 py-2" target="_blank">YOUTUBE</a>
				<a href="{{setting('site.twitter')}}" class="text-dark link px-3 py-2" target="_blank">TWITTER</a>
				<a href="{{setting('site.facebook')}}" class="text-dark link px-3 py-2" target="_blank">FACEBOOK</a>
			</div>
		</div>
	</div>
</body>
</html>