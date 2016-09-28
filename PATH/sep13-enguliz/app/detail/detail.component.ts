/**
 * Created by Thinking on 09/24/2016.
 */
import {Component, OnInit} from "@angular/core";
import {DetailService} from "./detail.service";
import {Unit} from "../detail/unit.model";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Rx";
@Component({
    templateUrl: 'app/detail/detail.component.html',
    providers: [DetailService]
})

export class DetailComponent implements OnInit {

    unit: Unit;
    title = '';
    subTitle = '';
    views = 0;
    thumbnail = '';
    isTest = false;
    ticks = 0;
    isNotify = false;

    constructor(
        private route: ActivatedRoute,
        private service: DetailService
    ) {}

    loadDetailsData(id) {
        this.service.getDetailsData(id)
            .subscribe(
                    body => {
                        this.unit = body;
                        this.title = this.unit.unitTitle;
                        this.subTitle = this.unit.unitSubTitle;
                        this.views = this.unit.unitViews;
                        this.thumbnail = this.unit.unitThumbnail;
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
            if(t >= 10) {
                this.isTest = false;
                this.isNotify = true;
            }
            this.ticks = t;
        });
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.loadDetailsData(id);
            });
    }
}