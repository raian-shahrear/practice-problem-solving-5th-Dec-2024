/* Task: Sorting Objects
=========================
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

const randomCars = [
  {
    id: "01",
    make: "BMW",
    model: "BMW version 7",
    year: 2016,
  },
  {
    id: "02",
    make: "Audi",
    model: "Audi 8",
    year: 2015,
  },
  {
    id: "03",
    make: "Toyota",
    model: "Camry",
    year: 2018,
  },
  {
    id: "04",
    make: "Honda",
    model: "Honda Civic",
    year: 2014,
  },
  {
    id: "05",
    make: "Ferrari",
    model: "296 GTS",
    year: 2010,
  },
  {
    id: "06",
    make: "Mercedes",
    model: "S Class",
    year: 2020,
  },
];

const result = randomCars.map((car) => car.year).sort((a, b) => b - a);
console.log(result);
