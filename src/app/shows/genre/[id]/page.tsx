import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";
import {genreService} from "@/app/services/api.genres.service";

type Params = {
    params: { id: string };
};
export default async function ShowsByGenrePage ({ params }: Params) {

    const genreId = params.id;

    const genres = await genreService.getShowsGenres();
    const currentGenre = genres.find((genre) => genre.id.toString() === genreId);

    const title = currentGenre
        ? `${currentGenre.name} Shows`
        : 'Unknown Genre';

    return (
        <>
            <Genres type={'shows'}/>
            <h1>{title}</h1>
            <MediaByGenre type={'shows'} genreId={genreId}/>
        </>
    );
};
