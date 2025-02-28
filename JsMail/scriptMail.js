const list = [
    "michele.rossi123@mail.com",
    "marcello.bianchi87@gmail.com",
    "marco.verdi55@yahoo.it",
    "filippo.neri22@outlook.com",
    "luca.martini99@protonmail.com",
    "elena.ricci77@hotmail.com",
    "simone.ferri33@live.com",
    "alessia.gallo66@mail.it",
    "matteo.rinaldi11@tiscali.it",
    "chiara.mancini44@fastwebnet.it"
  ];
  
// Chiedo all'utente la sua mail;
const userMail = prompt("Inserisci la tua email per accedere alla festa:");

// Controllo se la mail è presente nella lista;
let mailPresent = false;


for (let i = 0; i < list.length; i++){
    if (list[i] === userMail)
        mailPresent = true;
    break;
}
// Comunico esito all'utente;

if (mailPresent){
    console.log("Benvenuto alla festa!");
    alert ("Benvenuto alla festa!")
} else {
    console.log("Spiacente, il tuo nome non è sulla lista.");
    alert ("Spiacente, il tuo nome non è sulla lista.")
}

// Creo un Array con una lista di emails;
// const list = [
//     "michele.rossi123@mail.com",
//     "marcello.bianchi87@gmail.com",
//     "marco.verdi55@yahoo.it",
//     "filippo.neri22@outlook.com",
//     "luca.martini99@protonmail.com",
//     "elena.ricci77@hotmail.com",
//     "simone.ferri33@live.com",
//     "alessia.gallo66@mail.it",
//     "matteo.rinaldi11@tiscali.it",
//     "chiara.mancini44@fastwebnet.it"
//   ];
// const userMail = prompt("Inserisci la tua email per accedere alla festa:");
// let index = 0;
// userFound = false;

// let mailPresent = false;
// while(index < list.length && userFound === false){
//     if (list(index) === userMail){
//      console.log("Benvenuto alla festa!");
//      alert ("Benvenuto alla festa!");
//      userFound = true;

//     }
//     index++
// } 



