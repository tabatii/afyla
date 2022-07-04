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
	</style>
</head>
<body>
	<div class="mail-container">
		<h1 class="text-center"><a href="{{route('home')}}" class="text-decoration-none" target="_blank">AFYLA</a></h1>
		<div class="mb-5">
			<p class="mb-2">Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
			<p class="mb-0">Thank you for visiting <a href="{{route('home')}}" target="_blank">afylaworld.com</a> ! Please let us know what you thought of your experience. Your feedback is extremely important to us, and helps us ensure we always provide exceptional service to you and our AFYLA community.</p>
		</div>
		<div class="mb-5">
			<p class="mb-4">HOW LIKELY ARE YOU TO RECOMMEND AFYLA TO A FRIEND OR FAMILY MEMBER?</p>
			<div class="d-flex justify-content-between">
				<small>Not at all Likely</small>
				<small>Extremely Likely</small>
			</div>
			<table class="table table-bordered" style="table-layout:fixed">
				<tbody>
					<tr>
						@for($i = 1; $i <= 10; $i++)
							<td class="text-center p-0">
								<a href="{{route('feedback', ['score' => $i])}}" class="d-block py-3" target="_blank">{{$i}}</a>
							</td>
						@endfor
					</tr>
				</tbody>
			</table>
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