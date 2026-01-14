<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCommentRequest $request)
    {
        $validated = $request->validated();
        Comment::create([
            ...$validated,
            'user_id' => $request->user()
        ]);
        return redirect()->back();
    }
}
