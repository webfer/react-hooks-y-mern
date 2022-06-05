const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  adrees: {
    city: 'New York',
    zip: 123344,
    lat: 14.65566,
    long: 31.552245,
  },
};

//console.table({ person });

console.log({ person });

//const person2 = person; //  ***** No hacer este tipo de asignacion  si quieres clonar el objeto *****
const person2 = { ...person }; // ***** En su lugar, si se quiere clonar el objeto se debe utilizar el operador spread operator para clonar o extraer propiedades y asignarlas al nuevo
person2.name = 'Peter';

console.log({ person2 });
