type Movie = {
    id: string;
    title: string;
    director: string;
    releaseYear: number;
    genre: string;
    ratings: number[];
};

class MoviesManagement {
    private movies: Movie[] = [];

    addMovie(id: string, title: string, director: string, releaseYear: number, genre: string): void {
        const newMovie: Movie = { id, title, director, releaseYear, genre, ratings: [] };
        this.movies.push(newMovie);
    }

    rateMovie(id: string, rating: number): void {
        const movie = this.movies.find(movie => movie.id === id);
        if (movie && rating >= 1 && rating <= 5) {
            movie.ratings.push(rating);
        }
    }

    getAverageRating(id: string): number | undefined {
        const movie = this.movies.find(movie => movie.id === id);
        if (movie && movie.ratings.length > 0) {
            const total = movie.ratings.reduce((acc, rating) => acc + rating, 0);
            return total / movie.ratings.length;
        }
        return undefined;
    }

    getTopRatedMovies(): Movie[] {
        return this.movies
            .filter(movie => movie.ratings.length > 0)
            .sort((a, b) => (this.getAverageRating(b.id) || 0) - (this.getAverageRating(a.id) || 0));
    }

    getMoviesByGenre(genre: string): Movie[] {
        return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    getMoviesByDirector(director: string): Movie[] {
        return this.movies.filter(movie => movie.director.toLowerCase() === director.toLowerCase());
    }

    searchMoviesBasedOnKeyword(keyword: string): Movie[] {
        return this.movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    getMovie(id: string): Movie | undefined {
        return this.movies.find(movie => movie.id === id);
    }

    removeMovie(id: string): void {
        this.movies = this.movies.filter(movie => movie.id !== id);
    }
}