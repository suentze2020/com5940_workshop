export default class Animal {
    constructor(name, numofLegs, isMamal) { 
        this.name = name;
        this.numofLegs = numofLegs; 
        this.isMamal = isMamal ? 'a mamal' : 'not a mamal';
        // this.isMamal = "a mamal" if isMamal else "not a mamal";
        // var a = 2;
        // var b = 3;    
        // var c = ((a < b) ? 'minor' : 'major');
    }
    
    displayAnimal() {
        return `A ${this.name} has ${this.numofLegs} legs. It is ${this.isMamal}.`;
    }

} /* end of class Animal */  