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
console.log(listaCognomi);

// trovo nuova posizione di nuovoCognome


var i = 0;
while (nuovoCognome == listaCognomi[i]){

    if (nuovoCognome == listaCognomi[i]){
        console.log("il nome inserito è ora in posizione " + i );
        break;
    }
    i++;
}