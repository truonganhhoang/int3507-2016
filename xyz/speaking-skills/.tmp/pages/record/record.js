var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { RecordService } from '../../services/record.service';
import { MediaPlugin } from 'ionic-native';
import { File } from 'ionic-native';
import { TextToSpeech } from 'ionic-native';
/*
  Generated class for the Record page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Record = (function () {
    function Record(navCtrl, recordService, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.recordService = recordService;
        this.platform = platform;
        this.recordService.getWords().then(function (res) {
            _this.words = res;
            _this.recordService.getRecords().then(function (res) {
                _this.records = res;
                var _loop_1 = function(i) {
                    var _loop_2 = function(j) {
                        if (_this.records[i]['word_id'] == _this.words[j]['id']) {
                            _this.words[j]['url'] = _this.records[i]['url'];
                            //on device
                            if (!platform.is('cordova'))
                                return "break";
                            else {
                                nameFile = _this.words[j]['content'] + '.mp3';
                                var fs = cordova.file.externalRootDirectory;
                                File.checkFile(fs, nameFile).then(function (_) {
                                    _this.words[j]['url'] = _this.records[i]['url'];
                                }).catch(function (err) {
                                    _this.words[j]['url'] = null;
                                });
                            }
                            return "break";
                        }
                    };
                    for (var j = 0; j < _this.words.length; j++) {
                        var state_1 = _loop_2(j);
                        if (state_1 === "break") break;
                    }
                };
                var nameFile;
                for (var i = 0; i < _this.records.length; i++) {
                    _loop_1(i);
                }
            });
        });
    }
    Record.prototype.ionViewDidLoad = function () {
        console.log('Hello Record Page');
    };
    Record.prototype.ngOnInit = function () {
    };
    Record.prototype.tts = function (text) {
        console.log(text);
        TextToSpeech.speak(text)
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    //truyền vào từ word đang cần record
    Record.prototype.startRecord = function (word) {
        word['isRecording'] = true;
        if (!this.platform.is('cordova'))
            return;
        //link lưu file ở máy
        this._pathFile = this.getPathFile(word['content']);
        //khởi tạo đối tượng Media
        this._fileRecord = new MediaPlugin(this._pathFile);
        this._fileRecord.status.subscribe(function () { });
        //bắt đầu ghi âm
        this._fileRecord.startRecord();
    };
    Record.prototype.stopRecord = function (word) {
        word['isRecording'] = false;
        if (!this.platform.is('cordova'))
            return;
        this._fileRecord.stopRecord();
        var record = {};
        record['word_id'] = word['id'];
        record['url'] = this._pathFile;
        //Lưu vào mlab
        this.recordService.createRecord(record);
        word['url'] = this._pathFile;
    };
    Record.prototype.playRecord = function (item) {
        //let path = this.getPathFile(item['content']);
        var path = item['url'];
        if (!this.platform.is('cordova'))
            return;
        this._fileRecord = new MediaPlugin(path);
        this._fileRecord.status.subscribe(function () { });
        this._fileRecord.play();
    };
    Record.prototype.getPathFile = function (name) {
        var path = cordova.file.externalRootDirectory;
        return path + name + '.mp3';
    };
    Record.prototype.checkFileExist = function (nameFile) {
        var fs = cordova.file.externalRootDirectory;
        File.checkFile(fs, nameFile).then(function (_) {
            return true;
        }).catch(function (err) {
            return false;
        });
    };
    Record = __decorate([
        Component({
            selector: 'page-record',
            templateUrl: 'record.html',
            providers: [RecordService]
        }), 
        __metadata('design:paramtypes', [NavController, RecordService, Platform])
    ], Record);
    return Record;
}());
