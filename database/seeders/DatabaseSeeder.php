<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $userTest = User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'), // password: password
        ]);

        $users = User::factory(9)->create();
        $allUsers = $users->push($userTest);

        Post::Factory(20)->create([
            'user_id' => fn() => $allUsers->random()->id
        ]);

  
    }
}
