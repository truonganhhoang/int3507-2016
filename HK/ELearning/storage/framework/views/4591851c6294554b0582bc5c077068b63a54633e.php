<?php $__env->startSection('title'); ?>
    <?php echo e(trans('word.create_word_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <div class="container">
        <div class="col-lg-6">
            <div class="form-group">
                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo e(Form::open(['method' => 'POST', 'route' => ['admin.category.word.create', $category->id], 'class' => 'form-horizontal', 'id' => 'form-add-word', 'required_content' => trans('word.required_content'), 'required_true_word' => trans('word.required_true_word')])); ?>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <?php echo e(Form::label('name', trans('category.name_category'))); ?>

                            <?php echo Form::text('name', $category->name, ['class' => 'form-control', ]); ?>

                        </div>
                    </div>
                </div>

                <!-- word content  -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <?php echo e(Form::label('content', trans('word.content_word'))); ?>

                            <?php echo Form::text('content', null, ['class' => 'form-control', 'placeholder' => trans('word.enter_content_word')]); ?>

                        </div>
                    </div>
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

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <a href="javascript:void(0)" id="add" data-msg-add-more-word="<?php echo e(trans('word.alert_add_words_answer')); ?>">
                            <?php echo e(trans('word.add_word_answer')); ?>

                        </a>
                        <br />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                        <?php echo e(Form::button('<i class="fa fa-plus-circle"></i> ' . trans('word.word_add'), ['type' => 'submit', 'class' => 'btn btn-primary'])); ?>

                        <?php echo e(Form::button('<i class="fa fa-refresh"></i> ' . trans('word.word_reset'), ['type' => 'reset', 'class' => 'btn btn-primary'])); ?>

                        <?php echo Form::close(); ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>