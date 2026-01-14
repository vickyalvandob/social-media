<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('auth/login/create');
    }

      
    public function store(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if(!Auth::attempt($credentials)) {
          throw ValidationException::withMessages([
            'email' => 'These credentials do not match our records.',
          ]);
        }

        $request->session()->regenerate();

        return redirect()->intended('/posts');
    }

    public function destroy(Request $request): RedirectResponse 
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/posts');
    }
}
