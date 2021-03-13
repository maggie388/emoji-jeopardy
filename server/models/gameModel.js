const fs = require('fs');
const gameDataFilePath = './data/data.json';

const readAndParseFile = () => {
    const data = fs.readFileSync(gameDataFilePath);
    return JSON.parse(data);
}

const addCategoriesToGame = (game) => {
    const data = readAndParseFile();
    data.forEach((q) => {
        game[q.category] = [];
    })
    return game;
}

const addQuestionsToGame = (game) => {
    const data = readAndParseFile();
    const categories = Object.keys(game);
    categories.forEach((c) => {
        const allQs = data.filter((q) => q.category === c );
        const selectedQs = []
        while (selectedQs.length < 5) {
            const randomIndex = Math.floor(Math.random() * allQs.length);
            const alreadyAdded = selectedQs.find((q) => q.id === allQs[randomIndex].id);
            if (!alreadyAdded) {
                selectedQs.push(allQs[randomIndex]);
            }
        }
        game[c] = selectedQs;
    })
    // console.log(game);
    return game;
}

const getNewGame = () => {
    let game = addCategoriesToGame({});
    return addQuestionsToGame(game);
}

module.exports = {
    getNewGame
}