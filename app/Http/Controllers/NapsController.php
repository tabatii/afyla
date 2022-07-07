<?php

namespace App\Http\Controllers;

use AmrShawky\LaravelCurrency\Facade\Currency;
use App\Services\NapsService;
use Illuminate\Http\Request;
use App\Models\Order;

class NapsController extends Controller
{

    public function create($id)
    {
        $order = Order::with('billing')->where('uuid', $id)->firstOrFail();
        $naps = new NapsService(env('NAPS_CMR'), env('NAPS_GAL'));
        $naps->setPublicKey(env('NAPS_PUBLIC'));

        $encrypted = $naps->encrypt([
            // Order information
            'orderID' => $order->uuid,
            'price' => Currency::convert()->from('USD')->to('MAD')->amount($order->order_subtotal + $order->order_shipping)->get(),
            'details' => '$'.number_format($order->order_subtotal + $order->order_shipping, 2),
            // User information
            'fullname' => $order->user_firstname.' '.$order->user_lastname,
            'email' => $order->user_email,
            'street' => $order->billing->street,
            'city' => $order->billing->city,
            'state' => $order->billing->state,
            'zip' => $order->billing->postcode,
            'country' => $order->billing->country,
            'phone' => $order->billing->phone,
            // Redirect links
            'successURL' => route('naps.success', $order->uuid),
            'timeoutURL' => route('naps.timeout'),
            'failURL' => route('naps.fail'),
            'recallURL' => null,
        ]);

        return response()->json([
            'url' => $naps->generate($encrypted),
        ]);
    }

    public function success(Request $request, $id)
    {
        if ($encrypted = $request->query('data')) {

            $naps = new NapsService(env('NAPS_CMR'), env('NAPS_GAL'));
            $naps->setPrivateKey(env('NAPS_PRIVATE'));
            parse_str($naps->decrypt($encrypted), $decrypted);

            if ($decrypted['id_commande'] == $id) {
                $this->afterPayment($id, 'credit card');
                return inertia('OrderSuccess', [
                    'uuid' => $id,
                    'method' => 'credit card',
                ]);
            }
        }
        return abort(403);
    }

    public function timeout()
    {
        return inertia('OrderFail');
    }

    public function fail()
    {
        return inertia('OrderFail');
    }
}
