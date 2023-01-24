let container = document.getElementById('container');
let array = [];
let arrOfId = [];

for (let i = 0; i < 20; i++) {
    let box = document.createElement('div');
    box.setAttribute('id', i);
    box.setAttribute('class', 'box')
    container.append(box);
    array.push(box);
}
array.map((item) => {
    item.addEventListener('click', function () {
        arrOfId.push(Number(item.id))
        item.style.backgroundColor = 'red'
        for (let i = arrOfId[0]; i <= arrOfId[1]; i++) {
            array[i].style.backgroundColor = 'red'
        }
        if (arrOfId[0] > arrOfId[1]) {
            for (let i = arrOfId[1]; i <= arrOfId[0]; i++) {
                array[i].style.backgroundColor = 'red'
            }
        }
        if (arrOfId.length > 2) {
            for (let i = arrOfId[0]; i <= arrOfId[1]; i++) {
                array[i].style.backgroundColor = 'green'
            }
            for (let j = arrOfId[1]; j <= arrOfId[0]; j++) {
                array[j].style.backgroundColor = 'green'
            }
            arrOfId.splice(0, 2)
        }
        if (item.style.backgroundColor = 'red') {
            item.style.backgroundColor = 'red'
        }
    })
});