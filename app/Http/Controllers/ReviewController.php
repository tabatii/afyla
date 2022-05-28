<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReviewRequest;
use App\Models\Review;

class ReviewController extends Controller
{

    public function __invoke(ReviewRequest $request)
    {
        $review = new Review;
        $review->product_id = $request->product;
        $review->name = $request->name;
        $review->email = $request->email;
        $review->rating = $request->rating;
        $review->comment = $request->comment;
        $review->save();
        return back();
    }
}
