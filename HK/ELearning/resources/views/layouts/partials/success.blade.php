@if(Session::has('success'))

    <div class="alert alert-success">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <strong>
            <i class="fa fa-check-circle fa-lg fa-fw"></i> {{ trans('session.success') }} &nbsp;
        </strong>
        {{ Session::get('success') }}
    </div>

@endif
