@extends('layouts.app')

@section('title')
    {{ trans('auth.users_index_title') }}
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                @include('layouts.partials.errors')
                @include('layouts.partials.success')

                <h2>{{ trans('content.users_index_heading') }}</h2>

                <table class="table table-striped">
                    <thead>
                        <td><strong>{{ trans('content.name') }}</strong></td>
                        <td><strong>{{ trans('content.email') }}</strong></td>
                        <td><strong>{{ trans('content.role') }}</strong></td>
                        @if (Auth::user() && Auth::user()->is_admin)
                            <td><strong>{{ trans('content.admin_action') }}</strong></td>
                        @endif
                        <td></td>
                    </thead>
                    <tbody>
                        @foreach ($users as $user)
                            <tr>
                                <td>{{ link_to_route('users.show', $user->name, $user->id) }}</td>
                                <td>{{ $user->email }}</td>
                                <td>{{ ($user->is_admin ? trans('content.admin') : trans('content.user')) }}</td>
                                <td>
                                    @if (auth()->check() && Auth::user()->is_admin && !$user->isCurrent())

                                        {{ Form::open(['method' => 'DELETE', 'id' => 'delete-button', 'route'=>['users.destroy', $user->id]]) }}
                                        {{ Form::button('<i class="fa fa-times-circle"></i> ' . trans('content.delete'), ['type' => 'submit', 'class' => 'btn btn-danger btn-md', 'onclick' => "return confirm('Are you sure delete?')"]) }}
                                        {{ Form::close() }}

                                        @if (!$user->is_admin)
                                            {{ Form::open(['method' => 'PUT', 'id' => 'make-admin', 'route' => ['users.setAdmin', $user->id]]) }}
                                            {{ Form::button('<i class="fa fa-check"></i> ' . trans('content.make_admin'), ['type' => 'submit', 'class' => 'btn btn-info btn-md']) }}
                                            {{ Form::close() }}
                                        @endif

                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                {!! $users->render() !!}

            </div>
        </div>
    </div>
@stop
