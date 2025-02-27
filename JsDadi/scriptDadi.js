// Genera un numero casuale da 1 a 6
function pullNut() {
    return Math.floor(Math.random() * 6) + 1;
}

let player = pullNut();
let PcPlayer = pullNut();

console.log("Giocatore:", player);
console.log("Computer:", PcPlayer);

// Determina il vincitore
if (player > PcPlayer) {
    console.log("Il giocatore vince!");
} else if (PcPlayer > player) {
    console.log("Il computer vince!");
} else {
    console.log("Pareggio!");
}