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
//     console.log(newItem)

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
//     console.log(input.value)
// });



// Gladiators.


let numOfGladiators = prompt("Enter the number of gladiators:");
let arrOfGladiators = [];



function createGladiators() {

    for (let i = 0; i < numOfGladiators; i++) {
        let gladiator = {
            health: Math.floor(Math.random() * (100 - 80 + 1)) + 80,
            power: Math.floor(Math.random() * (15 - 5 + 1)) + 5
        };
        arrOfGladiators.push(gladiator);
    }
    return arrOfGladiators;
}

console.log(createGladiators());

function getRandomGladiator() {
    return arrOfGladiators[Math.floor(Math.random() * arrOfGladiators.length)];
}


function logWinner() {
    while (arrOfGladiators.length !== 1) {
        let attacker = getRandomGladiator(arrOfGladiators);
        let defender = getRandomGladiator(arrOfGladiators);
        while (attacker === defender) {
            defender = getRandomGladiator()
        } defender.health -= attacker.power
        if (defender.health <= 0) {
            let index = arrOfGladiators.indexOf(defender)
            arrOfGladiators.splice(index, 1)
        }
        if (arrOfGladiators.length !== 1) {
            attacker = defender;
            defender = getRandomGladiator()
            while (attacker === defender) {
                defender = getRandomGladiator()
            } defender.health -= attacker.power
            if (defender.health <= 0) {
                let index = arrOfGladiators.indexOf(defender)
                arrOfGladiators.splice(index)
            }
        }
        
    }
        return arrOfGladiators
    
    
}
console.log(logWinner())





















