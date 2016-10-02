import { OnInit } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { RecordService } from '../../services/record.service';
import { WordService } from '../../services/word.service';
export declare class Record implements OnInit {
    private navCtrl;
    private recordService;
    private wordService;
    private navParams;
    ionViewDidLoad(): void;
    platform: Platform;
    words: Object[];
    records: Object[];
    private _fileRecord;
    private _pathFile;
    constructor(navCtrl: NavController, recordService: RecordService, wordService: WordService, platform: Platform, navParams: NavParams);
    ngOnInit(): void;
    tts(text: any): void;
    startRecord(word: Object): void;
    stopRecord(word: Object): void;
    playRecord(item: any): void;
    private getPathFile(name);
    checkFileExist(nameFile: any): void;
}
