<?php $__env->startSection('title'); ?>
    <?php echo e(trans('word.word_list')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

<div class="container">
    <div class="word_list_title">
        <span>
            <h1><?php echo e($category); ?></h1>
        </span>

    </div>

    <table class="table table-bordered" id="dataTables-example">
    <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <thead>
            <tr align="center">
                <th><?php echo e(trans('word.word_id')); ?></th>
                <th><?php echo e(trans('category.name_category')); ?></th>
                <th><?php echo e(trans('word.content_word')); ?></th>
                <th><?php echo e(trans('word.word_delete')); ?></th>
                <th><?php echo e(trans('word.word_edit')); ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($words as $item): ?>
            <tr>
                <td><?php echo e($item->id); ?></td>
                <td><?php echo e($category); ?></td>
                <td><?php echo e($item->content); ?></td>
                <td class="center">
                    <?php echo Form::open(['method' => 'DELETE', 'route' => ['admin.word.destroy', $item['id']]]); ?>

                    <?php echo Form::submit('Delete', ['class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"]); ?>

                    <?php echo Form::close(); ?>

                </td>
                <td class="center">
                    <?php echo Form::open(['method' => 'GET', 'route' => ['admin.word.edit', $item['id']]]); ?>

                    <?php echo Form::submit(trans('word.word_edit'), ['class' => 'btn btn-primary']); ?>

                    <?php echo Form::close(); ?>

                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <!-- end table -->

</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>