import {Anwser} from "./anwser.model";
/**
 * Created by Thinking on 10/02/2016.
 */
export class Question {
    constructor(
       _id: string,
       question: string,
       unitIdRef : string,
       anwsers: Anwser[]
    ) {}
}