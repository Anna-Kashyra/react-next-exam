import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

const AllMovies = async () => {

    const allMovies = await movieService.getMovies();
    return (
        <>
            <MoviesList movies={allMovies.results} title={'All Movies'}/>
        </>
    );
};

export default AllMovies;