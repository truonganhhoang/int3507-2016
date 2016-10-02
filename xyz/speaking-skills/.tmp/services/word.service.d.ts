import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export declare class WordService {
    private http;
    constructor(http: Http);
    getWord(name: any): Promise<Object[]>;
}
