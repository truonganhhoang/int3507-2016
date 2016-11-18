import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ItemWrite } from './itemWrite';

@Injectable()
export class WriteService {
    private _itemUrl = 'https://api.myjson.com/bins/223b0';
    private _itemUrlNodeJs = "http://localhost:5000/item";
    private _itemUrlLocal = "./app/assets/data/writing.json"

    constructor(private _http: Http) { }

    getItemWrite(): Observable<ItemWrite[]> {
        return this._http.get(this._itemUrlLocal)
            .map((response: Response) => <ItemWrite[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
