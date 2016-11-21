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

                </div>
                <div class="col-md-4">
                    @can('update-info', $user->id)
                        <h3>{{ trans('content.change-info') }}</h3>
                        @include('user.partials.update-info-form')
                    @endcan
                </div>
                <div class="col-md-4">
                    @can('update-info', $user->id) 
                        <h3>{{ trans('passwords.change_password_title') }}</h3>
                        @include('user.partials.update-password-form')     
                    @endcan
                </div>


            </div>
        </section>
    </div>
@stop
