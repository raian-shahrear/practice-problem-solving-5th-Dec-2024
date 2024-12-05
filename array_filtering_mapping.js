/* Task: Array Filtering and Mapping
======================================
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const randomPeople = [
  {
    id: "01",
    name: "Mr. Khan",
    age: 25,
    gender: "male",
  },
  {
    id: "02",
    name: "Mr. Boshir",
    age: 29,
    gender: "male",
  },
  {
    id: "03",
    name: "Miss. Konka",
    age: 22,
    gender: "female",
  },
  {
    id: "04",
    name: "Mr. Jamshed",
    age: 31,
    gender: "male",
  },
  {
    id: "05",
    name: "Miss. Mehruba",
    age: 24,
    gender: "female",
  },
  {
    id: "06",
    name: "Mr. Komiruddin",
    age: 27,
    gender: "male",
  },
];

const allMalePerson = randomPeople
  .filter((people) => people.gender !== "female")
  .map((male) => male.name);
  
console.log(allMalePerson);
