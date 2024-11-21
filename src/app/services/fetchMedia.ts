import {movieService} from "@/app/services/api.movies.service";
import {showService} from "@/app/services/api.shows.service";

const fetchMediaByTypeAndGenre = async (type: 'movies' | 'shows', genreId?: string) => {
    if (genreId) {
        return type === 'movies'
            ? movieService.getMoviesByGenre(genreId)
            : showService.getShowsByGenre(genreId);
    }

    return type === 'movies'
        ? movieService.getMovies()
        : showService.getShows();

};


export default fetchMediaByTypeAndGenre;




