console.log("Hi");

const changeColor = document.querySelector('#change');
console.log(changeColor);

changeColor.addEventListener('click', () => {
    let colorChange1 = Math.floor(Math.random() * 256)
    let colorChange2 = Math.floor(Math.random() * 256)
    let colorChange3 = Math.floor(Math.random() * 256)

    document.body.style.backgroundColor = `rgb(${colorChange1},${colorChange2},${colorChange3})`;
});



