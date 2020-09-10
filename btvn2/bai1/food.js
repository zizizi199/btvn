class Meal  {
    name;
    foods;
    dateModified;

    constructor(name){
        this.name = name;
        this.foods = [];
        this.dateModified = new Date().toISOString();
    }
    addFood(food){
        this.foods.push(food)
    }

    calculatePrice(){
        let sum = 0;
        for (let i = 0; i < this.foods.length; i++) {
            sum += this.foods[i].price;
        }

        return sum;
    }
    
    show(){
        console.log(`món ăn: ${this.name}`);
        for (let i = 0; i < this.foods.length; i++) {
            console.log(this.foods[i].name);
            
        }
        console.log(`ngày: ${this.dateModified}`);
    } ;   
}

class VegetableMeal extends Meal{
    constructor(name){
        super(name)
    }
    addFood(vetgetableFood) {
        this.foods.push(vetgetableFood);
    }

    calculatePrice() {
        let sum = 0;
        for (let i = 0; i < this.foods.length; i++) {
            sum += this.foods[i].price;
        }
        return sum*0.85;
    }
    
}

class NonVegetableMeal extends Meal {
    constructor(name) {
        super(name);
    }

    add(nonVegetableFood) {
        this.foods.push(nonVegetableFood);
    }

    calculatePrice() {
        let sum = 0;
        for (let i = 0; i < this.foods.length; i++) {
            sum += this.foods[i].price;
        }

        return sum*0.95;
    }
}

class Food {
    name;
    luxuriousName;
    price;

    constructor(name,luxuriousName,price){
        this.name=name;
        this.luxuriousName=luxuriousName
        this.price=price;

    }


}

class  VegetableFood extends Food{
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price)
    }
}

class  NonVegetableFood extends Food{
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price)
    }
}

let food1 = new NonVegetableFood('thịt chó','mộc tồn',50000);
let food2 = new NonVegetableFood('cá nướng', 'cá chép vượt vũ môn',60000);
let food3 = new NonVegetableFood('thịt gà luộc','phượng hoàng rụng lông',35000);
let food4 = new VegetableFood('rau muống luộc','quốc rau', 10000);
let food5 = new VegetableFood('lạc rang','củ lạc giòn tan',5000);

let menu = [food1,food2,food3,food4,food5];

console.log(menu);

let nonVegetableMeal = new NonVegetableMeal('Menu ăn tạp');

nonVegetableMeal.addFood(food1);
nonVegetableMeal.addFood(food2);
nonVegetableMeal.addFood(food3);

console.log(nonVegetableMeal)

nonVegetableMeal.show()

console.log(nonVegetableMeal.calculatePrice());