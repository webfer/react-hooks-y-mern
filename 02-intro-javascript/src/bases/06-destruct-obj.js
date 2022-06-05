// Destructuring assigment

const person = {
  name: 'Tony',
  age: 45,
  keyName: 'Ironman',
};

const { name, age, keyName } = person;
console.log(name);
console.log(age);
console.log(keyName);

// Destructuring in the arrow function by params
const userContext = ({ keyName, name, age, range = 'Captain' }) => {
  //   console.log(name, age, range);
  return {
    passName: keyName,
    ageInYears: age,
    latlng: {
      lat: 14.25632,
      lng: -13.2255,
    },
  };
};
// getPerson(person);

const {
  passName,
  ageInYears,
  latlng: { lat, lng },
} = userContext(person);
console.log(passName, ageInYears, lat, lng);
