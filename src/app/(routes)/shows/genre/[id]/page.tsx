import React from "react";
import Genres from "@/app/components/(genres)/genres/Genres";
import MediaByGenre from "@/app/components/(genres)/mediaByGenre/MediaByGenre";
import {SearchParamsProps} from "@/app/models/PaginationProps";

type Params = {
    params: Promise<{ id: string }>;
};
type CombinedParams = SearchParamsProps & Params;

export default async function ShowsByGenrePage ({ searchParams, params }: CombinedParams) {

    const { id } = await params;
    const { page } = await searchParams;
    const currentPage = parseInt(page || "1", 10);

    return (
        <>
            <Genres type={'shows'}/>
            <MediaByGenre type={'shows'} genreId={id} currentPage={currentPage}/>
        </>
    );
};
