import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NativeService } from '../providers/native-service';

@Injectable()
export class WordService { 

  constructor(private http: Http, private nativeService: NativeService) { }

  getAllWords(): Promise<Object[]> {
    return new Promise(resolve => {
      this.http.get('assets/data/words.json').subscribe(result => {
        resolve(result.json());
      });
    });
  }

  // getWords(unitId: number): Promise<Object[]> {
  //   return new Promise(resolve => {
  //     this.http.get('assets/data/words.json').subscribe(res => {
  //       let temp = res.json();
  //       let words: Object[] = [];

  //       for (let i = 0; i < temp.length; i++) {
  //         if (temp[i].unit_id == unitId) {
  //           words.push(temp[i]);
  //         }
  //       }

  //       resolve(words);
  //     });
  //   })
  // }

  getWordsByUnit(unitId: number): Promise<Object[]> {
    let result: Object[] = [];

    return new Promise(resolve => {
      this.getAllWords().then(allWords => {
        for (let i = 0; i < allWords.length; i++) {
          if (allWords[i]['unit_id'] == unitId) {
            result.push(allWords[i]);
          }
        }

        resolve(result);
      });
    })
  }

  getLearningWords(unitId: number): Promise<Object[]> {
    let result: Object[] = [];

    return new Promise(resolve => {
      this.getWordsByUnit(unitId).then(wordsByUnit => {
        this.nativeService.getStorage('learned').then(
          data => {
            for (let i = 0; i < wordsByUnit.length; i++) {
              if (data.indexOf(parseInt(wordsByUnit[i]['id'])) < 0) {
                result.push(wordsByUnit[i]);
              }
            }
          },
          err => {
            for (let i = 0; i < wordsByUnit.length; i++) {
              // if (data.indexOf(parseInt(wordsByUnit[i]['id'])) < 0) {
                result.push(wordsByUnit[i]);
              // }
            }
          }
        );

        resolve(result);
      });
    })
  }

  getReviewWords(bookId: number): Promise<Object[]> {
    let result: Object[] = [];

    return new Promise(resolve => {
      this.getAllWords().then(allWords => {
        this.nativeService.getStorage('learned').then(
          data => {
            for (let i = 0; i < allWords.length; i++) {
              if (allWords[i]['book_id'] == bookId && data.indexOf(parseInt(allWords[i]['id'])) >= 0) {
                result.push(allWords[i]);
              }
            }
          },
          err => { }
        );

        resolve(result);
      });
    })
  }

}
