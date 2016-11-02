import {Component} from "@angular/core";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

/**
 * Created by Thinking on 10/29/2016.
 */
@Component({
    templateUrl: 'app/login/register.component.html',
    providers: [RegisterService]
})
export class RegisterComponent {

    constructor(
        private registerService: RegisterService,
        private router: Router) {}

    public msg_error = "";
    public msg_success = "";

    submitRegister(username, password1, password2, phone, fullName) {
        if(password1 != password2) {
            this.msg_error = "Mật khẩu nhập lại không giống nhau?";
        } else {
            this.registerService.registerRequest(username, password1, phone, fullName)
                .subscribe(res => {
                    if(res) {
                        if(res.error == 0) {
                            this.msg_success = "Đăng ký thành công, chờ trong ít phút ... ?"
                            setTimeout(() => {
                                this.router.navigate(['login']);
                            }, 3000);
                        } else {
                            this.msg_error = res.message;
                        }
                    }
                }, err => {
                    this.msg_error = err;
        });
        }
    }
}
