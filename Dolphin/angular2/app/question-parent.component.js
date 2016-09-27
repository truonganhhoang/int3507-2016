"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_1 = require('./question');
var QuestionParentComponent = (function () {
    function QuestionParentComponent() {
        this.questions = question_1.QUESTIONS;
        this.exam = "Exam";
    }
    QuestionParentComponent = __decorate([
        core_1.Component({
            selector: 'question-parent',
            template: "\n\t\t<h2>{{exam}} have {{questions.length}} questions</h2>\n\t\t<question-child *ngFor =\"let question of questions\" \n\t\t\t[question] =\"question\">\n\t\t</question-child>"
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionParentComponent);
    return QuestionParentComponent;
}());
exports.QuestionParentComponent = QuestionParentComponent;
//# sourceMappingURL=question-parent.component.js.map