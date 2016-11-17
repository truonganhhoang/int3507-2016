@extends('layouts.app')

@section('title')
    {{ trans('auth.show_profile_title') }}
@stop

@section('content')
    <div class="container">
        <section>
            <div class="row">

                @include('layouts.partials.errors')
                @include('layouts.partials.success')

                <div class="col-md-4">

                    {{ Html::image($user->avatar, $user->name, ['class' => 'img-responsive']) }}

                    <br>

                    @if ($currentUser)
                        @unless ($user->isCurrent())
                            @include('user.partials.relationships')
                        @else
                            <button type="button" class="btn btn-primary follows_button" data-toggle="collapse"
                                    data-target="#followings"><i class="fa fa-user-plus"></i> {{ trans('content.following') }}
                            </button>

                            <div id="followings" class="collapse">
                                @foreach ($user->followings as $u)
                                    <li>{{ link_to_route('users.show', $u->name, $u->id) }}</li>
                                @endforeach
                            </div>

                            <button type="button" class="btn btn-primary follows_button" data-toggle="collapse"
                                    data-target="#followers"><i class="fa fa-users"></i> {{ trans('content.followers') }}
                            </button>

                            <div id="followers" class="collapse">
                                @foreach ($user->followers as $u)
                                    <li>{{ link_to_route('users.show', $u->name, $u->id) }}</li>
                                @endforeach
                            </div>

                            {!! HTML::decode(link_to_route('user.view_lessons', '<i class="fa fa-eye"></i> ' . trans('content.view_lessons'), ['user' => $currentUser->id], ['class' => 'btn btn-success'])) !!}
                        @endif
                    @endif

                    <table class="table table-striped table-info">
                        <tbody>
                        <tr>
                            <td><strong>{{ trans('content.name') }}:</strong></td>
                            <td><i class="fa fa-user"></i> {{ $user->name }}</td>
                        </tr>
                        <tr>
                            <td><strong>{{ trans('content.email') }}:</strong></td>
                            <td><i class="fa fa-envelope"></i> <a href="mailto:{{ $user->email }}">{{ $user->email }}</a></td>
                        </tr>
                        </tbody>
                    </table>

                    @can('update-info', $user->id)
                        <h3>{{ trans('content.change-info') }}</h3>
                        @include('user.partials.update-info-form')
                    @endcan

                </div>
                <div class="col-md-8">
                    @if (auth()->check() && $user->isFollowedBy(Auth::user()) || $user->isCurrent())
                        <div class="alert alert-info">
                            <h2>{{ trans('content.activities') }}</h2>
                            @include('user.partials.activity')
                        </div>
                    @endif

                    @can('update-info', $user->id)
                        <div class="form-group col-md-8">
                            <h3>{{ trans('passwords.change_password_title') }}</h3>
                            <br/>
                            @include('user.partials.update-password-form')
                        </div>
                    @endcan

                </div>

            </div>
        </section>
    </div>
@stop
