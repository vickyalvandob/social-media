<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class PostController extends Controller
{

    public function index(): Response{
        return Inertia::render('posts/index', [
            'posts' => Post::with('user')->withCount('likes')->latest()->get(),
        ]);
    }

    public function show(string $id): Response{
        $post = Post::with('user')->findOrFail($id);
        return Inertia::render('posts/show', [
            'post' => $post,
            'comments' => Inertia::defer(
                fn() => $post->comments()
                ->with('user')
                ->latest()
                ->get()
            ),
            'likes' => Inertia::defer(
                fn() => [
                    'count' => $post->likes()->count(),
                    'user_has_liked' => $post->likes()->where([
                        'ip_address' => request()->ip(),
                        'user_agent' => request()->userAgent()
                    ])->exists()
                ]
            )
        ]);
    }

    public function create(): Response {
        return Inertia::render('posts/create');
    }

    public function store(Request $request): RedirectResponse{
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string|max:255'
        ]);

        Post::create([
            ...$validated,
            'user_id' => $request->user()
        ]);

        return redirect('/posts');
    }
}
