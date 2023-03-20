function add(a, b) {
    return a + b;
}

// const result = add(1, 2);
// console.log(result);

// function expression (wyrażenie funkcyjne)
const add1 = function (a, b) {
    return a + b;
}
// console.log(add1);
// console.log(add1(1, 2));

// Arrow function
const add2 = (a, b) => {
    return a + b;
}
// console.log(add2);
// console.log(add2(1, 2));

const add3 = (a, b) => {
    return a + b;
}
const add4 = () => {
    return 1 + 2;

}
const add5 = a => {
    return a + 3;
}
const add6 = (a, b) => a+b;

const magic = a => a <= 0;




//TYPY DANYCH
//funkcja która mówi czy jest cieplo czy zimno

// function checkWeather(temp) {
// if (temp < 20) {
//     return "zimno";
// }
// return "cieplo"
// }
// console.log(checkWeather(18));

//zwróc najwyzsza liczbe

max([1, 2, 3, 4, -5, 33]);

// const max = (digits) => {
//     let results = digits[0];
//
//     for (let i=0; i < digits.length; i++) {
//         if (results > digits[i]) {
//             results = digits[i];
//         }
//     }
//     return results;
// }

//--------------
// const max = (digits) => {
//     let result = digits[0];
//
//     for (const digit of digits) {
//         if (result < digit) {
//             result = digit;
//         }
//     }
//     return result;
// }
// console.log(max([1, 2, 3, 4, -5, 33]))
//---------------------


// const max = (digits) => {
//    return Math.max(...digits);
// }
// console.log(max([1, 2, 3, 4, -5, 33]))
//-------------------------

const max = (digits) => Math.max(...digits);


console.log(max([1, 2, 3, 4, -5, 33]));