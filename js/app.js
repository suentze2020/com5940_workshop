import {goodMorning, goodBye} from './module.js';
import Animal from './animal.js';
import Cat from './cat.js';

let gm = goodMorning('Bernard');
let gb = goodBye('Bernard');
let br = document.createElement("br");   
document.querySelector('.container').append(gm);
document.querySelector('.container').append(br);
document.querySelector('.container').append(gb);  

const animal1 = new Animal('dog',4,true);
const animal2 = new Animal('crocodile',4,false);
const animal3 = new Animal ('cat',4,true);
console.log(animal1);
console.log(animal2);
console.log(animal3);
console.log(animal1.displayAnimal());
const cat1 = new Cat('Persian cat',4,true,true);
const cat2 = new Cat('Siamese cat',4,true,true);
console.log(cat1);
console.log(cat2);
console.log(cat1.displayCat());
console.log(cat2.displayCat());

