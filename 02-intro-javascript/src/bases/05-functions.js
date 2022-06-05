// Function in JS

const greet = (name) => `Hola,  ${name}`;

// const getUser = () => {
//   return {
//     ui: 'ABC123',
//     userName: 'pepon_1233',
//   };
// };

// Next function is the same that the last function
const getUser = () => ({
  ui: 'ABC123',
  userName: 'pepon_1233',
});

console.log(greet('Fernando'));

const user = getUser();
console.log(user);

// Homework
// 1. Translate to arrow function
// 2. Should return a implicit object
// 3. Testing
const getUserActive = (name) => ({ uid: 'ABC567', userName: name });

const userActive = getUserActive('Fernando');
console.log({ userActive });
