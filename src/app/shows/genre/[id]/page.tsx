import React from 'react';
import ShowGenres from "@/app/components/(shows)/showGenres/ShowGenres";
import ShowsByGenre from "@/app/components/(shows)/sowsByGenre/ShowsByGenre";

type Params = {
    params: { id: string };
};

const ShowsByGenrePage = async  ({ params }: Params) => {
    return (
        <>
            <ShowGenres/>
            <ShowsByGenre genreId={params.id}/>
        </>
    );
};

export default ShowsByGenrePage;