<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only"><?php echo e(trans('navbar.toggle')); ?></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <?php echo e(link_to_route('welcome', config('fels.title'), null, ['class' => 'navbar-brand'])); ?>

        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                <li class="<?php echo e(Request::is('home*') ? 'active' : ''); ?>">
                    <?php echo e(link_to_route('home', trans('navbar.home'))); ?>

                </li>
                <li class="<?php echo e(Request::is('users') ? 'active' : ''); ?>">
                    <?php echo e(link_to_route('users.index', trans('navbar.users'))); ?>

                </li>
                <!--User Learning -->
                <?php if(auth()->check()): ?>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <?php echo e(trans('navbar.learning')); ?> <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <!-- Category -->
                            <li>
                                <a class="default" href="<?php echo e(route('user.categories')); ?>" role="button"><?php echo e(trans('category.category')); ?> </a>
                            </li>
                            <!-- Word -->
                            <li>
                                <a class="default" href="<?php echo e(route('user.words')); ?>" role="button"><?php echo e(trans('word.word')); ?></a>
                            </li>
                            <!-- Lesson -->
                            <li>
                                <a class="default" href="<?php echo e(route('user.view_lessons', Auth::user()->id)); ?>" role="button"><?php echo e(trans('lesson.lesson')); ?></a>
                            </li>
                        </ul>
                    </li>
                <?php endif; ?>
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">

                <?php if(auth()->check() && Auth::user()->is_admin): ?>
                    <!-- Category Management -->
                <li class="<?php echo e(Request::is('admin/category*') ? 'active' : ''); ?>">
                    <a class="default" href="<?php echo e(route('admin.category.index')); ?>" role="button"><?php echo e(trans('category.category')); ?> </a>
                </li>

                    <!-- Word Management -->
                <li class="<?php echo e(Request::is('admin/word*') ? 'active' : ''); ?>" id="navbar_word">
                    <a class="default" href="<?php echo e(route('admin.word.index')); ?>" role="button"><?php echo e(trans('word.word')); ?> </a>
                </li>
                <?php endif; ?>

                <!-- Authentication Links -->
                <?php if(auth()->guest()): ?>
                    <li class="<?php echo e(Request::is('login') ? 'active' : ''); ?>">
                        <?php echo e(link_to('/login', trans('navbar.login'))); ?>

                    </li>
                    <li class="<?php echo e(Request::is('register') ? 'active' : ''); ?>">
                        <?php echo e(link_to('/register', trans('navbar.register'))); ?>

                    </li>
                <?php else: ?>
                    <li class="dropdown">
                        <?php echo Html::image(Auth::user()->avatar, null, ['class'=> 'img-responsive', 'id' => 'avatar_display']); ?>

                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <?php echo e(trans('navbar.name', ['name' => auth()->user()->name])); ?> <span class="caret"></span>
                        </a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <?php echo HTML::decode(link_to_route('users.show', '<i class="fa fa-btn fa-user"></i> ' . trans('navbar.profile'), auth()->id())); ?>

                            </li>
                            <li>
                                <?php echo HTML::decode(link_to_route('logout', '<i class="fa fa-btn fa-sign-out"></i> ' . trans('navbar.logout'))); ?>

                            </li>
                        </ul>
                    </li>
                <?php endif; ?>

            </ul>
        </div>
    </div>
</nav>
