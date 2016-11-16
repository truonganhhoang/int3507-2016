# Facebook Chatbot
Dự án nhỏ môn Những vấn đề hiện đại trong CNTT - Trường đại học Công nghệ, Đại học Quốc gia Hà Nội

Giảng viên Trương Anh Hoàng

DEMO: https://facebook.com/uetbot

# Thành viên
Hà Đức Văn - K58CD - Trưởng nhóm

Lê Văn Tuấn - K58CC

Vũ Minh Vương - K58CD

# Cấu trúc 
##Controller index.php: Trả lời các truy vấn từ Facebook

##Model chính core.php: Gồm 2 class Core và FbBotApp

* class Core quét toàn bộ Module để thực thi tìm response phù hợp cho command được gửi từ index

* class FbBotApp tạo cấu trúc gửi response về cho Facebook

##List Modules thực thi trong dir 'modules', có thể sửa tên trong class Core

* tên class trùng tên File.php

* set Priority để tăng mức độ ưu tiên nếu 1 message cho ra nhiều response

##List message Type trong file messageType, tìm hiểu thêm tại https://developers.facebook.com/docs/messenger-platform/product-overview/conversation#send_messages

# Hướng dẫn sử dụng

- Chat với UET CoolBot tại: https://www.facebook.com/UETBot/</br>
##1.Giao diện bắt đầu của UET CoolBot.
- Chat "Help" để được trợ giúp các chức năng chính
![profile](https://github.com/truonganhhoang/int3507-2016/blob/master/ACE/Introduction%20Images/1.png)

##2.Các chức năng chính.
###Dự báo thời tiết + Làm toán
- Dự báo thời tiết: chat 'thời tiết' hoặc 'thời tiết + tên tỉnh/thành phố' để tra cứu thông tin thời tiết Hà Nội và các tỉnh thành khác.
- Làm toán: Vui lòng nhập biểu thức toán học cần tính. Ví dụ: căn bậc 2 của 5, 3^(x^2 - x -6) < 1, logarit cơ số 10 của 100000,...
![function1](https://github.com/truonganhhoang/int3507-2016/blob/master/ACE/Introduction%20Images/6.png)

###Dịch từ Tiếng Anh + Dịch Anh <-> Việt
- Dịch TỪ tiếng Anh: nhập từ tiếng Anh cần dịch. Ví dụ: Forest
- Dịch 1 câu, đoạn Anh<->Việt: chat 'dịch' + nội dung cần dịch, Bot sẽ tự động nhận diện để trả về kết quả dịch cho bạn. Ví dụ: dịch anh yêu em, dịch i love you
![function2](https://github.com/truonganhhoang/int3507-2016/blob/master/ACE/Introduction%20Images/7.png)

###Ghép cặp, tán gẫu + Chat nhảm nhí
- Ghép cặp - Tán gẫu: ghép ngẫu nhiên các bạn với nhau, đảm bảo 100% khác giới tính, nhắn tin hoàn toàn ẩn danh! Để bắt đầu, vui lòng chat 'Tán gẫu', nếu đang trong cuộc trò chuyện, vui lòng chat 'end' để kết thúc!
-  Chat nhảm nhí: chat bất cứ thứ gì bạn thích. API cung cấp bởi Simsimi!
![function3](https://github.com/truonganhhoang/int3507-2016/blob/master/ACE/Introduction%20Images/8.png)
