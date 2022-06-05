import { getHeroeById } from './bases/08-imp-exp';

/*
const promese = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Dos segundos despues');

    // Homework
    // Import heore from 08-exp-imp.js
    const p1 = getHeroeById(2);
    // console.log(p1);

    resolve(p1);
    // reject('Heroe not found!!!');
  }, 2000);
});

promese
  .then((heroe) => {
    console.log('Heroe:', heroe);
  })
  .catch((err) => console.warn(err));

  */

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Dos segundos despues');

      // Homework
      // Import heore from 08-exp-imp.js
      const p1 = getHeroeById(id);

      p1 ? resolve(p1) : reject('Heroe not found!!!');
      //if (p1) {
      //    console.log('xxx∫', p1);
      //    resolve(p1);
      //  } else {
      //    reject('Heroe not found!!!');
      //  }
    }, 2000);
  });
  // return promise
};

getHeroeByIdAsync(5)
  // .then((heroe) => console.log('Heroe:', heroe))
  .then(console.log) // This line is the same that previous line
  // .catch((err) => console.warn(err));
  .catch(console.warn); // This line is the same that previuos line :)
