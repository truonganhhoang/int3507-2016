import { Injectable } from '@angular/core';

import { TextToSpeech, NativeAudio, Vibration, NativeStorage } from 'ionic-native';

@Injectable()
export class NativeService { 
  tts(text: string): void {
    TextToSpeech.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log('tts: ' + text));
  }

  playAudio(fileName: string): void {
    NativeAudio.preloadSimple(fileName, 'assets/audio/' + fileName + '.mp3')
      .then(() => {
        NativeAudio.play(fileName, () => {
          NativeAudio.unload(fileName);
        });
      })
      .catch((reason: any) => {
        var audio = new Audio('assets/audio/' + fileName + '.mp3');
        audio.play();
      });
  }

  vibrate(): void {
    Vibration.vibrate(200);
  }

  updateLearned(value) {
    value = parseInt(value);

    NativeStorage.getItem('learned').then(
      data => {
        let temp = [];
        temp = data;

        if (temp.indexOf(value) < 0) {
          temp.push(value);
        }
        
        NativeStorage.setItem('learned', temp);               
      },
      err => {
        NativeStorage.setItem('learned', [ value ]);
      }
    )
  }

  getStorage(key) {
    return NativeStorage.getItem(key);
  }
}
