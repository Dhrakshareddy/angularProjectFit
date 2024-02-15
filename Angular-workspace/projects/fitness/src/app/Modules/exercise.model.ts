export class Exercise{
    constructor(
        public exerciseId:number,
        public exerciseName:string,
        public exerciseType:string,
        public description:string,
        public equipmentNeeded:string,
        public numberOfSets:number,
        public intensityLevel:string

    ){}
}