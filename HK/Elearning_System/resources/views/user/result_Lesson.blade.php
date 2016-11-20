@extends('layouts.app')

@section('title')
    {{ trans('lesson.result_Lesson') }}
@stop

@section('content')
    <div class="container">
        <!-- title -->
        <div class="col-md-6 col-md-offset-4" id="title-result-lesson">
            <h1>{{ trans('lesson.result_Lesson') . ':' . $mark . '/' . $wordSize}}</h1>
        </div>
        <!-- form do lesson -->
        <div class="col-md-6">
            <ol>
                @foreach ($words as $word)

                    <li>
                        <label>{{ $word->content }}</label>
                    </li>

                    <div class="lesson-word">
                        <input type="hidden" value="{{ $word->id }}" name="word[]">

                        @foreach ($word->wordAnswers as $ws)
                            <div class="word-answer">
                                @if ($ws->id == $word->answer)
                                    <input type="radio" name="correct-{{ $word->id }}" value="{{ $ws->id }}" checked="checked" disabled="disabled"> &nbsp {{ $ws->content }}
                                @else
                                    <input type="radio" name="correct-{{ $word->id }}" value="{{ $ws->id }}" disabled="disabled"> &nbsp {{ $ws->content }}
                                @endif
                            </div>
                        @endforeach

                        @if ($word->getCorrectAnswer()->id == $word->answer)
                            <p class="check-answer">{{ trans('word.true_word') }}</p>
                        @else
                            <p class="check-answer">{{ trans('word.fail_word') . ' ' . $word->getCorrectAnswer()->content }}</p>
                        @endif
                    </div>
                @endforeach
            </ol>
        </div>
    </div>
@stop
