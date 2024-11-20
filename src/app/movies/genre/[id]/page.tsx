import React from 'react';
import Genres from "@/app/components/genres/Genres";
import MediaByGenre from "@/app/components/mediaByGenre/MediaByGenre";

type Params = {
    params: { id: string };
};
export default function MoviesByGenrePage ({ params }: Params) {
    console.log("Params ID:", params.id);
    return (
        <>
            <Genres type={'movie'}/>
            <MediaByGenre type={'movie'} genreId={params.id}/>
        </>
    );
};

