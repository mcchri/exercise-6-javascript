//while loop through 1 to 10
let x = 1;
while(x<=10){
    console.log(x);
    x++;
}
//do while loop the even numbers from 1 to 100
let y = 2;

do{
console.log(y);
y = y+2;
}while(y<101)
//find the awnser to the base times the power
let power = Number(prompt("Enter power"));
let base = Number(prompt("Enter Base"));
let multi = 1;
while(power>0){
    multi = multi * base;
    power--;
}
console.log(multi);
// the star triangle
let rows = Number(prompt("Enter rows"));
let star = "*";

do{
    console.log(star);
    star = star + "*";
    rows--;
}while(rows>0)
//count how many digits
let nump = 333802937598;
let count = 0;
while(nump > 1){
    nump = nump / 10;
    count = count + 1;
}
console.log(count);
//add up the digits from the number
let numq = 3333;
let sum = 0;
while(numq > 0){
    sum = sum + (numq % 10);
    numq = Math.round(numq/10);
}
console.log(sum);