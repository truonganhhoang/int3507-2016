<?php $__env->startSection('title'); ?>
    <?php echo e(trans('content.404_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row">
            <div class="span12">
                <div class="hero-unit style-center">
                    <h1><?php echo e(trans('content.404_heading')); ?></h1>
                    <br/>
                </div>
                <?php echo e(Html::image('/images/404.png', null, ['class' => 'img-responsive style-center'])); ?>

            </div>
            <br/>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>