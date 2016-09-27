 # Hướng dẫn tạo và chạy một messenger bot
 
 ## Cấu trúc thư mục
- `config/`: chứa các biến môi trường dùng chung cho cả project. Các biến này được mô tả trong file `default.json` dưới dạng `key:value`.

  Ví dụ ta cần đọc giá trị của `pageAccessToken` thì ta có thể đạt được bằng cách gọi: `config('pageAccessToken')`; trong đó `config` thực chất là một thư viện giúp đọc file `config/default.json` - sẽ giới thiệu về thư viện trong mục `node_modules` dưới đây.
  
- `node_modules/`: là folder chứa các thư viện (libs/dependencies) hỗ trợ nodejs. Các thư viện được quản lý bởi `npm` ([node package management](https://www.npmjs.com/)).
  
  npm hỗ trợ việc cài đặt, gỡ và quản lý các thư viện mà ta cần sử dụng trong project. Các mô tả về project đều nằm trong file `package.json` mà ta có thể tạo ra bằng lệnh `npm init` từ Terminal (hoặc có thể tạo tay).
  
  `package.json` cũng ở dạng json (key:value). Các thư viện nodejs được khai báo trong `dependencies` của file này. Dưới đây là một ví dụ:
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
- `public/`: chứa các content static để gửi đi (ảnh, video, audio, html files...)

- `views/`: views engine phục vụ xem trên trình duyệt. Không cần quan tâm file này.

- `app.js`: file chính của cả chương trình. Trong code mẫu của facebook, họ để chung code ở mỗi một file này, còn khi chúng ta làm product thật thì hiển nhiên phải cấu trúc lại thư mục, không thể để code ở chung một file được.

- `package.json`: như đã giới thiệu, là file mô tả project (tựa như pom.xml của maven). File này được đọc và ghi bởi `npm`

## Chạy thử bot
- Bước 1: Clone mã nguồn từ repo này về `git clone https://github.com/trieudh58/messenger-chatbot-guideline.git`

- Bước 2: Download và cài đặt Nodejs [tại đây](https://nodejs.org/en/download/).

- Bước 3: Cài đặt các thư viện
  - 3.1: Chạy `cmd` tại thư mục `messenger-chatbot-guideline`
  
  - 3.2: Chạy lệnh `npm install` để cài các thư viện. Sau khi chạy xong, sẽ xuất hiện thư mục mới là `node_modules`. Bên trong thư mục này chứa các thư viện cần thiết để chạy được app.
  
- Bước 4: Chạy app: Từ `cmd` gõ `node app.js`
  
  Nếu thành công, sẽ xuất hiện dòng `Node app is running on port 3000`.
  
- Bước 5: Cài 1 phần mềm tên là `ngrok` để kết nối localhost:3000 (nơi đang chạy nodejs service) với thể giới internet bên ngoài. Hiểu nôm na là `ngrok` sẽ cung cấp 1 proxy để routing traffic (hoặc request) từ bên ngoài đến localhost:3000. Các bước thực hiện:
  - 5.1: Tải `ngrok` [tại đây](https://ngrok.com/) - không cần đăng ký tài khoản đâu nhé.
  
  - 5.2: Copy file vừa tải (và giải nén nếu cần) ra `Desktop/`. Chạy cmd tại `Desktop/` và gõ `ngrok.exe http 3000` (đối với windows) hoặc `./ngrok http 3000` (đối với ubuntu).
  
  Kết quả (như hình dưới). Để ý dòng `https://c34e8dd3.ngrok.io` -> Đây là thứ mà ta sẽ dùng trong phần **webhook** của facebook
  
  ![ngrok-png](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/ngrok.PNG)
  
- Bước 6: Tạo một **Facebook Page**: [vào đây](https://www.facebook.com/pages/create/) rồi tự tạo một page. Giả sử ta đã tạo thành công được một page tên là `Cwat`

- Bước 7: Tạo một **Facebook App**: [vào đây](https://developers.facebook.com/docs/apps/register) làm theo hướng dẫn và tạo một facebook app với tên bất kỳ. Lưu ý là phải đăng ký tài khoản developers với facebook. Tạo xong, giả sử tên app là `cwat`

- Bước 8: 
  - 8.1: Vào trang quản lý App, trong phần **Product** chọn **Add Product**, chọn **Messenger** ở mục **Product Setup** phía bên tay phải 
  
  ![app-add-product](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/app-add-product.PNG)
  
  - 8.2: Chọn mục Messenger\Settings, Chọn Page và generate một token. Copy lại vào paste giá trị vào `pageAccessToken` trong `config/default.json` 
  
  ![token-generate](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/token-generation.PNG)
  
  - 8.3: Subscribe Page vào App: ![page-subscribe](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/page-subscribe.PNG)
  
  - 8.4: Thêm webhook: URL là địa chỉ mà `ngrok` đã tạo cho ta ở bước 5.2, cộng thêm `/webhook`. Đồng thời điên địa chỉ này (không bao gồm `/webhook` vào `serverURL` trong `config\default.json`)
  
  Vào App Dashboard. Trong mục App Secret, chọn Show để lấy giá trị `appSecret`. Copy vào trong `config\default.json` 
  
  ![app-secret](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/app-secret.PNG)
  
  Mục `Verify Token` thì điền `my_token`, đồng thời điền `my_token` cho giá trị của `validationToken` trong file `config/default.json` 
  
  ![webhook](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/webhook.PNG)
  
  Lưu ý: Điền file `config/default.json` trước, sau đó save lại. Sau đó trong giao diện của faceook app, điền webhook URL, verify token và ấn Verify.
  File `config/default.json` có dạng như sau: 
  
  ![config-default-json](https://github.com/trieudh58/messenger-chatbot-guideline/blob/master/screenshots/default-json.png)
  
- Bước 9: Vào chat với page đã subscribe để test thử bot. 

  Bot chưa được public nên chỉ có admin chat là bot sẽ nhận request để trả lời. Tính năng mặc định của bot là trả lời một số tin nhắn theo mẫu (VD: 'image', 'receipt', 'quick reply',...), còn lại bot sẽ echo mọi tin nhắn đến khác.

=====

# cwat chatbot
 
## Setup project

**1. Setup npm**

```sh
$ npm install 
```
**2. Setup nodemon**

```sh
$ npm install nodemon -g
```

**3. Setup ngrok**

> ”I want to expose a local server behind a NAT or firewall to the internet.”
 
  - Dowload [ngrok](https://ngrok.com/download)
  - Archive file ngrok.zip
  - Run file [ngrok.exe]()
  - Run : **ngrok http 3000**
  - Copy : https://....ngrok.io -> Paste to serverURL in defaut.json

**4. Config file (defaut.json)**

- Copy file defaut.example.json and rename to defaut.json
- Change parameter :
    *appSecret* , *pageAccessToken*, *validationToken* : in [developer.facekbook.com](https://developers.facebook.com/)
