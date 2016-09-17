<h1>Hướng dẫn tạo ứng dụng demo Hello World </h1>
Được dịch từ tài liệu <a href="https://angular.io/docs/ts/latest/quickstart.html">https://angular.io/docs/ts/latest/quickstart.html</a>
<h2><span style="font-weight: 400;">Các bước xây dựng ứng dụng:</span></h2>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Tiền điều kiện: Cài đặt Node.js và npm</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 1: Tạo và cấu hình cho project</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 2: Tạo app</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 3: Tạo một component và thêm nó vào app</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 4: Khởi động ứng dụng</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 5: Xác định web lưu trữ app</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 6: Build và chạy app</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Bước 7: Thực hiện một số thay đổi</span></li>
</ul>
<h2><span style="font-weight: 400;">Tiền điều kiện:  Cài đặt Node.js và npm</span></h2>
<span style="font-weight: 400;">Yêu cầu: <strong>Node.js v5.x.x</strong> hoặc cao hơn, <strong>npm 3.x.x</strong> hoặc cao  hơn</span>

<span style="font-weight: 400;">- Node là một chương trình dùng để chạy các file javascript </span>

<span style="font-weight: 400;">- NPM là viết tắt của Node Package Manager cung cấp hai chức năng sau:</span>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Tạo các online repository cho node.js mà có thể tìm kiếm được tại địa chỉ </span><a href="http://search.nodejs.org/"><span style="font-weight: 400;">search.nodejs.org</span></a></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Cung cấp các tiện ích để cài đặt gói Node.js, quản lí version và quản lí phụ thuộc của các gói trong Node.js.</span></li>
</ul>
<h2><span style="font-weight: 400;">B1: Tạo và cấu hình ứng dụng</span></h2>
<h3><span style="font-weight: 400;">Tạo project folder</span></h3>
<pre>mkdir angular2-quickstart
cd angular2-quickstart</pre>
<h3><span style="font-weight: 400;">Tạo các file cấu hình</span></h3>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>package.json</strong> xác định các package npm cần cho project</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>tsconfig.json</strong> xác định cách trình biên dịch TypeScript tạo ra Javascript từ các file trong project</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>typings.json</strong> cung cấp các file định nghĩa bổ sung cho thư viện mà trình biên dịch TypeScript không nhận ra</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>systemjs.config.js</strong> cung cấp thông tin cho một module về nơi để tìm app module, và đăng ký tất cả các packages cần thiết. </span></li>
	<li style="font-weight: 400;">Chi tiết các file xem tại <a href="https://angular.io/docs/ts/latest/quickstart.html" target="_blank">https://angular.io/docs/ts/latest/quickstart.html</a></li>
</ul>
<h3><span style="font-weight: 400;">Cài đặt các packages</span></h3>
<span style="font-weight: 400;">Sử dụng npm từ command line, cài đặt các packages được liệt kê ở package.json với dòng lệnh</span>
<pre class="prettyprint undefined lang-sh ng-scope prettyprinted"><code><span class="pln">npm install</span></code></pre>
<span style="font-weight: 400;">Nếu folder typings không xuất hiện sau khi chạy npm install, bạn sẽ cần cài đặt thủ công bằng cách</span>
<pre class="prettyprint undefined lang-sh ng-scope prettyprinted"><code><span class="pln">npm run typings install</span></code></pre>
<h2><span style="font-weight: 400;">B2: Tạo ứng dụng của bạn</span></h2>
<span style="font-weight: 400;">Bạn tạo các ứng dụng Angular thành các khối liên quan chặt chẽ về chức năng với <strong>NgModule</strong>.</span>

<span style="font-weight: 400;">Bản thân Angular sẽ được chia thành một vài Angular Modules. Điều này làm cho nó có tải trọng nhỏ bởi chỉ nhận các phần của Angular mà ứng dụng của bạn cần.</span>

<span style="font-weight: 400;">Mỗi ứng dụng Angular có ít nhất một module: module gốc, tên là <strong>AppModule</strong></span>

<span style="font-weight: 400;">Tạo file <strong>app/app.module.ts</strong> với nội dung như sau</span>
<pre class="prettyprint  lang-ts ng-scope prettyprinted"><code><span class="kwd">import</span> <span class="pun">{</span> <span class="typ">NgModule</span> <span class="pun">}</span>      <span class="kwd">from</span> <span class="str">'@angular/core'</span><span class="pun">;</span>
<span class="kwd">import</span> <span class="pun">{</span> <span class="typ">BrowserModule</span> <span class="pun">}</span> <span class="kwd">from</span> <span class="str">'@angular/platform-browser'</span><span class="pun">;</span>

<span class="lit">@NgModule</span><span class="pun">({</span><span class="pln">
  imports</span><span class="pun">:</span>      <span class="pun">[</span> <span class="typ">BrowserModule</span> <span class="pun">]</span>
<span class="pun">})</span>
<span class="kwd">export</span> <span class="kwd">class</span> <span class="typ">AppModule</span> <span class="pun">{</span> <span class="pun">}</span></code></pre>
<span style="font-weight: 400;">Đây là điểm vào của ứng dụng</span>

<span style="font-weight: 400;">Vì QuickStart app là ứng dụng chạy trên browser, file root module cần phải import <strong>BrowserModule</strong> từ <strong>@angular/platform-browser</strong> trong dãy <strong>import</strong>.</span>

<span style="font-weight: 400;">Đây là điều tối thiểu mà Angular cần cho một ứng dụng nhỏ chạy trên browser</span>
<h2><span style="font-weight: 400;">B3: Tạo một component và thêm nó vào app</span></h2>
<span style="font-weight: 400;">Mỗi ứng dụng Angular có ít nhất một component: root component tên là <strong>AppComponent</strong></span>

<span style="font-weight: 400;">Các components là các khối xây dựng cơ bản của app. Một component điều khiển một phần màn hình - một view - thông qua việc liên kết với template</span>

<span style="font-weight: 400;">Tạo component file <strong>app/app.component.ts</strong> với nội dung sau</span>
<pre>import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }</pre>
<span style="font-weight: 400;">QuickStart App có cấu trúc như các Angular component khác</span>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>import statement</strong>: việc importing giúp component truy cập vào core của Angular  @Component decorator function.</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>@Component decorator</strong> liên kết metadata với AppComponent class</span></li>
</ul>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>selector</strong>: xác định selector cho một phần tử HTML thể hiện component</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>template</strong>: cho Angular biết cách để render ra một view của component</span></li>
</ul>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;"><strong>class component</strong> điều khiển sự xuất hiện và hành vi của một view thông qua template của nó. Ở đây, bạn chỉ có root component, AppComponent. </span></li>
</ul>
<span style="font-weight: 400;">Bạn export AppComponent class vì vậy bạn cần import nó vào app khi bạn mới tạo </span>

<span style="font-weight: 400;">Sửa file app/app.module.ts để import AppComponet và thêm nó trong declarations và bootstrap trong khai báo @NgModule.</span>

&nbsp;
<h2><span style="font-weight: 400;">B4: Khởi động app</span></h2>

<span style="font-weight: 400;">Tạo file <strong>app/main.ts</strong> với nội dung sau:</span>
<pre>import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);</pre>
<span style="font-weight: 400;">Code này khởi tạo platform mà ứng dụng bạn chạy và sử dụng platform để bootstrap AppModule</span>

&nbsp;

<h2><span style="font-weight: 400;">B5: Xác định trang web lưu trữ ứng dụng</span></h2>
<span style="font-weight: 400;">Trong thư mục gốc, tạo file <strong>index.html</strong> và copy những dòng dưới đây vào</span>
<pre>&lt;html&gt;
 &lt;head&gt;
 &lt;title&gt;Angular 2 QuickStart&lt;/title&gt;
 &lt;meta charset="UTF-8"&gt;
 &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
 &lt;link rel="stylesheet" href="styles.css"&gt;
 &lt;!-- 1. Load libraries --&gt;
 &lt;!-- Polyfill(s) for older browsers --&gt;
 <a href="http://node_modules/core-js/client/shim.min.js">http://node_modules/core-js/client/shim.min.js</a>
 <a href="http://node_modules/zone.js/dist/zone.js">http://node_modules/zone.js/dist/zone.js</a>
 <a href="http://node_modules/reflect-metadata/Reflect.js">http://node_modules/reflect-metadata/Reflect.js</a>
 <a href="http://node_modules/systemjs/dist/system.src.js">http://node_modules/systemjs/dist/system.src.js</a>
 &lt;!-- 2. Configure SystemJS --&gt;
 <a href="http://systemjs.config.js">http://systemjs.config.js</a>
 
 System.import('app').catch(function(err){ console.error(err); });
 
 &lt;/head&gt;
 &lt;!-- 3. Display the application --&gt;
 &lt;body&gt;
 &lt;my-app&gt;Loading...&lt;/my-app&gt;
 &lt;/body&gt;
&lt;/html&gt;</pre>
<span style="font-weight: 400;">Thêm một vài style</span>

Style không cần thiết, nhưng chúng làm cho app đẹp hơn, và index.html cần khai báo chúng có stylesheet tên là <strong>styles.css</strong>

Tạo styles.css trong thư mục gốc, và bắt đầu style, có thể với những style nhỏ dưới đây
<pre>/* Master Styles */
h1 {
 color: #369;
 font-family: Arial, Helvetica, sans-serif;
 font-size: 250%;
}
h2, h3 {
 color: #444;
 font-family: Arial, Helvetica, sans-serif;
 font-weight: lighter;
}
body {
 margin: 2em;
}</pre>
&nbsp;

<h2><span style="font-weight: 400;">B6: Xây dựng và chạy ứng dụng</span></h2>
<span style="font-weight: 400;">Mở terminal window và chạy</span>
<pre class="prettyprint undefined lang-undefined ng-scope prettyprinted"><code><span class="pln">npm start</span></code></pre>
<span style="font-weight: 400;">Dòng command này chạy 2 quá trình song song</span>
<ul>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Trình biên dịch TypeScript trên watch mode</span></li>
	<li style="font-weight: 400;"><span style="font-weight: 400;">Một file server tĩnh gọi lite-server sẽ load index.html trong trình duyệt và làm mới trình duyệt khi các file app thay đổi</span></li>
</ul>
<h2><span style="font-weight: 400;">B7: Thực hiện một vài thay đổi trực tiếp</span></h2>
<span style="font-weight: 400;">Thử thay message trong <strong>app/app.component.ts</strong> thành Hello World</span>

<span style="font-weight: 400;">Trình biên dịch TypeScript và lite-server sẽ phát hiện thay đổi của bạn, complile lại TypeScript thành Javscript, làm mới trình duyệt và hiển thị message đã sửa đổi</span>

----THE END----

&nbsp;
