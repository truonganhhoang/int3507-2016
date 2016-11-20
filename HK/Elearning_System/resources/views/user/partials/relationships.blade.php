@if ($user->isFollowedBy(Auth::user()))
    @include ('user.partials.follow-form', [
        'method' => 'DELETE',
        'route' => 'follows.destroy',
        'buttonText' => '<i class="fa fa-user-times"></i> ' . trans('content.unfollow') . ' ' . $user->name,
        'class' => 'btn btn-danger '])
@else
    @include ('user.partials.follow-form', [
        'method' => 'POST',
        'route' => 'follows.store',
        'buttonText' => '<i class="fa fa-user-plus"></i> ' . trans('content.follow') . ' ' . $user->name,
        'class' => 'btn btn-primary'])
@endif
