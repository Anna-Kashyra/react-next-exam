import React from 'react';
import AllShows from "@/app/components/allShows/AllShows";
import Genres from "@/app/components/genres/Genres";
import {SearchParamsProps} from "@/app/models/PaginationProps";

const ShowsPage = async ({ searchParams }: SearchParamsProps) => {

    const currentPage = parseInt(searchParams.page || "1", 10);
    return (
        <>
            <Genres type={'shows'}/>
            <h1>All TV Shows</h1>
            <AllShows currentPage={currentPage}/>
        </>
    );
};

export default ShowsPage;