@extends('layouts.app')

@section('title')
    {{ trans('word.create_word_title') }}
@stop

@section('content')

    <div class="container">
        <div class="col-lg-6">
            <div class="form-group">
                @include('layouts.partials.errors')
                {{ Form::open(['method' => 'POST', 'route' => ['admin.category.word.create', $category->id], 'class' => 'form-horizontal', 'id' => 'form-add-word', 'required_content' => trans('word.required_content'), 'required_true_word' => trans('word.required_true_word')]) }}
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            {{ Form::label('name', trans('category.name_category')) }}
                            {!! Form::text('name', $category->name, ['class' => 'form-control', 'disabled' => 'disabled']) !!}
                        </div>
                    </div>
                </div>

                <!-- word content  -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            {{ Form::label('content', trans('word.content_word')) }}
                            {!! Form::text('content', null, ['class' => 'form-control', 'placeholder' => trans('word.enter_content_word')]) !!}
                        </div>
                    </div>
                </div>

                <!-- answer word -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            {{ Form::label('content', trans('wordanswer.content_wordanswer')) }}
                        </div>
                    </div>
                </div>

                <div class="answerDiv">

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <a href="javascript:void(0)" id="add" data-msg-add-more-word="{{ trans('word.alert_add_words_answer') }}">
                            {{ trans('word.add_word_answer') }}
                        </a>
                        <br />
                        <br />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                        {{ Form::button('<i class="fa fa-plus-circle"></i> ' . trans('word.word_add'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                        {{ Form::button('<i class="fa fa-refresh"></i> ' . trans('word.word_reset'), ['type' => 'reset', 'class' => 'btn btn-primary']) }}
                        {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
