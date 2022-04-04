'use strict';
////que se envien los datos del formulario y se previsualicen en la tarjeta
//
const dataContainer = document.querySelector('.js-stuffed-form');

const paintName = document.querySelector('.js-name');
const paintJob = document.querySelector('.js-profession');
const paintEmail = document.querySelector('.js-email');
const paintPhone = document.querySelector('.js-phone');
const paintLinkedin = document.querySelector('.js-linkedin');
const paintGit = document.querySelector('.js-git');

const data = {
  palette: 1,
  name:'',
  profession:'',
  image:'',
  email: '',
  phone:'',
  Linkedin: '',
  GitHub: '',
};

function paintData() {
  if (data.name === '') {
    paintName.textContent = 'Nombre Apellido';
  } else {
    paintName.innerHTML = data.name;
  }
  if (data.profession === '') {
    paintJob.textContent = 'Front-end developer';
  } else {
    paintJob.innerHTML = data.profession;
  }
  paintEmail.href = `mailto:${data.email}`;
  paintPhone.href = `tel:${data.phone}`;
  paintLinkedin.href = data.Linkedin;
  paintGit.href = data.GitHub;
}

function handleKeyData(event) {
  const elementTyping = event.target;
  if (elementTyping.name === 'name') {
    data.name = elementTyping.value;
  }
  else if (elementTyping.name === 'profession') {
    data.profession = elementTyping.value;
  }
  else if (elementTyping.name === 'email') {
    data.email = elementTyping.value;
  }
  else if (elementTyping.name === 'phone') {
    data.phone = elementTyping.value;
  }
  else if (elementTyping.name === 'Linkedin') {
    data.Linkedin = elementTyping.value;
  }
  else if (elementTyping.name === 'GitHub') {
    data.GitHub = elementTyping.value;
  }
  paintData();
}

dataContainer.addEventListener('keyup',handleKeyData);