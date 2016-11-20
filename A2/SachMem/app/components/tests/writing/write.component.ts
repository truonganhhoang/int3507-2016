import {Component, OnInit, OnChanges, AfterContentInit} from '@angular/core'
import {ItemWrite} from './itemWrite'
import { WriteService } from './write.service';
import {HttpModule} from '@angular/http';

@Component({
    templateUrl: './app/components/tests/writing/write.component.html',
    styleUrls: ['./app/components/tests/writing/write.component.css'],
    providers: [WriteService, HttpModule]
})

export class WriteComponent implements OnInit, OnChanges, AfterContentInit {
    _arrayItemWrite: ItemWrite[];
    _arrayAnswer: string[] = ["", "", ""];
    errorMessage: string;
    test: number;
    result: boolean;

    constructor(private _writeService: WriteService) {
    }
    ngOnInit(): void {
        console.log("ONInit");

        this._writeService.getItemWrite()
            .subscribe(
            itemWrites => this._arrayItemWrite = itemWrites,
            error => this.errorMessage = <any>error);
    }
    clickMe() {
        let count : number = 0;
        for (let i = 0; i < this._arrayItemWrite.length; i++) {
            if (this._arrayAnswer[i] == this._arrayItemWrite[i]._result) {
                count++;
            } else {
                this.result = false;
                break;
            }
        }
        console.log(count+"");
        if(count == 3){
            this.result = true;
        }

    }
    ngOnChanges() {
        console.log("OnChanges");

    }
    ngAfterContentInit() {
        // this.test = this._arrayItemWrite.length;
    }
}