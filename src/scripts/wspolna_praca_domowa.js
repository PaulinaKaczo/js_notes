// Dzień 1

const data = [
    {
        title: "Cybrepunk 2077",
        maker: "CD Projekt Red",
        game_genre: "RPG"
    },

    {
        title: "Resident Evil 2 Remake",
        maker: "Capcom",
        game_genre: "Survival Horror"
    },

    {
        title: "Red Dead Redemption 2",
        maker: "cD PROJEKT RED",
        game_genre: "RPG"
    },

    {
        title: "Wiedzmin 3: Dziki Gon",
        maker: "CD PROJEKT RED",
        game_genre: "RPG"
    },

    {
        title: "Devil May Cry 5",
        maker: "Capcom",
        game_genre: "Hack and Slash"
    },

    {
        title: "Tekken 7",
        maker: "bandai Namco",
        game_genre: "Fighting"
    },

    {
        title: "Battlefield 2042",
        maker: "eA Dice",
        game_genre: "Shooting"
    },

    {
        title: "Resident Evil 4 Remake",
        maker: "Capcom",
        game_genre: "survival Horror"
    },

    {
        title: "Battlefield 4",
        maker: "EA DICE",
        game_genre: "shooting"
    },
];

// 1. Tablica wszystkich gier.

// 1 SPOSÓB:
const allGames = (elements) => {
    const games = [];
    for (const element of elements) {
        games.push(element.title)
        }
    return games;
}
console.log(allGames(data));
//----------------------------------------------------------------------------------

// 2 SPOSÓB:
// const allGames = (elements) => elements.map((element) => element.title)
//
// console.log(allGames(data));

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


// 2. Tablica wszystkich twórców. Wypisz jacy twórcy, ale nie mogą się powtarzać.



function allMakers(elements) {
    const makers = [];
    for (const element of elements) {
        if (!makers.includes(element.maker.toLowerCase())) {
            makers.push(element.maker.toLowerCase());
        }
    }
    return makers;
}
console.log(allMakers(data));

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

// 3. Sformatuj game_genre, żeby wszystkie zaczynały się wielką literą

const getGameGenre = (elements) => {
    const genre = [];
    for (const element of elements) {
        genre.push(element.game_genre[0].toUpperCase() +element.game_genre.slice(1))
        }
    return genre;
}
console.log(getGameGenre(data));