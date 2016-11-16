@extends('layouts.app')

@section('title')
    {{ trans('word.word_list') }}
@stop

@section('content')
<div class="container">
    <!-- Title Word Manager -->
    <div class="word_list_title">
        <h1>{{ trans('word.word_manager') }}</h1>
    </div>

    <!-- List Word -->
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

            @foreach($words as $item)
            <tr>
                <td>{{ $item->id}}</td>
                <td>{{ link_to_action('CategoriesController@getAllWordsBelongsToCategory', $item->category->name, ['id' =>  $item->category->id ]) }}</td>
                <td>{{ $item->content }}</td>
                <td class="center">
                    {!! Form::open(['method' => 'DELETE', 'route' => ['admin.word.destroy', $item['id']]]) !!}
                    {{ Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> ' . trans('word.word_delete'), ['type' => 'submit', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"]) }}
                    {!! Form::close() !!}
                </td>
                <td class="center">
                    {!! Form::open(['method' => 'GET', 'route' => ['admin.word.edit', $item['id']]]) !!}
                    {{ Form::button('<i class="fa fa-pencil-square-o" aria-hidden="true"></i> ' . trans('word.word_edit'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <!-- end table -->

    <!-- pagination -->
    <div class="pagination pull-right">
        {!! $words->appends(Request::except('page'))->links() !!}
    </div>
    <!-- end pagination -->

</div>
@stop
