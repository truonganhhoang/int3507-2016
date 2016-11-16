@extends('layouts.app')

@section('title')
    {{ trans('category.category_edit') }}
@stop

@section('content')
    <div class="container">
        <div class="col-md-6 col-md-offset-3">
            <h1>{{ trans('category.category_edit') }}</h1>
        </div>
        <div class="col-lg-7">
            <div class="form-group">
                @include('layouts.partials.success')
                @include('layouts.partials.errors')
                {!! Form::model($category, ['method' => 'PATCH', 'route' => ['admin.category.update', $category->id]]) !!}
                {{ Form::label('name', trans('category.name_category')) }}
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
            </div>

            <div class="form-group">
                {{ Form::button('<i class="fa fa-plus-circle"></i> ' . trans('category.category_edit'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                {{ Form::button('<i class="fa fa-refresh"></i> ' . trans('category.category_reset'), ['type' => 'reset', 'class' => 'btn btn-primary']) }}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop

