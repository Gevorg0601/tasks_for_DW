// //1. 
//     //a.Զանգվածով ստանալ վերը նշված օբյեկտի key-երը:

// let obj = {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
// };
// let getKeys = ()=>{
//     let arr = [];
//     for(let key in obj){
//         arr.push(key)
//     }
//     return arr
// }
// console.log(getKeys());

//     //Զանգվածով ստանալ վերը նշված օբյեկտի value-ները
// let getValues = ()=>{
//     let arr = [];
//     for(let key in obj){
//         arr.push(obj[key])
//     }
//     return arr
// }
// console.log(getValues());


// //3․ ['author', 'title', 'readingStatus'] և ['Bill Gates', 'The Road Ahead', true] զանգվածներից ստանալ
// //օբյեկտ, որտեղ key-երը առաջին զանգվածի էլեմենտներն են, իսկ value-ները 2րդ զանգվածի։ 

// let arr1 = ['author', 'title', 'readingStatus'];
// let arr2 = ['Bill Gates', 'The Road Ahead', true];

// let getNewObj = ()=>{
//     let obj = {};
//     for(i = 0;i < arr1.length;i++){
//         obj[arr1[i]] = arr2[i]
//     }
//     return obj
// }
// console.log(getNewObj());


// //4․Սորտավորել զանգվածը ըստ յուր․ օբյեկտի libraryId-ի։
// let library = [
//     {
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     },
//     {
//         title: 'Walter Isaacson',
//         author: 'Steve Jobs',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

// // let sortById = ()=>{
// //     let item;
// //     for(let i = 0;i < library.length;i++){
// //         for(let j = i + 1;j < library.length;j++){
// //             if(library[i].libraryID > library[j].libraryID){
// //                 item = library[i].libraryID;
// //                 library[i].libraryID = library[j].libraryID;
// //                 library[j].libraryID = item
// //             }
// //         }
// //     }return library;
// // }
// // console.log(sortById());


// let sortByMethod = ()=>{
//     library.sort((a,b)=>a.libraryID - b.libraryID);
//     return library;
// }
// console.log(sortByMethod());



// //5․ Գրել ֆունկցիա, որը կջնջի զանգվածում եղած null, 0, '', "", undefined, false էլեմենտները

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47,  null];

// let removeItems = ()=>{
//     let newArr = arr.filter((item,index)=> item !== null && item !== 0 && item !== '' && item !== "" && item !== undefined && item !== false)
//     return newArr
// }
// console.log(removeItems());