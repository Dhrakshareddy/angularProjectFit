export class Workout{
    constructor(
        public workoutId:number,
        public workoutDate:Date,
        public duration:string,
        public caloriesBurned:string,
        public note:string,
        public userId:number,

    ){}
}