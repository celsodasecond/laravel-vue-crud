<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('/review', \App\Http\Controllers\ReviewController::class);

    // Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index']);
});
// WORKS ON ERROR 
// Route::get('/logout', [AuthController::class, 'logout']);
// Route::get('/login', [AuthController::class, 'login']);
// WORKS ON ERROR 

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);