import React from 'react';
import {showService} from "@/app/services/api.shows.service";
import MoviesList from "@/app/components/(movies)/moviesList/MoviesList";

const AllShows = async () => {

    const allShows = await showService.getShows();
    return (
        <>
            <MoviesList shows={allShows.results} title={'All Shows'} type={'shows'}/>
        </>
    );
};

export default AllShows;