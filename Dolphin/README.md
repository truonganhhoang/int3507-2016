# Nhóm Dolphin

## Thành viên trong nhóm:
- Nguyễn Sĩ Trung
- Nguyễn Mạnh Cường
- Hoàng Đình Tấn
- Nguyễn Thị Yến

## Mô tả đề tài của nhóm :
Làm đề tài công ty SOTATEK ( Mô phỏng ứng dụng Instagram có giảm và thêm một số chức năng ).

# Báo cáo phần server
	
## Giới thiệu về SailsJs

SailsJS là một framework với mong muốn tạo ra một NodeJS framework "dễ sử dụng và đầy đủ mọi thứ" có thể cạnh tranh với Ruby on Rails.

Sails là gì?

Sails là, tất nhiên, một web framework. Nhưng lùi lại một bước. Điều đó nghĩa là gì? Đôi khi, khi chúng tôi đề cập đến "web", chúng tôi có nghĩa là "web front-end." Chúng tôi nghĩ rằng những khái niệm như các tiêu chuẩn web, hoặc HTML 5, hay CSS 3; và các khuôn khổ như Backbone, hoặc góc, hay jQuery. Sails không phải là "loại" web framework. Sails hoạt động tuyệt vời với góc và đường trục, nhưng bạn sẽ không bao giờ sử dụng Sails thay vì các thư viện.

Mặt khác, đôi khi chúng ta nói về "khuôn khổ web", chúng tôi có nghĩa là "web back-end." Điều này gợi lên khái niệm như REST, hoặc HTTP, hoặc WebSockets; và các công nghệ như Java hay Ruby, hoặc Node.js. Một "web back-end" khung sẽ giúp bạn làm những việc như xây dựng các API, phục vụ tập tin HTML, và xử lý hàng trăm ngàn người sử dụng đồng thời. Sails là "loại" của khuôn khổ web.

Sails hoàn thành nhiều mục tiêu tương tự như mô hình MVC  ứng dụng web khác, sử dụng nhiều các phương pháp tương tự. Điều này đã được thực hiện trên mục đích. Một cách tiếp cận phù hợp làm cho việc phát triển các ứng dụng dự đoán nhiều hơn và hiệu quả cho tất cả mọi người tham gia. Hãy tưởng tượng bắt đầu một công việc mới tại một công ty xây dựng một ứng dụng Sails (hay tưởng tượng bắt đầu từ các công ty, nếu đó là điều bạn.) Nếu bất cứ ai trong nhóm của bạn đã làm việc với các khuôn khổ như Zend, Laravel, CodeIgniter, Cake, Grails, Django, ASP.NET MVC, hoặc Rails, Sails sẽ cảm thấy khá quen thuộc. Không chỉ có vậy, nhưng họ có thể xem xét một dự án Sails và biết, nói chung, làm thế nào để mã các hình cơ bản mà họ đã thực hiện hơn và hơn nữa trong quá khứ; cho dù nền tảng của họ là trong PHP, Ruby, Java, C #, hoặc Node.js. Gì về ứng dụng thứ hai của bạn, hoặc thứ ba của bạn? Mỗi khi bạn tạo ra một ứng dụng Sails mới, bạn bắt đầu với một sane, soạn quen thuộc mà làm cho bạn hiệu quả hơn. Trong nhiều trường hợp, bạn thậm chí sẽ có thể tái chế một số code phụ trợ của bạn.

## Loose Coupling
Những ngày mà bạn phát triển theo kiểu one-size-fits-all qua rồi. Chúng ta cần các công cụ cho phép chúng ta lựa chọn các thành phần phù hợp với yêu cầu của chúng ta. Trong thực tế, nó chỉ là sự lười biếng để tạo ra những điều bất kỳ cách nào khác. Cách tiếp cận Sails là để các thành phần lỏng lẻo vài để họ có thể được thêm vào hoặc trừ vào ứng dụng của bạn theo ý thích.
Node cốt lõi của nó đã tạo ra một "có thể làm" văn hóa háo hức để thử nghiệm và làm cho mọi công việc. Sails bao trùm thái độ này và phấn đấu để cung cấp những công cụ làm việc xung quanh bạn.

Mức độ tự động hóa hoặc ma thuật bạn muốn trong Sails được gắn trực tiếp vào thời gian bạn có cho một dự án và kinh nghiệm làm việc với các Node. Sails là đủ linh hoạt để cho phép bạn khám phá và tạo ra khi bạn có thời gian mà còn cung cấp tự động khi bạn không.

Sails hoàn thành khớp nối lỏng lẻo này sử dụng plain-old require. Không có phép thuật, khác hơn so với thời gian để xây dựng các thành phần có thể là một phần của toàn bộ nhưng không cần phải có mặt để cho toàn bộ để làm việc. Ví dụ, bộ điều khiển, mô hình, và các tập tin cấu hình chỉ là Node mô-đun. Sails sử dụng một số quy ước để giúp đỡ. Sails chọn lên trên UserController.js tên trong thư mục Controllers để suy luận rằng điều này thực sự là một bộ điều khiển người dùng. Một ví dụ khác liên quan đến chính sách. Vì vậy, chính sách cho phép bạn có một chút mã thực thi trên bộ điều khiển hoặc điều khiển hành động cụ thể. Điều thú vị là các tập tin cấu hình kết nối chính sách với bộ điều khiển / hành động riêng biệt. Điều đó có nghĩa là bạn có thể viết một loạt các chính sách khác nhau và họ là hoàn toàn di động giữa các ứng dụng Sails. Bạn có thể quyết định sau đó điều khiển / hành động mà bạn muốn áp dụng chúng vào.

Sails lõi bao gồm hai mươi hooks khác nhau: mô-đun mà sửa đổi trong thời gian chạy máy chủ, thêm trung gian, ràng buộc người nghe đường, hoặc nếu không gắn khả năng bổ sung cho khung. Điều này cho phép bạn truy cập để ghi đè lên hoặc vô hiệu hóa tất cả các tham số thành phần và cấu hình trong Sails. Những hooks được nạp tại thời gian chạy khi Sails bắt đầu. Bạn thậm chí có khả năng có cấu hình một lần cho hooks của bạn chính nó. Điều này thực sự là một trong những điểm khác biệt chính giữa hooks và services.
Một ví dụ khác của các khớp nối lỏng lẻo là file cấu hình. Cần một số cấu hình để sẵn sàng cho dự án của bạn? Không vấn đề gì. Tạo một tập tin trong thư mục config mà sử dụng module.exports mô hình phổ biến và tất cả mọi thứ trong mô-đun đó là có sẵn cho các ngươi từ cánh buồm đối tượng toàn cầu.

Hầu như mọi thành phần của Sails hoặc có thể được bỏ qua, ghi đè, hoặc mở rộng. Ví dụ, Sails có một nhóm các công cụ được gọi là bản thiết kế. Những bản thiết kế làm cho nó rất dễ dàng để có được một dự án và chạy nó với  các routes và CRUD operations. Nhưng giả sử bạn muốn sử dụng đọc, cập nhật và xóa các hoạt động nhưng tạo ra hành động cần một số tender loving care. Không có vấn đề, chỉ cần xây dựng một hành động tạo và các hoạt động CRUD khác tiếp tục làm việc. hành động tùy chỉnh của bạn trong tàu ngầm cho các hành động kế hoạch chi tiết. Nó chỉ là đơn giản.

## Đặc điểm của sails:

- 100% JavaScript: 
Ứng dụng của bạn được viết hoàn toàn bằng JavaScrip. Bạn có thể viết mã một cách nhất quán và phát triển hơn.

- Any database
Sails kết hợp sức mạnh của ORM, Waterline, cái mà cung cấp các thách thức truy cập dữ liệu dễ dàng khi làm việc. Không vấn đề gì khi bạn sử dụng database nào. Hỗ trợ nhiều database như MySQL, MongoDB, PostgreSQL, Redis…

- Sự liên kết mạnh.
Sails đề xuất các ý kiến mới vào các mô hình quan hệ làm cho mô hình dữ liệu thực tế hơn.

- Tự tạo các REST APIs
Sail đi kềm với sơ đồ thiết kế (blueprint) giúp khởi động các phụ trợ ứng dụng của bạn mà không cần viết bất kỳ mã nào.

- Dễ dàng hỗ trợ Websocket

Sails chuyển thông điệp đến cho bạn, chúng tự động tương thích với  tất cả các đường đi trong Sails app của bạn.

- Bảo mật
Sails cung cấp bảo mật cơ bản và kiểm soát theo mặc định.

- Tính khả thi Font-end
Sails được thiết kế để tương thích với bất kì Font-end nào, cho dù nó là Angular, Backbone, iOS/ObjC, Androis/Java, Window ...

- Flexible asset pipeline
Sails ships với Grunt có nghĩa là toàn bộ tiến trình công việc Font-end của bạn là hoàn toàn tùy chỉnh và hỗ trợ tất cả các module Grunt mà nó đã rời khỏi.

- Nền tảng vững chắc
Sails được xây dựng trên Node.js, sử dụng Express để xử lý các yêu cầu của HTTP, và các gói socket.io cho việc quản lý Websockets.

Tìm hiểu thêm: http://sailsjs.org/

## Đôi nét về MongoDB
## MongoDB là gì ?
Hiểu một cách nôm na thì MongoDB là một mã nguồn mở và là một tập tài liệu dùng cơ chế NoSQL để truy vấn, nó được viết bởi ngôn ngữ C++. Chính vì được viết bởi C++ nên nó có khả năng tính toán với tốc độ cao chứ không giống như các hệ quản trị CSDL hiện nay.
Nếu như bạn biết sử dụng JSON thì trong MongoDB cũng có cấu trúc lưu trữ tương tự, chính vì thế nó có hiệu suất cao, tương tác nhanh và khả năng mở rộng tốt, nó hoạt động trên khái niệm collection và document.

- Collection trong MongoDB là nhóm các tài liệu (document), nó tương đương với một bảng (table) trong CSDL thông thường nên mỗi collection sẽ thuộc về một database duy nhất. Tuy nhiên nó có một sự khác biệt đó là nó không có ràng buộc Relationship như các hệ quản trị CSDL khác nên việc truy xuất rất nhanh, chính vì thế mỗi collection có thể chứa nhiều thể loại khác nhau không giống như table trong hệ quản trị mysql là các field cố định.

- Document trong MongoDB có cấu trúc tương tự như kiểu dữ liệu JSON, nghĩa là sẽ có các cặp (key => giá trị) nên nó có tính năng động rất lớn. Document ta có thể hiểu nó giống như các record dữ liệu trong MYSQL, tuy nhiên nó có sự khác biệt là các cặp (key => value) có thể không giống nhau ở mỗi document.

## MongoDB hoạt động như thế nào

 
MongoDB hoạt động dưới một tiến trình ngầm service luôn mở một cổng (Cổng mặc định là 27017) để lắng nghe các yêu cầu truy vấn, thao tác từ các ứng dụng gửi vào sau đó mới tiến hành xử lý. Mỗi một bản ghi của MongoDB được tự động gắn thêm một field có tên “_id” thuộc kiểu dữ liệu ObjectId mà nó quy định để xác định được tính duy nhất của bản ghi này so với bản ghi khác, cũng như phục vụ các thao tác tìm kiếm và truy vấn thông tin về sau. Trường dữ liệu “_id” luôn được tự động đánh index (chỉ mục) để tốc độ truy vấn thông tin đạt hiệu suất cao nhất. Mỗi khi có một truy vấn dữ liệu, bản ghi được cache (ghi đệm) lên bộ nhớ Ram, để phục vụ lượt truy vấn sau diễn ra nhanh hơn mà không cần phải đọc từ ổ cứng. Khi có yêu cầu thêm/sửa/xóa bản ghi, để đảm bảo hiệu suất của ứng dụng mặc định MongoDB sẽ chưa cập nhật xuống ổ cứng ngay, mà sau 60 giây MongoDB mới thực hiện ghi toàn bộ dữ liệu thay đổi từ RAM xuống ổ cứng.

## Ưu điểm của MongoDB :

- Dữ liệu lưu trữ phi cấu trúc, không có tính ràng buộc, toàn vẹn nên tính sẵn sàng cao, hiệu suất lớn và dễ dàng mở rộng lưu trữ. • Dữ liệu được caching (ghi đệm) lên RAM, hạn chế truy cập vào ổ cứng nên tốc độ đọc và ghi cao.

## Nhược điểm của MongoDB :

- Không ràng buộc, toàn vẹn nên không ứng dụng được cho các mô hình giao dịch yêu cầu độ chính xác cao.
- Không có cơ chế transaction (giao dịch) để phục vụ các ứng dụng ngân hàng.
- Dữ liệu được caching, lấy RAM làm trọng tâm hoạt động vì vậy khi hoạt động yêu cầu một bộ nhớ RAM lớn.
- Mọi thay đổi về dữ liệu mặc định đều chưa được ghi xuống ổ cứng ngay lập tức vì vậy khả năng bị mất dữ liệu từ nguyên nhân mất điện đột xuất là rất cao.

## Cài đặt NodeJS

## Cài đặt NodeJS trên Window và Mac OS

Có lẽ Window và Mac OS là hai nển tảng dễ cài đặt NodeJS nhất, bạn chỉ cần vào trang chủ của NodeJS

https://nodejs.org

Để tải về phiên bản mới nhất và cài đặt.
Sau khi cài đặt thành công, bạn hãy mởi cmd (Window), terminal (Mac OS) để kiểm tra cài đặt đã thành công hay chưa, bằng cách gõ lệnh:

node -v

Nếu xuất ra version của NodeJS tức là bạn đã cài đặt thành công. Tiếp theo là kiểm tra NPM - Công cụ quản lý package của NodeJS.

npm -v

Nếu xuất ra version của NPM bạn đã cài đặt thành công NodeJS, giờ chỉ việc lên ý tưởng và bắt đầu một project. 
VD:

##Cài đặt NodeJS trên Ubuntu (12.04, 16.00+)

Trên Ubuntu, chúng ta sẽ dùng apt để cài đặt NodeJS.
Đầu tiên, bạn nên update tất cả package của hệ điều hành để đảm bảo việc cài đặt NodeJS không gặp vấn đề.
sudo apt-get update.

## Cài NodeJS:

sudo apt-get install nodejs

## Cài đặt NPM:

sudo apt-get install npm

Để kiểm tra NPM và NodeJS đã cài đặt được chưa:
nodejs -v
npm -v

Đến đây bạn sẽ thắc mắc vì sao trên Window, Mac OS, ta dùng lệnh node -v nhưng sao trên Ubuntu lại là nodejs -v.

Lý do là vì Ubuntu có một thành phần của hệ thống "mang tên" node rồi, nên NodeJS sinh sau, đẻ muộn đành phải dùng "tên" mới.

Điều này gây ra một số lỗi khi bạn cài NodeJS modules làm cho việc cài đặt không thành công. Để khắc phục ta sẽ symlink biến môi trường node về nodejs bằng lệnh sau:

sudo ln -s /usr/bin/nodejs /usr/bin/node

Bạn hãy kiểm tra lại version của NodeJS bằng cách:
node -v

## Cài đặt NodeJS trên CentOS

Đầu tiên bạn nên update các package của hệ điều hành bằng câu lệnh:
sudo yum -y update

Trên CentOS, chúng ta ưu tiên cài đặt NodeJS bằng cách build source, để làm được điều này, ta cần cài đặt các công cụ cần thiết bằng lệnh:

sudo yum -y groupinstall "Development Tools"

Sử dụng wget tải source NodeJS:
wget http://nodejs.org/dist/v0.10.4/node-v0.10.4.tar.gz

Giải nén và cd vào thư mục source:
tar zxf node-v0.10.4.tar.gz
cd node-v0.10.4

Chạy file config để chuẩn bị build source:
./configure Và đây là bước quan trọng nhất, chúng ta sẽ bắt đầu build:
make

Khi quá trình này hoàn thành, ta chạy tiếp lệnh này:
make install

Quá trình build source NodeJS đã hoàn thành, giờ bạn chỉ cần thực hiện bước kiểm tra xem NodeJS đã cài đặt thành công chưa như với Window, Mac OS, Ubuntu.

## Một số lỗi thường gặp

Không cài đặt NodeJS module cho project được Nếu NPM đã cài đặt thành công nhưng khi chạy lệnh:
npm install tên_module
Hoặc khi có file package.json
npm install

Mà có lỗi xuất hiện, thì rất có thể NPM trên máy của bạn đang dùng là phiên bản cũ. Chỉ cần chạy lệnh:
sudo npm install -g npm

Lệnh này sẽ update NPM với phiên bản mới nhất.

## Create a New Project

Để cài đặt các phiên bản ổn định mới nhất với các công cụ dòng lệnh:
 sudo npm –g install sails (trên linux) hoặc
npm – g install sails (trên window)

Để tạo một project mới, bạn gõ lệnh sau:
sails new myNewProject

Trong đó myNewProject là tên project của bạn. Sails sẽ tạo ra một fordoer có tên là myNewProject và add tất cả những file cơ bản cần thiết để xây dựng ứng dụng.

Sau khi bạn tạo được project bạn cần di chuyển con trỏ tới forder chứa project đó bằng lệnh:
cd myNewProject

Để chạy project bạn tiếp tục gõ lệnh:
sails lift

Mặc định cổng của Sails là 1337, vì vậy bạn chỉ cần gõ vào trình duyệt là: http://localhost:1337 và bạn sẽ nhìn thấy trang default của Sails. 

# Cấu trúc phần server
## The assets Folder

The assets folder chứa các forder con của các tập tin javascript, css mà chúng ta muốn đưa vào trong quá trình xây dựng. Đây là nơi mà các bạn nên để các file đó, tránh trường hợp để linh tinh các file sai vị trí.

## The public Folder

Chứa tất cả những file bạn muốn public, ví dụ như hình ảnh, video, hay favicon ….

## The config Folder

Đây là một trong những thư mục quan trọng nhất của hệ thống. Sails đã thiết kế sao cho nó linh hoạt nhất.Nó xây dựng 1 quy ước chuẩn song nó cũng cho phép các developer có thể thay đổi các quy định này.
adapters.js – được sử dụng để cấu hình các bộ điều hợp cơ sở dữ liệu
connection.js – File thiết lập chung cho cấu hình như config cho CSDL
assets.js – asset settings for CSS and JS
bootstrap.js – code trong file này sẽ được chạy trước khi hiển thị ứng dụng ra màn hình
locales – folder chứa bản dịch
policies.js – user rights management configuration
routes.js – Sử dụng để điều hướng hệ thống
views.js – Xem các cài đặt liên quan

## The views Folder

Foder này chúng ta sẽ sử dụng để xây dựng giao diện, các layout, bố cục, các file, forder chức năng thể hiện cho người dùng sẽ được xây dựng ở đây. Nói cách khác đây chính là tầng View của mô hình MVC. Chú ý file layout.ejs, nó là file thể hiện bố cục chung nhất, những liên kết với các file css, js sẽ được thể hiện ở đây.

## The api Folder

Thư mục này có chứa các forder con:

- adapters folder sử dụng bởi các ứng dụng xử lý các kết nối với csdl.
- controllers folder chưa các file controller, đây là tầng controller trong mô hình MVC.
- Model forder: tầng Model trong mô hình MVC, chứa các khai báo, các biến CSDL
- Policies folder lưu trữ quy tắc cho người dùng truy cập ứng dụng.
- The api services implemented by the app are stored in the services folder.

# Các API cung cấp:

## APIs cho UserController:

-GET/users/user-id : Nhận thông tin về chủ sở hữu của access_token.
-GET/users/user-id/media/recent :Nhận thông tin về người sử dụng.
-GET/users/self/media/recent : Lấy media gần đây nhất được công bố bởi các chủ sở hữu của access_token.
-GET/users/user-id/media/recent : Lấy phương tiện truyền thông gần đây nhất được công bố bởi một người dùng.
-GET/users/self/media/liked : Lấy danh sách các media gần đây được 'like'của chủ sở hữu của access_token.

## APIs cho MediaController:

-GET/media/media-id : Lấy thông tin về 1 media.

## APIs cho FollowerController:

-GET /users/self/follows: Lấy danh sách người theo dõi chính người dùng này.
-GET /users/self/followed-by : Lấy danh sách người dùng mà chính người này theo dõi.
-GET /users/self/requested-by: Lấy danh sách người dùng gửi yêu cầu theo dõi.
-GET /users/user-id/relationship: Lấy mối quan hệ với 1 người dùng bất kì.
-POST /users/user-id/relationship : Tạo mối quan hệ với 1 người dùng.

## APIs cho CommentController:

-GET/media/media-id/comments : Lấy danh sách các commnet của 1 media. 
-POST/media/media-id/comments : Tạo 1 comment trên 1 media và phải thỏa mãn một số luật lệ.
-DEL/media/media-id/comments/comment-id : Xóa comment trên 1 media.

## APIs cho LikeCotroller:

-GET/media/media-id/likes : Lấy danh sách người dùng like media.
-POST/media/media-id/likes : Tạo 1 like trên media.
-DEL/media/media-id/likes : Xóa bỏ like trên media.

## APIs cho LocationController:

-GET/locations/location-id : Lấy thông tin về địa điểm.
-GET/locations/location-id/media/recent : Lấy danh sách media được đánh dấu trên địa điểm này.
-GET/locations/search : Tìm kiếm một vị trí bằng tọa độ địa lý.

## Database: Sử dụng MongoBD
 


