import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";

type Params = {
    params: { id: string };
};
export default async function ShowsByGenrePage ({ params }: Params) {
    const genreId = params.id;
    return (
        <>
            <Genres type={'shows'}/>
            <MediaByGenre type={'shows'} genreId={genreId}/>
        </>
    );
};
