//Crear un script que simule el juego de
// Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber,
// Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar .
// Devolver un mensaje si ganó o perdió.

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento = parseInt(prompt("Adivina el número (entre 1 y 10):"));

if (intento === numeroSecreto) {
  console.log(`🎉 ¡Ganaste! El número era ${numeroSecreto}.`);
} else {
  console.log(`❌ Perdiste. El número correcto era ${numeroSecreto}.`);
}