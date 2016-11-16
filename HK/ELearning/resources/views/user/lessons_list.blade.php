@extends('layouts.app')

@section('title')
    {{ trans('content.user_lessons_title') }}
@stop

@section('content')
    <div class="container">
        <section>
            <div class="row">
                <div class="col-md-12">

                    <h2>{{ trans('content.list_lessons_title', ['name' => $user->name]) }}</h2>

                    <hr>

                    <table class="table table-striped show-all-lessons">
                        <thead>
                        <tr>
                            <th>{{ trans('content.lesson') }}</th>
                            <th>{{ trans('content.category') }}</th>
                            <th>{{ trans('content.status') }}</th>
                            <th>{{ trans('content.mark') }}</th>
                            <th>{{ trans('content.last_interactive') }}</th>
                            <th>{{ trans('content.action') }}</th>
                        </tr>
                        </thead>

                        <tbody>
                            @foreach ($lessons as $lesson)
                                <tr>
                                    <td class="lesson">{{ $lesson->id }}</td>
                                    <td>
                                        {{ link_to_route('category.word', $lesson->category->name, ['id' => $lesson->category->id]) }}
                                    </td>
                                    <td>{{ ($lesson->is_completed ? trans('content.finish') : trans('content.doing')) }}</td>
                                    <td>{{ $lesson->result }} / {{ config('settings.count_word') }}</td>
                                    <td>{{ $lesson->updated_at->diffForHumans() }}</td>
                                    <td>
                                        @if ($lesson->is_completed)
                                            {{ link_to_route('user.lessons', trans('content.view_lessons'), ['id' => $lesson->category->id, 'lessonId' => $lesson->id], ['class' => 'btn btn-primary']) }}
                                        @else
                                            {{ link_to_route('category.lessons', trans('content.continue'), ['id' => $lesson->category->id, 'lessonId' => $lesson->id], ['class' => 'btn btn-success']) }}
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    </div>
@stop
