//console.log("hola movie");
const mongoose = require('mongoose');
const Movie = require('../api/models/movie.model'); 

const arrayMovies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      gender: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      gender: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      gender: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      gender: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      gender: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      gender: 'Comedia romántica',
    }
];
  
mongoose.connect("mongodb+srv://root:root@cluster0.lnbredt.mongodb.net/Movies?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0){
        await Movie.collection.drop()
        console.log("movies borradas");
    };
})
.catch((err) => console.log("error borrando movies", err))
.then(async () => {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("movies insertadas");
})
.catch((err) => console.log("error insertando movies", err))
.finally(() => mongoose.disconnect());

