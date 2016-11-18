<?php $__env->startSection('title'); ?>
    <?php echo e(trans('content.user_lessons_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <section>
            <div class="row">
                <div class="col-md-12">

                    <h2><?php echo e(trans('content.list_lessons_title', ['name' => $user->name])); ?></h2>

                    <hr>

                    <table class="table table-striped show-all-lessons">
                        <thead>
                        <tr>
                            <th><?php echo e(trans('content.lesson')); ?></th>
                            <th><?php echo e(trans('content.category')); ?></th>
                            <th><?php echo e(trans('content.status')); ?></th>
                            <th><?php echo e(trans('content.mark')); ?></th>
                            <th><?php echo e(trans('content.last_interactive')); ?></th>
                            <th><?php echo e(trans('content.action')); ?></th>
                        </tr>
                        </thead>

                        <tbody>
                            <?php foreach($lessons as $lesson): ?>
                                <tr>
                                    <td class="lesson"><?php echo e($lesson->id); ?></td>
                                    <td>
                                        <?php echo e(link_to_route('category.word', $lesson->category->name, ['id' => $lesson->category->id])); ?>

                                    </td>
                                    <td><?php echo e(($lesson->is_completed ? trans('content.finish') : trans('content.doing'))); ?></td>
                                    <td><?php echo e($lesson->result); ?> / <?php echo e(config('settings.count_word')); ?></td>
                                    <td><?php echo e($lesson->updated_at->diffForHumans()); ?></td>
                                    <td>
                                        <?php if($lesson->is_completed): ?>
                                            <?php echo e(link_to_route('user.lessons', trans('content.view_lessons'), ['id' => $lesson->category->id, 'lessonId' => $lesson->id], ['class' => 'btn btn-primary'])); ?>

                                        <?php else: ?>
                                            <?php echo e(link_to_route('category.lessons', trans('content.continue'), ['id' => $lesson->category->id, 'lessonId' => $lesson->id], ['class' => 'btn btn-success'])); ?>

                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>