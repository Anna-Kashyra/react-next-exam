import {urlBuilder} from "@/app/services/variables";
import {IBaseResponse} from "@/app/models/IBaseResponse";
import {IMovie} from "@/app/models/IMovie";
import {options} from "@/app/services/options";
import {GetMediasParams} from "@/app/models/PaginationProps";

const fetchMoviesData = async (url: string): Promise<IBaseResponse & { results: IMovie[] }> => {
    const response = await fetch(url, options);
    return await response.json();
};

const movieService = {
    getMovies: async ({ page = 1 }: GetMediasParams): Promise<IBaseResponse & { results: IMovie[] }> => {
        return fetchMoviesData(urlBuilder.allMovies(page));
    },

    getPopularMovies: async (): Promise<IBaseResponse & { results: IMovie[] }> => {
        return fetchMoviesData(urlBuilder.popularMovies());
    },

    getTopRatedMovies: async (): Promise<IBaseResponse & { results: IMovie[] }> => {
        return fetchMoviesData(urlBuilder.topRatedMovies());
    },


    getUpcomingMovies: async (): Promise<IBaseResponse & { results: IMovie[] }> => {
        return fetchMoviesData(urlBuilder.upcomingMovies());
    },

    getMoviesByGenre: async (genreId: string, page = 1): Promise<IBaseResponse & { results: IMovie[] }> => {
        return fetchMoviesData(urlBuilder.moviesByGenre(genreId, page));
    },

    getMovieById: async (id: string): Promise<IMovie> => {
        const response = await fetch(urlBuilder.movieById(id), options);
        return await response.json();
    }

}

export {movieService};