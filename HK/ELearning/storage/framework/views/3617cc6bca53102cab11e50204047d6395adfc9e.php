<?php $__env->startSection('title'); ?>
    <?php echo e(trans('auth.show_profile_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <section>
            <div class="row">

                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                <div class="col-md-4">

                    <?php echo e(Html::image($user->avatar, $user->name, ['class' => 'img-responsive'])); ?>


                    <br>

                    <?php if($currentUser): ?>
                        <?php if ( ! ($user->isCurrent())): ?>
                            <?php echo $__env->make('user.partials.relationships', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                        <?php else: ?>
                            <button type="button" class="btn btn-primary follows_button" data-toggle="collapse"
                                    data-target="#followings"><i class="fa fa-user-plus"></i> <?php echo e(trans('content.following')); ?>

                            </button>

                            <div id="followings" class="collapse">
                                <?php foreach($user->followings as $u): ?>
                                    <li><?php echo e(link_to_route('users.show', $u->name, $u->id)); ?></li>
                                <?php endforeach; ?>
                            </div>

                            <button type="button" class="btn btn-primary follows_button" data-toggle="collapse"
                                    data-target="#followers"><i class="fa fa-users"></i> <?php echo e(trans('content.followers')); ?>

                            </button>

                            <div id="followers" class="collapse">
                                <?php foreach($user->followers as $u): ?>
                                    <li><?php echo e(link_to_route('users.show', $u->name, $u->id)); ?></li>
                                <?php endforeach; ?>
                            </div>

                            <?php echo HTML::decode(link_to_route('user.view_lessons', '<i class="fa fa-eye"></i> ' . trans('content.view_lessons'), ['user' => $currentUser->id], ['class' => 'btn btn-success'])); ?>

                        <?php endif; ?>
                    <?php endif; ?>

                    <table class="table table-striped table-info">
                        <tbody>
                        <tr>
                            <td><strong><?php echo e(trans('content.name')); ?>:</strong></td>
                            <td><i class="fa fa-user"></i> <?php echo e($user->name); ?></td>
                        </tr>
                        <tr>
                            <td><strong><?php echo e(trans('content.email')); ?>:</strong></td>
                            <td><i class="fa fa-envelope"></i> <a href="mailto:<?php echo e($user->email); ?>"><?php echo e($user->email); ?></a></td>
                        </tr>
                        </tbody>
                    </table>

                    <?php if (app('Illuminate\Contracts\Auth\Access\Gate')->check('update-info', $user->id)): ?>
                        <h3><?php echo e(trans('content.change-info')); ?></h3>
                        <?php echo $__env->make('user.partials.update-info-form', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                    <?php endif; ?>

                </div>
                <div class="col-md-8">
                    <?php if(auth()->check() && $user->isFollowedBy(Auth::user()) || $user->isCurrent()): ?>
                        <div class="alert alert-info">
                            <h2><?php echo e(trans('content.activities')); ?></h2>
                            <?php echo $__env->make('user.partials.activity', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                        </div>
                    <?php endif; ?>

                    <?php if (app('Illuminate\Contracts\Auth\Access\Gate')->check('update-info', $user->id)): ?>
                        <div class="form-group col-md-8">
                            <h3><?php echo e(trans('passwords.change_password_title')); ?></h3>
                            <br/>
                            <?php echo $__env->make('user.partials.update-password-form', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                        </div>
                    <?php endif; ?>

                </div>

            </div>
        </section>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>