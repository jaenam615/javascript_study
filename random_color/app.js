const btn = document.querySelector('#randomBtn');
const bg = document.body;
const h1 = document.querySelector('h1');


function randomColor (){
    const newColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    bg.style.backgroundColor = newColor;
    h1.innerText = newColor;
}

// function randomColor (){
//     btn.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// }

btn.addEventListener('click', randomColor);