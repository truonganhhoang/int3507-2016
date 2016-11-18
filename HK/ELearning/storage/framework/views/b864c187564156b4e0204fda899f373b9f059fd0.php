<?php $__env->startSection('title'); ?>
    <?php echo e(trans('auth.users_index_title')); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <?php echo $__env->make('layouts.partials.errors', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <?php echo $__env->make('layouts.partials.success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                <h2><?php echo e(trans('content.users_index_heading')); ?></h2>

                <table class="table table-striped">
                    <thead>
                        <td><strong><?php echo e(trans('content.name')); ?></strong></td>
                        <td><strong><?php echo e(trans('content.email')); ?></strong></td>
                        <td><strong><?php echo e(trans('content.role')); ?></strong></td>
                        <?php if(Auth::check()): ?>
                            <td><strong><?php echo e(trans('content.action')); ?></strong></td>
                        <?php endif; ?>
                        <?php if(Auth::user() && Auth::user()->is_admin): ?>
                            <td><strong><?php echo e(trans('content.admin_action')); ?></strong></td>
                        <?php endif; ?>
                        <td></td>
                    </thead>
                    <tbody>
                        <?php foreach($users as $user): ?>
                            <tr>
                                <td><?php echo e(link_to_route('users.show', $user->name, $user->id)); ?></td>
                                <td><?php echo e($user->email); ?></td>
                                <td><?php echo e(($user->is_admin ? trans('content.admin') : trans('content.user'))); ?></td>
                                <td>
                                    <?php if(auth()->check()): ?>
                                        <?php if ( ! ($user->isCurrent())): ?>
                                            <?php echo $__env->make('user.partials.relationships', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                        <?php endif; ?>
                                    <?php endif; ?>
                                </td>
                                <td>
                                    <?php if(auth()->check() && Auth::user()->is_admin && !$user->isCurrent()): ?>

                                        <?php echo e(Form::open(['method' => 'DELETE', 'id' => 'delete-button', 'route'=>['users.destroy', $user->id]])); ?>

                                        <?php echo e(Form::button('<i class="fa fa-times-circle"></i> ' . trans('content.delete'), ['type' => 'submit', 'class' => 'btn btn-danger btn-md', 'onclick' => "return confirm('Are you sure delete?')"])); ?>

                                        <?php echo e(Form::close()); ?>


                                        <?php if(!$user->is_admin): ?>
                                            <?php echo e(Form::open(['method' => 'PUT', 'id' => 'make-admin', 'route' => ['users.setAdmin', $user->id]])); ?>

                                            <?php echo e(Form::button('<i class="fa fa-check"></i> ' . trans('content.make_admin'), ['type' => 'submit', 'class' => 'btn btn-info btn-md'])); ?>

                                            <?php echo e(Form::close()); ?>

                                        <?php endif; ?>

                                    <?php endif; ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>

                <?php echo $users->render(); ?>


            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>