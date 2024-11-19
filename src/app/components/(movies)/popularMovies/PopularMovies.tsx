import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

const PopularMovies = async () => {
    const popularMovies = await movieService.getPopularMovies();
    return (
        <>
            <MoviesList movies={popularMovies.results} title={'Popular Movies'}/>
        </>
    );
};

export default PopularMovies;