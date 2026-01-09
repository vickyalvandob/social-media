<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    return Inertia::render('home');
});

Route::get('/about', function () {
    return Inertia::render('about');
});


Route::get('/posts/{id}', [PostController::class, 'show'])->name('posts.show');