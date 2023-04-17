const express = require("express");

const router = express.Router();

const {
    getMovie, 
    getMovieById, 
    getMovieByTitle, 
    getMovieByGender,
    getMovieByYear
} = require("../controllers/movie.controller");

router.get("/", getMovie);
router.get("/id/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/gender/:gender", getMovieByGender);
router.get("/year/:year", getMovieByYear);

module.exports = router;
