{{ Form::open(['method' => $method, 'route' => [$route, $user->id]]) }}
{{ Form::hidden('following_id', $user->id) }}
{{ Form::button($buttonText, ['type' => 'submit', 'class' => $class]) }}
{{ Form::close() }}
