@extends('layouts.app')

@section('title')
    {{ trans('content.welcome_title') }}
@stop

@section('content')
<div class="container">

    <div class="row">
        <div class="col-md-12">
            <div class="hero-unit" style="padding-bottom: 20px;">
                <div class="row">
                    <div class="col-md-5">
                        {{ Html::image('/images/images (1).jpg', null, ['class' => 'img-responsive']) }}
                    </div>

                    <div class="col-md-7">
                        <h2>Welcome to Learning English System</h2>
                        <p>Learning English System is a sample app that demonstrates how to build modern web
                            applications using different frameworks. This version is built with <a href="http://laravel.com">Laravel 5.2</a> and
                            <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> and <a href="https://angular.io">Angular 2</a>.</p>
                        <h4>Get the Code</h4>

                        <p>The source code for this application is maintained in <a href="">this GitHub repository</a>. You can
                            also find the Instructions for Downloading and Installing there. And any Issues and Pull
                            Requests are greatly appreciated!</p>

                        <p><a class="btn btn-default" href=""><i class="fa fa-download"></i> Download »</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
@endsection
