import { Http } from '@angular/http';
export declare class YtbSearchService {
    private http;
    key: string;
    constructor(http: Http);
    getVideos(myQuery: any): Promise<{}>;
}
