// import React from 'react';
// import MoviesByGenre from "@/app/components/(movies)/moviesByGenre/MoviesByGenre";
// import MovieGenres from "@/app/components/(movies)/movieGenres/MovieGenres";
//
// type Params = {
//     params: { id: string };
// };
//
// const MoviesByGenrePage = async  ({ params }: Params) => {
//     return (
//         <>
//             <MovieGenres/>
//             <MoviesByGenre genreId={params.id}/>
//         </>
//     );
// };
//
// export default MoviesByGenrePage;

import React, {FC} from 'react';
import MoviesByGenre from "@/app/components/(movies)/moviesByGenre/MoviesByGenre";
import MovieGenres from "@/app/components/(movies)/movieGenres/MovieGenres";

type Params = Promise<{id: string}>;
type SearchParams = Promise<{[key: string]: string | string[] | undefined}>;
type MyProps = {
    params: Params,
    searchParams: SearchParams
}

const MoviesByGenrePage: FC<MyProps> = async  ({params, searchParams}) => {

    const genreId = params.id;
    console.log(params.id)
    const page = searchParams.page ? searchParams.page : '1';

    return (
        <>
            <MovieGenres/>
            <MoviesByGenre genreId={genreId} page={page}/>
            {/*<MoviesByGenre genreId={params.id}/>*/}
        </>
    );
};

export default MoviesByGenrePage;

