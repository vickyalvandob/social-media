<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\Rules\Password;

class RegisterController extends Controller
{
  public function create(): Response
  {
      return Inertia::render('auth/register/create');
  }

  public function store(Request $request): RedirectResponse
  {
      $validated = $request->validate([
          'name' => 'required|string|max:255',
          'email' => 'required|string|max:255|lowercase|email|unique:users',
          'password' => ['required', 'confirmed', Password::defaults()],
      ]);

      $user = User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => Hash::make($validated['password'])
      ]);

      Auth::login($user);

      return redirect('/posts');

  }
}