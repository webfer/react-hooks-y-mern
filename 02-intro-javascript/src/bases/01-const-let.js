// Varaibles y constantes
const nombre = 'Fernando';
let apellido = 'Castro';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// No usar "var" nonca para declarar variables.

if (true) {
  let valorDado = 6; // Let valorDado se permite una nueva declaracion porque let genera variables de scope.
  console.log(valorDado); //En este caso solo existe dentro de esta ambito, dentro de este "if"

  const nombre = 'Peter';
  console.log(nombre);
}

console.log(valorDado);
