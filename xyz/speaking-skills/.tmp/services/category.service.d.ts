import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export declare class CategoryService {
    private http;
    category: Object[];
    constructor(http: Http);
    getCategory(): Promise<Object[]>;
}
