import React from "react";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/(navigation)/pagination/Pagination";
import {movieService} from "@/app/services/api.movies.service";
import {AllMediasProps} from "@/app/models/PaginationProps";

const AllMovies = async ({ currentPage }: AllMediasProps) => {

    const allMovies = await movieService.getMovies({ page: currentPage });
    return (
        <div>
            <MoviesList movies={allMovies.results}/>
            <Pagination currentPage={currentPage} totalPages={allMovies.total_pages} basePath="/movies"/>
        </div>
    );
};

export default AllMovies;