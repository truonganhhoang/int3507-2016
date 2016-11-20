### Nhóm Duo

Thành viên:
- Nguyễn Vĩnh Khoa
- Vũ Minh Chính

### Cài đặt và phát triển

#### Bước 1: Clone repo tại [đây](https://github.com/truonganhhoang/int3507-2016.git), sau đó vào folder `Duo/sachmem3`.

#### Bước 2: Chạy dòng lệnh sau để cài đặt các module cần thiết:

    npm install

#### Bước 3: Tiến hành cài đặt các Cordova plugins cho ứng dụng:

    ionic plugin add cordova-plugin-nativestorage
    ionic plugin add cordova-plugin-vibration
    ionic plugin add cordova-plugin-nativeaudio
    ionic plugin add cordova-plugin-tts
    ionic plugin add cordova-plugin-googleplus
    ionic plugin add cordova-plugin-statusbar

#### Bước 4: Cài đặt platform cho ionic:

    ionic add platform android
    ionic add platform ios

#### Bước 5: Chạy thử ứng dụng trên browser:

    ionic serve

#### Bước 6: Build ứng dụng lên thiết bị Android:

    ionic build android

### Tài liệu và tham khảo

Tài liệu về ứng dụng vui lòng tham khảo tại [đây](https://drive.google.com/open?id=0B4-b8_Zs1dR-SFV0Uk9BZmkxYzg).
Tham khảo thêm về [Angular 2](https://angular.io/docs/ts/latest/) và [Ionic](http://ionicframework.com/docs/v2/).
