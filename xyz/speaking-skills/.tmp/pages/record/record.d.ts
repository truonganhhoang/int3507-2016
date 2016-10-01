import { OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { RecordService } from '../../services/record.service';
export declare class Record implements OnInit {
    private navCtrl;
    private recordService;
    ionViewDidLoad(): void;
    platform: Platform;
    words: Object[];
    records: Object[];
    private _fileRecord;
    private _pathFile;
    constructor(navCtrl: NavController, recordService: RecordService, platform: Platform);
    ngOnInit(): void;
    startRecord(word: Object): void;
    stopRecord(word: Object): void;
    playRecord(item: any): void;
    private getPathFile(name);
    checkFileExist(nameFile: any): void;
}
