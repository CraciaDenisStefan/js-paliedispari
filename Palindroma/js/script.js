"use strict";
let parola = []
let parola_utente = prompt(`inserisci una parola `).toLowerCase()

while (!isNaN(parola_utente)){
    parola_utente = prompt(`inserisci solo carrateri`).toLowerCase()  
}

parola.push(parola_utente)
console.log(parola_utente)

function convertText(convert){
    parola = parola_utente.split(``).reverse(``).join(``)  
}

convertText(parola)
console.log(parola)

if(parola === parola_utente){
    console.log(`La parola e Palindrona`)
}else{
    console.log(`La parola non e Palindroma`)
}
