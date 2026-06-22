//Se necesita un script que solicite al usuario escribir una frase o texto
//  y luego ingresar una palabra que quiera buscar
// . En cualquier caso (sea que encuentre la palabra o no) el programa debe devolver un mensaje
// informando el resultado (Usar emojis también).

let texto = prompt("Ingresa una frase o texto:");
let palabra = prompt("Ingresa la palabra que deseas buscar:");

if (texto.toLowerCase().includes(palabra.toLowerCase())) {
  console.log(`✅ La palabra "${palabra}" fue encontrada en el texto. 🎉`);
} else {
  console.log(`❌ La palabra "${palabra}" no fue encontrada en el texto. 😢`);
}