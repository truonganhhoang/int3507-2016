<?php $__env->startSection('title'); ?>
    <?php echo e(trans('auth.login_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading"><?php echo e(trans('auth.login')); ?></div>
                <div class="panel-body">

                    <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                    <?php echo Form::open(['url' => '/login', 'method' => 'POST', 'class' => 'form-horizontal']); ?>


                        <div class="form-group">
                            <?php echo e(Form::label('email', trans('auth.email_address'), ['class' => 'col-md-4 control-label'])); ?>

                            <div class="col-md-6">
                                <?php echo Form::text('email', null, ['class' => 'form-control', 'value' => old('email')]); ?>

                            </div>
                        </div>

                        <div class="form-group">
                            <?php echo e(Form::label('password', trans('auth.password'), ['class' => 'col-md-4 control-label'])); ?>

                            <div class="col-md-6">
                                <?php echo Form::password('password', ['class' => 'form-control']); ?>

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <?php echo e(Form::checkbox('remember', null)); ?> <?php echo e(trans('auth.remember')); ?>

                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <?php echo e(Form::button('<i class="fa fa-btn fa-sign-in"></i> ' . trans("auth.login"), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                                <a class="btn btn-link" href="<?php echo e(url('/password/reset')); ?>"><?php echo e(trans('auth.forgot_password')); ?></a>
                                
                            </div>
                        </div>

                    <?php echo Form::close(); ?>


                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>