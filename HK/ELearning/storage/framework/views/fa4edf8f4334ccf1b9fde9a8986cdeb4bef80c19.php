<ul class="list-group activity-list">

    <?php $__empty_1 = true; foreach($activity as $event): $__empty_1 = false; ?>
        <li class="list-group-item">
            <span class="pull-right text-muted small time-line">
             <?php echo e($event->created_at->diffForHumans()); ?> <span class="fa fa-clock-o"></span>
            </span>
            <?php if($event->words > 1): ?>
                <?php echo e(trans('content.activity', ['name' => $user->name, 'words' => $event->words, 'countWords' => 'words', 'lesson' => $event->lesson->category->name])); ?>

            <?php else: ?>
                <?php echo e(trans('content.activity', ['name' => $user->name, 'words' => $event->words, 'countWords' => 'word', 'lesson' => $event->lesson->category->name])); ?>

            <?php endif; ?>
        </li>
    <?php endforeach; if ($__empty_1): ?>
        <p><?php echo e(trans('content.no_activity', ['name' => $user->name])); ?></p>
    <?php endif; ?>

    <?php echo $activity->render(); ?>


</ul>
