<?php if($user->isFollowedBy(Auth::user())): ?>
    <?php echo $__env->make('user.partials.follow-form', [
        'method' => 'DELETE',
        'route' => 'follows.destroy',
        'buttonText' => '<i class="fa fa-user-times"></i> ' . trans('content.unfollow') . ' ' . $user->name,
        'class' => 'btn btn-danger '], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php else: ?>
    <?php echo $__env->make('user.partials.follow-form', [
        'method' => 'POST',
        'route' => 'follows.store',
        'buttonText' => '<i class="fa fa-user-plus"></i> ' . trans('content.follow') . ' ' . $user->name,
        'class' => 'btn btn-primary'], array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php endif; ?>
