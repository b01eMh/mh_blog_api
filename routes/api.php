<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentsController;
use App\Http\Controllers\Api\FilesController;
use App\Http\Controllers\Api\PostsController;
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
// Authenticate
Route::post('/authenticate', [AuthController::class, 'login']);
// Posts
Route::middleware('auth:sanctum')->group(function(){
    Route::apiResource('/posts', PostsController::class);
    Route::apiResource('/comments', CommentsController::class);
    Route::post('/uploads', [FilesController::class, 'store']);
});
// Get user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
