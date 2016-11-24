<h2> Giới thiệu </h2>

- <b>Nhóm N2QT, thành viên</b>:
	+ Nguyễn Tiến Nam (*)
	+ Lê Văn Quang
	+ Trương Thị Hồng Nhung
	+ Lương Thị Trang

- <b>Đề tài : Làm trò chơi học ngoại ngữ, học vui bằng Construct2</b>

- <b>Link ứng dụng</b> : http://n2qt.somee.com/N2QT/
- <b>Cài đặt ứng dụng</b> :
	+ link: https://www.scirra.com/construct2/releases
	+ chọn phiên bản cài đặt để dowload về ,sau khi cài đặt xong .Mở phần mềm ,chọn File->Open-> File đuôi capx (có trong thư mục N2QT) .Chọn run để chạy ứng dụng.
- <b>Mô tả ứng dụng</b> :
![capture](https://cloud.githubusercontent.com/assets/16796548/20435438/af2fb3b2-adde-11e6-8256-bd6e3f91d968.JPG)
	+ Đây là game ứng dụng học tiếng anh. Làm lại từ một game trên sachmem.vn bằng công cụ Construct 2.
	+ Để chơi game này thì người chơi cần có sách giáo khoa tiếng Anh. Do vậy chúng tôi cung cấp luôn đáp án để các bạn vào test dễ hơn (Xem đáp án trong phần ĐÁP ÁN)   
	
</hr>
- <b> Hướng dẫn chơi </b>
	+ Người chơi đoán từ đáp án rồi chọn chữ cái .Độ dài từ đáp án là số lượng hình bong bóng
	+ Mỗi level người chơi có 3 lần chọn từ sai ,mỗi lần sai sẽ bị mất đi 1 viên ngọc chai.Ba lần sai thua
	+ Người chơi chọn từ đúng có chứa trong đáp án thì ô chữ cái đó sẽ được mở

- <b>Đáp án:</b>
	+ Level 1 : đáp án <b>IT</b>
	+ Level 2 : đáp án <b>NO</b>

<h2> Hướng dẫn tạo game và phát triển sản phẩm </h2>


<b> Bước 1: Tạo mới project </b>

![capture](https://cloud.githubusercontent.com/assets/16796548/20601143/a0bad51e-b289-11e6-9d8d-247f4a7318cd.JPG)

<b> Bước 2: Chuẩn bị các đối tượng (Object) </b>

Ở đây các đối tượng là các hình ảnh đã được thiết kế sẵn hoặc các đối tượng đã được định nghĩa sẵn trong Construct 2.
Chúng ta cho các đối tượng vào.

![capture](https://cloud.githubusercontent.com/assets/16796548/20601209/00c2bfd0-b28a-11e6-91b1-50e631fcdda1.JPG)

Sau đó sắp xếp các đối tượng vào Layout

![capture](https://cloud.githubusercontent.com/assets/16796548/20601229/20a10870-b28a-11e6-9a9b-bd2f347d517a.JPG)

Ngoài ra ta có thể tạo các đối tượng được định nghĩa sẵn trong Construct 2

![demo](https://cloud.githubusercontent.com/assets/16796548/20602058/3cf0d9f2-b28e-11e6-9426-c14acd6aa8da.jpg)

![demo](https://cloud.githubusercontent.com/assets/16796548/20602142/7fe2a466-b28e-11e6-82e1-e8c4230dd27a.jpg)

Tiếp thep, đây là Properties nơi chỉnh thông số hiển thị, kích thước màn hình

![demo](https://cloud.githubusercontent.com/assets/16796548/20602168/a09529b8-b28e-11e6-833e-5e7106ebaf7e.jpg)

Mỗi Layer là một màn chơi. Ở đây chúng ta xây dựng 2 Level ứng với Layer 1 và Layer 2. Với Layer 0 để hiển thị Menu.

![demo](https://cloud.githubusercontent.com/assets/16796548/20602215/d7e8e378-b28e-11e6-84cb-bd2b5d16635a.jpg)

<b> Bước 3: Định nghĩa các đối tượng </b>

Ở đây các đối tượng được định nghĩa để thể hiện chức năng của đối tượng đó. 
VD: Đối tượng Button, ta có thể tạo hành vi cho button. Button này có thể để chọn ô chữ.

Đầu tiên chọn đối tượng để thêm hành vi

![demo](https://cloud.githubusercontent.com/assets/16796548/20602335/67758f6e-b28f-11e6-8236-8622dca6b4bb.jpg)

Sau đó chọn hành vi cho đối tượng

![d670dd24-b28f-11e6-837a-42b5e7075d84](https://cloud.githubusercontent.com/assets/16796548/20602513/254e2a00-b290-11e6-9561-0e377201f93d.jpg)

Các bạn có thể xem chi tiết các “hành vi” cho đối tượng ở đây https://www.scirra.com/manual/103/sine

<b> Bước 4: Tạo sự kiện cho Game <b>

Ở đây sự kiện của game có thể hiểu là các tương tác giữa các đối tượng trong game hoặc ở đây là các kết quả khi đối tượng thực hiện xong hành vi nào đó

Tạo một event mới

![hello](https://cloud.githubusercontent.com/assets/16796548/20602605/abe7bfcc-b290-11e6-854f-8d45d45d39e3.jpg)

Chọn đối tượng cần tạo sự kiện

![hello](https://cloud.githubusercontent.com/assets/16796548/20602647/d4899f04-b290-11e6-95a8-54c35ea155c2.jpg)

Sau đó chọn Event cần thêm

![hello](https://cloud.githubusercontent.com/assets/16796548/20602694/f5dd605a-b290-11e6-93bd-5607f9e39a55.jpg)

Đây là các một số sự kiện được chúng tôi xây dựng sẵn

![hello](https://cloud.githubusercontent.com/assets/16796548/20602761/4255be82-b291-11e6-8f49-1ce80b1bcfa3.jpg)

![hello](https://cloud.githubusercontent.com/assets/16796548/20602779/5611222c-b291-11e6-8c44-f547ad004afc.jpg)

![hello](https://cloud.githubusercontent.com/assets/16796548/20602806/711c1fb8-b291-11e6-931d-22bfdce1e2cb.jpg)

<b> Bước 5: Xuất ra sản phẩm </b>

Do Construct 2 chúng ta sử dụng là bản phát triển miễn phí nên chỉ xuất ra được sản phẩm định dạng HTML5. Muốn export lên Android, Chrome Store... thì chúng ta cần mua bản phát triển đầy đủ

![hello](https://cloud.githubusercontent.com/assets/16796548/20602833/8db3167c-b291-11e6-87aa-0106355c6373.jpg)

![hello](https://cloud.githubusercontent.com/assets/16796548/20602933/df52f998-b291-11e6-937b-e80efc62ef25.jpg)

Sản phẩm cuối cùng sau khi hoàn thành

![hello](https://cloud.githubusercontent.com/assets/16796548/20602957/f73d6570-b291-11e6-8c8a-dd3cad1384c6.jpg)




