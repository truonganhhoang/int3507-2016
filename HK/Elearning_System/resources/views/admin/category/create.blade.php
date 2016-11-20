@extends('layouts.app')

@section('title')
    {{ trans('category.create_category_title') }}
@stop

@section('content')
    <div class="container">

        <div class="col-md-6 col-md-offset-4">
            <h1>{{ trans('category.create_category_title') }}</h1>
        </div>

        <div class="col-lg-6 col-md-offset-2">
            <div class="form-group">
                @include('layouts.partials.errors')
                {!! Form::open(['route' => 'admin.category.store', 'method' => 'POST', 'class' => 'form-horizontal']) !!}
                {{ Form::label('name', trans('category.name_category')) }}
                {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('category.enter_name_category')]) !!}
            </div>

            <div class="form-group">
                {{ Form::button('<i class="fa fa-plus-circle"></i> ' . trans('category.category_add'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                {{ Form::button('<i class="fa fa-refresh"></i> ' . trans('category.category_reset'), ['type' => 'reset', 'class' => 'btn btn-primary']) }}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop

