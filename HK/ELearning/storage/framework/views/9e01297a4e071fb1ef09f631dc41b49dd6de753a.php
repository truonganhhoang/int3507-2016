<?php if(Session::has('success')): ?>

    <div class="alert alert-success">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        <strong>
            <i class="fa fa-check-circle fa-lg fa-fw"></i> <?php echo e(trans('session.success')); ?> &nbsp;
        </strong>
        <?php echo e(Session::get('success')); ?>

    </div>

<?php endif; ?>
