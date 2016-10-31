<?php echo Form::model($user, ['route' => ['users.update', $user->id], 'method' => 'PUT', 'class' => 'form-horizontal', 'files' => true]); ?>


<?php echo Form::label('name', trans('auth.name')); ?>

<?php echo Form::text('name', null, ['class' => 'form-control']); ?>


<?php echo Form::label('email', trans('auth.email_address')); ?>

<?php echo Form::text('email', null, ['class' => 'form-control']); ?>


<?php echo Form::label('avatar', trans('auth.avatar')); ?>

<?php echo Form::file('avatar'); ?>


<br>

<?php echo Form::button('<i class="fa fa-pencil-square"></i> ' . trans('auth.update'), ['type' => 'submit', 'class' => 'btn btn-success']); ?>


<?php echo Form::close(); ?>

