<?php $__env->startSection('title'); ?>
    <?php echo e(trans('word.word_list')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <!-- Title Word Manager -->
    <div class="word_list_title">
        <h1><?php echo e(trans('word.word_manager')); ?></h1>
    </div>

    <!-- List Word -->
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
                <td><?php echo e(link_to_action('CategoriesController@getAllWordsBelongsToCategory', $item->category->name, ['id' =>  $item->category->id ])); ?></td>
                <td><?php echo e($item->content); ?></td>
                <td class="center">
                    <?php echo Form::open(['method' => 'DELETE', 'route' => ['admin.word.destroy', $item['id']]]); ?>

                    <?php echo e(Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> ' . trans('word.word_delete'), ['type' => 'submit', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"])); ?>

                    <?php echo Form::close(); ?>

                </td>
                <td class="center">
                    <?php echo Form::open(['method' => 'GET', 'route' => ['admin.word.edit', $item['id']]]); ?>

                    <?php echo e(Form::button('<i class="fa fa-pencil-square-o" aria-hidden="true"></i> ' . trans('word.word_edit'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                    <?php echo Form::close(); ?>

                </td>
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