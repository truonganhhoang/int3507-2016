@extends('layouts.app')

@section('title')
    {{ trans('auth.users_index_title') }}
@stop

@section('content')
    <div class="container">
    <div class="word_list_title">
        <span>
            <h1>{{ trans('word.word_list') . ': ' .$category }}</h1>
        </span>
    </div>

    <table class="table table-bordered" id="dataTables-example">
    @include('layouts.partials.success')
        <thead>
            <tr align="center">
                <th>{{ trans('word.word_id') }}</th>
                <th>{{ trans('category.name_category') }}</th>
                <th>{{ trans('word.content_word') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach($words as $item)
            <tr>
                <td>{{ $item->id }}</td>
                <td>{{ $category }}</td>
                <td>{{ $item->content }}</td>
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
