import React from 'react';
import {showService} from "@/app/services/api.shows.service";
import ShowsList from "@/app/components/(shows)/showsList/ShowsList";

const AllShows = async () => {

    const allShows = await showService.getShows();
    return (
        <>
            <ShowsList shows={allShows.results} title={'All TV Shows'}/>
        </>
    );
};

export default AllShows;