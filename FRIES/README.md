# FRIES Team

## Thành Viên:
- Trần Văn Tú
- Nguyễn Tiến Minh 
- Trần Minh Quý
- Bùi Minh Thái

------------------------

# Mạng xã hội học tập Edoo - Angular 2

- [I. Mô tả bài toán](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#i-m%C3%B4-t%E1%BA%A3-b%C3%A0i-to%C3%A1n)
	- [I.1. Vấn đề đặt ra](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#i1-v%E1%BA%A5n-%C4%91%E1%BB%81-%C4%91%E1%BA%B7t-ra)
	- [I.2. Giải pháp: Edoo](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#i2-gi%E1%BA%A3i-ph%C3%A1p-edoo)
- [II. Các chức năng](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#ii-c%C3%A1c-ch%E1%BB%A9c-n%C4%83ng)
	- [II.1. Chức năng chính](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#ii1-ch%E1%BB%A9c-n%C4%83ng-ch%C3%ADnh)
	- [II.2. Chức năng khác](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#ii2-ch%E1%BB%A9c-n%C4%83ng-kh%C3%A1c)
- [III. Hướng phát triển](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#iii-h%C6%B0%E1%BB%9Bng-ph%C3%A1t-tri%E1%BB%83n)
- [IV. Các bước cài đặt cho project](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#iv-c%C3%A1c-b%C6%B0%E1%BB%9Bc-c%C3%A0i-%C4%91%E1%BA%B7t-cho-project)
- [V. Cấu trúc Project](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#v-c%E1%BA%A5u-tr%C3%BAc-project)
- [VI. Tài liệu tham khảo](https://github.com/truonganhhoang/int3507-2016/blob/master/FRIES/README.md#t%C3%A0i-li%E1%BB%87u-tham-kh%E1%BA%A3o)


## I. Mô tả bài toán

### I.1. Vấn đề đặt ra

Hiện nay, phần lớn các trường Đại học, Cao đẳng đều đào tạo theo mô hình tín chỉ, nó giúp sinh viên có thể sắp xếp thời gian học tập, làm việc phù hợp với bản thân mình, ... .


Tuy nhiên, vẫn còn nhiều mặt hạn chế mà mô hình đào tạo tín chỉ gặp phải:

- Sinh viên trong một lớp môn học chưa có sự quen biết, gắn kết chặt chẽ với nhau và với giáo viên cũng vậy.
- Thời gian trên lớp là chưa đủ để giải đáp hết các thắc mắc của sinh viên.
- Môi trường trao đổi học tập chưa rõ ràng, còn nhiều bất cập.
- Cập nhật thông tin còn chậm.

### I.2. Giải pháp: Edoo

Từ những vấn đề trên, mạng xã hội học tập theo mô hình tín chỉ ra đời, mang tên Edoo.

Edoo có các đặc điểm:

- **Kênh trao đổi thông tin, giải đáp tập trung**: Các thành viên trao đổi thông tin đến nhau, cùng nhau giải đáp những thắc mắc học tập. Những thông tin liên quan tới học tập sẽ được tập trung, người học có thể dễ dàng nắm bắt được.
- **Môi trường học tập liên tục**: Sinh viên có thể nghiên cứu vấn đề và trao đổi về bài học vào bất kì thời gian nào (không phải đợi đến khi tới lớp).
- **Môi trường học tập rộng lớn**: Sinh viên có thể tiếp cận với tất cả thành viên khác cùng trường học với mình, tiếp cận với nhiều vấn đề hơn ngoài giờ học.


## II. Các chức năng

Web: http://v2.uetf.me

Tài khoản đăng nhập (lưu ý: không đổi password, để các nhóm khác có thể test):

- Giáo viên: 

  + Email: khoiln@vnu.edu.vn
  + Password: 123456
  
- Sinh viên:

	+ Email: quytm_58@vnu.edu.vn
	+ Password: 123456
  
### II.1. Chức năng chính

#### II.1.1. Chức năng chung

- Xem bài viết, đăng bài viết, sửa và xóa bài viết.
- Bình luận (trả lời) bài viết.
- Đánh giá bài viết, bình luận.
- Xem xếp hạng sinh viên.

#### II.1.1. Chức năng riêng: Sinh viên

- Nộp bài tập.

#### II.1.2. Chức năng riêng: Giáo viên

- Đăng thông báo, bài tập.
- Thu bài tập của Sinh viên.

### II.2. Chức năng khác

Chức năng chung cho cả Sinh viên và Giáo viên:

- Đăng nhập, đăng xuất.
- Cập nhật thông tin cá nhân.
- Gửi feedback.
- Trang welcome.

## III. Hướng phát triển

- Làm mịn các chức năng sẵn có, phát triển theo chiều rộng.
- Thêm các animation cho các Component.
- Push notification để người dùng nhận thông báo realtime.
- Đưa sản phẩm vào thử nghiệm ở một vài lớp.

## IV. Các bước cài đặt cho project

**Link source code**: https://github.com/tutv95/edoo-web-v2

- Cài đặt [Nodejs](https://nodejs.org/en) và [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
- Cài [Angular-cli](https://github.com/angular/angular-cli):

```
npm install -g angular-cli.
```

Angular-cli cho phép bạn generate ra các boilerplate code cho một project mới, đồng thời tạo và thêm các `component`, `directive`, `service`, `pipes`, ... vào trong project. 


- Install các package dùng trong project:

```
npm install
```

- Build project trên `localhost`:

```
npm start
```

- Build app ra bản production và chuyển vào thư mục `/docs`

```
gulp deploy
```

## V. Cấu trúc Project

- **src**:
	- **typings.d.ts**: Khai báo các biến để typescript có thể hiểu. 
	- **styles.css**: Style global cho app.
	- **main.ts**: Main app.
	- **index.html**: file html gốc.
	- **app**:
		- **components**: Chứa các components của app
		- **config**: Config cho app
		- **scss**: SCSS cho global.
		- **services**: Chứa các service của app
		- **app.component.***: Component root của app.

- **docs**: sau khi deploy project thì bản production được đưa vào trong thư mục `/docs`
- **angular-cli**: chứa các config do Angular-cli tạo ra, nó import các styles, scripts, environments, ... sử dụng trong project.
- **karma.conf.js**: file cấu hình cho karma test runner (sử dụng cho việc kiểm thử).
- **package.json**: khai báo các package được sử dụng trong project.


## VI. Tài liệu tham khảo

- [Angular 2](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/) 
- [Angular CLI](https://github.com/angular/angular-cli) 
- [UI Router - State based routing for client-side web apps ](https://ui-router.github.io/)
- [Sass - CSS extension language](http://sass-lang.com/)
- [Karma runner test](https://karma-runner.github.io/)
