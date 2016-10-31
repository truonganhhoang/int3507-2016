<?php echo Form::open(['route' => 'update_password', 'method' => 'POST', 'class' => 'form-horizontal']); ?>


<?php echo Form::label('old_password', trans('passwords.old_password')); ?>

<?php echo Form::password('old_password', ['class' => 'form-control', 'placeholder' => trans('passwords.old_password_placeholder')]); ?>


<?php echo Form::label('password', trans('passwords.new_password')); ?>

<?php echo Form::password('password', ['class' => 'form-control', 'placeholder' => trans('passwords.new_password_placeholder')]); ?>


<?php echo Form::label('password_confirmation', trans('passwords.password_confirm_label')); ?>

<?php echo Form::password('password_confirmation', ['class' => 'form-control', 'placeholder' => trans('passwords.new_password_confirm')]); ?>


<br>

<br>

<?php echo Form::button('<i class="fa fa-pencil-square"></i> ' . trans('passwords.change_password_button'), ['type' => 'submit', 'class' => 'btn btn-success']); ?>


<?php echo Form::close(); ?>

