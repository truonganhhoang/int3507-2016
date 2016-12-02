# Windows 10 FAQs Chat Bot
## About
Chat bot trợ giúp người dùng về Windows 10, dữ liệu được lấy từ trang [support](https://support.microsoft.com/en-us/products/windows?os=windows-10) của Microsoft (chưa đầy đủ). </br>
Chat bot được phát triển với [Microsoft Bot Framework](https://dev.botframework.com/). </br>
Chat bot hiện tại chỉ hoạt động với Skype và chưa public.
## Requirement
Skype phiển bản mới nhất (Ios/Mac OS, Android, Windows).

Đối với windows 10 (PC và Mobile), khuyên dùng [Skype Preview UWP app](https://www.microsoft.com/en-us/store/p/skype-preview/9wzdncrfj364?) để được trải nghiệm tốt nhất.
## User Guide
Vào đường [link](https://join.skype.com/bot/455b9e86-db27-4a3a-86c8-df9cc15ccc09) để thêm chat bot vào danh bạ Skype của bạn.

Sau khi thêm, bạn gõ "hi" để bắt đầu trò chuyện với bot.
![intro](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/intro.png?raw=true)

Bạn chọn 'FAQ' để bắt đầu việc hỏi đáp, bot sẽ yêu cầu bạn chọn danh mục mà vấn đề bạn cần giúp thuộc về, sau đó bot liệt kê các câu hỏi của từng danh mục.
![category](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/categories.png?raw=true)

Bạn chọn câu hỏi và bot sẽ đưa lại câu trả lời kèm theo link để bạn xem câu trả lời trên web.
![faq](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/faq.png?raw=true)
![thanks](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/thanks.png?raw=true)

Đối với các câu hỏi không nằm trong dữ liệu, bot sẽ tìm kiếm trên google và đưa bạn những câu hỏi liên quan kèm đường link.
![ggcse](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/ggcse.png?raw=true)


Trong khi trò chuyện bạn gõ "help" khi cần trợ giúp về bot.
![help](https://github.com/truonganhhoang/int3507-2016/blob/master/NSFW/FAQ%20Bot%20V2/Screenshots/help.png?raw=true)
Để chuyển đổi danh mục gõ tên danh mục hoặc chọn danh mục từ danh sách lúc đầu (bạn cũng có thể gõ 'faq' để hiển thị lại danh sách danh mục).

## Note
Bot không hỗ trợ hay xử lý các tin nhắn bằng hình ảnh hay tệp tin (nhóm chưa tìm được cách để disable tính năng nhận ảnh và file)

## For developers
Đọc [wiki](https://github.com/truonganhhoang/int3507-2016/wiki/%5BNSFW%5D-MS-Bot-Framework) của nhóm 
và [Bot Framework documentation](https://docs.botframework.com/en-us/) để hiểu hơn về Bot Framework và project. </br>
Xem thêm các ví dụ mẫu tại github của [BotBuilder](https://github.com/Microsoft/BotBuilder/tree/master/CSharp/Samples) 
và [BotBuilder-Samples](https://github.com/Microsoft/BotBuilder-Samples/tree/master/CSharp)