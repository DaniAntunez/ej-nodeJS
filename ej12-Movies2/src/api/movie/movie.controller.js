const Movie = require("./movie.model");

const getMovie = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "movie not found" });
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByTitle = async (req, res) => {
  try {
    const { title } = req.params;
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByGender = async (req, res) => {
  try {
    const { gender } = req.params;
    const movieByGender = await Movie.find({ gender });
    return res.status(200).json(movieByGender);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMovieByYear = async (req, res) => {
  try {
    const { year } = req.params;
    const movieByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(movieByYear);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovie = async (req, res) => {
  try {
    console.log(req.body);
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(200).json(createdMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const putMovie = new Movie(req.body);
    putMovie._id = id;

    const updateMovie = await Movie.findByIdAndUpdate(id, putMovie, {
      new: true,
    });
    if (!updateMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    return res.status(200).json(updateMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovie = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteMovie = await Movie.findByIdAndDelete(id);
      if (!deleteMovie) {
        return res.status(404).json({ message: "movie not found" });
      }
      return res.status(200).json(deleteMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

module.exports = {
  getMovie,
  getMovieById,
  getMovieByTitle,
  getMovieByGender,
  getMovieByYear,
  postMovie,
  putMovie,
  deleteMovie
};
