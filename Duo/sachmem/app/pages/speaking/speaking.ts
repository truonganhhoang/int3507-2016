import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var SpeechRecognition: any;

@Component({
	selector: 'speaking-page',
  templateUrl: 'build/pages/speaking/speaking.html',
  inputs: [ 'words', 'curWord' ]
})

export class SpeakingPage implements OnInit {
	allWords: Object[];
	curWord: Object;
	// recognition: any;

	texts: String = 'Khong record';
	speaking: String = 'zz';

	ngOnInit() {
			
	}

  constructor(private navCtrl: NavController) {

  }

  record() {
  	let recognition: any;
  	recognition = new SpeechRecognition();
  	
  	recognition.onresult = (event: Event) => {
  		if (event['results'].length > 0) {
  			this.speaking = event['results'][0][0].transcript;
  		 	alert(this.speaking);
  		}
  	};

  	recognition.onspeechstart = (event: Event) => {
  		this.texts = 'dang record';
  	}

  	// alert("ket thuc r:" +this.speaking);
  	recognition.start();
  }



  button() {
  	alert(this.speaking);
  }
  // record() {
  //   // alert("something");
  //   this.recognition = new SpeechRecognition(); 
  //   this.recognition.onresult = function(event) {
  //       if (event.results.length > 0) {
  //           console.log('--> text: ', event.results[0][0].transcript);
  //           // alert(event.results[0][0].transcript);          
  //           this.speaking = event.results[0][0].transcript;
  //       }
  //   };

  //   this.recognition.onaudiostart = function(event) {
  //     this.texts = 'dang record';
  //     alert("onaudiostart")
  //   }

  //   this.recognition.onend = function(event) {
  //     this.texts = 'ko record';
  //     alert("onEnd");
  //   }

  //   this.recognition.start();
  // }


}
