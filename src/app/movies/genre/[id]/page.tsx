import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";

type Params = {
    params: { id: string };
};
export default async function MoviesByGenrePage ({ params }: Params) {
    const genreId = params.id;
    return (
        <>
            <Genres type={'movies'}/>
            <MediaByGenre type={'movies'} genreId={genreId}/>
        </>
    );
};

