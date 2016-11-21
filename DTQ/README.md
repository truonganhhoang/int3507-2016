#Learning English Bot
**Đường dẫn chương trình:** [tại đây](https://www.facebook.com/Learning-English-Bot-302820536747403/)

##Sơ lược các phiên bản

##Phiên bản 0.3.5 - Sửa lỗi và tăng khả năng giao tiếp của Bot

|Bot giao tiếp tốt hơn trong nhiều ngữ cảnh|
:-----------------------------------------:
![talk](/DTQ/screenshots/talk_upgrade.png)

##Phiên bản 0.3 - Giao tiếp với người dùng thông qua danh sách chức năng

| Các chức năng | Trợ giúp | Thông tin và kết quả học |
:--------------:|:--------:|:--------------------------:
![menu](/DTQ/screenshots/menu.png) | ![menu_help](/DTQ/screenshots/menu_help.png) | ![menu_account](/DTQ/screenshots/menu_account.png)

##Phiên bản 0.2.5 - Làm bài tập với các từ đã học

| Đoán nghĩa | Nhìn tranh đoán từ |
:-----------:|:-------------------:
![do_exercises_1](/DTQ/screenshots/do_exercises_1.png) | ![do_exercises_2](/DTQ/screenshots/do_exercises_2.png)

##Phiên bản 0.2 - Trò chuyện thông minh với Bot

|Sau khi trò chuyện câu "Shup up" với Bot|
:-----------------------------------------:
![talk](/DTQ/screenshots/talk.png)

##Phiên bản 0.1 - Học từ mới

|Thẻ từ vựng với âm thanh và hình ảnh|
:-------------------------------------:
![learn_word](/DTQ/screenshots/learn_word.png)

##Hướng dẫn sử dụng

- Bạn đăng nhập vào facebook sau đó truy cập vào trang [Learning English Bot](https://www.facebook.com/Learning-English-Bot-302820536747403/)
- Chọn chức năng nhắn tin với trang
- Trong lần mở đầu tiên, người dùng sẽ thấy được thông báo cơ bản các chức năng

|Thông báo trong lần đầu trò chuyện với Bot|
:-------------------------------------:
![first_message](/DTQ/screenshots/first_message.png)

- Bạn có thể trò chuyện với Bot giống như trò chuyện với một người bình thường trên Facebook, vì sự hạn chế về hạ tầng nên trong một số trường hợp, Bot chưa thể hiểu được các câu trò chuyện của người dùng
- Bot có 2 chức năng chính là học từ mới và kiểm tra các từ đã học, cụ thể
  + Đối với chức năng học từ mới, bạn chỉ cần gõ câu "new word", Bot sẽ đưa ra cho bạn mỗi lần một từ với hình ảnh, âm thanh, nghĩa, phiên âm, ví dụ đi kèm. Cứ sau mỗi từ, bạn chỉ cần ấn vào nút "Got it", Bot sẽ cung cấp từ mới cho bạn. Khi không muốn học nữa, bạn chỉ cần gõ các câu thoại khác
  + Đối với chức năng kiểm tra từ đã học, bạn gõ từ "test", Bot sẽ ngẫu nhiên và đưa ra một câu hỏi trắc nghiệm nhanh dành cho bạn. Cứ sau mỗi câu trả lời của bạn, Bot sẽ đưa ra phương án đúng và tự động đưa ra câu hỏi tiếp theo. Khi muốn thoát quá trình này, bạn chỉ cần gõ một câu thoại khác

- Bot còn cung cấp cho bạn danh sách các lựa chọn bằng nút lệnh 3 sọc ở phía trái ô trò chuyện. Khi ấn vào nút lệnh này, người dùng có thể lựa chọn chức năng hướng dẫn hoặc thông tin tài khoản

| Nút lệnh 3 sọc ở góc trái ô trò chuyện|
:--------------:
![menu_account](/DTQ/screenshots/menu_account.png)

  + Chức năng hướng dẫn cung cấp các thông tin cơ bản về các thức sử dụng đối với người dùng, tương tự như dòng thông báo trong lần trò chuyện đầu tiên

  | Trợ giúp |
  :--------------:
  ![menu_help](/DTQ/screenshots/menu_help.png)

  + Chức năng thông tin người dùng cung cấp các thông tin cơ bản về người dùng như họ tên, giới tính, số từ đã học

  | Thông tin và kết quả học |
  :--------------:
  ![menu_account](/DTQ/screenshots/menu_account.png)

##Giới thiệu cấu trúc mã nguồn

Chương trình được phân chia làm 2 phần: Phần xử lý chính và phần ProgramO, trong đó:
- [Phần xử lý chính](/DTQ/fb): là một server có chức năng nhận, xử lí và trả lời tin nhắn từ người dùng
- [ProgramO](/DTQ/program-o): cung cấp API để trả lời một câu chat từ phía người dùng

**Các bước cài đặt và phát triển cụ thể có trong từng thư mục**
**Đối với Program O, do sử dụng mã nguồn mở của bên thứ 3 nên nhóm xin phép không thay đổi tài liệu hướng dẫn của nhà phát tr**


