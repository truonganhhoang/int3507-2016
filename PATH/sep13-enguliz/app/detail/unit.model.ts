import {Question} from "./question.model";
/**
 * Created by Thinking on 09/24/2016.
 */
export class Unit {
    constructor(
        public _id: string,
        public unitTitle: string,
        public unitSubTitle: string,
        public unitThumbnail: string,
        public unitViews: number,
        public unitThreads: string,
        public unitTime: number,
        public createdDate: string,
        public categoryIdRef: string,
        public question: Question[]
    ) {}
}