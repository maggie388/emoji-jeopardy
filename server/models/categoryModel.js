const fs = require('fs');
const gameDataFilePath = './data/data.json';

const readAndParseFile = () => {
    const data = fs.readFileSync(gameDataFilePath);
    return JSON.parse(data);
}

const getAllCategories = () => {
    const data = readAndParseFile();
    let categories = {};
    data.forEach((question) => {
        categories[question.category] = categories[question.category] + 1 || 1;
    })
    // console.log(categories)
    return Object.keys(categories);
}

const getQuestionsByCategory = (category) => {
    const data = readAndParseFile();
    return data.filter((question) => {
        return question.category === category;
    })
}

module.exports = {
    getAllCategories,
    getQuestionsByCategory
}