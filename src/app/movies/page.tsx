import React from 'react';
import AllMovies from "@/app/components/(movies)/allMovies/AllMovies";
import Genres from "@/app/components/genres/Genres";

const MoviesPage = () => {
    return (
        <>
            <Genres type="movies" />
            <AllMovies/>
        </>

    );
};

export default MoviesPage;