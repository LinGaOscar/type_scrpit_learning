console.log("hello world");
var found = true;
var grade = 23.1;
var firstname = "Lin";
var lastname = "Oscar";
var myData;
console.log("hi " + firstname + " " + lastname);
console.log("question is " + found);
var reviews = [5, 5, 0, 13, 455, 0.5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    console.log(total += reviews[i]);
}
var avarage = total / reviews.length;
console.log("avarage = " + avarage);
var sports = ["go", "cr", "te", "sw"];
sports.pop();
sports.push("ba");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
