@extends('layouts.app')

@section('title')
    {{ trans('category.list_category') }}
@stop

@section('content')
<div class="container">
    <table class="table table-bordered" id="dataTables-example">
    @include('layouts.partials.success')
        <thead>
            <tr align="center">
                <th>{{ trans('category.name_category') }}</th>
                <th>{{ trans('category.total_word') }}</th>
                <th>{{ trans('word.word_add') }}</th>
                <th>{{ trans('category.delete_category') }}</th>
                <th>{{ trans('category.edit_category') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($categories as $item)
            <tr>
                <td>{{ link_to_action('CategoriesController@getAllWordsBelongsToCategory', $item['name'], ['id' => $item['id']]) }}</td>
                <!-- Total Word in Category -->
                <td>{{ $item->getCountWords() }}</td>
                <td class="center">
                    <a class="btn btn-primary" href="{{ route('admin.category.words.add', $item['id']) }}" role="button"><i class="fa fa-plus-circle"></i> {{ trans('word.word_add') }} </a>
                </td>
                <td class="center">
                    {!! Form::open(['method' => 'DELETE', 'route' => ['admin.category.destroy', $item['id']]]) !!}
                    {{ Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> ' . trans('category.delete_category'), ['type' => 'submit', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"]) }}
                    {!! Form::close() !!}
                </td>
                <td class="center">
                    {!! Form::open(['method' => 'GET', 'route' => ['admin.category.edit', $item['id']]]) !!}
                    {{ Form::button('<i class="fa fa-pencil-square-o" aria-hidden="true"></i> ' . trans('category.edit'), ['type' => 'submit', 'class' => 'btn btn-primary']) }}
                    {!! Form::close() !!}
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <!-- end table -->

    <!-- pagination -->
    <div class="pagination pull-right">
        {!! $categories->appends(Request::except('page'))->links() !!}
    </div>
    <!-- end pagination -->

    <!-- Add A New Category -->
    <div>
        <a class="btn btn-primary" href="{{ route('admin.category.create') }}"  role="button"><i class="fa fa-plus-circle"></i> {{ trans('category.category_add') }} </a>
    </div>

</div>
@stop
