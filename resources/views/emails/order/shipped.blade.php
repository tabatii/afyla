@extends('emails.order.layout')
@section('text')
	<p>Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
	<p>We’re happy to say that your order is due to be delivered within the next few days.</p>
	<p>The link to track your delivery is below.</p>
	<p>Get more detail on your order by visiting your account or contact our customer service for assistance.</p>
	<p>Tracking number: {{$order->tracking_number}}</p>
@endsection
@section('tracking')
	<p><span style="font-weight:600">Tracking number:</span> {{$order->tracking_number}}</p>
@endsection