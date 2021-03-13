const gameModel = require('../models/gameModel');

const getNewGame = (_req, res) => {
    const game = gameModel.getNewGame()
    res.status(200).json(game);
}

module.exports = {
    getNewGame
}