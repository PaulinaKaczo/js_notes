//Dzień2, zadanie1
const country = {
    capital: "Warsaw",
    population: 37.8,
    president: "Andrew D.",
    ministers: ['Sasin', 'Niedzielski']
}

// console.log(country.population);

//Dzień 2, zadanie 2
const timeMachine = {
    shape: 'square',
    model: 'Delorean',
    run(date, place){
        //template literal string lub concatenation
        return `Jesteś w ${place}, data: ${date}`
    }
}

// console.log(
//     timeMachine.shape,
//     timeMachine.model,
//     timeMachine.run('29.02.2028', 'Bieszczady'
//     );

//Dzień 2, zadanie 3
// proste

//Dzień 2, zadanie 4
const person = {
    name: 'Paulina',
    age: 28,
    sayHello(){
        console.log('hello')
    }
}
// console.log(person.name, person. age);
// person.sayHello();

//Dzień 2, zadanie 5

const recipe = {
    title: "boiled water",
    servings: 4,
}
recipe.ingredients = ["water"];

// console.log(recipe.title,
// recipe["servings"],
//     recipe.ingredients);






//THIS

const user = {
    name: 'Janusz',
    age: 44,
    getName() {
        return this.name;
    }
}

// console.log(user.getName())
//
// console.log(user.getName.call({name: 'Andrzej'}))
//
// const getName2 = user.getName.bind({name: 'Janusz 2'})
// console.log(getName2())



//This zadanie 1

const car = {
    brand: 'Opel',
    color: 'silver',
    numberOfKilometers: 0,
    printCarInfo() {
       console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}km`)
    },
    drive(km) {
        this.numberOfKilometers += km;
    }
}
// car.printCarInfo();
// car.drive(240);
// car.printCarInfo();



// Zadanie2


const calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum() {
        return this.a + this.b;
    },
    multiply(){
        return this.a * this.b;
    }
};

// calculator.save(2, 3);
// console.log(calculator.sum());
// console.log(calculator.multiply());


//Zadanie3

const stairs = {
    step: 0,
    up(){
        this.step++;
    },
    down(){
        this.step--;
    },
    printStep(){
        console.log(this.step);
    }
}

// stairs.up();
// stairs.up();
// stairs.up();
// stairs.down();
// stairs.printStep();






//CONSTRUCTOR

function User(){
    this.name = 'Janusz';

}

const janusz = new User('Janusz');
const ala = new User('Ala');

// console.log(ala);
// console.log(janusz);


//----------------------------------------------------
//napisanie własnego mapa
Array.prototype.myMap = function(cb){
    const newArray = [];

    for (let i = 0; i < this.length; i++){
        const newValue = cb(this[i], i, this);
        newArray.push(newValue);
    }

    return newArray;
}





//---------------------------------------------------
//Zad 1 -constructor
function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function(name, price){
    //shorthand object notation
this.products.push({
    name, price
});

this.sum += price;
}

Basket.prototype.showBasket = function(){
    const formattedProducts = this.products.map((product) => `${product.name}: ${product.price}zł`);

//     console.log('-'.repeat(20));
//     console.log("Koszyk:");
//     console.log(formattedProducts.join(', '));
//     console.log(`Suma: ${this.sum}zł`);
// }
//
// const aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();
//
// const bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();




//Zad 2 -constructor
//     const Robot = function (name) {
//         this.name = name;
//         this.isFunctional = false;
//     };
//
//     Robot.prototype.sayHi = function (toWho) {
//         if (this.isFunctional) {
//             console.log("Robot " + this.name + " greets " + toWho);
//         } else {
//             console.log("Robot " + this.name + " is broken");
//         }
//     };
//
//     Robot.prototype.changeName = function (newName) {
//         console.log("Robot " + this.name + " changes name to " + newName);
//         this.name = newName;
//     };
//
//     Robot.prototype.fixIt = function () {
//         this.isFunctional = true;
//         console.log("Robot " + this.name + " was fixed");
//     };
//
//     const sophia = new Robot('Sophia');
//     sophia.sayHi('Januszowi');
//     sophia.changeName('Sophia2');
//     sophia.fixIt();
//     sophia.sayHi('Januszowi');


}

//Zadanie3 constructor

function Calculator() {
    this.operationsHistory = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
this.operationsHistory.push(`added ${num1} to ${num2} got ${result}`)
    return result;
}

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.operationsHistory.push(`multiplied ${num1} to ${num2} got ${result}`)
    return result;
}


Calculator.prototype.substract = function (num1, num2) {
    const result = num1 - num2;
    this.operationsHistory.push(`substracted ${num1} from ${num2} got ${result}`)
    return result;
}


Calculator.prototype.devide = function (num1, num2) {
    const result = num1 / num2;
    this.operationsHistory.push(`devided ${num1} by ${num2} got ${result}`)
    return result;
}

Calculator.prototype.printOperations = function () {
    const formattedData = this.operationsHistory
        .map((operation, index) =>`${index + 1}. ${operation}`);
    console.log(formattedData.join('\n'));
}

Calculator.prototype.clearOperations = function () {
    this.operationsHistory = [];
}

// const casio = new Calculator();
// casio.add(1, 2);
// casio.multiply(2, 3);
// casio.substract(0.1, 0.2);
// casio.devide(0.1, 0.2);
// casio. printOperations();
// casio.clearOperations();
// casio.printOperations();

//----------------------------------------------------

//DOM
//Zadanie 1 - rozwiazanie w katalogu z zadaniami do tego dnia!!!






