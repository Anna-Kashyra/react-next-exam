import React from 'react';
import MoviesByGenre from "@/app/components/(movies)/moviesByGenre/MoviesByGenre";
import MovieGenres from "@/app/components/(movies)/movieGenres/MovieGenres";

type Params = {
    params: { id: string };
};

const MoviesByGenrePage = async  ({ params }: Params) => {
    return (
        <>
            <MovieGenres/>
            <MoviesByGenre genreId={params.id}/>
            {/*<MoviesByGenre genreId={params.id}/>*/}
        </>
    );
};

export default MoviesByGenrePage;

