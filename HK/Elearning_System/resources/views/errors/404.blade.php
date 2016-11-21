@extends('layouts.app')

@section('title')
    {{ trans('content.404_title') }}
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="span12">
                <div class="hero-unit style-center">
                    <h1>{{ trans('content.404_heading') }}</h1>
                    <br/>
                </div>
                {{ Html::image('/images/404.png', null, ['class' => 'img-responsive style-center']) }}
            </div>
            <br/>
        </div>
    </div>
@stop
