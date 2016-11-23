@extends('layouts.app')

@section('title')
    {{ trans('content.welcome_title') }}
@stop

@section('content')
<div class="container">

    <div class="row">
        <div class="col-md-12">
            <div class="hero-unit" style="padding-bottom: 20px;">
                <div class="row">
                    <div class="col-md-5">
                        {{ Html::image('/images/logo.jpg', null, ['class' => 'img-responsive']) }}
                    </div>

                    <div class="col-md-7">
                        <h2>Hướng dẫn: <br /></h2>
                        <p>Tài khoản admin : admin@gmail.com và password: 123456 <br />
                        Để làm bài test tiếng anh: <br />
                        - Chọn Learning <br />
                        - Chọn Catefory <br />
                        - Start lesson mà bạn muốn làm trong 1 category <br />
                        Để xem điểm và view lại bài test mà bạn đã làm:
                        - Chọn Learning <br />
                        - Chọn Learnt <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
