import { Component } from '@angular/core';
// import { NavController, AlertController } from 'ionic-angular';
// import { AudioRecorder, AudioRecorderState } from '../../services/audiorecorder';
import {Platform, Page, Events} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';
declare var cordova: any;

@Component({
  templateUrl: 'build/pages/home/home.html',
  //providers: [AudioRecorder]
})
export class HomePage {
  
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