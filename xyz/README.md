# XYZ Team

## Thành viên
- Doãn Thị Hiền
- Nguyễn Thị Trang
- Nguyễn Hồng Sơn

##Ứng dụng: E2M - English to Me

### GIỚI THIỆU CÔNG NGHỆ SỬ DỤNG
![ionic2] (https://richardshergold.files.wordpress.com/2016/03/cropped-ionic-logo-horizontal-transparent.png)

  Ionic 2 là một framework dùng để phát triển ứng dụng trên thiết bị di động bằng các công nghệ phát triển web như HTML5, CSS, JavaScript và sau đó đóng gói trong một môi trường hiển thị nôi dung có thể hoạt động trên hầu hết các thiết bị di động giống như trình duyệt web.
  
  Có thể coi Ionic như là một bộ khung front-end giúp bạn kiểm soát hình ảnh và trải nghiệm trên ứng dụng của bạn. Giống như “Bootstrap for Native”, nhưng với sự hỗ trợ của một lượng lớn các thành phần di động, hiệu ứng chuyển động mượt mà và thiết kế đẹp.
  
  Vì Ionic là một framework HTML5 nên nó cần bộ đóng gói (wrapper) như Cordova hay PhoneGap để có thể chạy được như một ứng dụng di động. Cordova là bộ đóng gói mặc định trong Ionic framework.
  
  Tìm hiểu thêm về Ionic 2 tại [đây] (http://ionicframework.com/docs/v2/)


### HƯỚNG DẪN PHÁT TRIỂN ỨNG DỤNG
#### Cài đặt
- Cài đặt phiên bản mới nhất của NodeJS tại [đây](https://nodejs.org/en/download/)
- Cài đặt CLI và Cordova bằng cách vào cmd, gõ lệnh 
`npm install -g ionic cordova`
- Clone ứng dụng English2Me theo đường link: [github](https://github.com/trangnt58/int3507-2016/tree/master/xyz/speaking-skills)
- Vào đường dẫn vừa clone, vào cmd, thực hiện theo các bước bằng các lệnh như sau:
  + Cài đặt các package cần thiết cho project: `npm install`
  + Cài thêm một số type: `npm install --save @types/gapi` và `npm install --save @types/gapi.auth2`
  + Chạy thử ứng dụng trên browser: `ionic serve`
- Để build được ứng dụng trên điện thoại, cần cài thêm platform bằng cách:
  + `ionic platform add <platform-name>`
  VD như trên Android là `ionic platform add android`
  + `ionic platform build <platform-name>`: build ứng dụng
  + `ionic platform run <platform-name>`: chạy ứng dụng trên máy ảo hoặc máy thật

#### Cấu trúc của ứng dụng:
Xem chi tiết tại [đây] (https://goo.gl/SCw4pF)

#### Hướng phát triển tiếp theo
- Thêm chức năng học tiếng anh qua các youtube channel nổi tiếng
- Upload đồng thời nhiều file lên Google Drive

### HƯỚNG DẪN SỬ DỤNG
### Link tải ứng dụng: https://goo.gl/H8YqSx

### Điều kiện sử dụng E2M
- Có thiết bị di động chạy hệ điều hành android
- Thiết bị có kết nối mạng
- Người dùng có tài khoản Google

### Mô tả ngắn
- Ứng dụng E2M được viết bằng framework Ionic 2, tích hợp nhiều plugin mới nhất của Ionic
- Dữ liệu đầu vào được tải từ server Nodejs do nhóm tự xây dựng
- E2M được build một bản duy nhất dưới dạng file apk, chạy trên hệ điều hành Android.

## Các tính năng của  E2M

### Login / Logout With Google

 ![login-success](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/login-success.PNG)
 
- Ứng dụng: Cho phép user đăng nhập vào ứng dụng bằng tài khoản Google
- Login:
 + Người dùng mở Menu, chọn section Login With Google 
 + Hiện lên một khung xác thực người dùng, trong khung này, người dùng nhập tài khoản email của mình để tiến hành login.
 + Xác thực thành công thì trong menu có thêm 1 section là avatar và username trên tài khoản Google của người dùng.
- Logout: Sau khi đã đăng nhập, người dùng có thể đăng xuất bằng cách click vào section Logout Google. App thực hiện việc đăng xuất tức thì và không trả lại thông báo.

### Category Speaking

![category](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/category.PNG)

- Ứng dụng: Hiện lên list các Category chứa các từ mới liên quan trong 1 chủ đề, giúp người dùng có thể tập điều chỉnh cách phát âm một cách chính xác.
- Hướng dẫn:
 + Sau khi chọn Category trong Menu, màn hình hiển thị list các Category được lưu trên server
 + User chọn 1 Category bất kỳ, xuất hiện list các từ vựng trong chủ đề đó
 
 ![category-list](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/category-list.PNG)
 
 + Mỗi từ vựng sẽ đi kèm với các chức năng chính: 
  + Start Record: tiến hành ghi âm cách phát âm của user
  + Stop Recording: Dừng ghi âm
  + Play: Phát lại đoạn ghi âm của user
  + Button icon Speaker: Phát âm chuẩn của từ vựng (đã được lưu trên server)
 
### Sing a Song: Học tiếng anh qua bài hát
![sing](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/sing.PNG)

- Ứng dụng: Cho phép người dùng tìm kiếm các bài hát trên Youtube, ghi âm lời mình hát vào thiết bị
- Hướng dẫn:
 + Giao diện của chức năng gồm có 2 phần chính: Option search video trên youtube và list video được tải sẵn
 + Người dùng search video bằng cách nhập các option
  + Search: nhập tên bài hát cần tìm vào khung tìm kiếm
  + Selected Box: Chọn kiểu video được load về máy với 2 option là Karaoke (video với version Karaoke) và Lyrics (video với version Lyrics). Option mặc định là Karaoke.
  
 + Sau khi chọn 1 video bất kỳ, giao diện Video Player mở ra với khung hiển thị video và các chức năng:
 
 ![sing-save](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/sing-save.PNG)
 
  + Start Record: tiến hành ghi âm cách phát âm của user
  + Stop Recording: Dừng ghi âm
  + Play: Phát lại đoạn ghi âm của user
  + Save: Lưu đoạn nhạc vào thiết bị
 
### My Drive

![drive](https://raw.githubusercontent.com/trangnt58/int3507-2016/master/xyz/speaking-skills/docs/images/drive.PNG)

- Ứng dụng: Cho phép người dùng chọn file từ thiết bị để upload lên Google Drive
- Hướng dẫn:
 + Khi vào giao diện My Drive, người dùng được yêu cầu đăng nhập nếu chưa login.
 + My Drive có chức năng duy nhất là chọn file để upload lên drive.
 + Người dùng click "Choose File" chọn 1 file trong máy, sau đó click "Upload File" để đẩy file đã chọn lên Google Drive
