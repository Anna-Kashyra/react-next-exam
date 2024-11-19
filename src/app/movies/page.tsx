import React from 'react';
import AllMovies from "@/app/components/(movies)/allMovies/AllMovies";
import MovieGenres from "@/app/components/(movies)/movieGenres/MovieGenres";

const MoviesPage = () => {
    return (
        <>
            <MovieGenres/>
            <AllMovies/>
        </>

    );
};

export default MoviesPage;