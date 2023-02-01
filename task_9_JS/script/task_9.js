// // To do lists

// let input = document.getElementById('input');
// let addButton = document.getElementById('add-button');
// let toDoList = document.getElementById('to-do-list');
// let completedList = document.getElementById('completed-list');

// addButton.addEventListener('click', function () {
//     let newItem = document.createElement('li');
//     newItem.innerHTML = input.value;

//     let doneButton = document.createElement('button');
//     doneButton.innerHTML = 'Կատարված է';
//     doneButton.addEventListener('click', function () {
//         completedList.append(newItem);
//         this.remove()
//     })
//     newItem.append(doneButton)

//     let deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'Ջնջել';
//     deleteButton.addEventListener('click', function () {
//         newItem.remove()
//     })
//     newItem.append(deleteButton)

//     if (input.value) {
//         toDoList.append(newItem)
//         input.value = '';
//     }
// });



// // Gladiators.

// let numOfGladiators = +prompt("Enter the number of gladiators:");
// let arrOfGladiators = [];

// function createGladiators() {
//     for (let i = 0; i < numOfGladiators; i++) {
//         let gladiator = {
//             id: i,
//             health: Math.round(Math.random() * 20) + 80,
//             power: Math.round(Math.random() * 10) + 5
//         };
//         arrOfGladiators.push(gladiator);
//     }
// }

// function getRandomGladiators() {
//     return arrOfGladiators[Math.floor(Math.random() * arrOfGladiators.length)]
// }

// function fight() {
//     let attacker = getRandomGladiators();
//     let defender = getRandomGladiators();

//     while (attacker.id === defender.id) {
//         defender = getRandomGladiators()
//     }

//     defender.health -= attacker.power

//     if (defender.health > 0) {
//         attacker.health -= defender.power
//     }

//     arrOfGladiators = arrOfGladiators.filter(item => item.health > 0)

//     if (arrOfGladiators.length === 1 && arrOfGladiators[0].health > 0) {
//         return arrOfGladiators
//     }
// }

// createGladiators();

// while (arrOfGladiators.length !== 1) {
//     fight()
// }
// console.log("the winner is", arrOfGladiators[0])