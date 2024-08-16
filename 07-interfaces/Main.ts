import {Coach} from "./Coach";
import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";

let coaches: Coach[] = [new CricketCoach(), new GolfCoach()]
for (let coach of coaches) {
    console.log(coach.getDailyWorkout())
}