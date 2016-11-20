<?php

namespace App\Http\Controllers\Auth;

use Hash;
use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use App\Http\Requests\ChangePasswordRequest;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'update']);
    }

    /**
     * @param ChangePasswordRequest $request
     * @return mixed
     */
    public function update(ChangePasswordRequest $request)
    {
        $user = Auth::user();

        if (!Hash::check($request->input('old_password'), $user->password)) {
            return redirect()->back()->withErrors(trans('session.update_password_error'));
        }

        $user->password = $request->input('password');

        $user->save();

        $request->session()->flash('success', trans('session.update_password_success'));

        return back();
    }
}
