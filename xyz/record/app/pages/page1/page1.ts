import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Platform, Page, Events} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';

declare var cordova: any;

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})

export class Page1 {

  constructor(public navCtrl: NavController) {
  }
   	private _fileRecord: MediaPlugin;
    private _pathFile: string;
    private _nameFile: string;

    public startRecord(): void {
        this._pathFile = this.getPathFileRecordAudio();
        alert(this._pathFile);
        this._fileRecord = new MediaPlugin(this._pathFile);
        this._fileRecord.startRecord();
    }

    public stopRecord(): void {
        this._fileRecord.stopRecord();
    }

    private startPlay(): void {
        this._fileRecord = new MediaPlugin(this._pathFile);
        this._fileRecord.play();
    }

    private getPathFileRecordAudio(): string {
	    let path: string = cordova.file.externalRootDirectory;
	    return path + 'test.amr';
	}
}
