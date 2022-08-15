alert("Haz seleccionado esta obra")

import validator from './validator.js';
//DOM 
const btn1 =document.getElementById("btn1");
const creditCardNumber= document.getElementById("cardnumber");
//llamo a mi función, registro un evento a mi objeto en el documento, usar preventdefault será para tner por resuiltado lo que nos arroje el evento, proviene de ese 
//comportamiento, como puede ser que después que evite que el envio ocurra
btn1.addEventListener('click', function (e) {
    e.preventDefault()
   
   
   console.log(creditCardNumber.value)
   console.log(validator.isvalid(creditCardNumber.value))
   let valido= (validator.isvalid(creditCardNumber.value))
   //condicional
   if (valido){
    alert ("Valida")
   }else {
    alert ("No valida")
   }
   let final=validator.maskify(creditCardNumber.value)
   creditCardNumber.value=final

 
   
})
