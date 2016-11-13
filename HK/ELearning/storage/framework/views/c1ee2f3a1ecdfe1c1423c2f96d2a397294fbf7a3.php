<?php $__env->startSection('title'); ?>
    <?php echo e(trans('category.category_edit')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="col-md-6 col-md-offset-3">
            <h1><?php echo e(trans('category.category_edit')); ?></h1>
        </div>
        <div class="col-lg-7">
            <div class="form-group">
                <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo Form::model($category, ['method' => 'PATCH', 'route' => ['admin.category.update', $category->id]]); ?>

                <?php echo e(Form::label('name', trans('category.name_category'))); ?>

                <?php echo Form::text('name', null, ['class' => 'form-control']); ?>

            </div>

            <div class="form-group">
                <?php echo e(Form::button('<i class="fa fa-plus-circle"></i> ' . trans('category.category_edit'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                <?php echo e(Form::button('<i class="fa fa-refresh"></i> ' . trans('category.category_reset'), ['type' => 'reset', 'class' => 'btn btn-primary'])); ?>

                <?php echo Form::close(); ?>

            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>