{!! Form::model($user, ['route' => ['users.update', $user->id], 'method' => 'PUT', 'class' => 'form-horizontal', 'files' => true]) !!}

{!! Form::label('name', trans('auth.name')) !!}
{!! Form::text('name', null, ['class' => 'form-control']) !!}

{!! Form::label('email', trans('auth.email_address')) !!}
{!! Form::text('email', null, ['class' => 'form-control']) !!}

{!! Form::label('avatar', trans('auth.avatar')) !!}
{!! Form::file('avatar') !!}

<br>

{!! Form::button('<i class="fa fa-pencil-square"></i> ' . trans('auth.update'), ['type' => 'submit', 'class' => 'btn btn-success']) !!}

{!! Form::close() !!}
