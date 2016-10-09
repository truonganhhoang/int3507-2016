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
import { GooglePlus } from 'ionic-native';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
/*
  Generated class for the Login component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export var Login = (function () {
    function Login(http) {
        this.http = http;
        console.log('Hello Login Component');
    }
    Login.prototype.ngOnInit = function () {
        //this.loginSilent();
    };
    Login.prototype.login = function () {
        var _this = this;
        GooglePlus.login({
            'scopes': 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file',
            'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
            'offline': true,
        }).then(function (res) {
            _this.profile = res;
            alert(res.serverAuthCode);
            alert('token' + res.oauthToken);
            var data = {
                client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
                client_secret: 'DXCJ-YeBLOcuY49Hq1OsbUmi',
                grant_type: 'authorization_code',
                code: res.serverAuthCode
            };
            var body = 'client_id=' + data.client_id +
                '&client_secret=' + data.client_secret +
                '&grant_type=' + data.grant_type +
                '&code=' + data.code;
            var headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
            _this.http.post('https://www.googleapis.com/oauth2/v3/token', body, headers)
                .subscribe(function (res) {
                alert('succes' + res.json());
            }, function (err) {
                alert('erro' + err.json());
            });
            // let test = 'ya29.CjV2A0MFYoZmXdiZKJ5c2ljyNgYzkj61PHdq9KzkUGiwDh-8-m8G-yASwj7OPHRZa7suqVR1Yg'
            //  gapi.client.load('drive', 'v2', function() {
            //   var request = gapi.client.request({
            //        path : 'https://www.googleapis.com/drive/v2/files?access_token='+test,
            //        method : 'GET',
            //        params : {
            //             projection: "FULL",
            //             maxResults: 5
            //        }
            //   });
            //   request.execute(function(response) {
            //        alert(JSON.stringify(response));   
            //   });
            //  });
        }, function (err) {
            alert(err);
        });
    };
    Login.prototype.loginSilent = function () {
        var _this = this;
        GooglePlus.trySilentLogin({
            'scopes': 'https://www.googleapis.com/auth/drive',
            'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
            'offline': true,
        }).then(function (res) {
            _this.profile = res;
        }, function (err) {
            alert(err);
        });
    };
    Login.prototype.logout = function () {
        GooglePlus.logout().then(function (res) {
            alert(res);
        });
    };
    Login.prototype.disconnect = function () {
        GooglePlus.disconnect().then(function (res) {
            alert(res);
        });
    };
    Login = __decorate([
        Component({
            selector: 'login',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [Http])
    ], Login);
    return Login;
}());
