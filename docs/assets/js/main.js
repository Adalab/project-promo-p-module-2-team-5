"use strict";let data={palette:0,name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};const jsDesign=document.querySelector(".js-design"),jsStuffed=document.querySelector(".js-stuffed"),jsShare=document.querySelector(".js-share"),jsArrow1=document.querySelector(".js-arrow1"),jsArrow2=document.querySelector(".js-arrow2"),jsArrow3=document.querySelector(".js-arrow3"),jsDesignContainer=document.querySelector(".js-design-container"),jsStuffedContainer=document.querySelector(".js-stuffed-container"),jsShareContainer=document.querySelector(".js-share-container");jsDesignContainer.addEventListener("click",()=>{jsArrow1.classList.toggle("collapsible"),jsDesign.classList.contains("hidden")?jsDesign.classList.remove("hidden"):jsDesign.classList.add("hidden")}),jsStuffedContainer.addEventListener("click",()=>{jsArrow2.classList.toggle("collapsible"),jsStuffed.classList.toggle("hidden")}),jsShareContainer.addEventListener("click",()=>{jsArrow3.classList.toggle("share-legend__arrow"),jsShare.classList.toggle("hidden")});const radio1=document.querySelector(".js_radio1"),radio2=document.querySelector(".js_radio2"),radio3=document.querySelector(".js_radio3"),preview=document.querySelector(".js_preview");function handleClickRadio1(){preview.classList.remove("palette2"),preview.classList.remove("palette3"),preview.classList.add("palette1"),data.palette=radio1.value}function handleClickRadio2(){preview.classList.remove("palette1"),preview.classList.remove("palette3"),preview.classList.add("palette2"),data.palette=radio2.value}function handleClickRadio3(){preview.classList.remove("palette1"),preview.classList.remove("palette2"),preview.classList.add("palette3"),data.palette=radio3.value}radio1.addEventListener("click",handleClickRadio1),radio2.addEventListener("click",handleClickRadio2),radio3.addEventListener("click",handleClickRadio3);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result,setLocalStorage()}fileField.addEventListener("change",getImage);const dataContainer=document.querySelector(".js-stuffed-form"),paintName=document.querySelector(".js-name"),paintJob=document.querySelector(".js-profession"),paintEmail=document.querySelector(".js-email"),paintPhone=document.querySelector(".js-phone"),paintLinkedin=document.querySelector(".js-linkedin"),paintGit=document.querySelector(".js-git"),allRadios=document.querySelectorAll(".js_radio");let valueInputRadio="";const inputName=document.querySelector(".js-forname"),inputJob=document.querySelector(".js-forjob"),inputImage=document.querySelector(".js-forimage"),inputMail=document.querySelector(".js-formail"),inputPhone=document.querySelector(".js-forphone"),inputLkdn=document.querySelector("js-forlkdn"),inputGit=document.querySelector(".js-forgit");function paintData(){""===data.name?paintName.textContent="Nombre Apellido":paintName.innerHTML=data.name,""===data.job?paintJob.textContent="Front-end developer":paintJob.innerHTML=data.job,paintEmail.href="mailto:"+data.email,paintPhone.href="tel:"+data.phone,paintLinkedin.href=data.linkedin,paintGit.href=data.github,""===data.photo?profileImage.classList.add("preview-card__image"):(profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`),valueInputRadio=data.palette,setLocalStorage()}function handleKeyData(e){const t=e.target;"name"===t.name?data.name=t.value:"profession"===t.name?data.job=t.value:"email"===t.name?data.email=t.value:"phone"===t.name?data.phone=t.value:"Linkedin"===t.name?data.linkedin=t.value:"GitHub"===t.name&&(data.github=t.value),paintData()}function handleAllRadios(e){const t=parseInt(e.target.value);return console.log(t),t}for(const e of allRadios)e.addEventListener("click",handleAllRadios);dataContainer.addEventListener("keyup",handleKeyData);const resetBtn=document.querySelector(".js-reset"),resetName=document.querySelector(".js_reset-name"),resetJob=document.querySelector(".js_reset-job"),resetMail=document.querySelector(".js_reset-mail"),resetPhone=document.querySelector(".js_reset-phone"),resetLinkedin=document.querySelector(".js_reset-linkedin"),resetGit=document.querySelector(".js_reset-git"),resetTitle=document.querySelector(".js_reset-title"),resetSubtitle=document.querySelector(".js_reset-subtitle"),resetTelf=document.querySelector(".js_reset-telf"),resetSend=document.querySelector(".js_reset-send"),resetLknd=document.querySelector(".js_reset-lknd"),resetGitHub=document.querySelector(".js_reset-github");function resetCard(){preview.classList.remove("palette1"),preview.classList.remove("palette2"),preview.classList.remove("palette3"),resetTitle.textContent="Nombre Apellido",resetSubtitle.textContent="Front-end developer",profilePreview.style.backgroundImage="",profileImage.style.backgroundImage="",resetTelf.href="",resetSend.href="",resetLknd.href="",resetGitHub.href=""}function resetForm(){radio1.checked="",resetName.value="",resetJob.value="",fileField.value="",resetMail.value="",resetPhone.value="",resetLinkedin.value="",resetGit.value="",sectionLink.classList.add("hidden"),buttonShare.classList.remove("button-grey")}function handleResetForm(e){e.preventDefault(),resetForm(),resetCard()}resetBtn.addEventListener("click",handleResetForm);const buttonShare=document.querySelector(".js-button-share"),shareLink=document.querySelector(".js-true"),sectionLink=document.querySelector(".js-section-link"),publicTwitter=document.querySelector(".js-btn-twitter"),lknPublicTwitter=document.querySelector(".js-link-twitter"),linkTwitter=document.querySelector(".link-twitter");function handleShareCard(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then((function(e){return e.json()})).then((function(e){sectionLink.classList.remove("card-hidden"),buttonShare.classList.add("button-grey"),linkTwitter.classList.add("link-twitter"),showURL(e),handleButtonTwitter(e)}))}function showURL(e){e.success?shareLink.innerHTML='<a class="share-newcard__link" target="blank" href='+e.cardURL+">"+e.cardURL+"</a>":sectionLink.innerHTML="¡¡Ups!!  No hemos podido generar tu tarjeta. Por favor, rellena todos los campos del formulario."}function handleButtonTwitter(e){let t="";t+=`<a class="js-link-twitter link-twitter" target="blank" href="https://twitter.com/intent/tweet?text=Hey!%20Mirad%20la%20tarjeta%20que%20creado%20con%20Awesome%20Profile%20Cards&url=${e.cardURL}">`,t+='<i class="fa-brands fa-twitter"></i>',t+="<span>Compartir en Twitter</span>",t+="</a>",linkTwitter.innerHTML=t}function setLocalStorage(){localStorage.setItem("dataStored",JSON.stringify(data))}function getLocalStorage(){data=JSON.parse(localStorage.getItem("dataStored")),paintData()}buttonShare.addEventListener("click",handleShareCard),publicTwitter.addEventListener("click",handleButtonTwitter),null!==localStorage.getItem("dataStored")&&getLocalStorage();