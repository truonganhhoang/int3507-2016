@extends('layouts.app')

@section('title')
    {{ trans('word.edit_word') }}
@stop

@section('content')
    <div class="container">
        <div class="col-lg-7">
            <div class="form-group">
                @include('layouts.partials.success')
                @include('layouts.partials.errors')
                {!! Form::model($word, ['method' => 'PATCH', 'route' => ['admin.word.update', $word->id]]) !!}
                <div class="form-group">

                    {{ Form::label('name', trans('category.name_category')) }}
                    {!! Form::select('category_id', $categories, old('category_id'), ['class' => 'form-control']) !!}

                </div>

                <!-- word content  -->
                <div class="form-group">
                    {{ Form::label('content', trans('word.content_word')) }}
                    {!! Form::text('content', null, ['class' => 'form-control']) !!}
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
                    @foreach ($wordAnswers as $word_answer)
                    <div class='row' id='answer'>
                        <div class='col-md-6'>
                            <div class='form-group'>
                                <input class='form-control content-answer' name="word[][answer]" type='text' id='' value='{{ $word_answer->content }}' />
                            </div>
                        </div>

                        <div class='col-md-6'>
                            <div class='form-group'>
                                <label for='correct'>{{ trans('word.is_correct') }}</label>
                                <input name="word[][correct]" type='hidden' id='correct' value='0'>
                                @if ($word_answer->correct)
                                    <input name="word[][correct]" type='radio' id='correct' value='1' checked="checked" />
                                @else
                                    <input name="word[][correct]" type='radio' id='correct' value='1' />
                                @endif
                                <input type="button" class="remove btn btn-danger" value="Remove" />
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <a href="javascript:void(0)" id="add">Add word answer</a>

                        <br>
                    </div>
                </div>
            </div>

            <div class="form-group">
                {{ Form::button('<i class="fa fa-plus-circle"></i> ' . trans('word.edit_word'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                {{ Form::button('<i class="fa fa-refresh"></i> ' . trans('word.word_reset'), ['type' => 'reset', 'class' => 'btn btn-primary']) }}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@stop
