<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" />
	<style>
		* {
			font-family: 'Roboto', sans-serif;
			font-size: 16px;
		}
	</style>
</head>
<body>
	<div class="container">
		<p>Thank you for joining our newsletter.</p>
		<p>This is your promo code: <b>{{ $coupon }}</b>.</p>
		<p>This promo code will expire after {{ $expire }} months from now.</p>
		<p>Use it when you buy your first order from our website <a href="{{ route('home') }}">{{ route('home') }}</a>.</p>
	</div>
</body>
</html>