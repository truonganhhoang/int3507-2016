<?php $__env->startSection('title'); ?>
    <?php echo e(trans('lesson.result_Lesson')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <!-- title -->
        <div class="col-md-6 col-md-offset-4" id="title-result-lesson">
            <h1><?php echo e(trans('lesson.result_Lesson') . ':' . $mark . '/' . $wordSize); ?></h1>
        </div>
        <!-- form do lesson -->
        <div class="col-md-6">
            <ol>
                <?php foreach($words as $word): ?>

                    <li>
                        <label><?php echo e($word->content); ?></label>
                    </li>

                    <div class="lesson-word">
                        <input type="hidden" value="<?php echo e($word->id); ?>" name="word[]">

                        <?php foreach($word->wordAnswers as $ws): ?>
                            <div class="word-answer">
                                <?php if($ws->id == $word->answer): ?>
                                    <input type="radio" name="correct-<?php echo e($word->id); ?>" value="<?php echo e($ws->id); ?>" checked="checked" disabled="disabled"> &nbsp <?php echo e($ws->content); ?>

                                <?php else: ?>
                                    <input type="radio" name="correct-<?php echo e($word->id); ?>" value="<?php echo e($ws->id); ?>" disabled="disabled"> &nbsp <?php echo e($ws->content); ?>

                                <?php endif; ?>
                            </div>
                        <?php endforeach; ?>

                        <?php if($word->getCorrectAnswer()->id == $word->answer): ?>
                            <p class="check-answer"><?php echo e(trans('word.true_word')); ?></p>
                        <?php else: ?>
                            <p class="check-answer"><?php echo e(trans('word.fail_word') . ' ' . $word->getCorrectAnswer()->content); ?></p>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </ol>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>