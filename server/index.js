const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const categoryRouter = require('./routes/categoryRoutes');
const gameRouter = require('./routes/gameRoutes');

app.use(cors());
app.use(express.json());

app.use('/categories', categoryRouter);
app.use('/game', gameRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${8080}`);
})