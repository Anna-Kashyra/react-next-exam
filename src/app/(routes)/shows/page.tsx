import React from "react";
import AllShows from "@/app/components/allShows/AllShows";
import Genres from "@/app/components/(genres)/genres/Genres";
import {SearchParamsProps} from "@/app/models/PaginationProps";

const ShowsPage = async ({ searchParams }: SearchParamsProps) => {

    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);

    return (
        <>
            <h1>All TV Shows</h1>
            <Genres type={'shows'}/>
            <AllShows currentPage={currentPage}/>
        </>
    );
};

export default ShowsPage;