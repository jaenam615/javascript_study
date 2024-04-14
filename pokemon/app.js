const container = document.querySelector('#container');

for (let i = 1; i <152; i++){
    //div
    const divisor = document.createElement('div');
    //pokemon image
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    //pokemon number
    const num = document.createElement('span');
    num.innerText = `#${i}`;

    divisor.appendChild(newImg);
    divisor.appendChild(num);
    container.appendChild(divisor);
}

