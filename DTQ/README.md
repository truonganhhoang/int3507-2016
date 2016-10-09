#Nhóm DTQ
##Thành viên:
- Trác Quang Thịnh
- Nguyễn Thế Quân
- Đặng Văn Đô

##Giới thiệu cấu trúc

Chương trình được phân chia làm 2 phần: Phần core chatbot và phần ProgramO, trong đó:
- Core chatbot: là một server có chức năng nhận, xử lí và trả lời tin nhắn từ người dùng
- ProgramO: cung cấp API để trả lời một câu chat từ phía người dùng

##Cài đặt


I. Core chatbot

Core chatbot được viết trên ngôn ngữ python và dùng heroku cung cấp host, cụ thể gồm các bước:
- Bạn cài đặt và đăng nhập heroku theo hướng dẫn: [Heroku install](https://devcenter.heroku.com/articles/getting-started-with-python#introduction)
- Sau đó khởi tạo và đưa chương trình lên server: [Heroku deploy](https://devcenter.heroku.com/articles/getting-started-with-python#deploy-the-app)
- Lúc này chương trình của bạn sẽ được cung cấp một tên miền, ví dụ xxx.heroku.com, chạy thử nếu cài đặt thành công thì trình duyệt sẽ hiện thị Hello

II. ProgramO

- ProgramO được viết trên ngôn ngữ PHP, mySQL nên bạn sẽ cần tìm một host hỗ trợ và đưa mã nguồn lên đó
- Sau đó bạn thực hiện các bước cài đặt theo [README.md](/program-o/) của thư mục program-o
- Sau khi hoàn thành tất cả các bước, giả sử ProgramO của bạn được cung cấp một tên miền xxx.xxx.com, vào tập tin fb/helpers/program_o.py thay đổi dòng thứ 12 thành: 
r = requests.get("http://xxx.xx.com/chatbot/conversation_start.php?",params=params)

III. Tạo kết nối tới Facebook

Bản chất của Facebook ở đây là cung cấp một giao diện để chương trình của bạn giao tiếp với người dùng thông qua chức năng Messager. Bạn tạo một page mới, cài đặt webhook theo hướng dẫn sau: [Facebook bot and heroku](https://blog.hartleybrody.com/fb-messenger-bot/)

