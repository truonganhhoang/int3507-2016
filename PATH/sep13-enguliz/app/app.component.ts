/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
@Component({
    selector: 'my-app',
    template: `   
        <section id="head">
		<div id="mySidenav" class="sidenav">
		  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
		  <div class="row fix-menu">
		  	<div class="fix-col col-xs-12">
				<ul class="multi-column-dropdown">
		            <li><a href="#">Listening</a></li>
		            <li class="divider"></li>
		            <li><a href="#">Reading</a></li>
		            <li class="divider"></li>
		            <li><a href="#">Grammar</a></li>
	            </ul>
			</div>
		  </div>
		  	  
		</div>
		<div id="mySidenav" style="background-color: #27A8E6;" class="mobile-only">		
			<nav class="navbar navbar-inverse" role="navigation">		
			    <div class="navbar-header">
			    <div class="fix-icon"><span onclick="openNav()">&#9776;</span></div>
			    <a class="navbar-brand viademy-logo" [routerLink]="['']">
	                Enguliz
	            </a>			   
			    </div>
			    
			</nav>
		</div>
		<nav class="navbar navbar-inverse hidden-xs">
			<div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<a class="navbar-brand viademy-logo" [routerLink]="['']">
						Enguliz
					</a>
				</div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="main-menu-categories">
              <ul class="nav navbar-nav">
                <li class="dropdown active">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    Danh mục 
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu multi-column columns-1">
                        <div class="row">
                            <div class="col-sm-6">
                                <ul class="multi-column-dropdown">
                                    <li><a href="#">Listening</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Reading</a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">Grammar</a></li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left">
                <div class="form-group" id="main-menu-course-search-box">
                    <i id="main-menu-search-icon" class="fa fa-search" aria-hidden="true"></i>
                  <input type="text" id="main-menu-course-search" class="form-control" placeholder="Tìm đề tài">
                </div>    
            </form>
            <ul class="nav navbar-nav navbar-right hidden-sm" *ngIf="isLoggedIn() == false">
                <li><a [routerLink]="['register']"><div id="main-menu-register">Đăng ký</div></a></li>
                <li><a [routerLink]="['login']">Đăng nhập</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right hidden-sm" *ngIf="isLoggedIn() == true">
                <li><a [routerLink]="['profile']"><div id="main-menu-register">{{fullName}}</div></a></li>
                <li><a (click)="logout()">Đăng xuất</a></li>
            </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
        </nav>
	</section>      
    <router-outlet></router-outlet>
    <section id="regis" class="hidden-xs">
        <div class="row">
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <h3 class="via">Enguliz</h3>
                <p>Empower your career</p>
            </div>
            <div class="regis-fix col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <div style="float: left;">
                    <input type="text" id="regis" class="textregis"
                           placeholder="Nhập email của bạn để nhận các bài viết hữu ích">
                </div>
                <div style="float: left;">
                    <button type="button" class="btn btn-warning">ĐĂNG KÝ</button>
                </div>
                <div class="fix-social">
                    <div class="social-links">
                        <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                    </div>
                    <div class="social-links-y">
    
                        <a href="#"><i class="fa fa-youtube fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="footer">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div class="textfoot">
                <h2>Liên Hệ Với Enguliz</h2>
                <p>Hãy liên hệ với chúng tôi ngay khi bạn thắc mắc nhé</p>
                <div>
                    <img src="../../images/imgs/tele.png" alt="">
                    <p><span>Hotline miễn phí: <a href="">0123456789</a> </span> <br>
                        (7h00 đến 22h00 tất cả các ngày trong tuần)</p>

                    <img class="fiximgft" src="../../images/imgs/email.png" alt="">
                    <p class="fixpft"><span class="ok">Email: support@enguliz.vn</span> <br>
                        Chúng tôi sẽ phản hồi sớm nhất
                    </p>
                </div>
            </div>
        </div>

    </div>
    </section>`,
    providers: [UserService]
})

export class AppComponent implements OnInit {
    private loggedIn = false;
    public user:User;
    public email = '';
    public fullName = '';

    constructor(private service:UserService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadUserProfile() {
        let auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(
            data => {
                this.user = data;
                this.email = this.user.userName;
                this.fullName = this.user.userFullName;
            },
            err => {
                console.log(err);
            }
        )
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    logout() {
        this.service.logout(localStorage.getItem('auth_token'));
        localStorage.removeItem('auth_token');
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.loadUserProfile();
        }
    }
}