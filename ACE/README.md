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
