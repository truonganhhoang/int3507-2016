import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export declare class RecordService {
    private http;
    words: Object[];
    records: Object[];
    constructor(http: Http);
    getWords(): Promise<Object[]>;
    getRecords(): Promise<Object[]>;
    createRecord(record: any): void;
}
