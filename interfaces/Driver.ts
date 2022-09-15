import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myFolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach,myFolfCoach);

for(let theCoach of theCoaches){
    console.log(theCoach.getDailyWorkout());
}