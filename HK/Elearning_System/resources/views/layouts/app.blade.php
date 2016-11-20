<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!-- Styles -->
    {!! Html::style('css/app.css') !!}
    @yield(('style'))

</head>
<body id="app-layout">

    <!-- Navigation Bar -->
    @include('layouts.partials.navbar')

    <!-- Content Section -->
    @yield('content')

    <!-- JavaScripts -->
    {!! Html::script('js/app.js') !!}

    @yield('script')
</body>
</html>
