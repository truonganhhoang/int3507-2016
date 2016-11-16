<?php $__env->startSection('title'); ?>
    <?php echo e(trans('content.home_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading style-center">
                         <h1><?php echo e(trans('content.welcome')); ?></h1>
                    </div>

                    <div class="panel-body">
                        <?php echo e(trans('content.login_message', ['name' => Auth::user()->name])); ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>