<?php $__env->startSection('title'); ?>
    <?php echo e(trans('category.list_category')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container">
    <table class="table table-bordered" id="dataTables-example">
    <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <thead align="center"> <h1><?php echo e(trans('category.list_category')); ?></h1></thead>
        <thead>
            <tr align="center">
                <th><?php echo e(trans('category.id_category')); ?></th>
                <th><?php echo e(trans('category.name_category')); ?></th>
                <th><?php echo e(trans('category.total_word')); ?></th>
                <th><?php echo e(trans('word.word_add')); ?></th>
                <th><?php echo e(trans('category.delete_category')); ?></th>
                <th><?php echo e(trans('category.edit_category')); ?></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($categories as $item): ?>
            <tr>
                <td><?php echo e($item['id']); ?></td>
                <td><?php echo e(link_to_action('CategoriesController@getAllWordsBelongsToCategory', $item['name'], ['id' => $item['id']])); ?></td>
                <!-- Total Word in Category -->
                <td><?php echo e($item->getCountWords()); ?></td>
                <td class="center">
                    <a class="btn btn-primary" href="<?php echo e(route('admin.category.words.add', $item['id'])); ?>" role="button"><i class="fa fa-plus-circle"></i> <?php echo e(trans('word.word_add')); ?> </a>
                </td>
                <td class="center">
                    <?php echo Form::open(['method' => 'DELETE', 'route' => ['admin.category.destroy', $item['id']]]); ?>

                    <?php echo e(Form::button('<i class="fa fa-trash-o" aria-hidden="true"></i> ' . trans('category.delete_category'), ['type' => 'submit', 'class' => 'btn btn-danger', 'onclick' => "return confirm('Are you sure to delete ?')"])); ?>

                    <?php echo Form::close(); ?>

                </td>
                <td class="center">
                    <?php echo Form::open(['method' => 'GET', 'route' => ['admin.category.edit', $item['id']]]); ?>

                    <?php echo e(Form::button('<i class="fa fa-pencil-square-o" aria-hidden="true"></i> ' . trans('category.edit'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                    <?php echo Form::close(); ?>

                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <!-- end table -->

    <!-- pagination -->
    <div class="pagination pull-right">
        <?php echo $categories->appends(Request::except('page'))->links(); ?>

    </div>
    <!-- end pagination -->

    <!-- Add A New Category -->
    <div>
        <a class="btn btn-primary" href="<?php echo e(route('admin.category.create')); ?>"  role="button"><i class="fa fa-plus-circle"></i> <?php echo e(trans('category.category_add')); ?> </a>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>