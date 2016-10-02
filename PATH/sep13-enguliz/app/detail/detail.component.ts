/**
 * Created by Thinking on 09/24/2016.
 */
import {Component, OnInit} from "@angular/core";
import {DetailService} from "./detail.service";
import {Unit} from "../detail/unit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
@Component({
    templateUrl: 'app/detail/detail.component.html',
    providers: [DetailService]
})

export class DetailComponent implements OnInit {

    public  unit: Unit;
    public  isTest = false;
    public ticks = 0;
    public isNotify = false;

    private loggedIn = false;
    private timeLimit = 60;

    constructor(
        private router:Router,
        private route: ActivatedRoute,
        private service: DetailService
    ) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadDetailsData(id) {
        this.service.getDetailsData(id)
            .subscribe(
                    body => {
                        this.unit = body;
                    },
                    err => {
                        console.log(err);
                    });
    }

    startTesting() {
        this.isTest = true;
        this.isNotify = false;
        let timer = Observable.timer(0, 999).take(11);
        timer.subscribe(t=> {
            if(this.ticks <= 1) {
                //TODO
                this.isTest = false;
                this.isNotify = true;
            }
            this.ticks = this.timeLimit - t;
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }


    ngOnInit() {
        if(this.isLoggedIn() === false) {
            return this.router.navigate['/'];
        } else {
            this.route.params
                .map(params => params['id'])
                .subscribe((id) => {
                    this.loadDetailsData(id);
                });
        }
    }
}