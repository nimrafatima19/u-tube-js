// Class 2
// Artimetic Operator

// let a = 5;
// let b = 2;
// console.log("a =", a,"b = ", b);
   // console.log("a + b = " , a + b);
// console.log("a - b = " , a - b);
// console.log("a * b = " , a * b);
// console.log("a / b = " , a / b);


//. Modulus % Operator in js
// console.log("a % b = " , a % b);

//. Exponentiation ** Operator in js ( use for power)
// console.log("a ** b = " , a ** b);

// unary operator
//  .increment Operator ++
//  .decrement Operator --

//              

// console.log("++a =",++a);
 

//  console.log("a++ =",a++);
// //  console.log("a++ =",a);

//  two methods 
// a++ post increment
// ++a pre increment


// Assignment Operators to asign values
//  = += -= *= %= **=

// let a = 5;
// let b = 2;

// a += 4;    // a = a + 4
// console.log("a =",a) //9


// compresion Operators to compare 2 values

// Equals t=o =     Equal to & type ===
// Not equal to !=   Not equal & type !==

// >,>=,<,<=


// let a = 5;
// let b = 2;

// console.log("5==2",a == b); //false

// Logical Operator  //true ya false return 

// *Logical AND  &&  //jb dono values true ho tw ya true answer da ga

// let a = 6;
// let b = 5;
// let cond1 = a > b; //commit to 2nd method
// let cond2 = a === 6;
// console.log("cond1 && cond2", cond1 && cond2);
//  another method
// console.log("cond1 && cond2", a > b && a === 6);

// *Logical OR || // jb dono values false hon tw false return kry ga warna true
//  example credit card or easypaisa card discount

// console.log("cond1 || cond2", a < b || a === 6);

// Logical NOT ! // value true ho tw not bana dy ga or values false ho tw true bana da ga

// console.log("!(6<5)", !(6<5));

// conditional Statments // agr condition ho jasy 18 k hon tw vote da sakty warna nhi

// *if Statment // kisi condition ko check krna

// let age = 16;

// if (age >= 18) {
//     console.log('You can Vote');
// }

// if ( age < 18) {
//     console.log("you cannot vote");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black"
// }

// if (mode === "light") {
//     color = "white"

// }
// console.log(color);


// *if else statment // agr if ki value fasle ho tw else chaly ga

// if (mode === "dark") {
//     color = "black"
// } else {
//     color = "white"
// }

// console.log(color);

// for even and odd numbers

// let num = 3;

// if (num % 2 === 0) {
//     console.log('even');

// }else{
//     console.log("odd");
// }

// else if 

// let mode = "pink";

// if (mode === "dark"){
//     color="black";
// }else if(mode === "blue"){
//     color="blue"
// }else if(mode === "pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color);

// ternary Operator: //asa operator jo tin operads pr kam kry
// let age=25;
// let result = age > 18? "adult" : "not adult";
// console.log(result);

// Exercise 
// Q1. Get user to input using prompt("Enter a number;").Check it the number is a multiple of 5 or not.


// let num = prompt("Enter a number");
// if (num % 5 === 0){
//     console.log(num,"is a multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

/* Q2 write a code which can be give grades to students according to their scores:
  *80-100,A
  *70-89,B
  *60-69,C
  *50-59,D
  *0-49,F*/

//   let num = prompt("Enter a number");
//   let Grade;
//   if (num >=90 && num <=100){
//     Grade= "A+";
//   } else if(num >=80 && num <=89){
//     Grade = "A-One";
//   } else if(num >=70 && num<=79){
//     Grade ="A";
//   }else if(num >= 60 && num<=69){
//    Grade = "B";
//   }else if(num >=50 && num<59){
//     Grade = "C"
//   }
//   else if(num >=0 && num<=49){
//     console.log("fail");
//   }
// console.log(Grade);

// Loops

// For Loop

// for (let i = 1; i<=5; i++){
//   console.log("Nimra");
// }

// let sum =0;
// let num = 5;
// for (let i = 0; i<=5; i++){
//   sum = sum + i; //sum = 15
  
// }
// console.log(sum);

// While Loop

// let i =1;
// while(i<=5){
//  console.log("i=",i);
//  i++;
// }

// Do-while

// let i =1;
// do{
//  console.log("i=",i);
//  i++;
// }while(i<=5);

// let i =1;
// do{
//   console.log("nimra");
//   i++;
// }while(i<=5);

// For of-loop

// let str = "Nimra";

// for(let i of str){
//   console.log("i=",i);
// }

//string size

// let str = "Nimra";
// let size=0;

// for(let i of str){
//   console.log("i=",i);
// size++;
// }
// console.log("string size =",size);
// let student = {
//   name:"Nimra",
//   age:20,
// };

// for( let key in student){
//   console.log("key = ",key, "value = ", student[key]);
// }

//Q1 : Print all the even numbers 0 to 100.

// let num = 0;
// for(i=0; i<=100; i++){
//   if(i%2===0){
//     console.log(i);
//   }
// }


//Q2 Create a game where you start with any random game number. Ask the user to keep gussing the game number until the user enter correct value.

let gameNum = 15;
let userNum = prompt("Guess any Number between 1 to 15")
while(userNum !=gameNum){
  userNum = prompt("Your Guess is wrong try again");

}
console.log("Congratulation , you enter right number");






 





