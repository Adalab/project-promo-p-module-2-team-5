'use strict';
////que se envien los datos del formulario y se previsualicen en la tarjeta
//
const dataContainer = document.querySelector('.js-stuffed-form');
const data = {
  pallete:1,
  name:'',
  profession:'',
  image:'',
  mail: '',
  phone:'',
  Linkedin: '',
  GitHub: '',
};

function handleKeyData(event) {
  const elementTyping = event.target;
  if (elementTyping.name === 'name') {
    data.name = elementTyping.value;
  }
  else if (elementTyping.name === 'profession') {
    data.profession = elementTyping.value;
  }
  else if (elementTyping.name === 'mail') {
    data.mail = elementTyping.href;
  }
  else if (elementTyping.name === 'phone') {
    data.phone = elementTyping.value;
  }
  else if (elementTyping.name === 'Linkedin') {
    data.Linkedin = elementTyping.href;
  }
  else if (elementTyping.name === 'GitHub') {
    data.GitHub = elementTyping.href;
  }
  console.log(elementTyping.value);
}

dataContainer.addEventListener('keyup',handleKeyData);


