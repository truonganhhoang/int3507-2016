##Các thành phần

- models\: Chứa các đối tượng chính của chương trình
- helpers\: Các thư viện hỗ trợ việc giao tiếp với facebook và bên thứ 3
- data\: Chứa dữ liệu của về từ vựng của chương trình
- app.py: Khởi tạo và chạy ứng dụng
- database.py: Định nghĩa cấu trúc dữ liệu của chương trình
- luis.py: Cung cấp lớp giao  tiếp với LUIS
- seed.py: Cung cấp lớp để khởi tạo dữ liệu khi triển khai

##Sơ lược cài đặt

I. Tải mã nguồn về máy của bạn bằng câu lệnh git clone https://github.com/tracquangthinh/int3507-2016.git

II. Tạo tài khoản Heroku, đăng nhập vào Heroku bằng câu lệnh: heroku login
Tạo ứng dụng trên heroku, sau đó đưa mã nguồn này lên heroku bằng câu lệnh: git push heroku master

III. Tạo trang đại diện cho ứng dụng chat của bạn trên Facebook, trong trường hợp này là trang Learning English Bot

IV. Tạo và liên kết trang bạn vừa tạo với ứng dụng được tạo trong Facebook Developer. Sau đó tạo khóa chức thực và mã chứng thực trên trang này và cài đặt cho heroku

V. Cài đặt cơ sở dữ liệu
- Khởi động lại cở sở dữ liệu của heroku với lệnh: heroku pg:reset DATABASE_URL --confirm tên_ứng_dụng_heroku_của_bạn
- Sau đó vào môi trường python của heroku với lệnh: heroku run python
- Tại môi trường python của heroku, thực hiện lần lượt các lệnh sau:
- 1: from seed import Seed()
- 2: s = Seed()
- 3: s.make()
- Sau các bước này, dữ liệu của đã được khởi tạo cho server của bạn

VI. Đề nghị Facebook kiểm duyệt để có thể sử dụng công khai 

Xem chi tiết tại [Wiki](https://github.com/truonganhhoang/int3507-2016/wiki/%5BDTQ%5D-T%E1%BA%A1o-m%E1%BB%99t-Facbook-Chatbot-b%E1%BA%B1ng-Python)
