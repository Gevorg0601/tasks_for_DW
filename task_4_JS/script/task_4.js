// //1․ Տրված են երկու թվեր, տպեք դրանցից մեծը
// let getBigNum = (num1,num2)=>{
//     if(num1 > num2){
//         console.log(num1)
//     }else{
//         console.log(num2)
//     }
// }
// getBigNum(2,7)


// //2․ Տրված է բնական թիվ։ Ստուգեք արդյոք վերջին թվանշանը 2 է։ 
// let pro = prompt('Մուտքագրեք ցանկացած թիվ')

// let num = pro % 10;
// if (num === 2){
//     alert('Վերջին թվանշանը 2 է')
// }else{
//     alert('Վերջին թվանշանը 2 չէ')
// }


// //3․ Տրված է երկու հեռավորություն, մեկը կիլոմետրով, մյուսը մետրով։ Գտեք որն է ավելի մեծ։ 
// let mm = 1;
// let sm = 10 * mm;
// let m = 10 * sm;
// let km = 10 * m;

// let compareValues = () => {
//     let resultMeter;
//     let resultKilometer;
//      let meterPrompt = prompt('Մուտքագրեք թիվ մետրով');
//      resultMeter = meterPrompt * m * sm * mm
//     let kilometerPrompt = prompt('Մուտքագրեք թիվ կիլոմետրով');
//         resultKilometer = kilometerPrompt * km * m * sm * mm
//         if (resultMeter > resultKilometer) {
//                 alert(`${meterPrompt} մետրը մեծ է ${kilometerPrompt} կիլոմետրից`)
//             } else if(resultMeter < resultKilometer){
//                 alert(`${kilometerPrompt} կիլոմետրը մեծ է ${meterPrompt} մետրից`)
//             }else if(resultMeter === resultKilometer){
//                 alert(`${kilometerPrompt} կիլոմետրը հավասար է ${meterPrompt} մետրին`)
//             }
// }
// compareValues();




// //4․ Գտնել զանգվածի երկարություն
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let getArrLength = ()=>{
//    console.log(arr.length)
// }
// getArrLength()


// //5. Տպել զանգվածի բոլոր էլեմենտները
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let logAllNums = ()=>{
//     for(let item of arr){
//         console.log(item)
//     }
// }
// logAllNums();


// //6․ Գտնել զանգվածի բոլոր թվերի գումարը
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let sumOfAllNums = ()=>{
//     let result = 0;
//     for(let item of arr){
//         result +=item
//     }
//     console.log(result)
// }
// sumOfAllNums();


// //7․ Գտնել թե քանի 1 կա զանգվածում
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let get_1 = ()=>{
//     let result = 0;
//     for(let item of arr){
//         if(item === 1){
//             result++
//         }
//     }return result
// }
// console.log(get_1());


// //8․ Գտնել զույգ թվերի քանակը
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let getEvenNums = ()=>{
//     let evenNums = 0;
//     for(let item of arr){
//         if(item % 2 === 0){
//             evenNums++
//         }
//     }return evenNums
// }
// console.log(getEvenNums());


// //9․ Գտնել կենտ էլեմենտների քանակը
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let getOddNums = ()=>{
//     let oddNums = 0;
//     for(let item of arr){
//         if(item % 2 !== 0){
//             oddNums++
//         }
//     }return oddNums
// }
// console.log(getOddNums());


// //10․ Գտնել զանգվածի մինիմում արժեքը
// let arr = [1, 3, 7, 5, 9, -8, 1, 9, 10, 11, 45];
// let getMinNum = ()=>{
//     let min = arr[0]
//     for(let item of arr){
//         if(item < min){
//             min = item
//         }
//     }return min
// }
// console.log(getMinNum());

// let arr = [1, 3, 7, 5, 9, -8, 1, 9, 10, 11, 45];
// let getMinNum = ()=>{
//     return Math.min(...arr);
// }
// console.log(getMinNum())


// //11․ Գտնել զանգվածի մաքսիմում արժեքը
// let arr = [1, 3, 7, 5, 9, -8, 1, 9, 10, 11, 45];
// let getMaxNum = ()=>{
//     let max = arr[0]
//     for(let item of arr){
//         if(item > max){
//             max = item
//         }
//     }return max
// }
// console.log(getMaxNum());

// let arr = [1, 3, 7, 5, 9, -8, 1, 9, 10, 11, 45];
// let getMaxNum = ()=>{
//     return Math.max(...arr);
// }
// console.log(getMaxNum());



// //12. Գտնել զանգվածի էլեմենտների քառակուսիների գումարը
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let getSum = ()=>{
//     let num = 0;
//     for(let item of arr){
//         num += item**2
//     }
//     return num
// }
// console.log(getSum());



// //13*․ Շուռ տալ զանգվածը, այնպես որ վերջին արժեքը դառնա առաջինը, իսկ առաջին դառնա վերջինը և այդպես շարունակ
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let reverseArr = ()=>{
//     let newArr = [];
//     for(let i = arr.length - 1;i >= 0;i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(reverseArr());

// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let reverseArr = ()=>{
//     console.log(arr.reverse())
// }
// reverseArr();


// //14*․ Դասավորել աճման կարգով
// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let arrSort = ()=>{
//     let item;
//     for(let i = 0;i < arr.length;i++){
//         for(let j = i + 1;j < arr.length;j++){
//             if(arr[i] > arr[j]){
//                 item = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = item
//             }
//         }
//     }return arr
// }
// console.log(arrSort());

// let arr = [1, 3, 7, 5, 9, 8, 1, 9, 10, 11, 45];
// let arrSort = ()=>{
//     return arr.sort((a,b)=>a-b)
// }
// console.log(arrSort());


//15. Գտնել զանգվախի էլեմենտներից քանիսի տիպն է number
// let firstArr = ["Hello", 15, "World", true, 89,11, 157, [1, 3, 7] ];
// let secondArr = [];
// let elementFiltering = (arr)=>{
//   const result = [];
//   for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number'){
//       secondArr.push(arr[i]);
//       continue;
//     }
//     if (!Array.isArray(arr[i])) continue;
//     result.push(...elementFiltering(arr[i]));
//   }
//   return result;
// }
// elementFiltering(firstArr);
// console.log(secondArr.length)


// //16. Գտնել զանգվածի էլեմենտներից քանիսն են բուլյան տիպի
// let firstArr = ["Hello", 15, "World", true, 89,11, 157, [1, 3, 7,false] ];
// let secondArr = [];
// let elementFiltering = (arr)=>{
//   const result = [];
//   for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'boolean'){
//       secondArr.push(arr[i]);
//       continue;
//     }
//     if (!Array.isArray(arr[i])) continue;
//     result.push(...elementFiltering(arr[i]));
//   }
//   return result;
// }
// elementFiltering(firstArr);
// console.log(secondArr.length)


// //17․ Տպել զանգվածի վերջին էլեմենտի բոլոր էլեմենտները
// let arr = ["Hello", 15, "World", true, 89,11, 157, [1, 3, 7]];
// let logLastItems = ()=>{
//     for(let i = arr.length - 1;i < arr.length;i++){
//         if(Array.isArray(arr[i])){
//             return arr[i]
//         }
//     }
// }
// console.log(logLastItems());


// //18․ Տպել զանգվախի վերջին էլեմենտի բոլոր էլեմենտների գումարը
// let arr = ["Hello", 15, "World", true, 89,11, 157, [1, 3, 7]];
// let logLastItemsSum = ()=>{
//     let sum = 0;
//     for(let i = arr.length - 1;i < arr.length;i++){
//         if(Array.isArray(arr[i])){
//             for(let item of arr[i]){
//                 sum+=item
//             }
//         }
//     }return sum
// }
// console.log(logLastItemsSum());


// //19․ Տպել միայն զույգ ինդեքս ունեցող անդամները
// let arr = ["Hello", 15, "World", true, 89,11, 157,[1, 3, 7]];
// let logEvenIndex = ()=>{
//     for(let i = 0;i < arr.length;i++){
//         if(i % 2 === 0){
//             console.log(arr[i])
//         }
//     }
// }
// logEvenIndex();


// //20․ Օգտատերը ներմուծում է թիվ։ ներմուծված թվին համապատասխան տպել Ամիսը։ Չօգտագործել if
// let pro = prompt('Մուտքագրեք 1-12 ցանկացած թիվ');
// switch (pro) {
//     case '1':
//         alert("Հունվար");
//         break;
//     case '2':
//         alert("Փետրվար");
//         break;
//     case '3':
//         alert("Մարտ");
//         break;
//     case '4':
//         alert("Ապրիլ");
//         break;
//     case '5':
//         alert("Մայիս");
//         break;
//     case '6':
//         alert("Հունիս");
//         break;
//     case '7':
//         alert("Հուլիս");
//         break;
//     case '8':
//         alert("Օգոստոս");
//         break;
//     case '9':
//         alert("Սեպտեմբեր");
//         break;
//     case '10':
//         alert("Հոկտեմբեր");
//         break;
//     case '11':
//         alert("Նոյեմբեր");
//         break;
//     case '12':
//         alert("Դեկտեմբեր");
//         break;
//     default:
//     alert('Մուտքագրեք 1-12 ցանկացած թիվ')
// };


// //21. Օգտատերը ներմուծում է թվեր։ Այդ թվերը ավելացրեք զանգվածում այնքան ժամանակ մինչև չգրի "exit"
// let newArr = [];
// let pushNumbers = ()=>{
//     while(true){
//         let num = prompt('Մուտքագրեք ցանկացած թիվ');
//         if(num !== 'exit'){
//             newArr.push(Number(num));
//         }else if(num === 'exit'){
//             return newArr;
//         }
//     }
// }
// console.log(pushNumbers(newArr));




// // 22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
// // 	       ա) երկարությունը և տպել առաջինն է մեծ թե երկրորդը
// let arr1 = ['Hello','world',45, '121',true];
// let arr2 = [12,false,'Hayastan',{name:'Gevorg',surname:'Gevorgyan'}];
// let compareArrLength = ()=>{
//     if(arr1.length > arr2.length){
//         return 'մեծ է առաջին մասիվը'
//     }
//     return 'մեծ է երկրորդ մասիվը'
// }
// console.log(compareArrLength());


// // 22. Տրված են 2 զանգվածներ։ Համեմատել նրանց
// // // 	       բ) էլեմենտների գումարը և տպել առաջինն է մեծ թե երկրորդը
// let arr1 = [20,4,5];
// let arr2 = [30,7,10];
// let compareSum = ()=>{
//     let sum1 = 0;
//     let sum2 = 0;
//     for(let item of arr1){
//         sum1 += item
//     }
//     for(let item2 of arr2){
//         sum2 += item2
//     }
//     if(sum1 > sum2){
//         return ` մեծ է առաջին մասիվի էլեմենտների գումարը${sum1}`
//     }
//     return `մեծ է երկրորդ մասիվի էլեմենտների գումարը ${sum2}`
// }
// console.log(compareSum());