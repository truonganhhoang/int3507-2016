import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RecordService { 
	words: Object[];
  records: Object[];

  constructor(private http: Http) { }

  getWords(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('https://xyz-server.herokuapp.com/api/words').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

  getRecords(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('https://xyz-server.herokuapp.com/api/records').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

  createRecord(record){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('https://xyz-server.herokuapp.com/api/records', JSON.stringify(record), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }

}