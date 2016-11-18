#HK's team project
##Đề tài : Làm ứng dụng làm các bài trắc nghiệm tiếng anh bằng framework laravel .
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
- Ứng dụng E-Learning được viết bằng framework Laravel 5.2 giúp cho người dùng có thể làm các bài trắc nghiệm tiếng anh.
- Ứng dụng đã được nhóm đẩy code lên heroku để mọi người có thể sử dụng thử.Sản phẩm đang trong quá trình hoàn thiện và phát triển.

## Giới thiệu ứng dụng E-Learning

Sau đây nhóm sẽ trình bày về các chức năng cũng như cách sử dụng của ứng dụng E-Learning.

### Trang Login , Logout và Register
- Ứng dụng cho phép user đăng nhập vào hệ thống khi đã đăng kí tài khoản
- Login:
    + Tại giao diện login, người dùng điền các thông tin mà trước đó đã đăng kí bao gồm email và password.Nếu nhập đúng hệ thống sẽ chuyển tiếp tới trang chủ của ứng dụng. Sai sẽ yêu cầu nhập lại.
    Đối với tài khoản người dùng là admin, đã được tạo sẵn trong cơ sở dữ liệu. Để đăng nhập với tư cách là admin, mọi người có thể nhập vào với email là admin@gmail.com và pass là 123456.
- Logout: sau khi đăng nhập người dùng có thể đăng xuất khỏi hệ thống thông qua việc click vào thông tin tài khoản và chọn logout. khi đó người dùng sẽ đăng xuất khỏi hệ thống.

Dưới đây lần lượt là ảnh giao diện của Register, Login

![Register](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Register.jpg)

![Login](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Login.jpg)


### Trang chủ

![Home](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Home.jpg)

- Khi đã đăng nhập thành công , trang chủ của ứng dụng hiện ra cho phép
    + Đối với người dùng là user có thể làm các bài trắc nghiệm (lesson), xem lại các bài đã làm, có thể chọn các category để làm bài.
    +Admin: ngoài các chức năng của user còn có thể quản lí / thêm các Category, word và có thể quản lí User (xóa hoặc phân quyền cho user khác làm admin)

- Cả admin và user đều có thể xem thông tin cá nhân, cập nhật chỉnh sửa thông tin của mình: có thể thay đổi tên đăng nhập, email đã đăng kí, cập nhật avatar thay đổi password.

-Dưới đây là một số giao diện của ứng dụng:

## System

Giao diện bắt đầu trước khi vào ứng dụng

![System](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/System.jpg)

## Profile

![Profile](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Profile.jpg)

##List User

![List User](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Users.jpg)

## List Categories

![List Categories](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Category.jpg)

## Learnt

Khi vào Learnt , người sử dụng có thể xem thông tin bài học đã học với lịch sử và kết quả bài làm và có thể view lại bài làm đó.

![Learnt](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Learn.jpg)

## Management Category, Word

Đối với người dùng là admin có thêm chức năng quản lí các category, word. Tại đây admin có thể xem danh sách các category, word hiện có đồng thời cũng có thể add thêm các category, các câu hỏi cũng như chỉnh sửa, xóa chúng.

![Management Categories](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/ManagementCategory.jpg)

![Management Word](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/ManagementWord.jpg)


## Hướng dẫn sử dụng
Có thể chạy test trực tiếp trên link heroku nhóm đã đính kèm trên project.Với tài khoản admin mặc định sẵn là admin@gmail.com và pass là 123456.
Đối với người dùng là user có thể đăng kí trực tiếp tài khoản trên ứng dụng để sử dụng.
Để làm bài test tiếng anh: 
    - Chọn Learning 
    - Chọn Catefory 
    - Start lesson mà bạn muốn làm trong 1 category 
Để xem điểm và view lại bài test mà bạn đã làm:
    - Chọn Learning 
    - Chọn Learnt 

Còn nếu muốn biết chi tiết project hoạt động , viết ra sao, chạy như thế nào có thể thực hiện như sau:
Ngoài những yêu cầu cơ bản ở trên để chạy được ứng dụng cần làm các bước sau
- Tải project về tại: https://github.com/truonganhhoang/int3507-2016
- Nếu máy chưa có composer cần cài đặt composer sau đó chạy "composer update" . Để biết được máy đã có composer chưa tại command line của thư mục project chạy : "composer -v".
- Chạy lệnh "npm install --save-dev" để cài đặt các chương trình cần thiết cho project.
- Do có nhiều thư mục rất nặng nên đã được cho vào file gitnore nên không hiển thị trên git vì vậy cần tạo thêm tạo file ".env". Trong đó cần sửa thông tin "DB_DATABASE" giống với tên bạn đã tạo cơ sở dữ liệu trên phpMyadmin.(có thể sao chép file .env.example)
- Tạo database trên phpMyadmin và chạy lệnh "php artisan migrate " để tạo cơ sở dữ liệu.
- Việc cài đặt cơ bản hoàn tất, tuy nhiên trong project này nhóm sử dụng laravel elixir để quản lý css, js. Cần phải cài gulp để có thể dùng được boostrap, css và js đã không được đẩy lên project. Để cài , yêu cầu trước tiên cần là cài node- một chương trình để chạy các file javascript.
Có thể tải node tại: https://nodejs.org/en
Sau khi đã cài xong tiếp đến cài gulp bằng câu lệnh : "npm install --global gulp". Sau khi cài xong, chạy lệnh "gulp" để chương trình complie css ,js.
Chi tiết xem tại: https://laravel.com/docs/5.2/elixir
- Cuối cùng chạy "php artisan serve" để chạy ứng dụng trên http://localhost:8000/ hoặc có thể chạy trên localhost thông qua xampp.

Để hiểu hơn về Laravel cũng như các vấn đề liên quan có thể xem tại https://laravel.com/docs/5.2/
