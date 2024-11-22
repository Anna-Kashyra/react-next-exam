import React from 'react';
import AllMovies from "@/app/components/(movies)/allMovies/AllMovies";
import Genres from "@/app/components/genres/Genres";
import {SearchParamsProps} from "@/app/models/PaginationProps";

const MoviesPage = ({ searchParams }: SearchParamsProps) => {

    const currentPage = parseInt(searchParams.page || "1", 10);
    return (
        <>
            <Genres type="movies" />
            <h1>All Movies</h1>
            <AllMovies currentPage={currentPage}/>
        </>

    );
};

export default MoviesPage;