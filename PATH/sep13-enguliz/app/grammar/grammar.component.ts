/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
import {GrammarService} from "./grammar.service";
import {Category} from "./category.model";
import {User} from "../user/user.model";
import {Router} from "@angular/router";
import {Unit} from "../detail/unit.model";

@Component({
    templateUrl: 'app/grammar/grammar.component.html',
    providers: [GrammarService]
})

export class GrammarComponent implements OnInit {
    private loggedIn = false;

    user: User;
    email = '';

    private category: Category;
    private units: Unit[];

    constructor(
        private service: GrammarService,
        private router: Router) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadGrammarDatas() {
        this.service.getGrammarData()
            .subscribe(
                body => {
                    this.category = body;
                    this.units = body.categoryItems;
                },
                err => {
                    console.error(err);
                }
            )
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    detailsAction(unitId) {
        if(this.loggedIn) {
            this.router.navigate(['/details', unitId]);
        } else {
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
        this.loadGrammarDatas();
    }
}