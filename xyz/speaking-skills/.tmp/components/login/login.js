import { Component } from '@angular/core';
import { GooglePlus } from 'ionic-native';
/*
  Generated class for the Login component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
export var Login = (function () {
    function Login() {
        console.log('Hello Login Component');
    }
    Login.prototype.ngOnInit = function () {
        //this.loginSilent();
    };
    Login.prototype.login = function () {
        var _this = this;
        GooglePlus.login({
            'scopes': 'https://www.googleapis.com/auth/drive',
            'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
            'offline': true,
        }).then(function (res) {
            _this.profile = res;
            alert(JSON.stringify(res));
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
            alert(JSON.stringify(res));
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
    Login.decorators = [
        { type: Component, args: [{
                    selector: 'login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    Login.ctorParameters = [];
    return Login;
}());
