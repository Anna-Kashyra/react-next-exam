import React from "react";
import Genres from "@/app/components/(genres)/genres/Genres";
import MediaByGenre from "@/app/components/(genres)/mediaByGenre/MediaByGenre";
import {genreService} from "@/app/services/api.genres.service";
import {SearchParamsProps} from "@/app/models/PaginationProps";

type Params = {
    params: { id: string };
};
type CombinedParams = SearchParamsProps & Params;

export default async function ShowsByGenrePage ({ searchParams, params }: CombinedParams) {

    const currentPage = parseInt(searchParams.page || "1", 10);
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
            <MediaByGenre type={'shows'} genreId={genreId} currentPage={currentPage}/>
        </>
    );
};
