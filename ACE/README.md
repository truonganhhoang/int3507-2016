# Facebook Chatbot
Dự án nhỏ môn Những vấn đề hiện đại trong CNTT - Trường đại học Công nghệ, Đại học Quốc gia Hà Nội</br>
Giảng viên Trương Anh Hoàng
# Thành viên
Hà Đức Văn - K58CD - Trưởng nhóm</br>
Lê Văn Tuấn - K58CC</br>
Vũ Minh Vương - K58CD
# Cấu trúc 
Controller index.php: Trả lời các truy vấn từ Facebook</br>
Model chính core.php: Gồm 2 class Core và FbBotApp</br>
.class Core quét toàn bộ Module để thực thi tìm response phù hợp cho command được gửi từ index</br>
.class FbBotApp tạo cấu trúc gửi response về cho Facebook</br>
List Modules thực thi trong dir 'modules', có thể sửa tên trong class Core</br>
.tên class trùng tên File.php</br>
.set Priority để tăng mức độ ưu tiên nếu 1 message cho ra nhiều response</br>
List message Type trong file messageType, tìm hiểu thêm tại https://developers.facebook.com/docs/messenger-platform/product-overview/conversation#send_messages</br>
# Cấu hình
Tạo 1 page Facebook</br>
Vào Facebook cho Developers, tạo 1 app. Add product Messenger, chọn page và lấy Page Access Token</br>
Sửa file core.php với FB_APP_TOKEN = Page Access Token, VERIFY_TOKEN = string bất kỳ</br>
Upload file lên host</br>
Add Webhook với VERIFY_TOKEN vừa tạo</br>