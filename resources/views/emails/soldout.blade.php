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
		<p style="margin-bottom:1rem">Dear,</p>
		<p style="margin-bottom:1rem">You asked to be notified when our product <a href="{{ route('product', $product->id) }}">{{ $product->title }}</a> with size {{ $size->name }} is available.</p>
		<p style="margin-bottom:1rem">Well, it is available now.</p>
		<p>Go add it to your bag and enjoy our <a href="{{ route('page', 'shipping-returns-policy') }}">free shipping & returns</a>.</p>
	</div>
</body>
</html>