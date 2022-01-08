// Cat, a subclass of Animal
import Animal from './animal.js';
export default class Cat extends Animal {
    constructor(name, numofLegs, isMamal, hasTail) {
        super(name,numofLegs,isMamal); 
        this.hasTail = hasTail ? 'has tail' : 'does not have a tail';
        // self.hasTail = "has tail" if hasTail else "does not have a tail";
    }   
    
    displayCat(){
        // print("Name : ", self.name,  ", Score: ", self.score)
        // print(self.name,":", self.score)
        // return f"A {self.name} has {self.numofLegs} legs. It is {self.isMamal}. It {self.hasTail}."
        return `A ${this.name} has ${this.numofLegs} legs. It is ${this.isMamal}. It ${this.hasTail}.`;
    }    

}