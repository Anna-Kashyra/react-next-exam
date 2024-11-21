import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

const TopRatedMovies = async () => {

    const topRatedMovies = await movieService.getTopRatedMovies();
    return (
        <>
            <MoviesList movies={topRatedMovies.results} title={'Top Rated Movies'} type={'movies'}/>
        </>
    );
};

export default TopRatedMovies;