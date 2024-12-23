let btn = document.querySelector('.generate');
let block = document.querySelector('.block');
let title = document.querySelector('.title');
let history = document.querySelector('.history');
let arr = ['a', 'b', 'c', 'd', 'f', 'e'];







btn.addEventListener('click', () => {
    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 255);
    let randomNum3 = Math.floor(Math.random() * 255);
    let randomArr = Math.floor(Math.random() * arr.length);
    let creatColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;

    block.style.background = creatColor;
    title.innerHTML = creatColor;

    let li = document.createElement('li');
    li.classList.add('h__item');
    history.appendChild(li);
    li.style.backgroundColor = creatColor;

    li.addEventListener('click', () => {
        let liColor = li.style.backgroundColor;
        block.style.backgroundColor = liColor;
        title.innerHTML = liColor;

    })
})
title.addEventListener('click', () => {
 let text = title.innerText; 
    navigator.clipboard.writeText(text)
})

