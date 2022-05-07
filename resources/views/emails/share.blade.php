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
		p {
			margin: 0;
		}
	</style>
</head>
<body>
	@if (is_array($data))
		<div class="container">
			<p style="margin-bottom:1rem">Dear,</p>
			<p style="margin-bottom:3rem">I'd like to share my AFYLA wishlist with you. I thought you might be interested in the following products.</p>
			@foreach($data as $item)
				<div style="margin-bottom:3rem">
					<p>{{ $item->title }}</p>
					<p>
						Color:
						@foreach($item->colors as $i => $c)
							{{ $c->color->name }}{{ $i+1 !== count($item->colors) ? ', ' : null }}
						@endforeach
					</p>
					<p>
						Material:
						@foreach($item->materials as $i => $m)
							{{ $m->material->name }}{{ $i+1 !== count($item->materials) ? ', ' : null }}
						@endforeach
					</p>
					<p>Link: {{ route('product', $item->id) }}</p>
				</div>
			@endforeach
		</div>
	@else
		<div class="container">
			<p style="margin-bottom:1rem">Dear,</p>
			<p>Please have a look at this: {{ $data->title }}</p>
			<p>Link: {{ route('product', $data->id) }}</p>
		</div>
	@endif
</body>
</html>