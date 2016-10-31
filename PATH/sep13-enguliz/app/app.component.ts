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
        <router-outlet></router-outlet>`,
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