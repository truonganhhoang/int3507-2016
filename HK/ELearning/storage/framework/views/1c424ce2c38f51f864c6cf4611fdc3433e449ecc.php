<?php if(count($errors) > 0): ?>
    <div class="alert alert-danger">
        <strong><?php echo e(trans('session.whoops')); ?></strong>
        <?php echo e(trans('session.error')); ?><br/><br/>
        <ul>
            <?php foreach($errors->all() as $error): ?>
                <li><?php echo e($error); ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
<?php endif; ?>
