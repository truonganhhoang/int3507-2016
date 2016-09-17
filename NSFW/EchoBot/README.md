# EchoBot - NSFW Demo Bot
## Chức năng
EchoBot nhận text từ người dùng và trả lại độ dài của đoạn text mà người dùng đã nhập.  
## Demo
1. Phần mềm yêu cầu(Link down và hướng dẫn cài đặt ở file [wiki](https://github.com/truonganhhoang/int3507-2016/wiki/%5BNSFW%5D-MS-Bot-Framework) của nhóm)
 - Visual Studio 2015 bản mới nhất.
 - Microsoft Bot Framework channel Emulator.
2. Click đúp vào file **"EchoBot.sln"**, chương trình Visual Studio khởi chạy và load project "EchoBot".
3. Chọn trình duyệt để debug(mặc định là Microsoft Edge) và ấn F5( hoặc ấn nút Debug).
4. Trình duyệt được chọn khởi chạy(lưu ý địa chỉ, ví dụ localhost:3979).
5. Chạy Microsoft Bot Framework channel Emulator, điền các thống số sau:
 - Local Port: 9000
 - Emulator Url: http://localhost:9000/
 - Bot Url: https://your_bots_hostname/api/messages (thay your_bots_hostname = địa chỉ trên trình duyệt)
 - Microsoft App Id và Microsoft App Passwork: **để trống**
6. Gõ đoạn text bất kì vào phân nhập liệu và ấn Enter(hoặc ấn biểu tượng gửi) để gửi.
7. EchoBot trả lời lại bạn đoạn text và độ dài.

## Người Demo
Nguyễn Duy Cường
