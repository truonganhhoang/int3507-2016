<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use App\Models\Follow;
use Illuminate\Http\Request;

use App\Http\Requests;

class FollowController extends Controller
{
    /**
     * FollowController constructor.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Follow a user.
     * @param Requests\FollowRequest $request
     * @return mixed
     */
    public function store(Requests\FollowRequest $request)
    {
        $currentUser = Auth::user();
        $user = User::findOrFail($request->following_id);

        if (!$user->isFollowedBy($currentUser)) {
            $currentUser->followings()->attach($request->following_id);
        }

        return redirect()->back()->withSuccess(trans('session.follow_success'));
    }

    /**
     * Unfollow a user.
     * @param Requests\FollowRequest $request
     * @return mixed
     */
    public function destroy(Requests\FollowRequest $request)
    {
        $currentUser = Auth::user();

        $currentUser->followings()->detach($request->following_id);

        return redirect()->back()->withSuccess(trans('session.unfollow_success'));
    }
}
