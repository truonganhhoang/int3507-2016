<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo $__env->yieldContent('title'); ?></title>
    <link href="<?php echo e(asset('css/semantic.min.css')); ?>" rel="stylesheet">
    
    <!-- Styles -->
    <?php echo Html::style('css/app.css'); ?>

    <?php echo $__env->yieldContent(('style')); ?>

</head>
<body id="app-layout">

    <!-- Navigation Bar -->
    <?php echo $__env->make('layouts.partials.navbar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

    <!-- Content Section -->
    <?php echo $__env->yieldContent('content'); ?>

    <!-- JavaScripts -->
    <?php echo Html::script('js/app.js'); ?>


    <?php echo $__env->yieldContent('script'); ?>
</body>
</html>
