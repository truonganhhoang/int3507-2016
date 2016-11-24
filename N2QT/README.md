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





