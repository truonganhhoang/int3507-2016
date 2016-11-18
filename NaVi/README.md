## 
## 1 Giới thiệu bài toán 
 Mục đích xây dựng chatbot hỗ trợ việc học tiếng anh của nhóm Navi :
 - Giúp người dùng có được một trải nghiệm, một cách học tiếng anh online mới mẻ.
 - Xây dựng chatbot ở mức đơn giản để xem phàn hồi của người dùng về sản phẩm qua đó có những phát triển trong tương lai.
 
## 2 Giới thiệu nền tàng, công nghệ (Chatbot, nodejs, java )
### 2.1 Nền tảng Messenger Chatbot là gì?
* Chatbot: là một chương trình máy tính có khả năng tiến hành hội thoại thông qua phương thức văn bản (textual) hoặc thính giác (auditory) [\[1\]](https://en.wikipedia.org/wiki/Chatterbot). Hiểu một cách đơn giản hơn: Thay vì trò chuyện (text/voice chat) với người, bạn có thể trò chuyện với một chương trình máy tính đã được lập trình sẵn, có khả năng hiểu câu nói của bạn ở một mức độ nhất định, và tự động trả lời bạn.
* Messenger Chatbot: Trong hội thảo F8 [\[2\]](http://newsroom.fb.com/news/2016/04/messenger-platform-at-f8), Facebook giới thiệu Chatbot trên nền tảng Messenger. Theo đó, Facebook Messenger sẽ cung cấp các API của Messenger, cho phép người dùng có thể  lập trình những Chatbots có khả năng hội thoại với con người thông qua ứng dụng này.

### 2.2 Ứng dụng của Chatbot trong cuộc sống hiện tại và tương lai?
* Ứng dụng của Chatbot: chia làm  4 use cases chính [\[3\]](http://tomtunguz.com/bot-use-cases/)
  * Support - Hỗ trợ (dịch vụ chăm sóc khách hàng,...)
  * Alert - Thông báo, cảnh báo (thời tiết, gửi tin tức đã được cá nhân hóa theo sở thích cho độc giả,...)
  * Booking - Đặt hàng trực tuyến (đặt vé máy bay, shopping,...)
  * Search/Input - Tìm kiếm (địa điểm ăn uống, du lịch,...)
* Tham khảo thêm các ý tưởng cụ thể [tại đây](https://blog.exponea.com/full-guide-chatbot-use-cases-brands)

* Ví dụ: 
  * Chăm sóc khách hàng: Thay vì thuê 100 nhân viên chăm sóc khách hàng, ngồi chat trực tuyến với người dùng qua Facebook Messenger, thì bạn có thể xây dựng một Chatbot có khả năng tương tác tại một thời điểm với hàng chục nghìn khách hàng (và nhiều hơn thế nữa). Hiệu quả kinh tế mà Chatbot mang lại quả là rất tiềm năng. Tuy nhiên, để làm được một Chatbot thực sự "mạnh", đủ khả năng "chăm sóc" hàng chục nghìn cá thể người không ai giống ai, là một điều không hề dễ dàng. Sự thông minh của Chatbot phụ thuộc rất nhiều vào cách mà chúng ta lập trình ra nó :smiling_imp: 
  * Đặt vé máy bay: Thay cho việc khách hàng phải vào website tìm vé với 1 loạt các lựa chọn query phức tạp rắc rối về thời gian bay, sân bay, hãng máy bay, chuyến nào rẻ chuyến nào đắt,... Thì với Chatbot, thứ duy nhất khách hàng phải làm là "trò chuyện" với Chatbot những thứ mình muốn (tôi đang ở ..., tôi muốn đến ... bằng hãng hàng không ... Tôi muốn đến nơi lúc ... giờ). Chatbot sẽ tự động tìm kiếm vé máy bay phù hợp và gửi lại khách hàng. Tìm kiếm và thanh toán chưa bao giờ tiện lợi và dễ dàng đến thế :open_mouth: 

### 2.3 Tại sao xây dựng Chatbot từ nền tảng Facebook Messenger? [\[4\]](https://www.quora.com/Is-Facebooks-Messenger-chatbot-platform-worth-building-for)
* Hơn 900 triệu người sử dụng ứng dụng Messenger mỗi tháng. Đây là một thị trường khổng lồ mà ta có thể khai thác thông qua Chatbot.
* Chatbot giúp người dùng dễ dàng tiếp cận với thương mại hơn so với các phương thức truyền thống
* Tương lai có khả năng thay thế các ứng dụng hiện tại. Người dùng không còn phải phân vân là nên tải ứng dụng nào trên store để dùng nữa.
* Chatbot cho phép người dùng tương tác bằng cách sử dụng hội thoại bằng ngôn ngữ tự nhiên.
* Chatbot thực sự đang tạo ra một cuộc cách mạng trong chăm sóc khách hàng (customer service)
* Hơn 10000 lập trình viên đã sử dụng Facebook API để phát triển Chatbot. Hơn 11000 Chatbot đã được xây dựng. [\[5\]](http://venturebeat.com/2016/06/30/facebook-messenger-now-has-11000-chatbots-for-you-to-try/)

## 3 Cài bước cài đặt chatbot
### 3.1 Các thành phần cần thiết
* 1 Facebook page: tất nhiên rồi. Để giao tiếp được với người dùng cuối, bạn cần một trang Facebook để  người dùng chat thông qua messenger.
* 1 Facebook app: App là trung gian giao tiếp giữa Page và back-end server của bạn. Tại đây bạn sẽ đăng ký messenger platform để sử dụng Chatbot
* 1 Back-end server: Facebook app sẽ gửi dữ liệu tin nhắn của người dùng lên back-end server này. Tại đây, dữ liệu sẽ được xử lý, sau đó gửi trả lại cho Facebook app, và chuyển đến người dùng cuối. Back-end server hoạt động dưới dạng API. Facebook hỗ trợ một số công nghệ để làm API. Trong phạm vi bài hướng dẫn này, chúng ta sẽ sử dụng Nodejs. Tất nhiên, trên server sẽ cần cài đặt nhiều thứ hơn nữa, chúng ta sẽ tìm hiểu cụ thể ở phần sau.

### 3.2 Cơ chế hoạt động của Chatbot
Quá trình từ khi người dùng cuối gửi một tin nhắn đến Chatbot, đến lúc Chatbot trả lời lại:
* Người dùng nhắn tin cho Page.
* App mà bạn đã tạo và subscribe vào Page sẽ chuyển tin nhắn của người dùng vừa gửi, thông qua webhook mà bạn đã định nghĩa sẵn trong app đó để chuyển dữ liệu tin nhắn đến web server.
* Tại server, các dữ liệu này được xử lý (xử lý ngôn ngữ tự nhiên chẳng hạn) tùy vào mục đích sử dụng, tạo ra tin dữ liệu sẵn sàng trả về cho người dùng. Facebook cung cấp khá đa dạng các loại [mẫu tin nhắn](https://developers.facebook.com/docs/messenger-platform/send-api-reference) để Chatbot trả lời người dùng.
* Server gọi đến facebook api để gửi trả tin nhắn. App nhận dữ liệu và chuyển ra Page để hiện thị tới người dùng.

### 3.3 Cách xây dựng từng thành phần nhỏ
* Tạo một Facebook page: [xem tại đây](https://www.facebook.com/business/learn/set-up-facebook-page)
* Tạo một Facebook app: [xem tại đây](https://developers.facebook.com/docs/apps/register)
* Liên kết app và page: [xem tại đây](https://developers.facebook.com/docs/messenger-platform/product-overview/setup#app_and_page_setup)
* Cài đặt webhook (một URI để facebook app call đến khi có tin nhắn): [xem tại đây](https://developers.facebook.com/docs/messenger-platform/product-overview/setup#webhook_setup)
* Tạo một server (chạy ubuntu chẳng hạn) và cài Nodejs lên đó. (tự search cách làm)
* Tạo chứng chỉ bảo mật SSL cho server, có thể dùng free service từ CloudFlare (tự search cách làm). Bước này khá quan trọng, vì URI trong cài đặt webhook trên yêu cầu một liên kết là https, chứ không được dùng http.
* Clone chatbot sample app của facebook về server: [source code tại đây](https://github.com/fbsamples/messenger-platform-samples)
* Lấy các thông tin `appSecret`, `pageAccessToken`, `validationToken` ([xem cách lấy](https://developers.facebook.com/docs/messenger-platform/product-overview/setup#page_access_token)) và điền vào file `node/config/default.json`
* Chạy `npm install` từ project root dir là `messenger-platform-samples/node` để cài đặt các thư viện cần thiết.
* Sửa file `app.js` sao cho cấu hình phù hợp với server của bạn. Nếu dùng SSL của CloudFlare thì có một lưu ý là chỉ một số cổng nhất định được enable, [xem chi tiết](https://support.cloudflare.com/hc/en-us/articles/200169156-Which-ports-will-CloudFlare-work-with-)
* Cuối cùng, chạy `node app.js`. Server lúc này sẵn sàng lắng nghe các lời gọi (API calls) từ facebook app.
* Quay lại facebook app để [test webhook](https://developers.facebook.com/docs/messenger-platform/product-overview/setup#webhook_setup). Nếu test thành công, nghĩa là bạn đã cài đặt thành công và Chatbot đã sẵn sàng hoạt động.
* Chatbot của bạn hiện tại đã có thể chạy, và làm được một số việc đơn giản như:
  * Trả lại một số mẫu tin nhắn nhất định khi bạn chat đúng rule. VD: 'button', 'generic', 'quick reply',...[see more](https://developers.facebook.com/docs/messenger-platform/product-overview/conversation)
  * Echo lại tất cả các tin nhắn của bạn

## 5 Các chức năng chính ứng dụng

**Chat với Cwat tại:** `https://www.facebook.com/cwat.seewhat/`
**Mục tiêu của chat-bot là giúp người dùng học và nâng cao trình độ tiếng anh của mình. Chức năng chính của nó gồm :**
* Có khả năng giao tiếp đơn giản như: phản hồi các câu giao tiếp phổ biến, giới thiệu các tính năng, trả lời các câu hỏi đơn giản, tương tác thân thiện...
![conversation](https://github.com/trieudh58/int3507-2016/blob/master/NaVi/screenshots/conversation.png)

* Cung cấp cho người dùng các câu hỏi chắc nghiệm để người dùng trả lời: Giúp họ rèn luyện và đánh giá kĩ năng tiếng anh của mình. Các câu hỏi đã được người dùng trả lời đúng sẽ không xuất hiện lại. Người dùng có thể chọn đáp án hoặc nhập từ bàn phím.
![right answer](https://github.com/trieudh58/int3507-2016/blob/master/NaVi/screenshots/right-answer.png)

* Người dùng có thể học từ mới cùng Cwat: Cwat gửi tới người dùng từ cùng với cách phát âm và nghĩa của nó để người dùng học, họ có thể chọn không hiện lại để hệ thống biết người dùng đã biết và sẽ không hiện lại từ đó.
![new-word-no-show](https://github.com/trieudh58/int3507-2016/blob/master/NaVi/screenshots/new-word-no-show.png)

* Người dùng có thể rèn luyện kỹ năng nghe và viết với Cwat: Cwat gửi tới người dùng một đoạn audio, sau khi nghe người dùng gửi lại những gì mình đã nghe được. Hệ thống sẽ phân tích và gửi lại người dùng kết quả bài làm của họ cũng như nội dung của đoạn audio.
![listening 1](https://github.com/trieudh58/int3507-2016/blob/master/NaVi/screenshots/listening-1.png)

* Các tiện ích cho người dùng:
  * Người dùng có thể xem và cập nhật hồ sơ cá nhân:
  ![profile](https://github.com/truonganhhoang/int3507-2016/blob/master/NaVi/screenshots/profile.PNG)
  
  * Người dùng có thể theo dõi quá trình học tập của mình:
  ![learn-process](https://github.com/truonganhhoang/int3507-2016/blob/master/NaVi/screenshots/learn-process.PNG)
  
  * Thiết lập thời gian thông báo của Cwat:
  ![setting notification](https://github.com/truonganhhoang/int3507-2016/blob/master/NaVi/screenshots/setting%20notification.PNG)
  
## 6  Hướng phát triển

* Huấn luyện mô hình xác định ý định của người dùng đối với mỗi tin nhắn được gửi tới bot.
* Xây dựng các luồng xử lý sự kiện (kịch bản chat) cho bot.
* Làm mịn các tính năng sẵn có và mở rộng tính năng khác dựa vào việc phối hợp các tính năng sẵn có.
* Xây dựng 1 web app để quản lý (thêm, sửa, xóa) dữ liệu

## 7 Cầu trúc thư mục project

* `abchatbot-service/`:
  * Folder này chứa các thiết lập cho chat bot được xây dựng dưới dạn java RESTful web service với mục đích hỗ trợ tính năng hội thoại cho mesenger chatbot.
  * Các công nghệ được sử dụng:
    * Jersey framework
    * ProgramAB
* `chatbot/` : là folder chứa các thiết lập, mã chính của ứng dụng chatbot
  * `config/` : chứa các biến môi trường dùng chung cho cả project. Các biến này được mô tả trong file `default.json` dưới dạng `key:value`.
  Ví dụ ta cần đọc giá trị của `pageAccessToken` thì ta có thể đạt được bằng cách gọi: `config('pageAccessToken')`; trong đó `config` thực chất là một thư viện giúp đọc file `config/default.json` - sẽ giới thiệu về thư viện trong mục `node_modules` dưới đây.
  * `database/` : là folder lưu trữ các dữ liệu cho ứng dựng (câu hỏi, từ mới...)
  * `node_modules/` : là folder chứa các thư viện (libs/dependencies) hỗ trợ nodejs. Các thư viện được quản lý bởi `npm` ([node package management](https://www.npmjs.com/)).
  npm hỗ trợ việc cài đặt, gỡ và quản lý các thư viện mà ta cần sử dụng trong project. Các mô tả về project đều nằm trong file `package.json` mà ta có thể tạo ra bằng lệnh `npm init` từ Terminal (hoặc có thể tạo tay).
  * public/ : chứa các content static để gửi đi (ảnh, video, audio, html files...).
  * models/ : folder lưu trữ định dạng các thuộc tính của các đối tượng (Question, NewWord, Audio...).
  * views/ : views engine phục vụ xem trên trình duyệt. Không cần quan tâm file này.
  * app.js : file chính của cả chương trình. Trong code mẫu của facebook, họ để chung code ở mỗi một file này, còn khi chúng ta làm product thật thì hiển nhiên phải cấu trúc lại thư mục, không thể để code ở chung một file được.
  * package.json : như đã giới thiệu, là file mô tả project (tựa như pom.xml của maven). File này được đọc và ghi bởi `npm`. `package.json` cũng ở dạng json (key:value). Các thư viện nodejs được khai báo trong `dependencies` của file này. Dưới đây là một ví dụ:
  ```json
  // package.json
  {
    "name": "messenger-get-started", 
    "version": "1.0.0", 
    "description": "Get started example for Messenger Platform",
    "main": "app.js",
    "scripts": {
      "start": "node app.js",
      "lint": "jshint --exclude node_modules .",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/fbsamples/messenger-platform-samples.git"
    },
    "author": "Facebook",
    "license": "ISC",
    "dependencies": {
      "body-parser": "^1.15.0",
      "config": "^1.20.4",
      "ejs": "^2.4.2",
      "express": "^4.13.4",
      "request": "^2.72.0"
    },
    "engines": {
      "node": "~4.1.2"
    }
  }
  ```
