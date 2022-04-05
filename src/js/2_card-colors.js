'use strict';
//añadir los colores a la tarjeta de preview
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const preview = document.querySelector('.js_preview');


function handleClickRadio1(){
  preview.classList.remove('palette2');
  preview.classList.remove('palette3');
  preview.classList.add('palette1');

}

function handleClickRadio2(){
  preview.classList.remove('palette1');
  preview.classList.remove('palette3');
  preview.classList.add('palette2');

}

function handleClickRadio3(){
  preview.classList.remove('palette1');
  preview.classList.remove('palette2');
  preview.classList.add('palette3');
}

radio1.addEventListener('click', handleClickRadio1);
radio2.addEventListener('click', handleClickRadio2);
radio3.addEventListener('click', handleClickRadio3);



/*

function handleAllRadios (event){

const paletteValue = `palette${event.currentTarget.value}`;

    preview.classList.remove('palette1');
    preview.classList.remove('palette2');
    preview.classList.remove('palette3');

    preview.classList.add(paletteValue);
}

const allRadios = document.querySelectorAll('.js_radio');

for (const eachRadio of allRadios){

 eachRadio.addEventListener('click', handleAllRadios);

}
*/
