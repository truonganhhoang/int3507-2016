@extends('layouts.app')

@section('title')
    {{ trans('word.word_list') }}
@stop

@section('content')

<div class="container">
    <div class="word_list_title">
        <span>
            <h1>{{ $category }}</h1>
        </span>

    </div>

    <table class="table table-bordered" id="dataTables-example">
    @include('layouts.partials.success')
        <thead>
            <tr align="center">
                <th>{{ trans('word.word_id') }}</th>
                <th>{{ trans('category.name_category') }}</th>
                <th>{{ trans('word.content_word') }}</th>
                <th>{{ trans('word.word_delete') }}</th>
                <th>{{ trans('word.word_edit') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($words as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td>{{ $category }}</td>
                <td>{{ $item->content }}</td>
                <td class="center">
                    {!! Form::open(['method' => 'DELETE', 'route' => ['admin.word.destroy', $item['id']]]) !!}
                    {!! Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"]) !!}
                    {!! Form::close() !!}
                </td>
                <td class="center">
                    {!! Form::open(['method' => 'GET', 'route' => ['admin.word.edit', $item['id']]]) !!}
                    {!! Form::submit(trans('word.word_edit'), ['class' => 'btn btn-primary']) !!}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <!-- end table -->

</div>

@stop
