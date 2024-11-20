import {movieService} from "@/app/services/api.movies.service";
import {showService} from "@/app/services/api.shows.service";
import { options } from "@/app/services/options";

const fetchMediaByTypeAndGenre = async (type: 'movie' | 'show', genreId?: string) => {
    if (genreId) {
        return type === 'movie'
            ? movieService.getMoviesByGenre(genreId)
            : showService.getShowsByGenre(genreId);
    }

    return type === 'movie'
        ? movieService.getMovies()
        : showService.getShows();

};


export default fetchMediaByTypeAndGenre;




