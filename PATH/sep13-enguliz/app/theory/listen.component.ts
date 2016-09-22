/**
 * Created by Thinking on 09/15/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Listen} from "./listen.model";
import 'rxjs/Rx';
import {ListenService} from "./listen.service";


@Component({
    templateUrl: 'app/theory/listen.component.html',
    providers: [ListenService],
})

export class TheoryListenComponent implements OnInit{

    listens: Listen[];

    // Constructor with injected service
    constructor(private service: ListenService) {}

    loadListens() {
        this.service.getListens()
            .subscribe(
                data => this.listens = data,
                err => {
                    console.error(err);
                }
            )
    }

    ngOnInit() {
        this.loadListens();
    }

}