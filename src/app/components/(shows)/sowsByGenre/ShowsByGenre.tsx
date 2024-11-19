import React from 'react';
import {showService} from "@/app/services/api.shows.service";
import {genreService} from "@/app/services/api.genres.service";
import ShowsList from "@/app/components/(shows)/showsList/ShowsList";



type ShowsByGenreProps = {
    genreId: string;
};

const ShowsByGenre = async ({ genreId }: ShowsByGenreProps) => {

    const shows = await showService.getShowsByGenre(genreId);
    const genres = await genreService.getShowsGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);
    return (
        <>
            <ShowsList shows={shows.results} title={`${currentGenre?.name || 'Genre'} shows`} />
        </>
    );
};

export default ShowsByGenre;