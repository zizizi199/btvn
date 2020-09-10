import{Destination} from "./detination.js";
import{Park} from "./park.js";
import{Museum} from "./museum.js";
import{Restaurant} from "./restaurant.js";

class DestinationList{
    destinations = [];
    dateModified;

    constructor(){
        this.destinations = [];
        this.dateModified = new Date().toISOString();
    }

    addDestination(destination){
        if (destination instanceof Destination) {
            this.destinations.push(destination);
        }
        else{
            console.log('điểm đến không đúng')
        }
        // em nghĩ là được vì 3 cái đấy đều là extend của cái destination
    }

    findDestination(name){
        for(let destination of this.destinations){
            if(destination.name == name ){
                console.log(destination)
            }
        }
    }

    get totalPrice(){
        let sum = 0;
        for(let destination of this.destinations){
            if(destination instanceof Park){
                sum +=destination.ticketPrice;
            }else if(destination instanceof Museum){
                sum +=destination.ticketPrice;
            }else if(destination instanceof Restaurant){
                sum +=destination.buffetPrice;
            }
        }
        // this.destinations.forEach(function(destination){
        //     if(destination instanceof Restaurant){
        //         sum+=destination.buffetPrice;
        //     }else{
        //         sum+= destination.ticketPrice;
        //     }
        // })
        return sum;
    }
}

export{DestinationList};