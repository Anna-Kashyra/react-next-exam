import React from "react";
import AllMovies from "@/app/components/(movies)/allMovies/AllMovies";
import Genres from "@/app/components/(genres)/genres/Genres";
import {SearchParamsProps} from "@/app/models/PaginationProps";

const MoviesPage = async ({ searchParams }: SearchParamsProps) => {

    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);

    return (
        <>
            <h1>All Movies</h1>
            <Genres type="movies"/>
            <AllMovies currentPage={currentPage}/>
        </>

    );
};

export default MoviesPage;