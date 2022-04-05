"use strict";const data={palette:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""},jsDesign=document.querySelector(".js-design"),jsStuffed=document.querySelector(".js-stuffed"),jsShare=document.querySelector(".js-share"),jsArrow1=document.querySelector(".js-arrow1"),jsArrow2=document.querySelector(".js-arrow2"),jsArrow3=document.querySelector(".js-arrow3"),jsDesignContainer=document.querySelector(".js-design-container"),jsStuffedContainer=document.querySelector(".js-stuffed-container"),jsShareContainer=document.querySelector(".js-share-container");jsDesignContainer.addEventListener("click",()=>{jsArrow1.classList.toggle("collapsible"),jsDesign.classList.toggle("hidden")}),jsStuffedContainer.addEventListener("click",()=>{jsArrow2.classList.toggle("collapsible"),jsStuffed.classList.toggle("hidden")}),jsShareContainer.addEventListener("click",()=>{jsArrow3.classList.toggle("share-legend__arrow"),jsShare.classList.toggle("hidden")});const radio1=document.querySelector(".js_radio1"),radio2=document.querySelector(".js_radio2"),radio3=document.querySelector(".js_radio3"),preview=document.querySelector(".js_preview");function handleClickRadio1(){preview.classList.remove("palette2"),preview.classList.remove("palette3"),preview.classList.add("palette1"),data.palette=radio1.value}function handleClickRadio2(){preview.classList.remove("palette1"),preview.classList.remove("palette3"),preview.classList.add("palette2"),data.palette=radio2.value}function handleClickRadio3(){preview.classList.remove("palette1"),preview.classList.remove("palette2"),preview.classList.add("palette3"),data.palette=radio3.value}radio1.addEventListener("click",handleClickRadio1),radio2.addEventListener("click",handleClickRadio2),radio3.addEventListener("click",handleClickRadio3);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t),data.photo=fileField.files}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}fileField.addEventListener("change",getImage);const dataContainer=document.querySelector(".js-stuffed-form"),paintName=document.querySelector(".js-name"),paintJob=document.querySelector(".js-profession"),paintEmail=document.querySelector(".js-email"),paintPhone=document.querySelector(".js-phone"),paintLinkedin=document.querySelector(".js-linkedin"),paintGit=document.querySelector(".js-git"),inputName=document.querySelector(".js-forname"),inputJob=document.querySelector(".js-forjob"),inputImage=document.querySelector(".js-forimage"),inputMail=document.querySelector(".js-formail"),inputPhone=document.querySelector(".js-forphone"),inputLkdn=document.querySelector("js-forlkdn"),inputGit=document.querySelector(".js-forgit");function paintData(){""===data.name?paintName.textContent="Nombre Apellido":paintName.innerHTML=data.name,""===data.job?paintJob.textContent="Front-end developer":paintJob.innerHTML=data.job,paintEmail.href="mailto:"+data.email,paintPhone.href="tel:"+data.phone,paintLinkedin.href=data.linkedin,paintGit.href=data.github}function handleKeyData(e){const t=e.target;"name"===t.name?data.name=t.value:"profession"===t.name?data.job=t.value:"email"===t.name?data.email=t.value:"phone"===t.name?data.phone=t.value:"Linkedin"===t.name?data.linkedin=t.value:"GitHub"===t.name&&(data.github=t.value),paintData()}dataContainer.addEventListener("keyup",handleKeyData);const resetBtn=document.querySelector(".js-reset"),resetName=document.querySelector(".js_reset-name"),resetJob=document.querySelector(".js_reset-job"),resetMail=document.querySelector(".js_reset-mail"),resetPhone=document.querySelector(".js_reset-phone"),resetLinkedin=document.querySelector(".js_reset-linkedin"),resetGit=document.querySelector(".js_reset-git"),resetTitle=document.querySelector(".js_reset-title"),resetSubtitle=document.querySelector(".js_reset-subtitle"),resetTelf=document.querySelector(".js_reset-telf"),resetSend=document.querySelector(".js_reset-send"),resetLknd=document.querySelector(".js_reset-lknd"),resetGitHub=document.querySelector(".js_reset-github");function resetCard(){preview.classList.remove("palette1"),preview.classList.remove("palette2"),preview.classList.remove("palette3"),resetTitle.textContent="Nombre Apellido",resetSubtitle.textContent="Front-end developer",profilePreview.style.backgroundImage="",profileImage.style.backgroundImage="",resetTelf.href="",resetSend.href="",resetLknd.href="",resetGitHub.href=""}function resetForm(){radio1.checked="selected",resetName.value="",resetJob.value="",fileField.value="",resetMail.value="",resetPhone.value="",resetLinkedin.value="",resetGit.value=""}function handleResetForm(e){e.preventDefault(),resetForm(),resetCard()}resetBtn.addEventListener("click",handleResetForm);const buttonShare=document.querySelector(".js-button-share");function handleShareCard(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{console.log(e)})}buttonShare.addEventListener("click",handleShareCard);