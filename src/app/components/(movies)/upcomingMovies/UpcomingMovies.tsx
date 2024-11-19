import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

const UpcomingMovies = async () => {

    const upcomingMovies = await movieService.getUpcomingMovies();
    return (
        <>
            <MoviesList movies={upcomingMovies.results} title={'Coming soon'}/>
        </>
    );
};

export default UpcomingMovies;