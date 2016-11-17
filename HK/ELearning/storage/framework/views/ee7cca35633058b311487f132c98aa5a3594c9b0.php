<?php $__env->startSection('title'); ?>
    <?php echo e(trans('category.user_list_category')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="panel panel-primary">
        <div class="panel-heading">
            <h2><?php echo e(trans('category.list_category')); ?></h2>
        </div>
        <div class="panel-body">
            <table class="table table-bordered" id="dataTables-example">
        
                <thead>
                    <tr align="center">
                        <th><?php echo e(trans('category.id_category')); ?></th>
                        <th><?php echo e(trans('category.name_category')); ?></th>
                        <th><?php echo e(trans('category.total_word')); ?></th>
                        <th><?php echo e(trans('lesson.start_lesson')); ?></th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($categories as $item): ?>
                    <tr>
                        <td><?php echo e($item['id']); ?></td>
                        <td><?php echo e(link_to_action('LessonsController@getAllWordInCategory', $item['name'], ['id' => $item['id']])); ?></td>
                        <!-- Total Word in Category -->
                        <td><?php echo e($item->getCountWords()); ?></td>
                        <td><a href="<?php echo e(route('user.lessons', $item['id'])); ?>"><button type="button" class="btn btn-danger"><?php echo e(trans('lesson.start_lesson')); ?></button></a></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
    <!-- end table -->

    <!-- pagination -->
    <div class="pagination pull-right">
        <?php echo $categories->appends(Request::except('page'))->links(); ?>

    </div>
    <!-- end pagination -->
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>