import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";

type Params = {
    params: { id: string };
};
export default function ShowsByGenrePage ({ params }: Params) {
    return (
        <>
            <Genres type={'show'}/>
            <MediaByGenre type={'show'} genreId={params.id}/>
        </>
    );
};
