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
		.table a {
			text-decoration: none;
		}
		.table a:hover {
			background-color: rgba(0,0,0,0.05);
		}
		.mail-container {
			max-width: 640px;
			margin: 0 auto;
		}
		@charset "UTF-8";
		:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-body-color-rgb:33,37,41;--bs-body-bg-rgb:255,255,255;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-bg:#fff}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}.small,small{font-size:.875em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}table{caption-side:bottom;border-collapse:collapse}tbody,td,tr{border-color:inherit;border-style:solid;border-width:0}[role=button]{cursor:pointer}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit]{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::-webkit-file-upload-button{font:inherit}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}[hidden]{display:none!important}.container{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>:not(:first-child){border-top:2px solid currentColor}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-link{padding:.375rem .75rem}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@-webkit-keyframes placeholder-glow{50%{opacity:.2}}@keyframes placeholder-glow{50%{opacity:.2}}@-webkit-keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.d-block{display:block!important}.d-table{display:table!important}.d-flex{display:flex!important}.d-none{display:none!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-dark{border-color:#212529!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}
	</style>
</head>
<body>
	<div class="mail-container">
		<h1 class="text-center" style="font-size:4rem">
			<a href="{{route('home')}}" class="text-dark text-decoration-none" target="_blank" style="font-size:inherit; font-weight:600">AFYLA</a>
		</h1>
		<div class="mb-5">
			<p class="mb-2">Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
			<p class="mb-0">Thank you for visiting <a href="{{route('home')}}" class="text-dark link" target="_blank">afylaworld.com</a> ! Please let us know what you thought of your experience. Your feedback is extremely important to us, and helps us ensure we always provide exceptional service to you and our AFYLA community.</p>
		</div>
		<div class="mb-5">
			<p class="mb-4">HOW LIKELY ARE YOU TO RECOMMEND AFYLA TO A FRIEND OR FAMILY MEMBER?</p>
			<div class="d-flex">
				<small class="me-auto">Not at all Likely</small>
				<small>Extremely Likely</small>
			</div>
			<table class="table" style="table-layout:fixed">
				<tbody>
					<tr>
						@for($i = 1; $i <= 10; $i++)
							<td class="border text-center p-0">
								<a href="{{route('feedback', ['uuid' => $order->uuid,'score' => $i])}}" class="d-block text-dark text-decoration-none py-3" target="_blank">{{$i}}</a>
							</td>
						@endfor
					</tr>
				</tbody>
			</table>
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