/**
 * Created by Thinking on 09/24/2016.
 */
export class Unit {
    constructor(
        public unitId: string,
        public unitTitle: string,
        public unitSubTitle: string,
        public unitThumbnail: string,
        public unitViews: number,
        public unitThreads: string,
        public unitCreatedDate: string,
        public categoryIdRef: string
    ) {}
}