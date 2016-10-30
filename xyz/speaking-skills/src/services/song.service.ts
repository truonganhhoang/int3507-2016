import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from 'ionic-native';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SongService { 

  constructor(private http: Http) { }

  saveSong(song) {
    let arrSong: Object[] = [];
    let i: number = 0;

    NativeStorage.getItem('mysong').then(data => {
      arrSong = data;
     
      for (i = 0; i < arrSong.length; i++ ) {
        //nếu video đã có trong storage thì thoát ra ngoài
        if (arrSong[i]['videoId'] == song['videoId']) {
          //alert('da co');
          break;
        }
      }

      if (i == arrSong.length) {
        arrSong.push(song);
        NativeStorage.setItem('mysong', arrSong)
          .then(
            () => console.log('saved'),
            error => console.log('Error storing item')
          );
      }
    }, 
    error => {
      alert('chua co bang');
      arrSong.push(song);
      NativeStorage.setItem('mysong', arrSong)
        .then(
          () => alert('saved'),
          error => alert('Error storing item')
        );
    });
  }

  getSong(): Promise<Object[]> {
    return new Promise(resolve => {
      NativeStorage.getItem('mysong')
      .then(
        data => {
          //alert(data);
          resolve(data);
        },
        error => {
          alert(error);
          resolve(error);
        }
      );
    });
  }
}
