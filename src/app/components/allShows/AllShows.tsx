import React from "react";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/(navigation)/pagination/Pagination";
import {AllMediasProps} from "@/app/models/PaginationProps";
import {showService} from "@/app/services/api.shows.service";

const AllShows = async ({ currentPage }: AllMediasProps) => {

    const allShows = await showService.getShows({ page: currentPage });
    return (
        <>
            <MoviesList shows={allShows.results}/>
            <Pagination currentPage={currentPage} totalPages={allShows.total_pages} basePath="/shows"/>
        </>
    );
};

export default AllShows;