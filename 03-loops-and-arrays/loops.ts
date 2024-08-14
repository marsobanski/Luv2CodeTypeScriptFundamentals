/** podstawowa iteracja **/
for (let i = 0; i < 10; i++) {
    console.log(i);
}
/** iteracja z 'of' **/
let reviews: number[] = [3, 4.5, 3.8, 5, 4.7]
let sum: number = 0;
for (let review of reviews) {
    sum += review;
}
console.log("Average " + sum / reviews.length)

/** dodawanie do tablicy**/
let sports: string[] = ["Golf", "Baseball", "Soccer"]
sports.push("Volleyball")
sports.push("Basketball")
for (let sport of sports) {
    console.log(sport)
}