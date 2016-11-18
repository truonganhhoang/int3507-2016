import { Component } from '@angular/core';

@Component({
    templateUrl: './app/components/tests/completeSentence/rac.component.html',
    styleUrls: ['./app/components/tests/completeSentence/rac.component.css']
})
export class RacComponent {
    _answer1: string;
    _answer2: string;
    _answer3: string;
    _result: boolean;
    _clicked: boolean = false;
    _guide: boolean = false;
    _guideAnswer: string[] = ["rain", "football", "car"];
    constructor() {

    }
    check1() {
        this._clicked = true;
        console.log("Giang");
        if (this._answer1 == "rain" && this._answer2 == "football" && this._answer3 == "car") {
            this._result = true;
        } else {
            this._result = false;
        }
        console.log(this._answer1 + " " + this._answer2 + " " + this._answer3);
        console.log(this._result + " ");
    }

    hint(){
       
        if(this._guide == false){
            this._guide = true;
        }else{
            this._guide = false;
        }
         console.log(this._guide +"");
    }

}