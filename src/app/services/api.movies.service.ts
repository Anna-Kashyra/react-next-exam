import {urlBuilder} from "@/app/services/variables";
import {IBaseResponse} from "@/app/models/IBaseResponse";
import {IMovie} from "@/app/models/IMovie";
import {options} from "@/app/services/options";
import {GetMediasParams} from "@/app/models/PaginationProps";

const movieService = {
    getMovies: async ({ page = 1 }: GetMediasParams): Promise<IBaseResponse & {results: IMovie[]}> => {
        return await fetch(urlBuilder.allMovies(page), options)
            .then(value => value.json());
    },

    getPopularMovies: async (): Promise<IBaseResponse & {results: IMovie[]}> => {
        return await fetch(urlBuilder.popularMovies(), options)
            .then(value => value.json());
    },

    getTopRatedMovies: async (): Promise<IBaseResponse & {results: IMovie[]}> => {
        return await fetch(urlBuilder.topRatedMovies(), options)
            .then(value => value.json());
    },

    getUpcomingMovies: async (): Promise<IBaseResponse & {results: IMovie[]}> => {
        return await fetch(urlBuilder.upcomingMovies(), options)
            .then(value => value.json());
    },

    getMoviesByGenre: async (genreId: string): Promise<IBaseResponse & {results: IMovie[]}> => {
        return await fetch(urlBuilder.moviesByGenre(genreId), options)
            .then(value => value.json())
    },

    getMovieById: async (id: string): Promise<IMovie> => {
        return await fetch(urlBuilder.movieById(id), options)
            .then(value => value.json())
    }
}

export {movieService};