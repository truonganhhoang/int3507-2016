## Nhóm A2
  Làm lại một số dạng bài sách mềm, theo kiến trúc thành phần của angular2.

## Thành viên
- Hoàng Giang
- Ngụy Khắc Quân
- Phan Thị Thanh Hải
- Đào Thị Thanh Huyền

## Bài toán
Công nghệ thông tin ngày càng đóng một vai trò quan trọng trong mọi lĩnh vực, phải kể đến là Giáo dục.
Các bài giảng, tài liệu đều được chuyển hóa, lưu dữ bằng các phần mềm, công cụ tiện ích. Và giờ đây Sách giáo khoa cũng được mô hình hóa thành các bài học online được gọi là "Sách mềm" hay sách điện tử.

## Hướng phát triển
Sách mềm tập trung hỗ trợ việc học và giảng dậy môn Tiếng anh.

Sách mềm có cấu trúc như một quyển sách giáo khoa online, có đầy đủ dạng bài theo từng unit.

Bên cạnh đó nó được tích hợp thêm các chức năng kiểm tra, các bài thi như Chọn đáp án đúng, Điền từ và chỗ trống, Đọc đoạn văn rồi chọn T or F hoặc nghe đoạn văn rồi chọn T or F.

Sách mềm giúp:
- Giáo viên có thêm công cụ giảng bài.
- Học sinh hứng thú, ôn luyện và làm bài tập.
- Phụ huynh cùng thầy cô giúp đỡ con cái học tập.
- Lớp học trở lên sôi nổi và năng động hơn.

## Công nghệ sử dụng
Sách mềm được phát triển trên nền web, được viết bằng Angular2.

Angular 2 là một javascript framework, Angular 2 thích hợp xây dựng ứng dụng theo mô hình SPA (Single Page Application). Mô hình ứng dụng một trang duy nhất, các phân bố dữ liệu đều được truyền nhận âm thầm với kỹ thuật ajax kết hợp API tương tác với Web API.

## Hướng dẫn sử dụng
- Cài đặt
    + Cài đặt nodejs: tải phiên phải mới nhất của [nodejs](https://nodejs.org/en/download/)
    + Cài đặt npm: cmd (Windows) gõ `npm install npm@latest -g`
                   hoặc terminal (Linux) gõ `sudo npm install npm -g`�
                    
    Kiểm tra cài đặt: Mở cmd và gõ

    + `node -v` => hiển thị phiên bản nodejs
    + `nmp -v` => hiển thị bản cài đặt npm
- Clone phần mềm theo link [sachmem-nhomA2](https://github.com/huyendtt58/int3507-2016/tree/master/A2/SachMem)
- Mở cmd:
    + `npm install` => cài đặt thư viện
    + `npm start` => chạy ứng dụng

- Mở sourcecode bằng phần mềm code như [Visual Studio Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/3)... 

=> xem cấu trúc phần mềm và các hướng phát triển tiếp

Cấu trúc thư mục

![cautruc](https://github.com/huyendtt58/int3507-2016/blob/master/A2/docs/CauTrucThuMuc.PNG)

- app/asset: lưu trữ dữ liệu như hình ảnh, âm thanh, file json
- app/components: Angular2 chia thành các components, khi thêm một chức năng mới, tạo một component mới.
- dir-js: thư mục chứa các file .map, .js được tạo ra khi chạy ứng dụng, ứng dụng chạy được trên các trình duyệt.
- node_modules: thư viện, được tạo ra khi chạy `npm-install`.
- typings
- index.html
- package.json
- systemjs.config.js
- tsconfig.json
- typings.json

## Hướng phát triển
- Sản phẩm Sách mềm của nhóm đang phát triển theo hướng các dạng bài tập cơ bản trong sách giáo khoa như Chọn trắc nghiệm, Điền từ

=> Định hướng hoàn thiện các dạng bài, unit, lesson theo cấu trúc sách giáo khoa.

- Angular2 hỗ trợ các dịch vụ dữ liệu nên sản phẩm hạn chế về mặt dữ liệu, dữ liệu truyền vào dạng tĩnh bằng các file json

=> Tích hợp server là Nodejs, Expressjs và cơ sở dữ liệu là MongoDB, phát triển theo mô hình MEAN

## Tài liệu tham khảo

- Sách mềm https://sachmem.vn
- Angular2 https://angular.io/
- Angular-cli https://github.com/angular/angular-cli
- MEAN http://thejackalofjavascript.com/developing-a-mean-app-with-angular-2-0/