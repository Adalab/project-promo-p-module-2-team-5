/* eslint-disable strict */
// 'use strict';
// //una vez que se ha rellenado el formulario y previsualizado la tarjeta
// //si pulsa el boton crear tarjeta
// //1. se enviará al servidor los datos del formulario
// //2. ((nos devuelve el servidor un link))//
// //3. quitamos la clase hidden de la segunda seccion de share----tambien se escribe el link generado
// //4. si la usuaria pincha en el boton twiter--->se comparte su enlace en twiter
// //5. al clickar en reset o modificar campos en el formulario el boton crear tarjeta vuelve a estar activa(naranja) y desaparecerá la segunda seccion de share

const buttonShare = document.querySelector('.js-button-share');

function handleShareCard(event) {
  event.preventDefault();

  //if

  fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST', // method
    headers: { 'Content-Type': 'application/json' }, // header
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    });
    
}

buttonShare.addEventListener('click', handleShareCard);
