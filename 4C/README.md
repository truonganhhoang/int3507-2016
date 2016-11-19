Nhóm 4C bao gồm các thành viên:

• Phan Đoàn Cương

• Đinh Việt Cường

• Nông Thành Công

• Nguyễn Ngọc Duy

Alexa Skill

I. Giới thiệu về Alexa

	Alexa là dịch vụ riêng của Amazon nó được biết đến giống như Siri của Apple hay Google Now. Đó là một trợ lý bằng giọng nói cho phép bạn đặt câu hỏi, tạo ra nhiệm vụ và danh sách mua sắm từ Amazon, nghe tin tức và thời tiết, chơi nhạc, bộ tính giờ và báo động, và thậm chí kiểm soát một số thiết bị "nhà thông minh" như đèn và chuyển mạch.

	Alexa được ứng dụng trong các thiết bị thông minh như nhà thông minh giúp bạn có thể điều khiển hệ thống đèn, hệ thống sưởi, và cửa ra vào bằng giọng nói. Alexa cũng được tích hợp trong, máy đo sức khỏe, điện thoại thông minh, các thiết bị di động thông minh khác có thể kết nối internet. 

	Ví dụ sử dụng Alexa đển bật đèn phòng khách : Khi nói “ turn on the… “ là một cụm từ được xác nhận bời thiết bị tích hợp Alexa. Alexa nhận rằng đây là một yêu cầu để bật một thiết bị chiếu sáng. Nói cụm từ đầy đủ là  “turn on the  living room lights” alexa nhận diện được bật bóng đèn phòng khách đây là thiết bị cụ thể đã được người dùng cấu hình và đặt tên trước. Alexa gửi chỉ thị thiết bị đến các bộ chuyển đổi kỹ năng cụ thể mà có thể kiểm soát thiết bị đèn phòng khách, bộ chuyển đổi này bật đèn quy định bằng cách giao tiếp với các thiết bị điện toán đám mây qua Internet, sau đó trả về một phản ứng chỉ thị nó đã thành công.

	Khi người dùng nói chuyện với một thiết bị Alexa đã đươc kích hoạt, những bài phát biểu được truyền tới các dịch vụ Alexa trong cloud. Alexa nhận diện giọng nói, xác định những gì người dùng muốn, và sau đó sẽ gửi một yêu cầu cấu trúc để các kỹ năng đặc biệt mà có thể đáp ứng yêu cầu của người dùng. Tất cả các nhận dạng giọng nói và chuyển đổi được xử lý bởi Alexa trong cloud. Mỗi kỹ năng Alexa có một mô hình tương tác (thiết bị tương tác) xác định các từ và cụm từ người sử dụng có thể nói để làm cho các kỹ năng làm những gì họ muốn. Các loại kỹ năng bạn xây dựng sẽ áp đặt với thiết bị tích hợp Alexa để người dùng giao tiếp điều khiển nó.

	Alexa được sử dụng trong các ứng dụng sức khỏe tập trung; điều khiển TV từ xa bằng giọng nói hỗ trợ; tìm kiếm tin tức và thời tiết các ứng dụng từ các tên tuổi lớn như AccuWeather, AOL, HuffPost, oh, và TechCrunch;  

II. Alexa Skills Kit(ASK) 

	Dịch vụ giọng nói cho phép người dùng tương tác với các thiết bị thông qua giọng nói. VD: khả năng chơi nhạc, trả lời câu hỏi chung, thiết lập báo động hoặc hẹn giờ,…ASK là một bộ các self-service(tự phục vụ) API, các công cụ, tài liệu và mã nguồn giúp bạn nhanh chóng và dễ dàng cho bạn để thêm kỹ năng mới cho Alexa. ASK là dịch vụ chạy trên Cloud - không được lập trình trên thiết bị của người dùng, 1 thể loại thiết bị mới được thiết kế xung quanh giọng nói của bạn. Chỉ với 1 vài dòng code bạn có thể dễ dàng tích hợp các dịch vụ web có sẵn với Alexa hoặc trong 1 vài giờ bạn có thể xây dựng được những trải nghiệm hoàn toàn mới xung quanh giọng nói của bạn. Amazon thực hiện tất cả các công việc để nghe, hiểu, và xử lý yêu cầu của khách hàng

	Bạn có thể mở rộng các dịch vụ có sẵn của bạn hoặc tạo ra 1 thứ hoàn toàn mới. Người dùng không nhất thiết phải dùng tay hoặc mắt, họ có thể “hỏi” theo lệnh được định nghĩa của họ

•	Get in Early: cung cấp cho bạn một cơ hội để tận dụng lợi thế của hình thức mới của sự tương tác: Giao tiếp tự nhiên

•	Làm hài lòng người dùng: cho người nghe của bạn 1 cách hoàn toàn mới để tương tác với dịch vụ. Người dùng không nhất thiết phải dùng tay hoặc mắt, họ có thể “hỏi” theo lệnh được định nghĩa của họ

•	Tạo ra và chạy: chỉ trong 1 vài giờ. Nếu bạn có 1 dịch vụ cloud-based có sẵn, bạn có thể dễ dàng bắt đầu sử dụng nó. Nếu không, AWS Lambda là 1 dịch vụ tính toán, nó xây dựng 1 dịch vụ cloud- based 1 cách khá dễ dàng, phản hồi nhanh chóng với 1 yêu cầu bằng giọng nói

•	Xây dựng miễn phí: ASK miễn phí khi sử dụng. 

III. Các bước tạo một kỹ năng tùy chỉnh.

1. Tạo Lambda function

Để tạo Lambda function cho kĩ năng, vào trang console.aws.amazon.com. Sau khi đăng nhặp bằng tài khoản Amazon se vào tạo Lambda function. Để tạo 1 Lambda function cần:

• Đặt tên cho function.

• Chọn server runtime là Java 8.

• Clone sample skill trên trang github của amazon https://github.com/amzn/alexa-skills-kit-java sau đó vài thư mục sample để build thành file jar. Sử dụng maven để build.

• Upload file jar vừa build được lên Lambda function để tạo server runtime.

• Tạo function và thêm 1 Event Sources.

• Copy ARN của function để sử dụng trong quá trình cấu hình skill.

2. Viết code 

• Tham khảo code mẫu trong thư mục sample. CÓ 1 số skill mẫu trong đó. Tham khảo để biết cách sử dụng các thư viện được amazon hỗ trợ và xử lý dữ liệu giọng nói đầu vào

3. Tạo skill

• Vào trang developer.amazon.com, chọn alexa skill để tạo 1 skill .

• Đặt tên và tiến hành cấu hình cho skill. Có 1 số mục quan trọng là invocation name, interaction model, sample utterance và ARN. Invocation name dùng để xác nhận skill. Interaction model là mô hình xử lý để alexa có thể hiểu được câu hỏi và lấy ra câu trả lời. Sample Utterance là chỗ để viết câu hỏi và câu trả lời, được chia thành 2 intent là question intent và anser intent. ARN chính là ARN có được khi tạo lambda function ở trên.

• Có 1 thư mục để cấu hình để publish skill lên trên alexa skill store. 

• Copy Alexa skill ID vào trong code, sau đó build và upload lại lên Lambda function.

4. Test skill

• Vào trang alexa.amazon.com đăng nhập tài khoản amazon.

• Tìm kiếm skill. Sau đó enable skill đó để test.

• Vào trang echosim.io, đăng nhập tài khoản amazon và tiến hành test skill. Khi test thì giữ biểu tượng mic và nói câu để kích hoạt skill. Câu này là 1 trong các câu được định nghĩa trong Sample Utterance.



