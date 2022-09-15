console.log("hello world");
let found: boolean = true;
let grade: number = 23.1;
let firstname: string = "Lin";
let lastname: string = "Oscar";
let myData: any;
console.log(`hi ${firstname} ${lastname}`);
console.log("question is " + found);


let reviews: number[] = [5, 5, 0, 13, 455, 0.5];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    console.log(total+= reviews[i]);
}
let avarage: number = total/ reviews.length;
console.log(`avarage = ${avarage}`);

let sports: string[]=["go","cr","te","sw"];
sports.pop();
sports.push("ba");
for(let sport of sports){
    console.log(sport);
}