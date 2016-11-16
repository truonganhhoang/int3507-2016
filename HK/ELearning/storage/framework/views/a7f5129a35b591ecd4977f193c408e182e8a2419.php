<?php $__env->startSection('title'); ?>
    <?php echo e(trans('category.users_do_lesson')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- title -->
        <div class="col-md-6 col-md-offset-3">
            <h1 class="style-center"><?php echo e(trans('lesson.doLesson')); ?></h1>
        </div>
        <!-- form do lesson -->
        <div class="col-md-6">
            <?php echo Form::open(['route' => ['category.lessons.result', $category->id, $lesson->id], 'method' => 'POST', 'class' => 'form-horizontal', 'id' => 'do-lesson', 'required_complete_lesson' => trans('word.required_complete_lesson')]); ?>

            <ol>
                <?php foreach($words as $word): ?>

                    <li>
                        <label><?php echo e($word->content); ?></label>
                    </li>

                    <div class="lesson-word">
                        <input type="hidden" value="<?php echo e($word->id); ?>" name="word[]">
                        <?php foreach($word->wordAnswers as $ws): ?>
                            <div class="word-answer">
                                <input type="radio" name="correct-<?php echo e($word->id); ?>" value="<?php echo e($ws->id); ?>"> &nbsp <?php echo e($ws->content); ?>

                            </div>
                        <?php endforeach; ?>
                    </div>

                <?php endforeach; ?>
            </ol>
        </div>
        <!-- action finish -->
        <div class="col-md-6 col-md-offset-5">
            <button type="submit" class="btn btn-primary"><?php echo e(trans('lesson.finish')); ?></button>
        </div>
        <?php echo Form::close(); ?>

    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>