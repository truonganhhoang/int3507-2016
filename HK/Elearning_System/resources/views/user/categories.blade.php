@extends('layouts.app')

@section('title')
    {{ trans('category.user_list_category') }}
@stop

@section('content')
<div class="col-md-8" style="margin-left: 180px;">
    <table class="table table-bordered" id="dataTables-example">
        <thead>
            <tr align="center">
                <th style="text-align: center;">{{ trans('category.name_category') }}</th>
                <th style="text-align: center;">{{ trans('lesson.start_lesson') }}</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($categories as $item)
            <tr>

                <td style="text-align: center;">{{ $item['name'] }}</td>
                <td style="text-align: center;"><a href="{{ route('user.lessons', $item['id']) }}"><button type="button" class="btn btn-primary">{{ trans('lesson.start_lesson') }}</button></a></td>
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
</div>

@stop
