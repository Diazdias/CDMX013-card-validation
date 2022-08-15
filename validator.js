const validator = {
  // ...Algoritmo de luhn**
  isvalid:function(creditCardNumber){

    console.log(creditCardNumber)
    //Convertir el string en array
    //Crear un array para separa cada número con split, usamos map en el array para usar esos numeros para transformarlos en una lista(devuelvearry?)
    //Con reverse invertiremos el orden de los números, es decir: l primero pasa a ser el último y el último pasa a ser el primero.
    let reversenumber  = creditCardNumber.split("").map(Number);
    let arraycard = reversenumber.reverse();
    console.log(reversenumber)
    //Usaremos un bucle for para iterar nuestro array, en el que i es igual a 0, hasta que i sea menor al número que ingresamos de tarjeta.
    //Un ciclo for se repite hasta que una condición especificada se evalúe como false**
    for (let i = 0; i < creditCardNumber.lenght; i++) {
      //usar push para agregrar algún elemento al final del al array/La función parseInt nos apoyará a convertir la cadena, osea l string en número.
        arraycard.push(parseInt(reversenumber[i])); 
    }
   // Generamos la multiplicación* de los elementos en par, iteramos con map. 
    arraycard = arraycard.map((num, guia) => guia % 2 === 1 ? num * 2 : num);
   //Aquí llamamos a los números mayores a 9
    arraycard = arraycard.map(num => num > 9 ? num - 9 : num);
   //Aquí haremos la suma de los números y usamos reduce para acumular el resultado del valor, sumar todos los números 
    let sum = arraycard.reduce((prevNumber,nextNumber) =>
    prevNumber += nextNumber,0)
      //Validación, aquí vemos si con la suma final el resultado nos da 0 sería válida, si no no* La suma estrictamente nos debe dar 0
    let final = sum % 10 === 0;
    if (final) {
      true;
 } else {
      false;
    }  
    return final
  }  

,
//maskify números michi
maskify:function(creditCardNumber){ //reemplazando y dejando libres los último 4 números
  let Replace = creditCardNumber.slice(0, -4);
  //para transformar, reemplazarlos el resto con gato, usando lenght por la longitud de números, 
  let transform = creditCardNumber.replace(Replace, "#".repeat(Replace.length));
  console.log(transform);
  return transform;

}
  }
 
  



export default validator;
