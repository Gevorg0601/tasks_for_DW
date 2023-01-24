let cube = document.getElementById('box');
let container = document.getElementById('main-container').addEventListener('click', getPosition);

function getPosition(event) {
    let x = event.clientX - (cube.offsetWidth / 2);
    let y = event.clientY - (cube.offsetHeight / 2);
    let translate3D = 'translate3d(' + x + 'px,' + y + 'px,0)'
    cube.style.transform = translate3D;
};