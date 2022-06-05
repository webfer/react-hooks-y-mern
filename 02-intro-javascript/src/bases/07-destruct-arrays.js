// Destructuring assigment in arrays

const characters = ['Goku', 'Vegueta', 'Trunks'];

// Upppppssss Boring
// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);

const [, , p3] = characters;

console.log(p3);

const getArray = () => {
  return ['ABC', 123];
};

const [character, numbers] = getArray();

console.log(character, numbers);

// Homework

//1.  First value of the array will be name
//2.  First value of the array will be setName

const UserState = (value) => {
  return [value, () => console.log('Hola mundo!!')];
};

const [name, setName] = UserState('Goku');

console.log(name);
setName();
