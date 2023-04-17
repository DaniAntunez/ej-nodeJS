const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const routerMovie = require('./src/api/movie/movie.routes');
const routerCinema = require('./src/api/cinema/cinema.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', routerMovie);
app.use('/cinemas', routerCinema);

app.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));

