const Movie = require("../models/movie.model");
const Movir = require("../models/movie.model");

const getMovie = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        const movieById = await Movie.findById(id);
        if(!movieById){
            return res.status(404).json({ "message": "movie not found by id"});
        }
        return res.status(200).json(movieById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const movieByTitle = await Movie.find({title:title});
        if(!movieByTitle){
            return res.status(404).json({ "message": "movie not found by title"});
        }
        return res.status(200).json(movieByTitle);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByGender = async (req, res) => {
    try {
        const {gender} = req.params;
        const movieByGender = await Movie.find({gender});
        if(!movieByGender){
            return res.status(404).json({ "message": "movie not found by gender"});
        }
        return res.status(200).json(movieByGender);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMovieByYear = async (req, res) => {
    try {
        const {year} = req.params;
        const movieByYear = await Movie.find({year: {$gt:year}});
        return res.status(200).json(movieByYear);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getMovie, getMovieById, getMovieByTitle, getMovieByGender, getMovieByYear};