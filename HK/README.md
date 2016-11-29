#HK's team project
##Đề tài : Làm ứng dụng làm các bài trắc nghiệm tiếng anh bằng framework laravel .
##Thành Viên Nhóm:
-	Phạm Thị Hà
-	Trịnh Thị Hiền
-	Dương Thị Huế
-	Đặng Thị Khôi

#Ứng dụng : E- Learning

##Link chạy thử ứng dụng:  
http://tranquil-hamlet-99422.herokuapp.com/

### Những yêu cầu cơ bản cần có: 
- PHP version >= 5.4
- Cài đặt Composer: https://getcomposer.org
- MCrypt PHP Extension (laravel dùng nó để mã hóa tăng tính bảo mật)
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension...

### I. Mô tả ngắn gọn: 
- Ứng dụng E-Learning được viết bằng framework Laravel 5.2 giúp cho người dùng có thể làm các bài trắc nghiệm tiếng anh.
- Ứng dụng đã được nhóm đẩy code lên heroku để mọi người có thể sử dụng thử.Sản phẩm đang trong quá trình hoàn thiện và phát triển.
- Ứng dụng có phân quyền thành admin-quản trị/quản lí ứng dụng và quyền user-người dử dụng.

     + User : có thể đăng nhập vào ứng dụng để làm các bài test trắc nghiệm tiếng anh, có thể xem lại kết quả cũng như lịch sử các bài test đã làm, có thể view thông tin trong profile( có thể sửa tên, email, avatar, hay mật khẩu tài khoản cá nhân)
     + Admin : ngoài những quyền của user, admin có thể quản lí được các category( có thể thêm các category, add/edit/delete thêm question...) và word, có thể quản lí user( xóa một user nào đó)

## II. Giới thiệu về cấu trúc, cơ chế hoạt động của project sử dụng Laravel 5.2

Cấu trúc framework Laravel (5.2) được thiết kế phù hợp cho cả ứng dụng lớn và nhỏ. Tất nhiên là chúng ta có thể tùy chỉnh và tổ chức ứng theo cách riêng của chúng ta cho phù hợp với dự án của chúng ta. 

Cấu trúc ứng dụng mặc định của Laravel 5.2 có dạng là cây các thư mục :

 1. Folder app: đây là nơi mà ta phải làm việc với nó nhiều nhất, nó chứa core code ứng dụng của chúng ta, tại đây chúng ta có thể triển khai các mô hình để điều khiển ứng dụng (cụ thể là mô hình MVC). Bên trong nó có các folder con với tên viết hoa chữ cái đầu tiên (ngược với folder app - viết thường) như sau:

   - Foler app/Http: Các Controtrllers, routes đều được đặt trong thư mục này. Ngoài ra còn có 2 thư mục khác khá quan trọng là Requests (dùng để xử lý các request của ứng dụng vd: get, post, put…) và Middleware (tạm thời hiểu nó như firewall, sẽ được nói rỏ hơn ở các bài sau).

   - Folder app/Events: thư mục chứa class event, events có thể được sử dụng để thông báo đến các thành phần khác trong ứng dụng về một hành động đã xảy ra, events rất linh hoạt và tách biệt.

   - Folder app/Exceptions: thư mục chứa các class ngoại lệ xử lý các trường hợp ngoại lệ của ứng dụng.

   - Folder app/Jobs: thư mục chức class Job, là nơi xử lý các kỹ thuật liên quan đến hàng đợi (queue) và đồng bộ (synchronously) trong ứng dụng của bạn.

   - Folder app/Listeners: Chứa cá class handler xử lý các Event trả lại kết quả.

   - Folder app/Providers: là nơi chứa các class đăng ký (register) các ServiceProvider.

   - Folder bootstrap: chứa file app.php, autoload.php là 2 file thiết lập cơ bản để bắt đầu chạy ứng dụng và file cấu hình nạp class tự động. Ngoài ra trong này còn có thư mục cache (dùng để chứa các file cache tối ưu hóa hiệu suất chạy của ứng dụng).

 2. Folder config: là nơi chứa các file thiết lập cấu hình của ứng dụng như cấu hình kết nối cơ sỡ dữ liệu, cấu hình cấu hình session, mail, server cache, view.. Nếu để ý bạn sẽ thấy ở những phần trước ta cũng đã động đến file database.php và mail.php trong Folder này rồi.

 3. Folder database: Bên trong chứa các folder factories, migration và seed cơ sỡ dữ liệu của ứng dụng. Factories là nơi tạo ra các dữ liệu mẫu, còn Migration chứa các file migration được tạo bằng tool Artisan (Tool này đã được Laravel cung cấp sẵn, chẳng hạn ta chạy câu lệnh php artisan make: migration create_users_table thì file migration sẽ được tạo ra). Seed chứa những file PHP cho phép Artisan đưa vào bảng cơ sở dữ liệu với dữ liệu ta mong muốn.

 4. Folder public: là thư mục gốc chứa file index.php Laravel dùng để chạy ứng dụng, đây cũng là nơi chứa các tài nguyên của ứng dụng như js, css, image…

 5. Folder resources: nơi chứa các template views, asset và các file ngôn ngữ.

 6. Folder storage: là thư mục cần được set quyền ghi thì ứng dụng mới chạy được (tham khảo Cài đặt (P1)), dùng để lưu trữ các tập tin cache, session, logs… được tạo ra trong quá trình ứng dụng chạy.

 7. Folder tests: chứa các file testcase của ứng dụng.

 8. Folder vendor: thư mục chứa core của Laravel, ta không nên động chạm hay sửa chưa gì trong thư mục này.

 9. File .env: Đây là một tập tin ẩn trong thư mục gốc của ứng dụng. Tập tin này có chứa các định nghĩa cơ bản về các thông số của ứng dụng như tên và mật khẩu cơ sở dữ liệu, dữ liệu cấu hình email, cấu hình server cache…

 10. File artisan: tool mà Laravel cung cấp sẵn trong project dùng để phục vụ cho việc tương tác với migration (database), tạo key cho ứng dụng…

 11. File composer.json: là tập tin chứa các thiết lập về việc cài đặt, cập nhật ứng dụng bằng lệnh composer.


### Cơ chế hoạt động :

- Khi người dùng gửi một request lên hệ thống, hệ thống sẽ gửi về cho Controller xử lí các yêu cầu.
- Controller thực hiện các action cụ thể và thông qua model để làm việc với cơ sở dữ liệu. Sau khi xử lí xong model sẽ trả lại dữ liệu cho COntroller. Controller tiếp tục gửi dữ liệu đến View.
- View định dạng các dữ liệu một cách thích hợp, cung cấp phản hồi hiển thị lại cho người dùng kết quả cuối cùng.

## III. Giới thiệu ứng dụng E-Learning

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

![Profile](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/profile.jpg)

##List User

![List User](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Users.jpg)

## List Categories

Khi chọn một category để làm bài , mỗi bài test nhóm random lấy ra số lượng 5 câu trong tổng số của category đó.

![List Categories](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Category.jpg)

## Learnt

Khi vào Learnt , người sử dụng có thể xem thông tin bài học đã học với lịch sử và kết quả bài làm và có thể view lại bài làm đó.

![Learnt](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/Learn.jpg)

## Management Category, Word

Đối với người dùng là admin có thêm chức năng quản lí các category, word. Tại đây admin có thể xem danh sách các category, word hiện có đồng thời cũng có thể add thêm các category, các câu hỏi cũng như chỉnh sửa, xóa chúng.

![Management Categories](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/ManagementCategory.jpg)

![Management Word](https://github.com/truonganhhoang/int3507-2016/blob/master/HK/images/ManagementWord.jpg)


## IV. Hướng dẫn sử dụng
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
- Clone project về tại: https://github.com/truonganhhoang/int3507-2016
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

## List task 

Project nhóm chia làm 26 task và từng người làm như sau :

Task 1: Database Design, create model

Task 2: [User] Sign up -Dương Thị Huế

Task 3: [User] Login, logout - Dương Thị Huế

Task 4: [User] Show profile - Đặng Thị Khôi

Task 5: [User] Category - Phạm Thị Hà

Task 6: [User] Word list - Đặng Thị Khôi

Task 7: [User] Lesson - Đặng Thị Khôi

Task 8: [User] Result - Dương Thị Huế

Task 9: [User] Home - Dương Thị Huế


[Admin] User management - Phạm Thị Hà

Task 10: Create user 

Task 11: List user

Task 12: Update user

Task 13: Delete user


[Admin] Lesson management - Phạm Thị Hà

Task 14: Create lesson

Task 15: Edit lesson

Task 16: Update lesson

Task 17: List lesson


[Admin] Word management - Trịnh Thị Hiền

Task 18: Create word

Task 19: Edit word

Task 20: Update word

Task 21: Update word

Task 22: List word


[Admin] Answer management - Trịnh Thị Hiền

Task 23: Create answer

Task 24: Edit answer

Task 25: Update answer

Task 26: List answer
