@extends('emails.order.layout')
@section('text')
	<p>Thank you for shopping with us.</p>
	<p>Dear {{$order->user_firstname}} {{$order->user_lastname}},</p>
	<p>Your order is now being processed.</p>
	<p>Once the order is confirmed, you'll receive another email from us with the tracking information.</p>
	<p>If you are registered, you can follow the status of your order by logging into your account.</p>
@endsection