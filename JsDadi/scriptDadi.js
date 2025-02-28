// // Genera un numero casuale da 1 a 6
// function pullNut() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// let player = pullNut();
// let PcPlayer = pullNut();

// console.log("Giocatore:", player);
// console.log("Computer:", PcPlayer);

// // Determina il vincitore
// if (player > PcPlayer) {
//     console.log("Il giocatore vince!");
// } else if (PcPlayer > player) {
//     console.log("Il computer vince!");
// } else {
//     console.log("Pareggio!");
// }

// CORREZIONE ESERCIZIO;

// Chiedo all'utente di inserire un munero da 1 a 6;
const player = parseInt (prompt('Inserisci un numero da 1 a 6'));
// Genero un numero numero da 1-6;
// const player = Math.floor(Math.random() * 6) + 1;
console.log (player);
const PcPlayer = Math.floor(Math.random() * 6) + 1;
console.log (PcPlayer);
// Variabille di validazione;
const isValid = player >= 1 && player <= 6 && !isNaN(player);
console.log (isValid)
// const userNumber =Math.round(Math.random() * 5) + 1;
// const userNumber = Math.cell(Math.random() * 6);

// Istruzioni condizionali
if (isValid){
if (player > PcPlayer) {
        console.log("Il giocatore vince!");
        alert ("Il giocatore vince!")
    } else if (PcPlayer > player) {
        console.log("Il computer vince!");
        alert ("Il computer vince!")
    } else {
        console.log("Pareggio!");
        alert ("Pareggio!")
    }
} else {

    console.log('Mi dispiace! Stai barando');
    alert ('Mi dispiace! Stai barando');

}