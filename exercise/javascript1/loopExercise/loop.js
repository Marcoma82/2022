/*
while loop
print all numbers between - 7 and 21 (inclusive);
print all even numbers between 4 and 30 (inclusive);
print all odd numbers between 4000 and 4037 (exclusive);
print all numbers divisible by 5 and 3 that are between 5 and 60 (inclusive);
*/
//print all number between -7 and 24 (inclusive)
console.log("first");
let num = -7;
while(num>=-7 && num<=21) {
    console.log(num)
    num++
};
//print even number between 4 and 30  
console.log("second");
let even = 4
while (even>=4 && even<=30) {
   if (even%2==0) {
      console.log(even)
   }
   even++
   };
//
console.log("thirt");
// all odd number between 4000 and 4037 exclusive 

let odd = 4000
 while (odd>=4000 && odd<4037){
    if (odd%2!==0) {
     console.log (odd)
     }
     odd++
     }

// number divisible by 5 and 3 between 5 and 60
let double=5;
while(double>=5 && double<=61) {
 if (double%5==0 && double%3==0){
console.log(double)
}
double++
}
////
for (let num = -7; num<=24; num++) {
       console.log(num)
}
for (let even=4; even>=4 && even<=30; even++) {
   if (even%2===0) {
console.log(even)
}};
for (let odd=4000; odd>=4000 && odd<4037; odd++) {
if (odd%2!==0) {
console.log(odd)
}};
for (let double = 5; double>=5 && double<=61; double++) {
if (double%5===0 && double%3===0) {
console.log(double)
}};

