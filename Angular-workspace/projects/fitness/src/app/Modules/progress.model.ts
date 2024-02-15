export class Progress{
    constructor(
        public progressId:number,
        public userId:number,
        public date:Date,
        public weight:number,
        public fitnessTestResults:number

    ){}
}