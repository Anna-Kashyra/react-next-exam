import React from 'react';
import {movieService} from "@/app/services/api.movies.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/pagination/Pagination";
import {AllMediasProps} from "@/app/models/PaginationProps";

const AllMovies = async ({ currentPage }: AllMediasProps) => {

    const allMovies = await movieService.getMovies({ page: currentPage });
    return (
        <>
            <MoviesList movies={allMovies.results}/>
            <Pagination currentPage={currentPage} totalPages={allMovies.total_pages} basePath="/movies"/>
        </>
    );
};

export default AllMovies;