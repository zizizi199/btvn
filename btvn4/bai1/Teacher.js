import{Person} from './Person.js';

class Teacher extends Person{
    rank;
    
    constructor(name, gender,rank){
        super(name,gender);
        this.rank = rank;
    }
}

export{Teacher};