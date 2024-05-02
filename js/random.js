const btn0To1 = document.querySelector('.from0To1 button');
const out0To1 = document.querySelector('.from0To1 .out');

const btn0To10 = document.querySelector('.from0To10 button');
const out0To10 = document.querySelector('.from0To10 .out');

const btn1To5 = document.querySelector('.from1To5 button');
const out1To5 = document.querySelector('.from1To5 .out');


/************************ LISTENERS ************************/

btn0To1.addEventListener('click', () => {

    out0To1.innerText = Math.random().toFixed(4);

})

btn0To10.addEventListener('click', () => {

    out0To10.innerText = Math.floor(Math.random() * 11);

})

btn1To5.addEventListener('click', () => {

    out1To5.innerText = Math.floor(Math.random() * 5) + 1;

})
