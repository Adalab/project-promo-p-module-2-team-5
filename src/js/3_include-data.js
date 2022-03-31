'use strict';
////que se envien los datos del formulario y se previsualicen en la tarjeta
//
const forName = document.querySelector('.js-forname');
const forJob = document.querySelector('.js-forjob');
const forMail = document.querySelector('.js-formail');
const forPhone = document.querySelector('.js-forphone');
const forLkdn = document.querySelector ('.js-forlkdn');
const forGit = document.querySelector ('.js-forgit');


function handleKeyUser () {
const valueName = forName.value;
const valueJob = forJob.value;
const valueMail = forMail.value;
const valuePhone = foPhone.value;
const valueLkdn = forLkdn.value;
const valueGit = forGit.value;

const dataUser = ['object'];

const object = { 
    name: valueName,
    job: valueJob,
    mail: valueMail,
    phone:valuePhone,
    lkdn: valueLkdn,
    git: valueGit,
};

  js-name

}

dataUser.addEventListener ('keyup', handleKeyUser)
{
console.log 
}
