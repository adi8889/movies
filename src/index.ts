import { MovieDatabase } from './moviedatabase';

const movieDB = new MovieDatabase();


movieDB.addMovie('1', 'fight club', 'David fincher', 2010, 'psycological thriller');
movieDB.addMovie('2', 'eega', 'rajmouli', 2008, 'Action');
movieDB.addMovie('3', 'fracture', 'Edward wilson', 2014, 'thriller');

movieDB.rateMovie('1', 5);
movieDB.rateMovie('1', 4);
movieDB.rateMovie('2', 5);
movieDB.rateMovie('3', 4);

console.log(movieDB.getAverageRating('1'));
console.log(movieDB.getTopRatedMovies()); 
console.log(movieDB.getMoviesByGenre('psycological thriller')); 
console.log(movieDB.getMoviesByDirector('rajmouli')); 
console.log(movieDB.searchMoviesBasedOnKeyword('fracture')); 
console.log(movieDB.getMovie('1')); 
movieDB.removeMovie('1'); 
