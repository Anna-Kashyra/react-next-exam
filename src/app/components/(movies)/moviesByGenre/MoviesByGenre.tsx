import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import {genreService} from "@/app/services/api.genres.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

type MoviesByGenreProps = {
    genreId: string;
};

const MoviesByGenre = async ({ genreId }: MoviesByGenreProps) => {

    const movies = await movieService.getMoviesByGenre(genreId);
    const genres = await genreService.getMovieGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);
    return (
        <>
            <MoviesList movies={movies.results} title={`${currentGenre?.name || 'Genre'} movies`} />
        </>
    );
};

export default MoviesByGenre;