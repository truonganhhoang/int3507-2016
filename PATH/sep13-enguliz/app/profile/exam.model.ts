/**
 * Created by Thinking on 10/31/2016.
 */
export class Exam {
    constructor(
      public _id: string,
      public time: number,
      public createdDate: string,
      public unitTitle: string,
      public unitType: string,
      public point: string,
      public answer: Ans[]
    ){}
}

export class Ans {
    constructor(
        public ansId: string,
        public answer: string
    ) {}
}