<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Socialite;
use App\Services\SocialAccountService;

class SocialAuthController extends Controller
{

    /**
     * @param $provider
     * @return mixed
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * @param SocialAccountService $service
     * @param $provider
     * @return mixed
     */
    public function handleProviderCallback(SocialAccountService $service, $provider)
    {
        $user = $service->createOrGetUser(Socialite::driver($provider));

        auth()->login($user);

        return redirect()->to('/home');
    }
}
