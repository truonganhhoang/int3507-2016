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
var vocabulary_service_1 = require('../../services/vocabulary.service');
var VocabularyComponent = (function () {
    function VocabularyComponent(vocabularyService) {
        var _this = this;
        this.vocabularyService = vocabularyService;
        this.vocabularyService.getAllVoca()
            .subscribe(function (vocabularies) {
            _this.vocabularies = vocabularies;
        });
    }
    VocabularyComponent.prototype.addVoca = function (event) {
        var _this = this;
        event.preventDefault();
        var newVoca = {
            en: this.en,
            type: this.type,
            vi: this.vi
        };
        //this.vocabularies.push(newVoca);
        this.vocabularyService.addVoca(newVoca)
            .subscribe(function (vocabulary) {
            _this.vocabularies.push(vocabulary);
            _this.en = '';
            _this.vi = '';
        });
    };
    VocabularyComponent.prototype.deleteVoca = function (id) {
        var vocabularies = this.vocabularies;
        this.vocabularyService.deleteVoca(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < vocabularies.length; i++) {
                    if (vocabularies[i]._id == id) {
                        vocabularies.splice(i, 1);
                    }
                }
            }
        });
    };
    VocabularyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vocabulary',
            templateUrl: 'vocabulary.component.html'
        }), 
        __metadata('design:paramtypes', [vocabulary_service_1.VocabularyService])
    ], VocabularyComponent);
    return VocabularyComponent;
}());
exports.VocabularyComponent = VocabularyComponent;
//# sourceMappingURL=vocabulary.component.js.map