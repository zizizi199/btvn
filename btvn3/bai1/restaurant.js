import{Destination} from "./detination.js";

class Restaurant extends Destination{
    buffetPrice;
    constructor(name, buffetPrice){
        super(name);
        this.buffetPrice = buffetPrice;
    }
}

export{Restaurant};