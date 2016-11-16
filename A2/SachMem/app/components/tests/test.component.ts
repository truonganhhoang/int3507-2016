import { Component, OnInit } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {Test} from './test';

@Component({
    selector: 'quick-test',
    template: `
        <h2>Quick Test</h2>
        <div class="container">
            <ul class='list-test' *ngFor="let item of tests">
                <li><a routerLink="/{{item.name}}">{{item.content}}</a></li>  
            </ul>
        </div>
    `
})
export class TestComponent{
    public tests = TESTS;
}

var TESTS: Test[] = [
    {"name": "chooseAns", "content": "Choose correct answer"},
    {"name": "conplete", "content": "Complete sentences"},
    {"name": "tOrF", "content": "True or False"},
    {"name": "listen", "content": "Listen and choose answer"}
]