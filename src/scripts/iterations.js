const data = [
    {
        name: "pawel",
        age: 38,
        city: "krakow",
        hobbies: ["js", "python", "drugs"]
    },
    {
        name: "jakub",
        age: 20,
        city: "szczecin",
        hobbies: ["skateboard", "webDev", "gaming"]
    },
    {
        name: "Norbert",
        age: 46,
        city: "Kraków",
        hobbies: ["motoryzacja", "architektura", "komputery"]
    },
    {
        name: "adam",
        age: 31,
        city: "warszawa",
        hobbies: ["wow", "super", "fajne"]
    },
    {
        name: "paulina",
        age: 28,
        city: "dabrowa gornicza",
        hobbies: ['cycling', "volleyball", "movies"]
    },
    {
        name: "marcin",
        age: 37,
        city: "jesionka",
        hobbies: ["tennis", "skiing", "cooking"]
    },
    {
        name: "Jakub",
        age: 24,
        city: "Głowno",
        hobbies: ["football", "games", "music"]
    },
    {
        name: "kamil",
        age: 26,
        city: "warsaw",
        hobbies: ["dancing", "cycling", "reading"]
    },
    {
        name: "kasia",
        age: 34,
        city: "warszawa",
        hobbies: ["konie", "podroze", "old-timery"]
    },
    {
        name: "pawel",
        age: 41,
        city: "zabrze",
        hobbies: ["wfb", "running", "js"]
    }
];






//oblicz średnia wieku

// // const avgAge = (persons) => {
// //     let sumAge = 0;
// //
// //     for (const person of persons) {
// //         // lub person["age"]
// //         sumAge +=person.age;
// //     }
// //     return sumAge/persons.length;
// // }
// console.log(avgAge(data));
//-----------------------------

// const avgAge = (persons) => {
// const ages = persons.map((person) => person.age);
// return ages.reduce((acc, ce) => acc + ce) / persons.length;
// }
// console.log(avgAge(data));
//-----------------------------------------

//mega mega zaawansowana opcja!!!!!!!!!1
// const avgAge = (persons) => persons.reduce((acc, ce) => acc + ce.age, 0) / persons.length;
// console.log(avgAge(data));








// średnia wieku dla ludzi, którzy maja imię powyżej 5 znaków

// const avgAge2 = (people) => {
//     let sumAge = 0;
// let counter = 0;
//     for (const person of people) {
//         if (person.name.length > 5) {
//             sumAge +=person.age;
//             counter++;
//         }
//     }
//     return sumAge/counter;
// }
// console.log(avgAge2(data));
//------------------------------------------
// const avgAge2 = (people) => {
//     const filteredPeople = people.filter((person) => person.name.length > 5);
//     const mappedPeople = filteredPeople.map((person) => person.age);
//
//     return mappedPeople.reduce((acc, ce) => acc +ce) / mappedPeople.length;
// }
// console.log(avgAge2(data));

//mega zaawansowane!!!!!!!!!!!
// const avgAge2 = (people) => people
//     .reduce((acc, ce) => acc + (ce.name.length > 5 ? ce.age : 0), 0) / people.filter((person) => person.name.length > 5).length;






//Tablca wszystkich imion od duzej litery

// const getAllNames = (elements) => {
//     const names = [];
//     for (const person of elements) {
//         names.push(person.name[0].toUpperCase() +person.name.slice(1))
//         }
//     return names;
// }
// console.log(getAllNames(data));

//-----------------------------------metoda tablicowa --map, filter, reduce
//inny sposób:

// const getAllNames = (elements) => elements
//     .map((person) => person.name[0].toUpperCase() + person.name.slice(1))
// }
// console.log(getAllNames(data));
//---------------------------------------------------------------
// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
// }
//
// const getAllNames = (elements) => elements
//     .map((person) => capitalize(person.name))
// }
// console.log(getAllNames(data));








//Sprawdz czy wszyscy maja 3 hobby:

// const checkHobbies = (elements) => {
//     for (const element of elements) {
//         if (element.hobbies.length !== 3){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkHobbies(data));
//-------------------metoda tablicowa:
// const checkHobbies = (elements) => elements
//     .every((element) => element.hobbies.length ===3);
//
// console.log(checkHobbies(data));
//--------------------------------------------
// const checkHobbies = (elements) => !elements
//     .some((element) => element.hobbies.length !==3);
//
// console.log(checkHobbies(data));








//Zwróc tablce wszystkich hobby:
// const getAllHobbies = (elements) => {
//     const hobbies = [];
//     for (const element of elements) {
//         for (const hobby of element.hobbies) {
//             hobbies.push(hobby);
//         }
//     }
//     return hobbies;
// }
// console.log(getAllHobbies(data));
//--------------------------------------------
// const getAllHobbies = (elements) => {
//     let hobbies = [];
//     for (const element of elements) {
//         hobbies = [... hobbies, ...element.hobbies];
//         }
//     return hobbies;
// }
// console.log(getAllHobbies(data));
//--------------------------------------------
// const getAllHobbies = (elements) => elements
//     .map((element) => element.hobbies)
//     .flat ();
// console.log(getAllHobbies(data));

//----------------------------
// const getAllHobbies = (elements) => elements
//     .flatMap((element) => element.hobbies)
// console.log(getAllHobbies(data));
//----------------------------------------------------







//Zwróc wszytskie imiona ludzi, którzy lubia JS:

// const getNamesWhoLoveJS = (items) => {
//     //pusta tablica do trzymania imion
//     const names = [];
//     //iteracja po tablicy, aby mozna było przetwarzac kazdy element z osobna
//     //s[prawdzamy czy osoba ma JS w hobbies -> includes
//     //dodajemy imie do tablicy imion
//     for (const item of items) {
//         if (item.hobbies.includes("js")) {
//             names.push(item.name)
//         }
//     }
//     //zwracamy tablice imion
//     return names;
// }
// console.log(getNamesWhoLoveJS(data));

//-----------------------------------------metody tablicowe

// const getNamesWhoLoveJS = (items) => items
//     .filter((item) => item.hobbies.includes("js"))
//     .map((item) => item.name);
// console.log(getNamesWhoLoveJS(data));

//-------------------------------------









//sformatuj dane tak aby wyświetlic tablice imie-miasto-wiek

// template literal string

// function formatData(persons) {
//     //zmienna na tablice w której bedziemy trzymac dane
//     const formatArray =[];
//     //przeiteruj po wszystkich elementach;
//     //do tablicy z danymi włóz (push) tekst wygenerowany przez template literal string
//     for (const person of persons) {
//         formatArray.push(`${person.name} - ${person.city} - ${person.age}`);
//     }
//     //zwróc tablice
//     return formatArray;
// }
// console.log(formatData(data));

//------------------------------
// const formatData = (persons) => persons
//     .map((person) => `${person.name} - ${person.city} - ${person.age}` )
//
// console.log(formatData(data));

// z destrukturyzacją
// const formatData = (persons) => persons
//     .map(({name, city, age}) => `${name} - ${city} - ${age}`)










// PRZYKŁAD - ZADANIE WSPOLNE

// function capitalize(text) {
//     return text[0].toUpperCase() + text.slice(1);
//  }
//
// const list = data
//     .map((item, id) => `${id}. ${capitalize(item.name)}, ${capitalize(item.city)} `)









//POLICZ ILE JEST NIEPOWTARZALNYCH HOBBY

// function countUniqueHobby(elements) {
//     //tablica na unique hobby
//     const uniqueHobby = [];
//
// //loop po wszytskich obiektach elements
//     for (const element of elements) {
// //2 loop po kazdym hobby z osobna
//         for (const hobby of element.hobbies) {
// //sprawdz czy juz takie jest (uwzględnij wielkosc liter)
//
//             if (!uniqueHobby.includes(hobby.toLowerCase())){
// //jezeli nie ma to dodaj
//                 uniqueHobby.push(hobby.toLowerCase());
//             }
//         }
//     }
//
//     //zwróc ilosc unikalnych hobby
//     return uniqueHobby.length;
// }
// console.log(countUniqueHobby(data));

//----------------------------
// const countUniqueHobby = (elements) => new Set(
//     elements.flatMap((element) => element.hobbies)
// ).size
//-----------------------------------------------









//Wyświetl imiona osób, które mają index podzielny przez 3

// function getLuckyPersons(items) {
//     //tablica na imiona
//     const names =[];
//
//     //loop po wszytskich elementach uzywajac indeksu
//     for (let i = 0; i < items.length; i++) {
//         //sprawdzanie czy index jest podzielny przez 3, modulo(remainder)
//      if (i % 3 ===0) {
//          //dodac imie, jezeli jest podzielny indeks przez 3
//          names.push(items[i].name);
//      }
//     }
//     //na koniec zwrócic imiona jako tekst, oddzielone przecinkami
//     return names.join(", ");
//
// }
// console.log(getLuckyPersons(data));

//----------------------------------------------
const getLuckyPersons = (items) => items
    .filter((item, id) => id % 3 === 0)
    .map((item) => item.name)
    .join(', ');
console.log(getLuckyPersons(data));

