// Redeklaracja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
// console.log(x, x1, x2);
//
// var x = 42;
// // var mozna redeklarować, reszty nie
// let x1 = 42;
// const x2 = 42;
// console.log(x, x1, x2);

//Reinicjalizacja

// var x = 42;
// let x1 = 42;
// const x2 = 42;
//
// x = 666;
// x1 = 666;
// // x2 = 666;
// console.log(x, x1, x2);
//
// //var i let mozna reinicjalizować

//Hoisting - przenoszenie deklaracji zmiennych, funkcji i klas na góre aktualnie przetwarzanego zasiegu
// var, let i const są hoistowane, ale let i const trafia do TDZ.

// console.log(x);
// var x = 42;


// Tak robi to hoisting:
// var x;
// var x = 42;
// console.log(x);

// -----
// console.log(x1);
// let x1 = 42;
//nie działa, bo w let i const TDZ - temporary dead zone, hoisting nie działa na let i const bo wpada do TDZ


//Scope - zasięg , interpreter domylny - to przeglądarka (browser) - window (global object), nodejs - objects
// Funkcyjny - tworzony przez funkcje
// Blokowy - tworzony przez pare klamerek (curly braces)
//
// if (true) {
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
//
// }
// // console.log(x, x1, x2); - nie wyświetli się bo jest poza klamerkami (klamerki tworza zasieg blokowy, var ma zasieg funkcyjny, wiec klamerki go nie ograniczaja)
// console.log(x);

// function magic () {
//     var x = 42;
//     let x1 = 42;
//     const x2 = 42;
// }
// magic()
// console.log(x,  x1, x2);

//zadna z tych zmiennych nie istnieje poza klamerkami

// let x = 42;
// let y= 42;
// function  magic(){
//     x=66;
//     let y = 666;
//     console.log(x,y);
// }
// magic()
// console.log(x,y)

//LHS i RHS - w zeszycie!!!