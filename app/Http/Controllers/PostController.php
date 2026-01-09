<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function show(string $id): Response{
        return Inertia::render('posts/show', [
            'post' => Post::findOrFail($id),
        ]);
    }
}
