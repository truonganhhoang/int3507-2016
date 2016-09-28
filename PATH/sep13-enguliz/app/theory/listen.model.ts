import {Http} from "@angular/http";
/**
 * Created by Thinking on 09/15/2016.
 */
export class Listen {

    private http: Http;

    constructor(
       lessonId: string,
       lessonName: string,
       lessonThumbnail: string,
       lessonViews: number,
       lesssonCreatedDate: string
    ) {}

}