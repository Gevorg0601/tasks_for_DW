let cube = document.getElementById('box');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let timer = null;
let array = [];

let keyDown = (event) => {
    if (!array.includes(event.key) && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key) && array.length < 2) {
        array.push(event.key)
        setTimer();
        keyNames();
    }
}
let keyUp = (event) => {
    if (array.includes(event.key)) {
        let index = array.indexOf(event.key)
        if (index > -1) {
            array.splice(index, 1)
            setTimer();
        }
    }
    if (array.length < 2) {
        text2.innerText = '';
    }
    if (array.length < 1) {
        text1.innerText = '';
    }
    if (array.length === 1) {
        let arr = array.map((item) => item.replace('Arrow', ''));
        text1.innerText = arr[0];
    }
};

let setTimer = () => {
    if (timer) {
        clearInterval(timer)
    }
    timer = setInterval(moveElement, 10)
};

let keyNames = () => {
    let arr = array.map((item) => item.replace('Arrow', ''));
    if (array.length) {
        text1.innerText = arr[0]
    }
    if (array.length > 1) {
        text2.innerText = arr[1]
    }
    console.log(arr)
};

let moveElement = () => {
    if (!array.length) {
        clearInterval(timer)
    } else {
        array.forEach((arrow) => {
            switch (arrow) {
                case 'ArrowRight':
                    if (cube.offsetLeft + cube.offsetWidth < window.innerWidth) {
                        cube.style.left = `${cube.offsetLeft + 2}px`
                    }
                    break
                case 'ArrowLeft':
                    if (cube.offsetLeft > 0) {
                        cube.style.left = `${cube.offsetLeft - 2}px`
                    }
                    break
                case 'ArrowUp':
                    if (cube.offsetTop > 0) {
                        cube.style.top = `${cube.offsetTop - 2}px`
                    }
                    break
                case 'ArrowDown':
                    if (cube.offsetTop + cube.offsetHeight < window.innerHeight) {
                        cube.style.top = `${cube.offsetTop + 2}px`
                    }
                    break
            }
        })
    }
};
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);