const nombre = 'Fernando';
const apellido = 'Castro';
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${nombre} ${apellido}`;
console.log(nombreCompleto);

const getSaludo = (nombre) => `Hola ${nombre}`;

console.log(`Este es un saludo: ${getSaludo(nombre)} `);
