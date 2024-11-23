import {movieService} from "@/app/services/api.movies.service";
import {showService} from "@/app/services/api.shows.service";

const fetchMediaByTypeAndGenre = async (type: 'movies' | 'shows', genreId?: string, currentPage = 1) => {
    if (genreId) {
        return type === 'movies'
            ? movieService.getMoviesByGenre(genreId, currentPage)
            : showService.getShowsByGenre(genreId, currentPage);
    }

    return type === 'movies'
        ? movieService.getMovies({ page: currentPage })
        : showService.getShows({ page: currentPage });

};


export default fetchMediaByTypeAndGenre;





