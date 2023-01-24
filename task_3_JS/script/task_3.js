// //7. Declare variable. Initialize it with the value, which shows temperature in degrees Celsius.
// //Print its equivalent in degrees Fahrenheit. To convert temperatures 	in degrees Celsius to
// //Fahrenheit use the following formula: °C * 1.8 +32 = °F .

// let c = prompt('Մուտքագրեք ջերմաստիճանը ցելսիուսով');

// let getFahrenheitDegree = ()=>{
//     let f = c * 1.8 + 32;
//     return `${f}° fahrenheit`
// }
// console.log(getFahrenheitDegree());



// //8. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

// let divisibledNums = (num1,num2)=>{
//     if(num1 % num2 === 0 || num2 % num1 === 0){
//         console.log(1)
//     }else{
//         console.log(0)
//     }
// }
// divisibledNums(4,8);



// //9.	Given three numbers. Find the maximum one.

// function findMax() {
//     let max = arguments[0]
//     for(let i = 0; i < arguments.length; i++) {
//       if (arguments[i] > max) {
//         max = arguments[i];
//       }
//     }
//     return max;
// }
// console.log(findMax(4,3,9));



// //14.  	Print all numbers between 1 and 10.

// let printNums = ()=>{
//     for(let i = 2;i < 10;i++){
//         console.log(i)
//     }
// }
// printNums();



// //15.	Print all numbers between 1 and 10 except 6.

// let printNums = ()=>{
//     for(let i = 2;i < 10;i++){
//         if(i === 6){
//             continue
//         }
//         console.log(i)
//     }
// }
// printNums();



// //16.	Print all even numbers between 1 and 10.

// let getEvenNums = ()=>{
//     for(let i = 2;i < 10;i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }
// }
// getEvenNums();



// //17.	Calculate the sum of all numbers between 1 and 10 (using loop).

// let getSum = ()=>{
//     let sum = 0;
//     for(let i = 2;i < 10;i++){
//         sum += i
//     }
//     return sum
// }
// console.log(getSum());



// //18.	Calculate the sum of all numbers between 1 and 10 except 8.

// let getSum = ()=>{
//     let sum = 0;
//     for(let i = 2;i < 10;i++){
//         if(i === 8){
//             continue;
//         }
//         sum += i
//     }
//     return sum
// }
// console.log(getSum());



// //19.	Calculate the sum of all odd numbers between 1 and 10.

// let getOddNums = ()=>{
//     let sum = 0;
//     for(let i = 2;i < 10;i++){
//         if(i % 2 !== 0){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(getOddNums());



// //20.	Calculate the sum of squares of all numbers between 1 and 10.

// let getSquaresSum = ()=>{
//     let sum = 0;
//     for(let i = 2;i < 10;i++){
//         sum += i ** 2
//     }
//     return sum
// }
// console.log(getSquaresSum());



// //22.	Given five numbers as input. Calculate and print the average of the numbers.

// function getAverageNum() {
//     let num = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         num += arguments[i] / arguments.length
//     }
//     return Math.round(num)
// }
// console.log(getAverageNum(1, 2, 3, 4, 5));