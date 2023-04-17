const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const routerMovie = require('./src/api/routes/movie.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/movies', routerMovie);

app.listen(PORT, ()=> console.log(`listening on: http://localhost:${PORT}`));

