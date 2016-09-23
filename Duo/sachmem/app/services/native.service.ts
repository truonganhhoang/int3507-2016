import { Injectable } from '@angular/core';

import { TextToSpeech, NativeAudio } from 'ionic-native';

@Injectable()
export class NativeService { 
  tts(text): void {
    TextToSpeech.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log('tts: ' + text));
  }

  playAudio(fileName): void {
    NativeAudio.preloadSimple(fileName, 'audio/' + fileName + '.mp3')
      .then(() => {
        NativeAudio.play(fileName, () => {
          NativeAudio.unload(fileName);
        });
      })
      .catch((reason: any) => console.log('native-audio: ' + fileName));
  }
}
