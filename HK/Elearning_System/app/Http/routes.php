<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', [
    'as' => 'welcome',
    function () {
        return view('welcome');
    }
]);

/**
 * HomeController
 */
Route::get('/home', [
    'as' => 'home',
    'uses' => 'HomeController@index'
]);

/**
 * User Management
 */
Route::auth();
Route::get('logout', [
    'as' => 'logout',
    'uses' => 'Auth\AuthController@logout'
]);
Route::resource('/users', 'UserController', [
    'only' => ['index', 'show']
]);
Route::delete('/users/{user}', [
    'as' => 'users.destroy',
    'middleware' => 'admin',
    'uses' => 'UserController@destroy'
]);
Route::put('/users/{user}/admin', [
    'as' => 'users.setAdmin',
    'middleware' => 'admin',
    'uses' => 'UserController@setAdmin'
]);
Route::put('/users/{user}', [
    'as' => 'users.update',
    'uses' => 'UserController@update'
]);
Route::post('users/password', [
    'as' => 'update_password',
    'uses' => 'Auth\PasswordController@update'
]);
Route::get('users/{user}/lessons', [
    'as' => 'user.view_lessons',
    'uses' => 'UserController@showLessons'
]);

/**
 * Social Authentication
 */
Route::get('/redirect/{provider}', 'SocialAuthController@redirectToProvider');
Route::get('/callback/{provider}', 'SocialAuthController@handleProviderCallback');

/**
 * Follows
 */
Route::resource('follows', 'FollowController', [
    'only' => ['store', 'destroy']
]);

/**
 * Category and Word Management
 */
Route::group(['prefix' => 'admin'], function () {
    Route::resource('category', 'CategoriesController');
    Route::get('category/{id}/words', [
        'as' => 'admin.category.words',
        'uses' => 'CategoriesController@getAllWordsBelongsToCategory'
    ]);
    Route::get('category/{id}/words/add', [
        'as' => 'admin.category.words.add',
        'uses' => 'CategoriesController@getAddWordBelongsToCategory'
    ]);
    Route::post('category/{id}/words/create', [
        'as' => 'admin.category.word.create',
        'uses' => 'CategoriesController@addWordBelongsToCategory'
    ]);
    Route::resource('word', 'WordsController', ['except' => ['create', 'store']]);
});

Route::get('/categories', [
    'as' => 'user.categories',
    'middleware' => 'auth',
    'uses' => 'CategoriesController@getAllCategories'
]);
Route::get('/words', [
    'as' => 'user.words',
    'middleware' => 'auth',
    'uses' => 'WordsController@getAllWord'
]);
Route::get('category/{id}/word', [
    'as' => 'category.word',
    'uses' => 'LessonsController@getAllWordInCategory'
]);

/**
 * Lesson Management
 */
Route::get('category/{id}/lessons/{lessonId}/', [
    'as' => 'category.lessons',
    'uses' => 'LessonsController@showLesson'
]);
Route::get('lessons/{id}', [
    'as' => 'user.lessons',
    'uses' => 'LessonsController@startLesson'
]);
Route::post('category/{id}/lessons/{lessonId}/result', [
    'as' => 'category.lessons.result',
    'uses' => 'LessonsController@responseResult'
]);
Route::get('category/{id}/lessons/{lessonId}/showResult', [
    'as' => 'category.lessons.showResult',
    'uses' => 'LessonsController@showResult'
]);
