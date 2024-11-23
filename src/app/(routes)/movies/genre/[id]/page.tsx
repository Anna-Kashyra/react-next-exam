import React from "react";
import Genres from "@/app/components/(genres)/genres/Genres";
import MediaByGenre from "@/app/components/(genres)/mediaByGenre/MediaByGenre";
import {SearchParamsProps} from "@/app/models/PaginationProps";

type Params = {
    params: { id: string }
}
type CombinedParams = SearchParamsProps & Params;

export default async function MoviesByGenrePage ({ searchParams, params }: CombinedParams) {

    const currentPage = parseInt(searchParams.page || "1", 10);
    const genreId = params.id;

    return (
        <>
            <Genres type={'movies'}/>
            <MediaByGenre type={'movies'} genreId={genreId} currentPage={currentPage}/>
        </>
    );
};
