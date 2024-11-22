import React from 'react';
import {showService} from "@/app/services/api.shows.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";
import Pagination from "@/app/components/pagination/Pagination";
import {AllMediasProps} from "@/app/models/PaginationProps";

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