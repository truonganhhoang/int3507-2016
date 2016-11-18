@extends('layouts.app')

@section('title')
    {{ trans('auth.register_title') }}
@stop

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">{{ trans('auth.register') }}</div>
                <div class="panel-body">

                    @include('layouts.partials.errors')

                    {!! Form::open(['url' => '/register', 'method' => 'POST', 'class' => 'form-horizontal']) !!}

                        <div class="form-group">
                            {{ Form::label('name', trans('auth.name'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::text('name', null, ['class' => 'form-control', 'value' => old('name')]) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            {{ Form::label('email', trans('auth.email_address'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::text('email', null, ['class' => 'form-control', 'value' => old('email')]) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            {{ Form::label('password', trans('auth.password'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::password('password', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            {{ Form::label('password_confirmation', trans('auth.confirm_password'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                {{ Form::button('<i class="fa fa-btn fa-user"></i> ' . trans("auth.register"), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                            </div>
                        </div>

                    {!! Form::close() !!}

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
