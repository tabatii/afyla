<?php

namespace App\Http\Controllers;

use PayPalCheckoutSdk\Core\PayPalHttpClient;
use PayPalCheckoutSdk\Core\SandboxEnvironment;
use PayPalCheckoutSdk\Orders\OrdersCreateRequest;
use PayPalCheckoutSdk\Orders\OrdersCaptureRequest;
use Illuminate\Http\Request;
use App\Models\Order;

class PayPalController extends Controller
{

    public function __construct()
    {
        $this->middleware('cookie')->except('success');
    }

    /**
     * Setting up and Returns PayPal SDK environment with PayPal Access credentials.
     * For demo purpose, we are using SandboxEnvironment. In production this will be
     * ProductionEnvironment.
     */
    public function environment()
    {
        $clientId = env('PAYPAL_ID') ?: 'PAYPAL-SANDBOX-CLIENT-ID';
        $clientSecret = env('PAYPAL_SECRET') ?: 'PAYPAL-SANDBOX-CLIENT-SECRET';
        return new SandboxEnvironment($clientId, $clientSecret);
    }

    /**
     * Returns PayPal HTTP client instance with environment which has access
     * credentials context. This can be used invoke PayPal API's provided the
     * credentials have the access to do so.
     */
    public function client()
    {
        return new PayPalHttpClient($this->environment());
    }

    public function body($uuid)
    {
        $order = Order::with('products')->where('uuid', $uuid)->first();
        $items = [];

        foreach ($order->products as $product) {
            $items[] = [
                'name' => $product->title,
                'quantity' => $product->qty,
                'unit_amount' => [
                    'currency_code' => 'USD',
                    'value' => $product->price,
                ]
            ];
        }

        return [
            'intent' => 'CAPTURE',
            'application_context' => [
                'brand_name' => env('APP_NAME'),
                'shipping_preference' => 'NO_SHIPPING',
            ],
            'purchase_units' => [
                [
                    'items' => $items,
                    'amount' => [
                        'currency_code' => 'USD',
                        'value' => $order->order_subtotal + $order->order_shipping,
                        'breakdown' => [
                            'item_total' => [
                                'currency_code' => 'USD',
                                'value' => $order->order_subtotal + $this->getCoupon($order->coupon_id, $order->order_subtotal),
                            ],
                            'shipping' => [
                                'currency_code' => 'USD',
                                'value' => $order->order_shipping,
                            ],
                            'discount' => [
                                'currency_code' => 'USD',
                                'value' => $this->getCoupon($order->coupon_id, $order->order_subtotal),
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    public function create(Request $request)
    {
        $request->validate([
            'uuid' => 'required|exists:orders',
        ]);

        $payment = new OrdersCreateRequest();
        $payment->prefer('return=representation');
        $payment->body = $this->body($request->uuid);

        $response = $this->client()->execute($payment);
        return response()->json($response);
    }

    public function capture(Request $request)
    {
        $request->validate([
            'capture' => 'required|string',
            'uuid' => 'required|exists:orders',
        ]);
        //$payment = $this->client()->execute(new OrdersCaptureRequest($request->capture));
        $this->afterPayment($request->uuid, 'paypal');
        return response()->json();
    }

    public function success($id)
    {
        $order = Order::where('uuid', $id)->firstOrFail();
        return inertia('OrderSuccess', [
            'order' => $order,
        ]);
    }
}
