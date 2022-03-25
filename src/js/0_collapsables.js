'use strict';

//añadir los colapsables a las secciones
//abrir el colapsable que tenga el evento click
//cerrar todos los colapsables que no estén abiertos

/*CONSTANTS GLOBALES*/

const jsDesign = document.querySelector('.js-design');
const jsStuffed = document.querySelector('.js-stuffed');
const jsShare = document.querySelector('.js-share');
const jsArrow1 = document.querySelector('.js-arrow1');
const jsArrow2 = document.querySelector('.js-arrow2');
const jsArrow3 = document.querySelector('.js-arrow3');

/*FUNCIONES EVENTOS Y CONDICIONALES*/

jsArrow1.addEventListener('click',()=>{
  jsArrow1.classList.toggle('collapsible');
});

