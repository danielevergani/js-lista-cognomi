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

// ciclo while

var j=0;
var founded = false;
var posizione  = 0;
while (founded == false){
    if (nuovoCognome == listaCognomi[j]){
        posizione = parseInt(j) +1;
        console.log("il nume è in posizione " + posizione)
        founded = true;
    }
    j = j + 1;
}

// ciclo for

posizione  = 0;
for ( i= 0; i<listaCognomi.length; i++){
    if (nuovoCognome == listaCognomi[i]){
        posizione = parseInt(i) +1;
    }
}

console.log("il nume è in posizione " + posizione);

// usando metodo indexOf

posizione  = 0;
posizione = listaCognomi.indexOf(nuovoCognome) + 1;
console.log("il nume è in posizione " + posizione);