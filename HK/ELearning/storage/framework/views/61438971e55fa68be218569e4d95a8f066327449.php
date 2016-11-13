<?php echo e(Form::open(['method' => $method, 'route' => [$route, $user->id]])); ?>

<?php echo e(Form::hidden('following_id', $user->id)); ?>

<?php echo e(Form::button($buttonText, ['type' => 'submit', 'class' => $class])); ?>

<?php echo e(Form::close()); ?>

