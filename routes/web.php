<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\PostToggleLike;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home.index');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about.index');


Route::post('/posts/{post}/likes/toggle', PostToggleLike::class);

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::get('/posts/{id}', [PostController::class, 'show'])->name('posts.show');


Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');