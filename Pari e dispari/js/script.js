"use strict";
let scelta = prompt("Scegli : Pari o Dispari:").toLowerCase();

while (scelta !== "pari" && scelta !== "dispari") {
    scelta = prompt("Scelta non valida. Scegli tra opzione Pari o Dispari");
    }
      
if (scelta === "pari") {
    console.log("Il giocatore ha scelto: Pari");
} else if (scelta === "dispari") {
    console.log("Il giocatore ha scelto: Dispari");
}

let scelta_numero = parseInt(prompt("Scegli un numero da 1 a 5 "));

while (isNaN(scelta_numero) || scelta_numero < 1 || scelta_numero > 5) {
    scelta_numero = parseInt(prompt("Scegli un numero tra 1 e 5 "));
    }
      
 console.log(`Il numero scelto : ${scelta_numero}`)   

 function CalcolaNumeri (){
    let numero_casuale = Math.floor(Math.random() * 5) + 1;
    console.log(`Numero scelto dal computer: ${numero_casuale}`)
    let somma = scelta_numero + numero_casuale
    return somma  
 }
 
let somma = CalcolaNumeri()
console.log(`Risultato: ${somma}`)

let risultato = ``
if(somma % 2 === 0){
    risultato = `pari`
    console.log(`Risultato: ${risultato}`)
}else{
    risultato = `dispari`
    console.log(`Risultato: ${risultato}`)
}

if(risultato === scelta){
    console.log(`Il giocatore ha vinto scegliendo ${scelta}`)
}else{
    console.log(`Il computer ha vinto , il giocatore aveva scelto ${scelta}`)
}
