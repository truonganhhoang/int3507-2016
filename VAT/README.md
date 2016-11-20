# Các vấn đề hiện đại của Công nghệ thông tin
## Nhóm VAT:
- Nguyễn Mạnh Cường
- Kiều Trọng Vĩnh

## Trình bày vấn đề:
- Hiện nay xu hướng toàn cầu hóa đang diễn ra trên khắp thế giới. Việt Nam cũng không nằm ngoài quy luật đó. Việt Nam đang trong giai đoạn phát triển đất nước, vươn mình ra biển lớn. Một trong những yếu tố ảnh hưởng đến sự phát triển toàn cầu hóa chính là vấn đề ngôn ngữ. Ngoại ngữ là một trong những yếu tố không thể thiếu khi một quốc gia muốn vươn mình ra thế giới.
- Việc dạy và học ngoại ngữ ở Việt Nam còn khá hạn chế, các hình thức và phương pháp dạy học chưa thực sự đa dạng. Cụ thể là việc dạy và học Tiếng Anh.
- Từ đó nhóm VAT nảy sinh ý tưởng muốn xây dựng một trang web cung cấp các bài học Tiếng Anh, trang bị cho người học những kiến thức cơ bản nhất giúp việc tiếp cận và học Tiếng Anh trở nên dễ dàng hơn.
- Trang web sẽ cung cấp các bài học dựa trên các kĩ năng: Nghe, Nói, Đọc, Viết, Ngữ pháp,...

## Ý tưởng:
- Xây dựng trang web học Tiếng Anh sử dụng <b>NodeJS Express Angular2</b>

## Sản phẩm:
- Link đến trang web: [English Learning](http://englishlearningdemo.herokuapp.com/)

## Giới thiệu công nghệ sử dụng:
### Nodejs:
![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/nodejs.jpeg)

- NodeJS là một mã nguồn được xây dựng dựa trên nền tảng Javascript V8 Engine, libUV platform abstraction layer, và một thư viện lõi được viết bằng Javascript. Nó được sử dụng để xây dựng các ứng dụng web như các trang video clip, các forum và đặc biệt là trang mạng xã hội phạm vi hẹp. NodeJS là một mã nguồn mở được sử dụng rộng bởi hàng ngàn lập trình viên trên toàn thế giới. NodeJS có thể chạy trên nhiều nền tảng hệ điều hành khác nhau từ Windows cho tới Linux, OS X nên đó cũng là một lợi thế. NodeJS cung cấp các thư viện phong phú ở dạng Javascript Module khác nhau giúp đơn giản hóa việc lập trình và giảm thời gian ở mức thấp nhất.
- Tìm hiểu thêm về Nodejs tại [đây](https://nodejs.org/en/).

### ExpressJS:
![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/expressjs.png)

- Express là một framework nhỏ và tiện ích để xây dựng các ứng dụng web, cung cấp một lượng lớn của tính năng mạnh mẽ để phát triển các ứng dụng web và mobile. Nó rất dễ dàng để phát triển các ứng dụng nhanh dựa trên Node.js cho các ứng dụng Web.
- Tham khảo thêm thông tin tại [đây](http://expressjs.com/)

### Angular 2:
![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/angular2.jpg)

- AngularJS là một framework có cấu trúc cho các ứng dụng web động. Nó cho phép bạn sử dụng HTML như là ngôn ngữ mẫu và cho phép bạn mở rộng cú pháp của HTML để diễn đạt các thành phần ứng dụng của bạn một cách rõ ràng và súc tích. Hai tính năng cốt lõi: Data binding và Dependency injection của AngularJS loại bỏ phần lớn code mà bạn thường phải viết. Nó hoạt động trên tất cả các trình duyệt, làm cho nó trở thành lựa chọn lý tưởng của bất kỳ công nghệ Server nào.
- Angular 2 là một sự đột phá từ phiên bản AngularJS 1.x. Cung cấp các tính năng mạnh mẽ hơn nữa. Tham khảo thêm thông tin về Angular 2 tại [đây](https://angular.io/docs/ts/latest/quickstart.html)

## Mô tả chi tiết và cách cài đặt:
### Cài đặt:
Đầu tiên cần cấu hình các cài đặt cần thiết để phát triển ứng dụng bằng máy tính cá nhân.
#### Cài đặt Nodejs:

Download bản cài đặt Nodejs tương ứng với phiên bản hệ điều hành [tại đây](https://nodejs.org/en/download/) (nên sử dụng phiên bản mới nhất để có đầy đủ các tính năng)
Sau khi cài đặt xong, kiểm tra cài đặt thành công bằng cách mở cửa sổ dòng lệnh và gõ:

`node -v` 
`npm -v`

![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/install-node.PNG)

#### Cài đặt Express:

Mở cửa sổ lệnh và gõ:
`npm install -g express-generator`. Câu lệnh này cho phép tạo nhanh một project Express với cấu trúc chuẩn. Tạo một project mới bằng câu lệnh `express [tên-project]`
![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/install-express.PNG)

#### Cài đặt ứng dụng:
- Ứng dụng được viết trên nền tảng Express-generator và Angular2
- Clone source code từ [đây](https://github.com/cuongk58uet/englishlearning)
- Di chuyển vào thư mục project vừa clone về và mở GitBash tại thư mục đó (yêu cầu máy tính đã cài đặt Git).
- Gõ `git rm -rf .git`
- Mở cửa sổ lệnh tại thư mục chứa project: <br>
Gõ lệnh: `npm install` để tiến hành cài đặt các modules cần thiết cho project (Các modules này được định nghĩa trong phần dependencies và devDependencies trong file [package.json](https://github.com/cuongk58uet/englishlearning/blob/master/package.json)) <br>

![Ảnh mô tả tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/npm-install.PNG)

- Sau khi cài đặt hoàn tất. Gõ lệnh `npm start` để chạy ứng dụng. Mở trình duyệt và truy cập địa chỉ: <b>localhost:3000</b>
![Ảnh minh họa tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/npm-start.PNG)

### Sử dụng ứng dụng:
Bằng cách sử dụng các điều hướng có trên thanh Navigation, người dùng có thể chọn các bài học với các kĩ năng tương ứng.

![Ảnh minh họa tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/reading.PNG)

![Ảnh minh họa tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/home-page.PNG)

![Ảnh minh họa tại đây](https://github.com/cuongk58uet/englishlearning/blob/master/images/listening.PNG)

### Triển khai (Deploy) lên heroku 
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
- Biên dịch lại trước khi deploy bằng cách gõ lệnh: `npm run build:prod` <br>
Câu lệnh sẽ biên dịch các cài đặt cần thiết để có thể triển khai lên host mà không gặp lỗi
- Yêu cầu đã có tài khoản trên heroku
- Hướng dẫn deploy lên heroku tại [đây](https://devcenter.heroku.com/articles/deploying-nodejs)
