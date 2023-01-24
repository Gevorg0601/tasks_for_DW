// //1․ Ստեղծել ֆունկցիա, որը կվերցնի զանգված որպես արգումենտ (սթրինգերի) և կվերադարձնի մեկ այլ լիստ,
// // որը կպարունակի այդ լիստի բոլոր այն բառերը, որոնք սկվում են ձայնավորով։

// let getVowelLetters = (arr)=>{
//     let vowels = ['a','e','i','o','u'];
//     let newArr = [];
//     for(let i = 0;i < arr.length;i++){
//         for(let j = 0;j < vowels.length;j++){
//             if(arr[i][0].toLowerCase() === vowels[j]){
//                 newArr.push(arr[i])
//             }
//         }
//     }
//     return newArr
// }
// console.log(getVowelLetters(['hi','Armenia','open','hello','world','university']));



// //2․ Ստեղծել ֆունկցիա, որը որպես արգումենտ ընդունած թիվը կստուգի և կասի այն պարզ թիվ է թե ոչ

// let checkNumbers = (num)=>{
//     if(num === 1){
//         return '1-ը ոչ պարզ թիվ է, ոչ էլ բաղադրյալ';
//     }else if(num > 1){
//         for(let i = 2;i < num;i++){
//             if(num % i === 0){
//                 return `${num}-ը պարզ թիվ չէ`
//             }
//         }
//     }return `${num}-ը պարզ թիվ է`
// }
// console.log(checkNumbers(5))


// //3․ Գրել ֆունկցիա, որը կտպի True, եթե լիստի բոլոր էլեմենտները 1 կամ 4 են։ Հակառակ դեպքում տպել False:

// let arr = [1,4,1,4,1,4,1]
// let getNumbers = ()=>{
//     for(let i = 0;i < arr.length;i++){
//         if(arr[i] === 1 || arr[i] === 4){
//             continue;
//         }
//         return false
//     }
//     return true
// }
// console.log(getNumbers());



// //4․ Ստեղծել ֆունկցիա, որը կստեղծի և կտպի լիստ, որի արժեքները [1, 30] միջակայքում գտնվող թվերի քառակուսիներն են:
// let numbers = [1,30];
// let numPow = ()=>{
//     let newArr = [];
//     for(let i = numbers[0] + 1;i < numbers[1];i++){
//         // newArr.push(i**2)
//         newArr.push(Math.pow(i,2))
//     }
//     return newArr
// }
// console.log(numPow());


//5․ Ստեղծել ֆունկցիա, որը կվերցնի մեկ արգումենտ՝ n: Վերադարձնել n երկարությամբ լիստ, 
//որը կպարունակի (-100, 400) միջակայքում գտնվող պատահական թվեր։

// let getNumbers = (n)=>{
//     let min = -100;
//     let max = 400;
//     let newArr = [];
//         while(newArr.length < n){
//             newArr.push(Math.floor(Math.random() * (max - min) + min))
//         }
//     return newArr
// }
// console.log(getNumbers(5));


// //6. Ստեղծել ֆունկցիա, որը կգումարի տրված լիստի բոլոր թվերը և կվերադարձնի այն։ Եթե տարրերից մեկը 13 է,
// // դադարեցնել հաշվարկը # և վերադարձնել մինչև այդ պահը հաշված գումարը։

// let arr = [4,5,80,13,5]
// let getSum = ()=>{
//     let sum = 0;
//     for(let item of arr){
//         if(item === 13){
//             break;
//         }
//         sum += item
//     }
//     return sum
// }
// console.log(getSum());