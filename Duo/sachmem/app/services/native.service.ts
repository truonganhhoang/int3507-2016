import { Injectable } from '@angular/core';
import { TextToSpeech } from 'ionic-native';

@Injectable()
export class NativeService { 
  tts(text): void {
  	TextToSpeech.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log('tts: ' + text));
  }
}
