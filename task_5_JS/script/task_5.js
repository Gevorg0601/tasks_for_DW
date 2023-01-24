// //1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։
// let pro = prompt('Մուտքագրել տեքստ');
// let firstLetter = ()=>{
//     if(pro.charAt(0) === 'a' || pro.charAt(0) === 'o'){
//         console.log(pro)
//     }else{
//         let reverseStr = pro.split('').reverse().join('')
//         console.log(reverseStr)
//     }
// }
// firstLetter();

// //1. Ստուգել, արդյո՞ք ներմուծված սթրինգը սկսվում է a կամ o-ով։ Եթե հա տպենք սթրինգն ինչպես կա, իսկ հակառակ դեպքում՝ սթրինգի հակառակը։
// let pro = prompt('Մուտքագրել տեքստ');
// let firstLetter = ()=>{
//     if(pro[0] === 'a' || pro[0] === 'o'){
//         console.log(pro)
//     }else{
//         let str = '';
//         for(let i = pro.length - 1;i >= 0;i--){
//             str += pro[i]
//         }
//         return str
//     }
// }
// console.log(firstLetter());





// //2. Պահանջել մուտքագրել ծածկագիր։ Եթե ծածկագիրը պարունակում է 6-ից 12-ից նիշ և պարունակում է թվանշաններ,
// // տառեր և հետևյալ սիմվոլներից մեկը "%", տպել, որ ծածկագիրն ուժեղ է։ Հակառակ դեպքում զգուշացրեք օգտատիրոջը,
// // որ ծածկագիրը պետք է փոխվի։
// let validatePassword = () => {
//     let text = document.getElementById('info');
//     let newPassword = document.getElementById('password').value;
//     let minNum = 6;
//     let maxNum = 12;
//     let regExpString = new RegExp("[a-zA-Z]");
//     let regExpNumber = new RegExp("[0-9]");
//     let regExpSymbol = new RegExp("[!@#$%^&*]");

//     if ((newPassword.length >= minNum && newPassword.length <= maxNum) && (regExpString.test(newPassword) && regExpNumber.test(newPassword) && regExpSymbol.test(newPassword))) {
//         text.innerText = 'Ծածկագիրն ուժեղ է:';
//         text.style.color = 'green'
//     } else if (newPassword.length === 0) {
//         text.innerText = 'Պարտադիր լրացնել:'
//         text.style.color = 'red'
//     } else {
//         text.innerText = 'Ծածկագիրը թույլ է և պետք է փոխել:'
//         text.style.color = 'red'
//     }
// }





// //3. Տրված է սթրինգ։ Տպեք նոր սթրինգ, որը կպարունակի օրիգինալ սթրինգի բոլոր տառերը կրկնապատկված։
//             //Օրինակ, եթե ունենք հետևյալ սթրինգը՝ Monty, պետք է ստանանք MMoonnttyy
// let text = prompt('Մուտքագրել տեքստ');
// let logTwinChars = ()=>{
//     let split = text.split('')
//     let result = '';
//     for(let i = 0;i < split.length;i++){
//         result += split[i] + split[i]
//     }
//     return result
// }
// console.log(logTwinChars());


// let str = 'barev';
// let splitStr = str.split('').reduce((a,b)=>{
//     return a + b + b
// },[])
// console.log(splitStr);



// // 4. # Given 2 strings, a and b, return the number of the positions where they contain the
// // same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" 
// // substrings appear in the same place in both strings.
// //Տրված են a և b սթրինգերը։ Գտնել, թե քանի անգամ է դրանց մեջ 
// //նույն դիրքում հանդիպում 2 երկարությամբ նույն ենթասթրինգերը հանդիպում։

// let str = 'xxcaazz';
// let str2 = 'xxbaaz';

// let getCount = ()=>{
//     let count = 0;
//         for(let i = 0;i < str2.length - 1;i++){
//             if((str2[i] + (str2[i + 1])) === (str[i] + (str[i + 1]))){
//                 count++
//             }
//         }
//         return count
// }
// console.log(getCount());



// //5․ Տրված է թվերի զանգված։ Ֆիլտրել և ստանալ նոր զանգված, որտեղ բոլոր էլեմենտները մեծ կլինեն 6-ից։
// let numbers = [12,4,7,0,13,2,3,100];
// let getNewArr = ()=>{
//     let newArr = [];
//     numbers.filter((item,index)=>{
//         if(item > 6){
//             newArr.push(item)
//         }
//     })
//     return newArr
// }
// console.log(getNewArr());



// //6. Տրված է թվերի զանգված։ Բոլոր էլեմենտները մեծացնել 5 անգամ։
// let numbers = [1,0,8,3,40];
// let newArr = [];
// numbers.forEach((item,index)=>{
//     item *= 5
//     newArr.push(item)
// });
// console.log(newArr);



// //7․ Տրված է օգտատերերի օբյեկտների զանգված․
//             //ա) գտնել օգտատերերի միջին տարիքը

// let arr = [ {name: "John", age: 30}, {name: "Lilit", age: 25}, {name: "Ani", age: 27},
//  {name: "Karen", age: 20}, {name: "Aram", age: 32}, {name: "Luse", age: 17}];

//  let getAverageAge = ()=>{
//     let result = 0;
//     for(let item of arr){
//         result += item.age
//     }
//     return Math.round(result / arr.length)
// }
// console.log(getAverageAge());


// //////////բ) ֆիլտրել բոլոր օգտատերերին, որոնց տարիքը մեծ է 23-ից։
// let arr = [ {name: "John", age: 30}, {name: "Lilit", age: 25}, {name: "Ani", age: 27},
//   {name: "Karen", age: 20}, {name: "Aram", age: 32}, {name: "Luse", age: 17}];

// let getUsers =()=>{
//     newArr = [];
//     for(let item of arr){
//         if(item.age > 23){
//             newArr.push(item)
//         }
//     }
//     return newArr
// }
// console.log(getUsers());



// //8․ Տրված է հետևյալ օբյեկտը`
//         //ա) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի բանալիները(keys)

// let obj = {
//         id: 1,
//         firstName: "Avetiq",
//         lastName: "Avetiq",
//         age: 30,
//         address: "Komitas 15",
//         city: "Ijevan",
//         isAdmin: true,
// }
// let getNewArrKeys = ()=>{
//     let arr = [];
//     for(let key in obj){
//         arr.push(key)
//     }
//     return arr
// }
// console.log(getNewArrKeys());

//         //բ) ստանալ զանգված, որտեղ էլեմենտները կլինեն օբյեկտի արժեքները(values)

// let getNewArrValues = ()=>{
//     let newArr = [];
//     for(let key in obj){
//         newArr.push(obj[key])
//     }
//     return newArr
// }
// console.log(getNewArrValues());