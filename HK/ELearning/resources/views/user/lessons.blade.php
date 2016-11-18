@extends('layouts.app')

@section('title')
    {{ trans('category.users_do_lesson') }}
@stop

@section('content')
    <div class="container">
        <!-- title -->
        <div class="col-md-6 col-md-offset-3">
            <h1 class="style-center">{{ trans('lesson.doLesson') }}</h1>
        </div>
        <!-- form do lesson -->
        <div class="col-md-6">
            {!! Form::open(['route' => ['category.lessons.result', $category->id, $lesson->id], 'method' => 'POST', 'class' => 'form-horizontal', 'id' => 'do-lesson', 'required_complete_lesson' => trans('word.required_complete_lesson')]) !!}
            <ol>
                @foreach ($words as $word)

                    <li>
                        <label>{{ $word->content }}</label>
                    </li>

                    <div class="lesson-word">
                        <input type="hidden" value="{{ $word->id }}" name="word[]">
                        @foreach ($word->wordAnswers as $ws)
                            <div class="word-answer">
                                <input type="radio" name="correct-{{ $word->id }}" value="{{ $ws->id }}"> &nbsp {{ $ws->content }}
                            </div>
                        @endforeach
                    </div>

                @endforeach
            </ol>
        </div>
        <!-- action finish -->
        <div class="col-md-6 col-md-offset-5">
            <button type="submit" class="btn btn-primary">{{ trans('lesson.finish') }}</button>
        </div>
        {!!Form::close()!!}
    </div>
@stop
