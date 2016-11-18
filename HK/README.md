#HK's team project
##Đề tài : Làm app trò chơi học ngoại ngữ bằng laravel kết hợp với angular 2 theo các kỹ năng 
##Thành Viên Nhóm:
-	Phạm Thị Hà
-	Trịnh Thị Hiền
-	Dương Thị Huế
-	Đặng Thị Khôi

#Ứng dụng : E- Learning

##Link chạy thử ứng dụng:  
https://demoeleaningsystem.herokuapp.com/

### Những yêu cầu cơ bản cần có: 
- PHP version >= 5.4
- Cài đặt Composer: https://getcomposer.org
- MCrypt PHP Extension (laravel dùng nó để mã hóa tăng tính bảo mật)
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension...

### Mô tả ngắn gọn: 
- Ứng dụng E-Learning được viết bằng framework Laravel 5.2 xử lí bên back-end kết hợp với Angular 2 xử lí phần frontend
- Ứng dụng đã được nhóm đẩy code lên heroku để mọi người có thể sử dụng thử.Sản phẩm đang trong quá trình fix bug và hoàn thiện.

## Giới thiệu ứng dụng E-Learning

### Trang Login , Logout và Register
- Ứng dụng cho phép user đăng nhập vào hệ thống khi đã đăng kí tài khoản
- Login:
    + Tại giao diện login, người dùng điền các thông tin mà trước đó đã đăng kí bao gồm email và password.Nếu nhập đúng sẽ được chuyển tiếp tới trang chủ của hệ thống. Sai sẽ yêu cầu nhập lại.
- Logout: sau khi đăng nhập người dùng có thể đăng xuất khỏi hệ thống thông qua việc click vào avatar và chọn logout. khi đó người dùng sẽ đăng xuất khỏi hệ thống.

Dưới đây lần lượt là ảnh giao diện của Register, Login

![Register](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Register.jpg)

![Login](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Login.jpg)


### Trang chủ

![Home](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Home.jpg)

- Khi đã đăng nhập thành công , trang chủ của ứng dụng hiện ra cho phép
    + Đối với người dùng là user có thể làm các bài trắc nghiệm (lesson), xem lại các bài đã học, có thể chọn các category theo các chủ đề để học và xem danh sách các word.
    +Admin: ngoài các chức năng của user còn có thể quản lí / thêm các Category, word và có thể quản lí User ( follow hoặc unfollow)

- Cả admin và user đều có thể xem thông tin cá nhân, cập nhật chỉnh sửa thông tin của mình và lịch sử hoạt động

-Dưới đây là một số giao diện của ứng dụng:

## Profile

![Profile](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/profile.jpg)

##List User

![List User](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/user.jpg)

## List Categories

![List Categories](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/ListCategories.jpg)

## Hướng dẫn sử dụng
Có thể chạy test trực tiếp trên link heroku nhóm đã đính kèm trên project.Với tài khoản admin mặc định sẵn là admin@gmail.com và pass là 123456.
Đối với người dùng là user có thể đăng kí trực tiếp tài khoản trên ứng dụng để sử dụng.

Còn nếu muốn biết chi tiết project hoạt động , viết ra sao có thể thực hiện như sau:
Ngoài những yêu cầu cơ bản ở trên để chạy được ứng dụng cần làm các bước sau
- Tải project về 
- Cài đặt composer sau đó chạy composer update
- Chạy npm install
- Tạo file .env
- Tạo database và chạy lệnh php artisan migrate để tạo cơ sở dữ liệu.
- php artisan serve để chạy ứng dụng trên http://localhost:8000/
