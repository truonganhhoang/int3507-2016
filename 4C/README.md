Nhóm 4C bao gồm các thành viên:

• Phan Đoàn Cương

• Đinh Việt Cường

• Nông Thành Công

• Nguyễn Ngọc Duy

Alexa Skill

# Giới thiệu về Alexa

Alexa là dịch vụ riêng của Amazon nó được biết đến giống như Siri của Apple hay Google Now. Đó là một trợ lý bằng giọng nói cho phép bạn đặt câu hỏi, tạo ra nhiệm vụ và danh sách mua sắm từ Amazon, nghe tin tức và thời tiết, chơi nhạc, bộ tính giờ và báo động, và thậm chí kiểm soát một số thiết bị "nhà thông minh" như đèn và chuyển mạch.

Alexa được ứng dụng trong các thiết bị thông minh như nhà thông minh giúp bạn có thể điều khiển hệ thống đèn, hệ thống sưởi, và cửa ra vào bằng giọng nói. Alexa cũng được tích hợp trong, máy đo sức khỏe, điện thoại thông minh, các thiết bị di động thông minh khác có thể kết nối internet. 

# Tạo 1 kỹ năng đơn giản Alexa sử dụng Java

## Các phần mềm cần có

- Java 8
- Maven
- IDE để viết chương trình Java. Có thể chọn Eclipse.
- AWS: Amazon Web Service. Có thể tải xuống từ trên trang chủ của Amazon. Còn nếu sử dụng Eclipse để viết chương trình có thể cài tải trực tiếp từ kho ứng dụng trên Eclipse (cài như 1 add-on cho Eclipse).

## Cấu trúc thư mục 

Amazon cung cấp cho người dùng khá nhiều các thư viện xử lý giọng nói để phục vụ cho phát triển kỹ năng cho Alexa. Người dùng chỉ cần download trên mạng về xong import vào project là có thể sử dụng được

Cấu trúc thư mục gồm một số file sau:

![alt tag](https://github.com/truonganhhoang/int3507-2016/blob/master/4C/Photo/file.png)

- SessionSpeechlet.java: file này file chính của dự án. Các hàm xử lí kỹ năng đều viết tại đây.
- SessionSpeechletRequestStreamHandler.java: file này để khai báo ID của kỹ năng để Lambda Function có thể biết được đang yêu cầu đến kỹ năng nào.
- Launcher.java: file này để tạo kết nối HTTP, tạo yêu cầu và phản hồi. File này được Amazon xây dựng sẵn, lập trình viên chỉ cần khao báo, khởi tạo lớp Speechlet tương ứng với kỹ năng là được.
- IntentSchema.json: file này một lược đồ ý định, khai báo mô hình tương tác giữa người dùng và Alexa.
- SampleUtterance.txt: file này chứa các câu yêu cầu từ phía người dùng và các câu phản hồi từ Alexa.

Hai file IntentSchema.json và SampleUtterance.txt không được gọi đến trong mã nguồn mà chỉ sử dụng để cấu hình cho kỹ năng.

## Tạo Lambda Function

## Tạo và cấu hình cho kỹ năng

Tạo và cấu hình cho kỹ năng trên trang https://developer.amazon.com/edw/home.html#/skills/list 

Kết quả sau khi tạo được kỹ năng:

![alt tag](https://github.com/truonganhhoang/int3507-2016/blob/master/4C/Photo/config.png)

Cấu hình cho kỹ năng khá đơn giản, chỉ cần làm theo từng bước như trên trang.

Lưu ý khi cấu hình ở mục "Interaction Model": đây chính là nội dung được viết trong 2 file IntentSchema.json và SampleUtterance.txt. Người dùng chỉ cần copy ra và lưu lại.

![alt tag](https://github.com/truonganhhoang/int3507-2016/blob/master/4C/Photo/config2.png)
![alt tag](https://github.com/truonganhhoang/int3507-2016/blob/master/4C/Photo/config3.png)

## Kiểm thử kỹ năng

Amazon có một trang web để kiểm thử cho kỹ năng vừa tạo là trang https://echosim.io/. Người dùng cần đăng nhập bằng tài khoản Amazon để có thể tiến hành kiểm thử cho kỹ năng. Người dùng vừa giữ biểu tượng loa vừa nói các câu được khai báo trong file SampleUtterance.text để kiểm thử cho kỹ năng và sau đó Alexa sẽ phản hồi lại.

Để biết được các câu đã nói và phản hồi của Alexa, người dùng vào trang alexa.amazon.com, chọn tab Home. Kết quả như sau
![alt tag](https://github.com/truonganhhoang/int3507-2016/blob/master/4C/Photo/k%E1%BA%BFt%20qu%E1%BA%A3%20test.png)






