"use strict";
let saveDataStuffed = JSON.parse(localStorage.getItem("dataStored"));

if (saveDataStuffed !== null) {
  // si el local storage esta lleno con los datos ya guardados los pinta
  data = saveDataStuffed;
  paintData();
  paintInput();
} else {
  // si el local storage esta vacio llamo a la función handleKeyData para que vaya recogiendo los datos que introduce la usuaria
  console.log("no hay nada en local");
  handleKeyData();
}
