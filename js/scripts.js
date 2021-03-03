/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

// 1. creo array di cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 2. inserisco il cognome dell'utente
cognomi.push(prompt("Inserisci il tuo cognome"));

console.log(cognomi);
