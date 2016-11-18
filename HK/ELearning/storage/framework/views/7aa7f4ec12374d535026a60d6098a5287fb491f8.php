<?php $__env->startSection('title'); ?>
    <?php echo e(trans('word.edit_word')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="col-lg-7">
            <div class="form-group">
                <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo Form::model($word, ['method' => 'PATCH', 'route' => ['admin.word.update', $word->id]]); ?>

                <div class="form-group">

                    <?php echo e(Form::label('name', trans('category.name_category'))); ?>

                    <?php echo Form::select('category_id', $categories, old('category_id'), ['class' => 'form-control']); ?>


                </div>

                <!-- word content  -->
                <div class="form-group">
                    <?php echo e(Form::label('content', trans('word.content_word'))); ?>

                    <?php echo Form::text('content', null, ['class' => 'form-control']); ?>

                </div>

                <!-- answer word -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <?php echo e(Form::label('content', trans('wordanswer.content_wordanswer'))); ?>

                        </div>
                    </div>
                </div>

                <div class="answerDiv">
                    <?php foreach($wordAnswers as $word_answer): ?>
                    <div class='row' id='answer'>
                        <div class='col-md-6'>
                            <div class='form-group'>
                                <input class='form-control content-answer' name="word[][answer]" type='text' id='' value='<?php echo e($word_answer->content); ?>' />
                            </div>
                        </div>

                        <div class='col-md-6'>
                            <div class='form-group'>
                                <label for='correct'><?php echo e(trans('word.is_correct')); ?></label>
                                <input name="word[][correct]" type='hidden' id='correct' value='0'>
                                <?php if($word_answer->correct): ?>
                                    <input name="word[][correct]" type='radio' id='correct' value='1' checked="checked" />
                                <?php else: ?>
                                    <input name="word[][correct]" type='radio' id='correct' value='1' />
                                <?php endif; ?>
                                <input type="button" class="remove btn btn-danger" value="Remove" />
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <a href="javascript:void(0)" id="add">Add word answer</a>

                        <br>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <?php echo e(Form::button('<i class="fa fa-plus-circle"></i> ' . trans('word.edit_word'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                <?php echo e(Form::button('<i class="fa fa-refresh"></i> ' . trans('word.word_reset'), ['type' => 'reset', 'class' => 'btn btn-primary'])); ?>

                <?php echo Form::close(); ?>

            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>