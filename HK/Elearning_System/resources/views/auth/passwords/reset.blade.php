@extends('layouts.app')

@section('title')
    {{ trans('passwords.email_title') }}
@stop

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">{{ trans('passwords.email_title') }}</div>

                <div class="panel-body">

                    @include('layouts.partials.errors')

                    {!! Form::open(['url' => '/password/reset', 'method' => 'POST', 'class' => 'form-horizontal']) !!}

                        <div class="form-group">
                            {{ Form::label('email', trans('passwords.email_address'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::text('email', null, ['class' => 'form-control', 'value' => $email or old('email')]) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            {{ Form::label('password', trans('passwords.password_label'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::password('password', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            {{ Form::label('password_confirmation', trans('passwords.password_confirm_label'), ['class' => 'col-md-4 control-label']) }}
                            <div class="col-md-6">
                                {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                {{ Form::button('<i class="fa fa-btn fa-refresh"></i> ' . trans("passwords.email_reset_label"), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                            </div>
                        </div>

                    {!! Form::close() !!}

                </div>
            </div>
        </div>
    </div>
</div>
@endsection
