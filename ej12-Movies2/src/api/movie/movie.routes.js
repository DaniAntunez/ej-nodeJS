const express = require("express");

const router = express.Router();

const {
    getMovie, 
    getMovieById, 
    getMovieByTitle, 
    getMovieByGender,
    getMovieByYear,
    postMovie,
    putMovie,
    deleteMovie
} = require("./movie.controller");

router.get("/", getMovie);
router.get("/id/:id", getMovieById);
router.get("/title/:title", getMovieByTitle);
router.get("/gender/:gender", getMovieByGender);
router.get("/year/:year", getMovieByYear);
router.post("/", postMovie);
router.put("/id/:id", putMovie);
router.delete("/id/:id", deleteMovie);

module.exports = router;
