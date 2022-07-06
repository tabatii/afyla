<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;

class FeedbackController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        Feedback::updateOrCreate([
            'order_uuid' => $request->uuid,
        ], [
            'score' => $request->score,
        ]);
        return inertia('Feedback');
    }
}
