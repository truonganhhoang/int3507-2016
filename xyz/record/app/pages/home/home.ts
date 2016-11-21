import { Component} from '@angular/core';
import {Platform, Page, Events} from 'ionic-angular';
import { MediaPlugin, Transfer } from 'ionic-native';


declare var cordova: any;
declare var options: any;
declare var api : any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage{
	private _fileRecord : MediaPlugin;
	private _pathFile: string;
	private _nameFile: string;
	// Create instance:
	private _fileTransfer : Transfer;


	// start record a new file
  startRecord(): void{
  	this._pathFile = this.getPathFileRecordAudio();
  	this._fileRecord = new MediaPlugin(this._pathFile);
  	this._fileRecord.startRecord();
  }

  //stop record
  stopRecord(): void{
  	this._fileRecord.stopRecord();
  }

  // save and upload to a new drive
  save(): void {
  	this._fileTransfer = new Transfer();
  	alert('aaa');

  	this._pathFile = this.getPathFileRecordAudio();

  	options = {
     	fileKey: 'file',
    	fileName: 'demo.mp3',
     	headers: {}
  	}

  	api = encodeURI("http://tinyurl.com/gp3suqb");

  	this._fileTransfer.upload(this._pathFile, api )
   .then((data) => {
     alert("Success");
   }, (err) => {
     alert("Error");
   })
  }
  
  // play after recording
  play(): void {
  	this._fileRecord = new MediaPlugin(this._pathFile);
  	this._fileRecord.play();
  }
  
  // get path to the lastest file recording
  private getPathFileRecordAudio(): string {
    let path: string = cordova.file.externalRootDirectory;
    return path + 'test.amr';
	}
}
