@extends('layouts.app')

@section('title')
{{ trans('passwords.email_title') }}
@stop

<!-- Main Content -->
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">{{ trans('passwords.email_reset_label') }}</div>
                    <div class="panel-body">
                        @if (session('status'))
                            <div class="alert alert-success">
                                {{ session('status') }}
                            </div>
                        @endif

                        @include('layouts.partials.errors')

                        {!! Form::open(['url' => '/password/email', 'method' => 'POST', 'class' => 'form-horizontal']) !!}

                            <div class="form-group">
                                {{ Form::label('email', trans('passwords.email_address'), ['class' => 'col-md-4 control-label']) }}
                                <div class="col-md-6">
                                    {!! Form::text('email', null, ['class' => 'form-control', 'value' => old('email')]) !!}
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    {{ Form::button('<i class="fa fa-btn fa-envelope"></i> ' . trans("passwords.sent_password_button"), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                                </div>
                            </div>

                        {!! Form::close() !!}

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
