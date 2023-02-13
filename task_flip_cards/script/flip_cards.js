let input = document.getElementById('card_count');
let cardContainer = document.getElementById('cards_container');
let cardsArray = [];
let openedCards = [];
let successOpenedCards = [];

let startGame = function () {
    reload();
    let count = Number(input.value) * 2;
    if (count <= 2) {
        return alert('Please enter a number greater than 1');
    }
    cardsArray = Array(count).fill(null);
    cardsArray = generateNumbers(cardsArray);
    renderCards(cardsArray);
    cardContainer.setAttribute('class', 'container-style')
}

let reload = function () {
    cardsArray = [];
    openedCards = [];
    successOpenedCards = [];
    cardContainer.innerHTML = '';
}

let generateNumbers = function (arr) {
    for (let i = 1; i <= arr.length / 2; i++) {
        for (let j = 0; j < 2; j++) {
            let randomIndex;
            do {
                randomIndex = Math.round(Math.random() * (arr.length - 1))
            } while (arr[randomIndex] !== null)
            arr[randomIndex] = i;
        }
    }
    return arr;
}

let renderCards = function (arr) {
    arr.forEach((item, index) => {
        let elem = document.createElement('div');
        elem.id = `${index}`;
        elem.classList.add("card-style");
        elem.innerHTML = `<p class="text-style">${item}</p>`;
        elem.addEventListener('click', handleClickCard)
        cardContainer.append(elem);
        elem.style.backgroundColor = 'green'
    })
}

let handleClickCard = function (event) {
    if (successOpenedCards.includes(event.target.id) || openedCards.includes(event.target.id)) {
        return
    }
    if (openedCards.length < 2) {
        openedCards.push(`${event.target.id}`);
        openCard(event.target);
        if (openedCards.length === 2) {
            checkCards();
        }
    }
}

let openCard = function (elem) {
    elem.style.transform = 'rotateY(180deg)';
    elem.style.backgroundColor = 'yellow'
    elem.children[0].style.transform = 'rotateY(180deg)';
    elem.style.transition = '0.5s';
    elem.children[0].style.transition = '0.5s';
    setTimeout(() => {
        elem.children[0].style.display = 'block';
    }, 100)
}

let closeCard = function (elem) {
    elem.style.transform = 'rotateY(0deg)';
    elem.children[0].style.display = 'none';
    elem.style.backgroundColor = 'green';
}

let checkCards = function () {
    let elem1 = document.getElementById(openedCards[0]);
    let elem2 = document.getElementById(openedCards[1]);
    if (elem1.children[0].innerHTML === elem2.children[0].innerHTML) {

        successOpenedCards = [...successOpenedCards, ...openedCards];
        setTimeout(() => {
            elem1.style.backgroundColor = "white";
            elem2.style.backgroundColor = "white";
        }, 400)
        setTimeout(() => {
            if (successOpenedCards.length === cardsArray.length) {
                alert('You win')
            }
        }, 1000)
    } else {
        setTimeout(() => {
            closeCard(elem1);
            closeCard(elem2);
        }, 500)
    }
    openedCards = [];
};