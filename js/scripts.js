/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

// 1. creo array di cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 2. chiedo il cognome all'utente
var nuovoCognome = prompt("Inserisci il tuo cognome");

// 3. rendo la prima lettera maiuscola
nuovoCognome = nuovoCognome[0].toUpperCase() + nuovoCognome.slice(1).toLowerCase();

// 4. inserisco il cognome dell'utente in lista e la ordino
cognomi.push(nuovoCognome);
cognomi.sort();
console.log(cognomi);

// 5. stampo lista ordinata
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('lista').innerHTML += "<li>" + cognomi[i] + "</li>";
}

// 6. trovo e stampo posizione utente nella lista
// var posizioneUtente = cognomi.indexOf(nuovoCognome) + 1;
// document.getElementById('ordine').innerHTML = "Il cognome " + nuovoCognome + " si trova in " + posizioneUtente + "° posizione nella lista";

// provo con ciclo while
var cerco = true;
var i = 0;
do {
  if (nuovoCognome == cognomi[i]) {
    var posizioneUtente = i + 1;
    cerco = false;
  }
  i++;
} while (cerco);
document.getElementById('ordine').innerHTML = "Il cognome " + nuovoCognome + " si trova in " + posizioneUtente + "° posizione nella lista";
