import {Unit} from "./unit.model";
/**
 * Created by Thinking on 09/24/2016.
 */
export class Category {
    constructor(
        public categoryId: string,
        public categoryName: string,
        public categoryThumbnail: string,
        public categoryItems: Unit[]
    ) {}
}