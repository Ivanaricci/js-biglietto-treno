// variabili

let età = prompt('inserisci la tua età');
let km = prompt('inserisci i km');

let prezzo = km * 0.21;
let messaggio;


// sconti
if(età < 18){
    prezzo = prezzo * 0.8;
    messaggio = `hai diritto al 20% di sconto. Il prezzo del tuo biglietto è ${prezzo} euro`;
}

else if(età > 65){
    prezzo = prezzo * 0.6;
    messaggio = `hai diritto al 40% di sconto. Il prezzo del tuo biglietto è ${prezzo} euro`;
}

else{
    messaggio = `Il prezzo del tuo biglietto è ${prezzo} euro`;
}


console.log(messaggio)