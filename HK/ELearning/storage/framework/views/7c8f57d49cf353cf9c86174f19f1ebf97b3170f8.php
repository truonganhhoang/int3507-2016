<?php $__env->startSection('title'); ?>
    <?php echo e(trans('word.word_list')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <!-- WORD LIST -->
    <div class="word_list_title">
        <h1><?php echo e(trans('word.word_list')); ?></h1>
    </div>

    <!-- List Word -->
    <table class="table table-bordered" id="dataTables-example" >
    <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <thead>
            <tr align="center" > 
                <th><?php echo e(trans('word.word_id')); ?></th>
                <th><?php echo e(trans('category.name_category')); ?></th>
                <th><?php echo e(trans('word.content_word')); ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($words as $item): ?>
            <tr>
                <td><?php echo e($item->id); ?></td>
                <td><a href="<?php echo e(route('category.word', $item->category->id)); ?>"><?php echo e($item->category->name); ?></a></td>
                <td><?php echo e($item->content); ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <!-- end table -->

    <!-- pagination -->
    <div class="pagination pull-right">
        <?php echo $words->appends(Request::except('page'))->links(); ?>

    </div>
    <!-- end pagination -->

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>