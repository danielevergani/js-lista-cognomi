// creo array

var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(listaCognomi);

// inserimento nuovo cognome

var nuovoCognome = prompt("scrivi un nuovo cognome");
listaCognomi.push(nuovoCognome);
console.log(listaCognomi);

// // trasformo in minuscolo

for (var i = 0; i< listaCognomi.length; i++){
    listaCognomi[i] = (listaCognomi[i].toLowerCase());
}

console.log(listaCognomi);

// riordino lista

listaCognomi.sort();
for(i = 0; i< listaCognomi.length; i++){
    console.log(listaCognomi[i]);
}



// trovo nuova posizione di nuovoCognome

/*var i = 0;
while (nuovoCognome != listaCognomi[i]){

    if (nuovoCognome == listaCognomi[i]){
        console.log("il nome inserito è ora in posizione " + i + 1 );
        break;
    }
    i++;
}*/

var posizione  = 0;
for ( i= 0; i<listaCognomi.length; i++){
    if (nuovoCognome == listaCognomi[i]){
        posizione = parseInt(i) +1;
    }
}

console.log("il nume è in posizione " + posizione);