<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

// TODO: Remove in production
Route::get('/migrate', function () {
    Artisan::call('migrate:fresh', array('--path' => 'database/migrations', '--force' => true));
    return view('index');
});


// Route::get('/', function () {
//     return view('index');
// });

Route::view('/{path?}', 'app');

// Route::get('/articles', [ArticleController::class, 'index']);
