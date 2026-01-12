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
            'posts' => Post::with('user')->latest()->get(),
        ]);
    }

    public function show(string $id): Response{
        return Inertia::render('posts/show', [
            'post' => Post::with([
                'user',
                'comments' => fn($query) => $query->with('user')->latest()
                ])->findOrFail($id),
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
            'user_id' => User::inRandomOrder()->first()->id
        ]);

        return redirect('/posts');
    }
}
