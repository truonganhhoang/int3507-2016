<?php $__env->startSection('title'); ?>
    <?php echo e(trans('category.create_category_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">

        <div class="col-md-6 col-md-offset-4">
            <h1><?php echo e(trans('category.create_category_title')); ?></h1>
        </div>

        <div class="col-lg-6 col-md-offset-2">
            <div class="form-group">
                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo Form::open(['route' => 'admin.category.store', 'method' => 'POST', 'class' => 'form-horizontal']); ?>

                <?php echo e(Form::label('name', trans('category.name_category'))); ?>

                <?php echo Form::text('name', null, ['class' => 'form-control', 'placeholder' => trans('category.enter_name_category')]); ?>

            </div>

            <div class="form-group">
                <?php echo e(Form::button('<i class="fa fa-plus-circle"></i> ' . trans('category.category_add'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                <?php echo e(Form::button('<i class="fa fa-refresh"></i> ' . trans('category.category_reset'), ['type' => 'reset', 'class' => 'btn btn-primary'])); ?>

                <?php echo Form::close(); ?>

            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>