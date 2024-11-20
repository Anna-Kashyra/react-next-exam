import {urlBuilder} from "@/app/services/variables";
import {options} from "@/app/services/options";

export type Genre = {id: number, name: string};

type GenreResponse = {
    genres: Genre[]
}

const genreService = {
    getMovieGenres: async (): Promise<Genre[]> => {
        return await fetch(urlBuilder.movieGenres(), options)
            .then(response => response.json())
            .then((data: GenreResponse) => data.genres);
    },


    getShowsGenres: async (): Promise<Genre[]> => {
        return await fetch(urlBuilder.showGenres(), options)
            .then(response => response.json())
            .then((data: GenreResponse) => data.genres)
    }
}



export {genreService};